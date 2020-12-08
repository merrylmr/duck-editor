interface IMenuItem {
  name: string;
  icon?: string;
  className?: string;
  tip?: string;
}

interface IOptions {
  toolbar?: Array<string | IMenuItem>,
  toolbarConfig: {
    id?: string;
  }
}

interface IEditor {
  options: IOptions
}