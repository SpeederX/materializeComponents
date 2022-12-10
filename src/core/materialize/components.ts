import {materializeIcons} from "./icons";

export default class materializeComponents {
    static badgesCollection = (items: IFmaterializeBadgeCollection[]) =>
                            `<div class="collection">
                                ${items.map((item) => 
                                `<a href="${item.link}" class="collection-item">
                                     ${'count' in item? `<span class="${item.new? 'new ': '' }badge">${item.count}</span>`: ''}${item.text}
                                 </a>`).join('')}
                              </div>`
    static badgesDropdown = (items: IFmaterializeBadgeCollection[],text:string = 'Dropdown') =>
                            `<ul id="dropdown2" class="dropdown-content">
                                ${items.map((item) =>
                                `<li><a href="${item.link}" class="collection-item">
                                     ${item.text}${'count' in item? `<span class="${item.new? 'new ': '' }badge">${item.count}</span>`: ''}
                                 </a></li>`).join('')}
                            </ul>
                            <a class="btn dropdown-trigger" href="#!" data-target="dropdown2">${text}<i class="material-icons right">arrow_drop_down</i></a>`
    static button = (text:string) => `<a class="waves-effect waves-light btn">${text}</a>`
    static buttonWithIcon = (text:string, icon:materializeIcons, iconAlign: 'left' | 'right' = 'left') => `<a class="waves-effect waves-light btn"><i class="material-icons ${iconAlign}">${icon}</i>${text}</a>`
    static buttonFloating = (icon:materializeIcons) => `<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">${icon}</i></a>`
    static buttonFlat = (text:string) => `<a class="waves-effect waves-teal btn-flat">${text}</a>`
    static buttonSubmit = (text:string = 'Submit', icon:materializeIcons = materializeIcons.send, iconAlign: 'left' | 'right' = 'left') =>
                    `<button class="btn waves-effect waves-light" type="submit" name="action">${text}
                        <i class="material-icons ${iconAlign}">${icon}</i>
                    </button>`

}
