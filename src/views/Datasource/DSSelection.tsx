
import styles from './styles.scss'
import excel from '@/assets/dslogo/excel.png';
import csv from '@/assets/dslogo/csv.png';
import { useState } from 'react';
const dsMap = [
  {
    title: 'excel',
    category: 'upload',
    type: 'excel',
    img: excel
  },
  // {
  //   title: 'csv',
  //   category: 'upload',
  //   type: 'csv',
  //   img: csv
  // }
]
interface IProp {
  onChange: (type: string, category: string) => void
}
function DSSelection(props: IProp) {
  const [curItem, setCurItem] = useState('');
  const onSelect = (title: string, type: string, category: string) => {
    setCurItem(title)
    props.onChange(type, category);
  }
  return (
    <div style={{
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'flex-start',
    }}>
      {dsMap.map(ds => (
        <div key={ds.title} className={styles[curItem == ds.title ? 'ds-item-active' : 'ds-item']} id={`datasource-${ds.title}`}><img src={ds.img} style={{ height: '80%' }} onClick={() => onSelect(ds.title, ds.type, ds.category)}></img></div>
      ))}
    </div>
  )
}

export default DSSelection;