class RichPeopleTableComponent {
    htmlElement;
    tbody;
    onDelete;
    onEdit;
    editedRowId;
 
  
    constructor({ richPeople, onDelete, onEdit }) {
      this.htmlElement = document.createElement('table');
      this.htmlElement.className = 'table table-striped table-dark table-hover">';
      this.htmlElement.innerHTML = ` 
      <thead>
      <tr>
        <th>Person ID</th>
        <th>Fullname</th>
        <th>Billions</th>
        <th>Illuminatti</th>
        <th>update</th>
      </tr>
    </thead>
      <tbody></tbody>`;
      this.tbody = this.htmlElement.querySelector('tbody');
      this.onDelete = onDelete;
      this.onEdit = onEdit;
      this.editedRowId = null;

  
      this.renderRichPeople(richPeople, null);
    }
  
    createRowHtmlElement = (richPeoples) => {
      const { id, name, billions, illuminatti } = richPeoples;
      const tr = document.createElement('tr');
      const thisRowIsEdited = id === this.editedRowId;
      if (thisRowIsEdited) tr.classList.add('bg-edited');
      tr.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${billions}</td>
        <td>${illuminatti}</td>
        <td>
          <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-info btn-sm">${thisRowIsEdited ? 'Cancel' : 'Reset'}</button>
            <button class="btn btn-danger btn-sm">✕</button>
          </div>
        </td>`;
  
      const deleteButton = tr.querySelector('.btn-danger');
      deleteButton.addEventListener('click', () => this.onDelete(id));
  
      const updateButton = tr.querySelector('.btn-info');
      updateButton.addEventListener('click', () => this.onEdit(richPeoples));
  
      return tr;
    }
  
    renderRichPeople(richPeople, editedRowId) {
      this.editedRowId = editedRowId;
      const rowsHtmlElements = richPeople.map(this.createRowHtmlElement);
  
      this.tbody.innerHTML = null;
      this.tbody.append(...rowsHtmlElements);
    }

  }
  
  export default RichPeopleTableComponent;