export class MenuItem {
  public element: HTMLElement;
  constructor(editor: IEditor, menuItem: IMenuItem) {
    this.element = document.createElement("div");
    this.element.classList.add("vditor-toolbar__item");
  }
}