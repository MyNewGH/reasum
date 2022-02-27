import React from "react";
import {View,Text,Image} from '@react-pdf/renderer';
import {InterfacePdf} from "./index";
import styles from './styles'
export const Profile:React.FC<InterfacePdf> = ({profile})=>{
  return (
    <View style={styles.profile_container}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image src={profile.avatar} style={styles.avatar}/>
      <View style={{
        justifyContent:"center"
      }}>
        <Text style={styles.name_text}>{profile.name}</Text>
      </View>
      <Text style={styles.profile_email}>{profile.email}</Text>

      <Text style={styles.profile_about}>{profile.about}</Text>

    </View>
  )
}
const LeftSection:React.FC<InterfacePdf> = ({profile})=>{
  return (
    <View style={styles.section_left}>
      <Profile profile={profile}/>
    </View>
  )
}
export default LeftSection