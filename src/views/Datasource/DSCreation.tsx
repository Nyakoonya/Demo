import Modal from "@/components/Modal";
import { Button, message, Steps } from 'antd';
import { useRef, useState } from 'react';
import DSSelection from "./DSSelection";
import DSConfiguration from "./DSConfiguration";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { addDatasourcelogic } from "@/redux/actionCreators/entities/datasource/logic";
import { Action, Dispatch } from "redux";
import { IRootState } from "@/redux/Store";
import { MyThunkDispatch } from "@/redux/typing";
interface IProp {
  folderId: string,
  addDatasource: (payload: { folderId: string, type: string, data: any }) => void
}
function DSCreation(props: IProp) {
  const [current, setCurrent] = useState(0);
  const [nextValiable, setNextValiable] = useState(false);
  const [curType, setCurType] = useState('');
  const [curCategory, setCurCategory] = useState('');
  const modalRef = useRef<any>(null);
  const DSconfRef = useRef<any>(null);
  const onSelect = (type: string, category: string) => {
    if (type && category) {
      setNextValiable(true);
      setCurType(type);
      setCurCategory(category);
    }
  }
  const next = () => {
    setCurrent(current + 1);
    console.log('curType', curType);
  }
  const prev = () => {
    setCurrent(current - 1);
  }
  const steps = [
    {
      title: 'First',
      content: <DSSelection onChange={onSelect} />
    },
    {
      title: 'Second',
      content: <DSConfiguration type={curType} category={curCategory} ref={DSconfRef} />
    }
  ]
  const items = steps.map(item => ({ key: item.title, title: item.title }))
  const onDone = () => {
    console.log('done----->>>>')
    if (['excel', 'csv'].includes(curType)) {
      const formData = DSconfRef.current && DSconfRef.current.onAddDatasource(curType);
      formData.append('folderId', props.folderId);
      formData.append('type', curType);
      console.log('formData id', formData.get('folderId'))
      console.log('formData file', formData.get('file'))
      //  redux logic
      Promise.resolve().then(() => {
        props.addDatasource({
          folderId: props.folderId,
          type: curType,
          data: formData
        })
      }).then(() => {
        message.success('Processing complete!')
        modalRef.current.close();
        setCurrent(0);
      })
    }
  }
  return (
    <Modal title="Datasource Creation" btnLabel="Create a datasource" width={800} footer={null} ref={modalRef} extraBtn>
      <Steps current={current} items={items} size="small" />
      <div>{steps[current].content}</div>
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} disabled={!nextValiable}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={onDone}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Modal>
  )
}
const mapStateToProps = (state: IRootState) => {
  return {

  }
}
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    addDatasource: (payload: { folderId: string, type: string, data: any }) => dispatch(addDatasourcelogic(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DSCreation);