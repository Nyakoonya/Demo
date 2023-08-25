import { IRootState } from "@/redux/Store";
import { loadDatasourceDataLogic } from "@/redux/actionCreators/entities/datasource/logic";
import { Modal, Pagination, Table } from "antd";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface IProp {
  id: string | null,
  getDatasource: (id: string | null) => any,
  datasources: any[],
  changeVisibility: () => void,
  loadDatasourceData: (id: string | null, page: number, row: number) => void,
  data: any
}
interface IRef {
  showModal: () => void
}
const DSData = forwardRef((props: IProp, ref: React.Ref<IRef>) => {
  try {
    const [visible, setVisibility] = useState(false);
    const [columns, setColumns] = useState<any>([]);
    const [tableData, setTableData] = useState<any>([]);
    const [total, setTotal] = useState(0);
    // console.log('props.datasources', props.datasources)
    // console.log('getData')
    // const { data } = props.getDatasource(props.id);
    // console.log('data', data)

    useEffect(() => {
      const { data, total } = props.data
      console.log('Object.keys(props.data[0])', Object.keys(data[0]))
      const columns = Object.keys(data[0]).map(k => ({
        title: k,
        dataIndex: k,
        key: k
      }))
      setColumns(columns)
      const tableData = data.map((d: any) => ({
        key: d.id,
        ...d
      }));
      setTableData(tableData);
      setTotal(total)
    }, [props.data])

    useEffect(() => {
      setVisibility(true);
    }, [])
    useImperativeHandle(ref, () => ({
      showModal: () => { setVisibility(true) }
    }))
    const handleClose = () => {
      setVisibility(false);
      props.changeVisibility()
    }
    const changePage = useCallback((page = 1, pageSize = 10) => {
      console.log('page', page);
      props.loadDatasourceData(props.id, page, pageSize);
    }, [])
    return (
      <Modal title="View Data" open={visible} onCancel={handleClose} footer={null} width={1000}>
        <Table dataSource={tableData} columns={columns} pagination={{ position: [] }} />
        <Pagination simple defaultCurrent={2} total={total} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }} onChange={changePage} />
      </Modal>
    )
  } catch (error) {
    console.log('error', error)
  }
})
const mapStateToProps = (states: IRootState) => {
  const { datasources } = states;
  return {
    getDatasource: (id: string | null) => datasources.entity.find(d => d.id === id),
    datasources: states.datasources.entity
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    loadDatasourceData: (id: string | null, page: number, row: number) => dispatch(loadDatasourceDataLogic(id, page, row))
  }
}
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(DSData);