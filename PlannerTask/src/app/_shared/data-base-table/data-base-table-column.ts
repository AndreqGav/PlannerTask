
export interface IDataBaseTableColumn<M> {
  columnDef: string;
  header: string;
  cell?: ((row: M) => any);
}
