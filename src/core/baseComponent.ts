export default class baseComponent {
    element: Element;
    constructor(elementType: string){
        this.element = document.createElement('div');
    }
    setContent(content: string){
        this.element.innerHTML = content;
        return this;
    }
    getDom(){
        return this.element;
    }
    addToDom(){
        document.body.appendChild(this.getDom());
    }
}