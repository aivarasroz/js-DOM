import FlexContainerComponent from "./components/flex-container-component.js";
import RichHumanFormComponent from "./components/rich-human-form-component.js";
import ApiService from "./services/api-service.js";
import ContainerComponent from "./components/container-component.js";
import RichPeopleTableComponent from "./components/rich-people-table-component.js";
import AlertComponent from "./components/alert-component.js";


let richPeopleTableComponent;
let richHumanFormComponent;
let alertComponent;

let richPeople;
let editedRowId = null;

const richDelete = async (id) => {
  try {
    await ApiService.deleteRichPeople(id);
    richPeople = await ApiService.getRichPeople();
    richPeopleTableComponent.renderRichPeople(richPeople, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const richCreate = async (richy) => {
  try {
    await ApiService.createRichPeople(richy);
    richPeople = await ApiService.getRichPeople();
    richPeopleTableComponent.renderRichPeople(richPeople, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const richUpdate = async (richy) => {
  try {
    await ApiService.updateRichPeople(editedRowId, richy);
    richPeople = await ApiService.getRichPeople();
    editedRowId = null;
    richHumanFormComponent.disableEditing();
    richPeopleTableComponent.renderRichPeople(richPeople, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const richEdit = (richy) => {
  if (editedRowId === richy.id) editedRowId = null;
  else editedRowId = richy.id;

  richPeopleTableComponent.renderRichPeople(richPeople, editedRowId);
  if (editedRowId === null) {
    richHumanFormComponent.disableEditing();
    richHumanFormComponent.onSubmit = richCreate;
  } else {
    richHumanFormComponent.enableEditing(richy);
    richHumanFormComponent.onSubmit = richUpdate;
  }
}

(async function initialize() {
  const rootHtmlElement = document.querySelector('#root');
  const containerComponent = new ContainerComponent();
  alertComponent = new AlertComponent();
  containerComponent.addComponents(alertComponent);
  rootHtmlElement.append(containerComponent.htmlElement);
  try {
    richPeople = await ApiService.getRichPeople();
    richPeopleTableComponent = new RichPeopleTableComponent({
      richPeople,
      onDelete: richDelete,
      onEdit: richEdit,
    });
    richHumanFormComponent = new RichHumanFormComponent({
      onSubmit: richCreate,
    });
    const flexContainerComponent = new FlexContainerComponent();
    flexContainerComponent.addComponents(richPeopleTableComponent, richHumanFormComponent);
    containerComponent.addComponents(flexContainerComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();