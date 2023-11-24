import { View, Text,StyleSheet,Pressable,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-web';

const KetQUaGiaoDich = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{height:150, backgroundColor:'#BF1B74', flexDirection:'row',alignItems: 'center', padding: 10}}>
            <Text style={{fontSize:20, fontWeight: 600, color: 'white', marginLeft:105, marginTop:-50}}>Kết Quả Giao Dịch</Text>
            <Pressable style={{justifyContent:'center', alignItems: 'center', borderRadius:50, height:40, width:40, marginLeft:50,marginTop:-50}}>
                <Icon name="home" size={28} color="white" />
            </Pressable>
      </View>
      <View style={{justifyContent:'center',alignItems: 'center', marginTop:-60, zIndex:1}}>
        <View style={{width: 60, height:60, borderRadius:50, borderWidth:5, borderColor:'green', backgroundColor:'white'}}>
            <Icon name="check" size={50} color="green" />
        </View>
      </View>
      <View style={{padding:20}}>
        <View style={{height:480, backgroundColor:'#fff', marginTop:-50, borderRadius:10,shadowColor: '#000',shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 3, justifyContent:'center', alignItems: 'center', padding:10}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Giao dịch thành công</Text>
            <Text style={{fontSize:20, fontWeight:'bold'}}>300.000đ</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:10}}>
                <Text style={{color:'gray'}}>Thời gian thanh toán</Text>
                <Text style={{fontWeight:650}}>12:53 - 22/10/2023</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:10}}>
                <Text style={{color:'gray'}}>Chi tiết giao dịch</Text>
                <Text style={{fontWeight:650, color:'#D23A8C'}}>473456456544</Text>
            </View>
            <View style={{width:'100%',height:180, borderWidth:1, borderColor:'#D23A8C', borderRadius:10, padding: 10, marginTop:20}}>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:14}}>
                    <Text style={{color:'gray', fontWeight:600}}>Người gửi</Text>
                    <Text style={{fontWeight:650}}>Trần Văn Bình</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:14}}>
                    <Text style={{color:'gray', fontWeight:600}}>Người nhận</Text>
                    <Text style={{fontWeight:650}}>Nguyễn Trọng Ngọc</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:14}}>
                    <Text style={{color:'gray', fontWeight:600}}>Tên danh bạ</Text>
                    <Text style={{fontWeight:650}}>Trọng</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:14}}>
                    <Text style={{color:'gray', fontWeight:600}}>SĐT</Text>
                    <Text style={{fontWeight:650}}>0987654321</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:14}}>
                    <Text style={{color:'gray', fontWeight:600}}>Loại giao dịch</Text>
                    <Text style={{fontWeight:650}}>Chuyển tiền</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', marginTop:20, alignItems:'center', padding:20}}>
                <Pressable>
                    <Text style={{fontWeight:650}}>Chuyển thêm</Text>
                </Pressable>
                <Pressable style={{width:150, height:40, borderColor:'#D23A8C', borderWidth:1, borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'#D23A8C', fontWeight:600}}>Chia sẽ ảnh này</Text>
                </Pressable>
            </View>
        </View>
      </View>
      <View style={{width:300, height:110, marginLeft:20,padding:20, borderRadius:10, borderWidth:1, borderColor:'gray'}}>
        <Text style={{fontWeight:'bold', fontSize:15, marginBottom:20}}>Yayy!Bạn đã nhận được</Text>
        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Icon name="image" size={35} color={"orange"}/>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Lắc Cá...</Text>
            <View style={{width:70, height:30, borderColor:'gray', borderWidth:1, borderRadius:10, justifyContent:'center', alignItems: 'center'}}>
                <Text>Lắc ngay</Text>
            </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
  });
export default KetQUaGiaoDich