import { Form, Input, Modal } from "antd";

interface IProp {
  type: string,
  onOk: () => void
}
function EditModal(props: IProp) {
  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {

  }
  return (
    <Modal title={`Edit ${props.type} Info`} onOk={handleOk} onCancel={handleCancel}>
      <Form>
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <Input />
        </Form.Item>
        <Form.Item label="img">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}


export default EditModal;