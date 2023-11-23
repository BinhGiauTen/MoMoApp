import { StyleSheet, Text, View,Image, Pressable, FlatList, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-web';

export default function App({navigation}) {
  var [data, setData] = React.useState([]);

  useEffect(() => {
        fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/userMoMo')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
  }, []);
  
  return (
    <ScrollView style={styles.container}>
        <View style={{backgroundColor:'#BF1B74', height:150, padding: 10}}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', flex:1}}>
                <Pressable style={{justifyContent:'center', alignItems: 'center'}}>
                    <Image 
                        source={{uri: 'https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/16_arrow_chevron_left_small.png'}} 
                        style={{width:40, height:40}}/>
                </Pressable>
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{fontSize:20, fontWeight: 'bold', color:'#ffff'}}>Chuyển Tiền</Text>
                </View>
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    <View style={{width:40, height:40, backgroundColor:'#D9D9D9', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color: '#BF1B74', fontWeight:700, fontSize:16}}>T</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{height:45, width:'80%', backgroundColor:'white', borderRadius:50, alignItems: 'center',flexDirection:'row', padding: 10}}>
                        <Icon name="search" size={30} color="black"/>
                    <TextInput style={{width: '80%', height: 35, fontSize:15, marginLeft:10, borderColor:'#FFFF'}} placeholder='Tìm người nhận'/>
                </View>
                <View>
                    <Pressable>
                        <Image 
                            source={{uri:'https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/16_phone_call_mic_on.png'}}
                            style={{width:40, height:40}}/>
                    </Pressable>
                </View>
            </View>
        </View>

        <View style={{backgroundColor: '#D9D9D9', padding: 10}}>
            <View style={{backgroundColor: '#ffff', height:280, borderRadius:10, paddingHorizontal: 20, paddingVertical:10}}>
                <Text style={{fontSize:16, fontWeight: 'bold'}}>Đề xuất</Text>
                <FlatList 
                    data={data.slice(0,8)}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={4}
                    renderItem={({item})=>{
                        return (
                            <View style={{alignItems: 'center', margin:18, justifyContent: 'center'}}>
                                <View style={{width:50, height:50, borderRadius:50, backgroundColor:'#FFF0F5', marginBottom:10, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontWeight:700, color:'#BF1B74'}}>{item.ten.charAt(0)}</Text>
                                </View>
                                <Text style={{fontSize:16, fontWeight:'bold'}}>{item.ten}</Text>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{marginTop:20 ,height:55, backgroundColor:'#ffff', justifyContent: 'space-around', flexDirection:'row', alignItems: 'center', borderRadius:10}}>
                <View>
                    <Icon name="ticket" size={30} color={"#BF1B74"}/>
                </View>
                <View>
                    <Text style={{fontSize:15, fontWeight:'bold'}}>Ăn uống quét QR ngân hàng</Text>
                    <Text>MoMo hoàn tiền 50%</Text>
                </View>
                <View style={{height:'50%', width:100, backgroundColor:'#BF1B74', justifyContent:'center', alignItems:'center', borderRadius:10}}>
                    <Text style={{color:'#fff'}}>Quét mã ngay</Text>
                </View>
            </View>
            <View style={{marginTop:20 ,height:300, backgroundColor:'#ffff', borderRadius:10, padding:20}}>
                <Text style={{fontSize:16, fontWeight:'bold', marginBottom: 20}}>Dịch vụ chuyển tiền</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '25%', marginBottom:20 ,alignItems: 'center' , flex:1}}>
                        <Image style={{width: 40, height:40, marginTop:-5}} source={require('../images/denViMoMo.png')} />
                        {/* <Icon name="wallet"  size={30} color={"#BF1B74"} /> */}
                        
                        <Text style={{fontWeight:700, marginTop: 4}}>Đến Ví</Text>
                        <Text style={{fontWeight:700}}>MoMo</Text>
                    </View>
                    <View style={{width: '25%', marginBottom:20 ,alignItems: 'center',flex:1}}>
                        <Icon name="bank" size={30} color={'#086DD9'}/>
                        <Text style={{fontWeight:700, marginTop: 10}}>Đến Ngân</Text>
                        <Text style={{fontWeight:700}}>Hàng</Text>
                    </View>                   
                    <View style={{width: '25%', alignItems: 'center',flex:1}}>
                        <Icon name="envelope" size={30} color={'#BF1B74'}/>
                        <Text style={{fontWeight:700, marginTop: 10}}>Lì Xì</Text>
                    </View>
                    <View style={{width: '25%', marginBottom:20 ,alignItems: 'center',flex:1}}>
                        <Image
                            source={require('../images/diemNapRut.png')}
                            style={{width:40, height:40, marginTop:-8}}/>
                        <Text style={{fontWeight:700, marginTop: 8}}>Điểm Nạp</Text>
                        <Text style={{fontWeight:700}}>Rút</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '25%', marginBottom:20 ,alignItems: 'center' , flex:1}}>
                        <Icon name="dollar" size={30} color={'#BF1B74'}/>
                        <Text style={{fontWeight:700, marginTop: 10}}>Chia Tiền</Text>
                    </View>
                    <View style={{width: '25%', marginBottom:20 ,alignItems: 'center',flex:1}}>
                        <Icon name="money" size={30} color={'#BF1B74'}/>
                        <Text style={{fontWeight:700, marginTop: 10}}>Nhắc Trả</Text>
                        <Text style={{fontWeight:700}}>Tiền</Text>
                    </View>
                    <View style={{width: '25%', marginBottom:20 ,alignItems: 'center',flex:1}}>
                        <Icon name="group" size={30} color={'#BF1B74'}/>
                        {/* <Image source={require('../images/quyNhom.png')} 
                            style={{width:40, height:30}}
                        /> */}
                        <Text style={{fontWeight:700, marginTop: 10}}>Quỹ Nhóm</Text>
                    </View>
                    <View style={{width: '25%', marginBottom:20 ,alignItems: 'center',flex:1}}>
                        <Icon name="link" size={30} color={'#BF1B74'}/>
                        <Text style={{fontWeight:700, marginTop: 10}}>Link Nhận</Text>
                        <Text style={{fontWeight:700}}>Tiền</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20, height:55, borderRadius:10, backgroundColor:'white', padding:10, flexDirection:'row', alignItems:'center'}}>
                <Image
                    source={require('../images/thongKe.png')}
                    style={{width:30, height:30, marginRight: 10}}/>
                <View style={{marginRight:20}}>
                    <Text style={{fontWeight:500}}>Thống kê chuyển nhận tiền</Text>
                    <Text>Xem số tiền bạn đã chuyển, nhân trong tháng</Text>
                </View>
                <Icon name="chevron-right" size={15} color={'black'}/>
            </View>
            <View style={{width:150, height:45, padding: 10 ,backgroundColor:'white', flexDirection:'row', alignItems:'center', marginTop:20, zIndex:1, borderRadius:5,shadowColor: '#000',shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 3,}}>
                <Image
                    source={require('../images/phanHoi.png')}
                    style={{width:30, height:30, marginRight:20}}/>
                    <Text style={{fontSize:20, fontWeight:500, color:'#BF1B74'}}>Phản hồi</Text>
            </View>
            <View style={{height:320, backgroundColor:'#ffff',marginTop: -20, borderRadius:10, padding:10}}>
                <Image 
                    source={require('../images/quetNgay.png')}
                    style={{width:'100%', height:175, marginTop: 30}}
                />
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center', marginTop:20}}>
                    <View  style={{marginTop: 10}}>
                        <Text style={{fontWeight:500, fontSize:16}}>Quét mọi ngân hàng</Text>
                        <Text>Mọi giao dịch cũng mã QR ngân hàng {'\n'}hoàn tất nhanh gọn</Text>
                    </View>
                    <View style={{width:95, height:32, backgroundColor:'#BF1B74', justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <Pressable>
                            <Text style={{color:'white'}}>Quét ngay</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#D9D9D9', paddingVertical: 20}}>
            <Pressable style={{width:170, height:45, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'#BF1B74', flexDirection:'row'}}>
                <Image 
                    source={{uri:'https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/16_navigation_qrcode.png'}}
                    style={{width:30, height:30, marginRight:10}}
                />
                <Text style={{color:'white'}}>Quét mọi QR</Text>
            </Pressable>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
