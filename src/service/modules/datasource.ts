import request from '../index';

export const fetchDatasourceList = (folderId: string): Promise<IDatasourceRes> => request.get({
  url: '/api/datasource/list',
  params: { folderId }
})

export const createDatasourceByExcel = (formData: any): Promise<any> => request.post({
  url: '/api/datasource/upload/excel',
  data: formData
})

export const fetchDatasourceData = (id: string, page: number, row: number): Promise<any> => request.get({
  url: '/api/datasource/data',
  params: { id, page, row }
})

export const fetchColumnsUnderFolder = (id: string): Promise<any> => request.get({
  url: '/api/datasource/columnsUnderFolder',
  params: {
    folderId: id
  }
})