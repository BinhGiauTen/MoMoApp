import { View, Text, TextInput, Image, ScrollView, Dimensions, FlatList } from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;

const LichSuGD = () => {
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const transitionPoint = 60;
  };

  const LichSuGiaoDichs = [
    {
      type: "Nhận tiền",
      name: "Lợi nhuận Túi Thần Tài ngày 17/10/2023",
      time: "00:36 - 18/10/2023",
      money: "+3.314đ"
    },
    {
      type: "Nhận tiền",
      name: "Nhận tiền từ ví vào Túi Thần Tài",
      time: "17:24 - 17/10/2023",
      money: "+30.000đ"
    },
    {
      type: "Nhận tiền",
      name: "Nạp tiền vào Túi Thần Tài",
      time: "17:24 - 17/10/2023",
      money: "-30.000đ"
    },
    {
      type: "Nhận tiền",
      name: "Nhận tiền từ Nguyễn Ngọc Trọng",
      time: "17:24 - 17/10/2023",
      money: "+30.000đ"
    },
    {
      type: "Nhận tiền",
      name: "Lợi nhuận Túi Thần Tài ngày 16/10/2023",
      time: "00:36 - 16/10/2023",
      money: "+3.314đ"
    },
    {
      type: "Chuyển tiền",
      name: "Chuyển tiền đến Dương Quốc Long",
      time: "21:50 - 14/10/2023",
      money: "-100.000đ"
    },
    {
      type: "Nhận tiền",
      name: "Lợi nhuận Túi Thần Tài ngày 13/10/2023",
      time: "00:36 - 13/10/2023",
      money: "+3.314đ"
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          position: "absolute",
          zIndex: 1,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#B0006D",
            height: 42,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
            Lịch sử giao dịch
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../images/search.png")}
              style={{ width: 24, height: 24, left: 40, position: "absolute" }}
            />
            <TextInput
              placeholder="Tìm kiếm giao dịch"
              style={{
                width: 270,
                height: 46,
                borderRadius: 20,
                backgroundColor: "#F0F0F0",
                marginHorizontal: 16,
                paddingLeft: 60,
                fontSize: 14,
                color: "#727272",
              }}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../images/BoLoc.png")}
              style={{ width: 28, height: 22, resizeMode: "contain" }}
            />
            <Text>Bộ lọc</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 5,
            }}
          >
            <Image
              source={require("../images/SoDu.png")}
              style={{ width: 28, height: 22, resizeMode: "contain" }}
            />
            <Text>Số dư</Text>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <View
            style={{
              width: 70,
              height: 3,
              position: "absolute",
              bottom: -10,
              backgroundColor: "#B0006D",
              borderRadius: 5,
            }}
          ></View>
          <Text
            style={{
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              fontWeight: "bold",
            }}
          >
            Tất cả
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Lợi nhuận
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Nhận tiền
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Nạp tiền vào ví
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Nạp tiền tự động
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Rút tiền
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Chuyển tiền
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Tài chính - bảo hiểm
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Điện thoại - 3G/4G
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Chiết khấu hoàn tiền
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Mua sắm
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Khác
          </Text>
        </ScrollView>
        <ScrollView
          horizontal={true}
          style={{
            paddingLeft: 20,
            marginTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 2,
              borderRadius: 20,
              borderColor: "#B0006D",
              fontWeight: "bold",
              color: "#B0006D",
            }}
          >
            Tất cả
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Túi thần tài
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Ví Momo
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Tài khoản
          </Text>
        </ScrollView>
        <View
          style={{
            height: 60,
            backgroundColor: "#E7F4FD",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Tháng 10/2023
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#EC2F96" }}
            >
              Thống kê
            </Text>
            <Image
              source={require("../images/chevron-right.png")}
              style={{ width: 24, height: 24, resizeMode: "contain" }}
            />
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff'}}>
        <View style={{height: 285}}></View>
        <FlatList style={{height: windowHeight}} data={LichSuGiaoDichs} renderItem={({item}) =>(
          <View
          style={{
            height: 85,
            flexDirection: "row",
            alignItems: "center",
            padding: 20
          }}
        >
          <Image
            source={
              item.type === "Nhận tiền"
                ? require("../images/LSGD1.png")
                : require("../images/LSGD2.png")
            }
            style={{ width: 60, height: 60, resizeMode: "contain" }}
          />
          <View style={{marginLeft: 10, flex:1}}>
            <Text style={{fontSize: 16}}>{item.name}</Text>
            <Text style={{ fontSize: 12, color: "#727272", marginVertical: 5}}>
              {item.time}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 12 }}>Số dư túi: *********</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16, position: "absolute", right: 0}}>{item.money}</Text>
            </View>
          </View>
        </View>
        )}></FlatList>

        
      </ScrollView>
    </View>
  );
};

export default LichSuGD;
