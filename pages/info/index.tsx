import {NextPage} from "next";
import {Input} from 'antd'
import React, {useEffect, useMemo, useState} from 'react'
import Preview from "../../components/Preview";
// import 'index.css'
const Info:NextPage = ()=>{
  const [profile, setProfile] = useState({
    name: "New",
    about: "一个基于nextJs 的导出简历项目",
    email: "myEmail@qq.com",
    avatar:"https://avatars.githubusercontent.com/u/50816686?v=4",
  })
  const [isOk,setIsOk] = useState<boolean>(false)
  const handleChange: React.ChangeEventHandler<HTMLInputElement>= (e)=>{
    const {name,value} = e.target
    setProfile({
      ...profile,
      [name]:value
    })
  }
  useEffect(()=>{setIsOk(true)},[])
  return <div style={{width: '100%',
    height: '100vh',
    display: 'flex'}}>
    <div style={{width:'50%'}}>
      <div>
        <label>姓名：</label>
        <Input placeholder="姓名" name="name" defaultValue={profile.name} onChange={handleChange}/>
      </div>
      <div>
        <label>头像地址：</label>
        <Input placeholder="头像地址" name="avatar" defaultValue={profile.avatar} onChange={handleChange}/>
      </div>
      <div>
        <label>简介：</label>
        <Input placeholder="简介" name="about" defaultValue={profile.about} onChange={handleChange}/>
      </div>
      <div>
        <label>email：</label>
        <Input placeholder="email" name="email" defaultValue={profile.email} onChange={handleChange}/>
      </div>
    </div>
    {
      isOk?    <Preview profile={profile}/>:null

    }
  </div>
}
export default Info