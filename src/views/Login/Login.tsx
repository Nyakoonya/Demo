import { Button, Checkbox, Form, Input } from 'antd';
import './index.css'
import { connect } from 'react-redux'
import { loginLogic } from '@/redux/actionCreators/entities/user/logic';
import { MyThunkDispatch } from '@/redux/typing';
import encode from '@/utils/encode';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
interface IProp {
  login: (username: string, password: string) => void
}

const Login = (props: IProp) => {
  const onFinish = (values: any) => {
    const { username, password } = values
    props.login(username, encode(password))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      // layout='vertical'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 330 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ marginLeft: '40px', marginTop: '50px' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    login: (username: string, password: string) => dispatch(loginLogic(username, password))
  }
}
export default connect(null, mapDispatchToProps)(Login);