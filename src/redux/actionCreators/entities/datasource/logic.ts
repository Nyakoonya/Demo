import { Dispatch } from "redux"
import { loadDatasources, loadDatasourcesSuccess } from "./action"
import { nanoid } from 'nanoid';
export const loadDatasourcesLogic = (folderId: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loadDatasources());
    /* fetch datasource data */
    const test = [
      {
        id: nanoid(7),
        title: 'datasource1',
        type: 'excel'
      },
      {
        id: nanoid(7),
        title: 'datasource2',
        type: 'excel'
      }
    ];
    console.log('test', test)
    dispatch(loadDatasourcesSuccess(test));
  }
}