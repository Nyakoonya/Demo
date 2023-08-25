interface IDatasourceRes {
  code: number,
  msg: string,
  data: {
    list: IDatasource[]
  }
}
interface IDatasource {
  id: string,
  title: string,
  type: string,
  tableName: string
}