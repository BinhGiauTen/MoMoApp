import { View, Text, StyleSheet,Pressable,Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const ThanhToanAnToan = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{height:100, backgroundColor:'#BF1B74', flexDirection:'row',alignItems: 'center', padding: 10}}>
            <Pressable style={{justifyContent:'center', alignItems: 'center', borderRadius:50, backgroundColor:'#7F2956', height:40, width:40}}>
                <Image 
                    source={{uri: 'https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/16_arrow_chevron_left_small.png'}} 
                    style={{width:40, height:40}}/>
            </Pressable>
            <Text style={{fontSize:20, fontWeight: 600, color: 'white', marginLeft:55}}>Thanh toán an toàn</Text>
      </View>
      <View style={{backgroundColor:'#ffff', padding:10}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center',}}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize:16, fontWeight: 700, marginRight:20}}>Tài khoản/Thẻ</Text>
                <Icon name="eye" size={20} color="black" />
            </View>
            <Text style={{color:'#BF1B74', fontSize:15, fontWeight:700}}>Xem tất cả</Text>
        </View>
        <View style={{marginTop:20, flexDirection:'row',}}>
            <View style={{height:70, width:150, borderWidth:1, borderColor:'#BF1B74', borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image 
                    source={require('../images/MomoFocus.png')}
                    style={{width:30, height:30}}
                />
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:13, fontWeight:'bold'}}>Ví MoMo</Text>
                    <Text style={{fontSize:13, fontWeight:600, color:'gray'}}>700.000đ</Text>
                </View>
            </View>
            <View style={{height:70, width:150, borderWidth:1, borderColor:'#BF1B74', borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:20}}>
                <Image 
                    source={require('../images/agribank.png')}
                    style={{width:30, height:30}}
                />
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:13, fontWeight:'bold'}}>Agribank</Text>
                    <Text style={{fontSize:13, fontWeight:600, color:'gray'}}>Miễn phí</Text>
                </View>
            </View>
        </View>
        <View style={{marginTop:20}}>
            <Text style={{fontSize:18, fontWeight:650, color:'gray'}}>Chi tiết giao dịch</Text>
            <View style={{marginTop:20, borderWidth:1, borderColor:'#B2B0B0', height:390, padding:20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:15}}>
                    <Text style={{fontWeight:600, fontSize:15, color:'gray'}}>Chuyển tiền đến</Text>
                    <Text style={{fontWeight:650, fontSize:15, }}>Nguyễn Trọng Ngọc</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                    <Text style={{fontWeight:600, fontSize:15, color:'gray'}}>Tên danh bạ</Text>
                    <Text style={{fontWeight:650, fontSize:15, }}>Ngọc</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                    <Text style={{fontWeight:600, fontSize:15, color:'gray'}}>Số điện thoại</Text>
                    <Text style={{fontWeight:650, fontSize:15, }}>0987654321</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                    <Text style={{fontWeight:600, fontSize:15, color:'gray'}}>Số tiền</Text>
                    <Text style={{fontWeight:650, fontSize:15, }}>300.000đ</Text>
                </View>
                <Text style={{color:'gray', marginBottom:15}}>----------------------------------------------------------</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                    <Text style={{fontWeight:600, fontSize:15, color:'gray'}}>Phí giao dịch</Text>
                    <Text style={{fontWeight:650, fontSize:15, }}>Miễn phí</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:25}}>
                    <Text style={{fontWeight:600, fontSize:15, color:'gray'}}>Mã tham chiếu</Text>
                    <Text style={{fontWeight:650, fontSize:15, }}>473453453244</Text>
                </View>
                <Text style={{fontSize:18, fontWeight:700, marginBottom:20}}>ƯU ĐÃI</Text>
                <View style={{height:57, justifyContent: 'center', alignItems: 'center', borderWidth:1, borderColor:'#DF3793', borderRadius:10, flexDirection:'row'}}>
                    <Icon name="plus" size={16} color={'#DF3793'} />
                    <Text style={{fontSize:16, fontWeight:700,color:'#DF3793', marginLeft:20}}>Chọn thẻ quà tặng</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:40}}>
                    <View style={{flexDirection:'row', flexDirection:'row', alignItems: 'center'}}>
                        <Icon name="shield" size={46} color={'#CCC5C5'}/>
                        <Text style={{color:'#CCC5C5', fontSize:16, fontWeight:700, marginLeft:20}}>Security</Text>
                    </View>
                    <Text style={{fontSize:13, fontWeight:500, color:'#CCC5C5', marginLeft:20}}>Bảo mật SSL/TLS, mọi thông tin giao dịch đều được mã hóa an toàn.</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:50}}>
                    <Text style={{fontSize:15, fontWeight:600, }}>Tổng tiền</Text>
                    <Text style={{fontSize:20, fontWeight:600, }}>300.000đ</Text>
                </View>
                <View style={{backgroundColor:'#D82D8B', height:60, marginTop:20, borderRadius:10,justifyContent: 'center', alignItems:'center'}}>
                    <Pressable style={{width:'100%', height:'100%',flexDirection:'row', justifyContent: 'center', alignItems:'center'}}> 
                        <Icon name="lock" size={30} color="white" />
                        <Text style={{fontSize:18, fontWeight:'bold', color:'white', marginLeft:20}}>Xác nhận</Text>
                    </Pressable>
                </View>
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

export default ThanhToanAnToan