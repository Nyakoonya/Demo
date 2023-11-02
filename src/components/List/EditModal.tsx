import { loadDashboardsLogic, updateDashLogic } from "@/redux/actionCreators/entities/dashboard/logic";
import { updateDatasourceLogic } from "@/redux/actionCreators/entities/datasource/logic";
import { loadFoldersLogic, updateFolderLogic } from "@/redux/actionCreators/entities/folder/logic";
import { MyThunkDispatch } from "@/redux/typing";
import { Form, Input, Modal, message } from "antd";
import { useState } from "react";
import { connect } from "react-redux";

interface IProp {
  type: string,
  item: any,
  updateFolder: (payload: any) => Promise<any>,
  updateDashboard: (payload: any) => Promise<any>,
  updateDatasource: (payload: any) => Promise<any>,
  changeVisibility: () => void
}
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

function EditModal(props: IProp) {
  const [isOpen, setOpen] = useState(true);
  const [title, setTitle] = useState(props.item.title);
  const [description, setDesc] = useState(props.item.description)
  const editLogic: any = {
    folder: props.updateFolder,
    dash: props.updateDashboard,
    ds: props.updateDatasource
  }
  const handleOk = () => {
    if (title) {
      let payload: any = {
        id: props.item.id, title, description
      }
      if (props.type !== 'folder') {
        payload = {
          ...payload,
          folderId: props.item.folderId
        }
      }
      editLogic[props.type](payload).then(() => {
        message.success({
          content: `Edit ${props.type} successfully!`
        })
        handleCancel();
      })
        .catch((err: any) => {
          message.error({
            content: err.message
          })
        })
    } else {
      message.error({
        content: 'Please input title!'
      })
    }
  }


  const handleCancel = () => {
    setOpen(false);
    props.changeVisibility();
  }
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      setTitle(e.target.value)
    }
  }
  const changeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      setDesc(e.target.value)
    }
  }
  return (
    <Modal title={`Edit ${props.type} Info`} onOk={handleOk} onCancel={handleCancel} open={isOpen}>
      <Form {...layout}>
        <Form.Item label="Title" name='title' initialValue={props.item.title} rules={[{ required: true, message: 'Please input title!' }]}>
          <Input onChange={changeTitle} showCount maxLength={50} />
        </Form.Item>
        {props.type !== 'ds' && <Form.Item label="Description" name="description" initialValue={props.item.description}>
          <Input onChange={changeDesc} showCount maxLength={100} />
        </Form.Item>}
      </Form>
    </Modal>
  )
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    updateFolder: (payload: any) => Promise.resolve().then(() => dispatch(updateFolderLogic(payload))),
    updateDashboard: (payload: any) => Promise.resolve().then(() => dispatch(updateDashLogic(payload))),
    updateDatasource: (payload: any) => Promise.resolve().then(() => dispatch(updateDatasourceLogic(payload)))
  }
}
export default connect(null, mapDispatchToProps)(EditModal);