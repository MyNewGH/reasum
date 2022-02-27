import React, { useState } from "react";
import {PDFViewer,PDFDownloadLink,Document,Page} from '@react-pdf/renderer';
import styles from "./styles";
import LeftSection from "./LeftSection";
import {Button, Input, Modal} from "antd";
export interface InterfacePdf {
  profile:{
    name:string,
    email:string,
    avatar:string,
    about:string
  }
}
const Preview:React.FC<InterfacePdf> = ({profile})=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cvName,setCvName] = useState<string>('我的简历')
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const changeName: React.FocusEventHandler<HTMLInputElement> = (e)=>{
      const {value} = e.target
      setCvName(value)
  }
  return <div style={{flex:1}}>
    <PDFViewer showToolbar={false}
    style={{
        width:"100%",
        height:"95%"
    }}>
      <Template profile={profile}/>
    </PDFViewer>
    <Button onClick={showModal}>立即下载</Button>
    <Modal title="简历名称" visible={isModalVisible} onCancel={handleCancel} footer={[
      <Button key='cancel'  onClick={handleCancel} style={{marginRight:12}}>
        取消
      </Button>,
      <PDFDownloadLink key='ok' document={
        <Template profile={profile}/>
      }
                       fileName={`${cvName}.pdf`}
      >
        {
          ({loading})=>(loading?'加载中。。。':<Button type="primary">确定</Button> )
        }
      </PDFDownloadLink>,
    ]} >
      <Input placeholder="请输入简历名称" defaultValue={cvName} onBlur={changeName}/>
    </Modal>
  </div>
}

const Template:React.FC<InterfacePdf> = ({profile})=>{
  return <Document>
    <Page size='A4' style={styles.page}>
      <LeftSection profile={profile}/>
    </Page>
  </Document>
}
export default Preview;