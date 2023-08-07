import Modal from "@/components/Modal";
import { Button, message, Steps } from 'antd';
import { useRef, useState } from 'react';
import DSSelection from "./DSSelection";
import DSConfiguration from "./DSConfiguration";

function DSCreation() {
  const [current, setCurrent] = useState(0);
  const [nextValiable, setNextValiable] = useState(false);
  const [curType, setCurType] = useState('');
  const [curCategory, setCurCategory] = useState('');
  const modalRef = useRef<any>(null);
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
      content: <DSConfiguration type={curType} category={curCategory} />
    }
  ]
  const items = steps.map(item => ({ key: item.title, title: item.title }))
  const onDone = () => {
    message.success('Processing complete!')
    modalRef.current.close();
    setCurrent(0);
  }
  return (
    <Modal title="Datasource Creation" btnLabel="Create a datasource" width={800} footer={null} ref={modalRef}>
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

export default DSCreation;