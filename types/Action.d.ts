export interface ActionSetDescriptor {
  name: string;
  itemIndex: number;
  count: number; // amount of ActionSets (-1)
  numberOfChildren: number; // amount of actions
  ID: number;
}

export interface ActionDescriptor {
  name: string;
  itemIndex: number;
  count: number; // amount of Actions in this set (-1)
  numberOfChildren: number; // amount of commands
  parentName: string;
  parentIndex: number;
  ID: number;
}

export interface ActionCommand {
  name: string;
  itemIndex: number;
  count: number; // amount of commands in this action (-1)
  numberOfChildren: number;
  parentName: string;
  parentIndex: number;
  ID: number;
}
