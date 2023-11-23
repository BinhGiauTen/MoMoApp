import { View, Text,StyleSheet,ScrollView,Pressable,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const ChonUuDai = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{height:100, backgroundColor:'#BF1B74', flexDirection:'row',alignItems: 'center', padding: 10}}>
            <Pressable style={{justifyContent:'center', alignItems: 'center', borderRadius:50, backgroundColor:'#7F2956', height:40, width:40}}>
                <Image 
                    source={{uri: 'https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/16_arrow_chevron_left_small.png'}} 
                    style={{width:40, height:40}}/>
            </Pressable>
            <Text style={{fontSize:20, fontWeight: 600, color: 'white', marginLeft:105}}>Ưu đãi</Text>
      </View>
      <View style={{backgroundColor:'#D9D9D9', height:550, padding:18}}>
        <View style={{height: 315, backgroundColor:'#fff', borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="ticket" size={100} color="#D1D1D1" />
            <Text style={{fontSize:20, fontWeight:700, marginVertical:20}}>Ở đây hơi trống trải</Text>
            <Text style={{fontSize:13, fontWeight:600, color:'gray', marginBottom:20}}>Hiện chưa có thẻ quà nào có thể áp dụng</Text>
            <View style={{height:35, width:120, borderWidth:1, borderColor:'#BF1B74', borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color:'#BF1B74', fontWeight:600}}>Quay lại</Text>
            </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', position:'absolute', width: '100%', bottom:10}}>
        <Pressable style={{width:'80%', height:50, backgroundColor:'gray', justifyContent: 'center', alignItems: 'center', borderRadius:10}}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:500}}>Áp dụng</Text>
        </Pressable>
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
export default ChonUuDai