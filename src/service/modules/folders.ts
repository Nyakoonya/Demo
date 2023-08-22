import request from "../index";
export const fetchFolders = (): Promise<IFoldersRes> => request.get({
  url: "/api/folders/list"
});


export const createFolder = (): Promise<any> => request.post({
  url: "/api/folders/create"
})

export const updateFolder = (payload: IFolderUpdate): Promise<any> => request.put({
  url: '/api/folders',
  data: payload
})

export const deleteFolder = (id: string): Promise<any> => request.delete({
  url: `/api/folders/${id}`
})