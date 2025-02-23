import { ColumnType } from './enums';

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
  //day: DayType;
}

export interface DragItem {
  index: number;         //position of the task in the column
  id: TaskModel['id']; 
  from: ColumnType;       //column from which the task is dragged
}