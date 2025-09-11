import {RowID, RowElement} from './interface.js';

declare module './crud.js' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowID: RowID): void;
  export function updateRow(rowID: RowID, row: RowElement): RowID;
}
