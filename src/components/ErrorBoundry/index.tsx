import { WarningOutlined } from '@ant-design/icons';
import styles from './styles.scss';
import { useState } from 'react';
interface IProp {
  msg?: string
}
function ErrorBoundry(props: IProp) {
  const [showText, setShowText] = useState(false);
  const handleChangeStatus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    setShowText(!showText);
  }
  return (
    <div className={styles['error-wrap']}>
      {!showText ?
        <div className={styles['error-icon']} onClick={handleChangeStatus}>
          <WarningOutlined />
        </div> :
        <div className={styles['error-text']} onClick={handleChangeStatus}>Cannot find the data source, please check it!</div>
      }
    </div>
  )
}

export default ErrorBoundry;