import {StyleSheet,Font} from '@react-pdf/renderer';
Font.register({
  family: "Alibaba-PuHuiTi-Light",
  src: "/Alibaba-PuHuiTi-Light.ttf",
});
export default StyleSheet.create({
  page:{
    fontFamily: "Alibaba-PuHuiTi-Light",
    display:"flex",
    flexDirection:"row",
    fontSize: 12,
    color: "#333",
    lineHeight: 1.5,
  },
  section_right:{
    margin:10,
    padding: "0 24",
    flexGrow: 1,
    width:'75%',
  },
  section_left:{
    width:"25%",
    height:"100%",
    backgroundColor:"#58bc58"
  },
  profile_container:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:"20",
    marginBottom:"20px",
    height:'150'
  },
  avatar: {
    borderRadius: "50%",
  },
  profile_about: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  profile_email: {
    fontSize: 14,
    marginTop: 24,
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  name_text:{
    paddingTop: '10px',
    paddingBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
  }
})