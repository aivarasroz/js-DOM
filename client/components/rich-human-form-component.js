class RichHumanFormComponent {
    htmlElement;
    onSubmit;
    nameInput;
    billionsInput;
    illuminattiInput;
    formNameElement;
    submitButton;
  
    constructor({ onSubmit }) {
      this.htmlElement = document.createElement('form');
      this.htmlElement.className = 'shadow p-3';
      this.htmlElement.innerHTML = `
        <h2 class="h5 text-center">Expose Rich Person!</h2>
        <div class="mb-3">
          <label for="title" class="form-label">Name Surname</label>
          <input type="text" class="form-control" id="name" name="name">
        </div>
        <div class="mb-3">
          <label for="year" class="form-label">How much money?</label>
          <input type="number" class="form-control" id="billions" name="billions">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="illuminatti" name="illuminatti">
          <label class="form-check-label" for="damaged">Do they belong to illuminatti?</label>
        </div>
        <button type="submit" class="btn btn-success w-100">Submit the bastard</button>`;
      this.onSubmit = onSubmit;
      this.nameInput = this.htmlElement.querySelector('[name=name]');
      this.billionsInput = this.htmlElement.querySelector('[name=billions]');
      this.illuminattiInput = this.htmlElement.querySelector('[name=illuminatti]');
      this.formNameElement = this.htmlElement.querySelector('h2');
      this.submitButton = this.htmlElement.querySelector('button');
  
      this.htmlElement.addEventListener('submit', this.handleSubmit);
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const values = {
        name: formData.get('name'),
        billions: formData.get('billions'),
        illuminatti: Boolean(formData.get('illuminatti')),
      }
  
      //   inversion of control
      this.onSubmit(values);
  
      event.target.reset();
    }
  
    enableEditing = ({ name, billions, illuminatti }) => {
      this.nameInput.value = name;
      this.billionsInput.value = billions;
      this.illuminattiInput.checked = illuminatti;
      this.formNameElement.innerText = 'Update Rich Human';
      this.submitButton.innerText = 'Update Rich Human';
      this.submitButton.className = 'btn btn-warning w-100';
    }
  
    disableEditing = () => {
      this.htmlElement.reset();
      this.formNameElement.innerText = 'Submit';
      this.submitButton.innerText = 'Submit';
      this.submitButton.className = 'btn btn-success w-100';
    }
  }
  
  export default RichHumanFormComponent;