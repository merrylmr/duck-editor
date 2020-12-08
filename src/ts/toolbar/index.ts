// import Undo from "./Undo"
import {MenuItem} from './MenuItem'

export class Toolbar {
  public element: HTMLElement
  public elements: { [key: string]: HTMLElement }

  constructor(editor: IEditor) {

    const options = editor.options
    if (options.toolbarConfig.id) {
      this.element = document.getElementById(options.toolbarConfig.id)
    } else {
      this.element = document.createElement('div')
    }
    this.element.className = "vditor-toolbar"
    options.toolbar.forEach((menuItem: IMenuItem, i: number) => {
      const itemElement = this.genItem(editor, menuItem, i)
      this.element.appendChild(itemElement)
    })
  }

  private genItem(editor: IEditor, menuItem: IMenuItem, index: number) {
    let menuItemObj
    switch (menuItem.name) {
      case 'bold':
        menuItemObj = new MenuItem(editor, menuItem)
        break
      case 'undo':
        // menuItemObj = new Undo(editor, menuItem)
        break
      case 'redo':
        break
    }
    if (!menuItemObj) {
      return
    }
    let key = menuItem.name
    this.elements[key] = menuItemObj.element
    return menuItemObj.element
  }
}