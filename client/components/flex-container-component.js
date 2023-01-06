class FlexContainerComponent {
    htmlElement;
  
    constructor() {
      this.htmlElement = document.createElement('div');
      this.htmlElement.className = 'w-50 pt-5 align-items-start';
    }
  
    addComponents(...components) {
      const htmlElements = components.map(c => c.htmlElement);
      this.htmlElement.append(...htmlElements);
    }
  }
  
  export default FlexContainerComponent;