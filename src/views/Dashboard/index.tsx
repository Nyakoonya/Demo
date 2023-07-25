import { connect } from "react-redux"
import { IRootState } from '@/redux/Store';
import GridLayout from "@/components/GridLayout";
import styles from './index.scss'
import { Card, Tabs } from "antd";
import { InboxOutlined, LayoutOutlined } from '@ant-design/icons';
import ComLib from '@/components/ComponentsLib';
import StyleTab from '@/components/StyleTab';
import { IReport } from "@/redux/reducers/ReportReducer";
interface Iprops {
    reports: IReport[]
}
function Dashboard(props: Iprops) {
    const tabsItems = [
        {
            id: '1',
            title: 'ComponentsLibrary',
            icon: InboxOutlined,
            children: <ComLib></ComLib>
        },
        {
            id: '2',
            title: 'StyleTab',
            icon: LayoutOutlined,
            children: <StyleTab></StyleTab>
        }
    ];
    return (
        <div className={styles["dashboard-wrap"]}>
            <div className={styles["left-menu"]}>
                <Card style={{ width: '100%', height: '100%' }}>
                    <Tabs
                        defaultActiveKey="1"
                        items={tabsItems.map((item, i) => {
                            return {
                                label: (
                                    <span>
                                        <item.icon />
                                        {item.title}
                                    </span>
                                ),
                                key: item.id,
                                children: <div>{item.children}</div>,
                            };
                        })}
                    />
                </Card>
            </div>
            <div className={styles["right-layout"]}>
                <Card style={{ width: '100%', height: '100%' }}>
                    <GridLayout></GridLayout>
                </Card>

            </div>
        </div>

    )
}
const mapStateToProps = (states: IRootState) => {
    console.log('states', states)
    return {
        reports: states.reports.entity
    }
}
export default connect(mapStateToProps)(Dashboard)