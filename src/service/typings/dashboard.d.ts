interface IDashboardsRes {
  code: number,
  msg: string,
  data: {
    list: IDash[]
  }
}

interface IDashParams {
  folderId: string
}

interface IDashUpdate {
  id: string,
  folderId: string,
  title: string,
  description: string
}
interface IDash extends IDashUpdate {
  ownerId: string
}