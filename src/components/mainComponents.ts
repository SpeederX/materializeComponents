import baseComponent from "../core/baseComponent";
import materializeComponents from "../core/materialize/components";

export default class mainComponent extends baseComponent {
    collection: IFmaterializeBadgeCollection[] = [
        {
            text: 'First link',
            link: '#',
            count: 3,
        },{
            text: 'Second link',
            link: '#',
        },{
            text: 'Third link',
            link: '#',
            count: 2,
            new: true,
        },{
            text: 'Fourth link',
            link: '#',
            count: 7,
        },
    ]
    constructor(){
        super('div');
        this.setContent(`${materializeComponents.buttonSubmit()}
        ${materializeComponents.badgesCollection(this.collection)}
        ${materializeComponents.badgesDropdown(this.collection)}`)
    }
}
