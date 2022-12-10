import {materializeIcons} from "./materializeIcons";



export default class materialize {
    static badgesCollection = (items: IFbadgeCollection[]) =>
                            `<div class="collection">
                                ${items.map((item) => `<a href="${item.link}" class="collection-item">
                                                                        <span class="${item.new? 'new ': '' }badge">${item.count}</span>${item.text}</a>`)}
                              </div>`
    static button = (text:string) => `<a class="waves-effect waves-light btn">${text}</a>`
    static buttonWithIcon = (text:string,icon:materializeIcons,iconAlign: 'left' | 'right' = 'left') => `<a class="waves-effect waves-light btn"><i class="material-icons ${iconAlign}">${icon}</i>${text}</a>`
    static buttonFloating = (icon:materializeIcons) => `<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">${icon}</i></a>`
    static buttonFlat = (text:string) => `<a class="waves-effect waves-teal btn-flat">${text}</a>`
    static buttonSubmit = (text:string = 'Submit',icon:materializeIcons = materializeIcons.send,iconAlign: 'left' | 'right' = 'left') =>
                    `<button class="btn waves-effect waves-light" type="submit" name="action">${text}
                        <i class="material-icons ${iconAlign}">${icon}</i>
                    </button>`

}
