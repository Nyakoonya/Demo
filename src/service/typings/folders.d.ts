interface IFoldersRes {
  code: number,
  data: { list: IFolderRes[] },
  msg: string
}
interface IFolderRes {
  id: string,
  name: string,
  description: string,
  ownerId: string,
  img: string,
  owner: string
}
interface IFolderUpdate {
  id: string,
  name: string,
  description: string,
  img: string
}