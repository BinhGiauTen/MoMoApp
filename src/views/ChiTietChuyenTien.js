import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const NhapChuyenTien = () => {
  return (
    <View style={styles.container}>
      <View style={{height:130, backgroundColor:'#BF1B74'}}>
        <View style={{ flexDirection:'row', flex:1, alignItems:'center', padding: 10}}>
            <Pressable style={{justifyContent:'center', alignItems: 'center', borderRadius:50, backgroundColor:'#7F2956', height:40, width:40}}>
                <Image 
                    source={{uri: 'https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/16_arrow_chevron_left_small.png'}} 
                    style={{width:40, height:40}}/>
            </Pressable>
            <View style={{justifyContent:'center', alignItems: 'center', marginHorizontal: 20}}>
                <View style={{width:40, height:40, backgroundColor:'#D9D9D9', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: '#BF1B74', fontWeight:700, fontSize:16}}>T</Text>
                </View>
            </View>
            <View>
                <Text style={{color:'#fff', fontWeight:700}}>Trọng</Text>
                <Text style={{color:'#fff', }}>Nguyễn Ngọc Trọng</Text>
                <Text style={{color:'#fff', }}>0987654321</Text>
            </View>
        </View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center',borderRadius:10,marginLeft:'5%',width:'90%', height:200, marginTop:-20, backgroundColor:'#FBFBFB',shadowColor: '#000',shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 3}}>
        <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
            <TextInput placeholder="300.000" 
                style={{height:55, fontSize:30, width:'50%', padding: 10, borderBottomWidth:1, borderColor:'#BF1B74', fontWeight:'bold'}}
            />
            <View style={{width:20, height:20, backgroundColor:'#A0A0A0', justifyContent:'center', alignItems:'center', borderRadius:50}}>
                <Pressable>
                    <Text style={{color:'#ffff'}}>X</Text>
                </Pressable>
            </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:30}}>
            <View style={{marginRight:30}}>
                <Text style={{color:'gray', marginLeft:20}}>Lời nhắn (0/160)</Text>
                <View style={{backgroundColor:'#ffff'}}>
                    <TextInput style={{color:'gray', width:180}} placeholder="Nhập hoặc chọn bên dưới" />
                </View>
            </View>
            <Icon name="microphone" size={25} color={'#BF1B74'}/>
            
            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft:20}}>
                <Icon name="briefcase" size={20} color={'#BF1B74'}/>
                <Text style={{fontSize:8, color:'#BF1B74'}}>Chọn thiệp</Text>
            </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', position:'absolute', width: '100%', bottom:10}}>
        <Pressable style={{width:'80%', height:50, backgroundColor:'#D82D8B', justifyContent: 'center', alignItems: 'center', borderRadius:10}}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:500}}>Chuyển tiền</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
});

export default NhapChuyenTien