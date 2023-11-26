import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-web";
const windowHeight = Dimensions.get("window").height;
const UuDai = () => {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("black");

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const transitionPoint = 60;
    if (offsetY >= transitionPoint) {
      setHeaderBackgroundColor("white");
    } else {
      setHeaderBackgroundColor("black");
    }
  };
  const UuDais = [
    {
      image: require("../images/UuDai3.png"),
      name: "Ăn uống gần bạn",
    },
    {
      image: require("../images/UuDai4.png"),
      name: "Dịch vụ tiện ích",
    },
    {
      image: require("../images/UuDai5.png"),
      name: "Du lịch & Giải trí",
    },
    {
      image: require("../images/UuDai6.png"),
      name: "Thương mại điện tử",
    },
    {
      image: require("../images/UuDai7.png"),
      name: "Đối tác liên kết",
    },
  ];
  const Deals = [
    {
      image: require("../images/UuDai9.png"),
      title: "Đặt GoFood trên MoMo",
      name: "Giảm 15%",
      des: "Tối đa 30.000đ cho đơn từ 150.000đ",
      ops: "Thu thập",
    },
    {
      image: require("../images/UuDai10.png"),
      title: "Đặt GoFood trên MoMo",
      name: "Giảm 30K",
      des: "Cho đơn từ 100.000đ",
      ops: "Thu thập",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          position: "absolute",
          zIndex: 1,
          backgroundColor: headerBackgroundColor,
        }}
      >
        <Image
          source={require("../images/search.png")}
          style={{ width: 24, height: 24, left: 40, position: "absolute" }}
        />
        <TextInput
          placeholder="Tìm kiếm ưu đãi..."
          style={{
            width: 360,
            height: 42,
            borderRadius: 20,
            backgroundColor: "#F0F0F0",
            marginHorizontal: 16,
            paddingLeft: 60,
            fontSize: 14,
            color: "#727272",
          }}
        />
      </View>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={{ height: 42 }}></View>
        <View style={{ height: 670 , backgroundColor: "#F2F1F6" }}>
          <ImageBackground
            source={require("../images/BDUuDai.png")}
            resizeMode="contain"
            style={{ width: "100%", height: 120 }}
          ></ImageBackground>
          <View style={{ paddingHorizontal: 15 }}>
            <View
              style={{
                position: "absolute",
                marginTop: -10,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 60,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../images/UuDai1.png")}
                  style={{ width: 40, height: 40, resizeMode: "contain" }}
                />
                <View>
                  <Text style={{ fontWeight: 700 }}>Nhập mã</Text>
                  <Text style={{ fontSize: 12, color: "#727272" }}>
                    Mã ưu đãi, mã giới thiệu
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 180,
                  height: 60,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../images/UuDai2.png")}
                  style={{ width: 40, height: 40, resizeMode: "contain" }}
                />
                <View>
                  <Text style={{ fontWeight: 700 }}>Quà của Bình</Text>
                  <Text style={{ fontSize: 12, color: "#727272" }}>
                    Có 11 ưu đãi
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 60 }}>
            <FlatList
              horizontal={true}
              data={UuDais}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 72,
                    height: 72,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 40, height: 40, resizeMode: "contain" }}
                  />
                  <Text
                    style={{ fontSize: 12, textAlign: "center", height: 30 }}
                  >
                    {item.name}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingVertical: 15,
              }}
            >
              <Image
                source={require("../images/UuDai8.png")}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
              <Text style={{ fontWeight: 700 }}>Deal chiều phái nữ</Text>
              <Image
                source={require("../images/right.png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
            </View>
            <FlatList
              horizontal={true}
              data={Deals}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 180,
                    height: 330,
                    marginRight: 5,
                    justifyContent: "center",
                    backgroundColor: '#fff',
                    borderRadius: 14

                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 180, height: 180, resizeMode: "contain" }}
                  />
                  <View style={{padding: 10}}>
                    <View style={{ flexDirection: "row" , alignItems: "center"}}>
                      <Image
                        source={require("../images/UuDai11.png")}
                        style={{ width: 24, height: 24, resizeMode: "contain" }}
                      />
                      <Text style={{ fontSize: 12, color: "#727272" }}>
                        {item.title}
                      </Text>
                    </View>
                    <Text style={{ fontWeight: 700 , marginVertical: 5}}>{item.name}</Text>
                    <Text style={{ fontWeight: 500, minHeight: 34 }}>{item.des}</Text>
                    <Pressable
                      style={{
                        width: 80,
                        height: 32,
                        borderColor: "#B0006D",
                        borderWidth: 1,
                        borderRadius: 8,
                        backgroundColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 10,
                        marginLeft: '50%'
                      }}
                    >
                      <Text style={{ color: "#B0006D", fontWeight: 600 }}>
                        {item.ops}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View style={{height: 60}}></View>
      </ScrollView>
    </View>
  );
};

export default UuDai;
