import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
  TextInput,
  Animated,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
const UPPER_HEADER_HEIGHT = 40;
const LOWER_HEADER_HEIGHT = 96;
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Home = ({navigation}) => {
  const animateValue = useRef(new Animated.Value(0)).current;
  const searchInputAnimation = {
    transform: [
      {
        scaleX: animateValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
      {
        translateX: animateValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animateValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };
  const featureNameAnimation = {
    transform: [
      {
        scale: animateValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animateValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };
  const depositViewAnimation = {
    transform: [
      {
        translateX: animateValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 36],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animateValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  const withdrawViewAnimation = {
    transform: [
      {
        translateX: animateValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -5],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animateValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  const qrViewAnimation = {
    transform: [
      {
        translateX: animateValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -56],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animateValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -54],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  const scanViewAnimation = {
    transform: [
      {
        translateX: animateValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -92],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animateValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  const featureIconCircleAnimation = {
    opacity: animateValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };
  const featureIconAnimation = {
    opacity: animateValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };

  const services = [
    {
      image: require("../images/ChuyenTien.png"),
      name: "Chuyển tiền",
      type: "ChuyenTien"
    },
    {
      image: require("../images/ChuyenTienNganHang.png"),
      name: "Chuyển tiền Ngân hàng",
    },
    {
      image: require("../images/ThanhToanHoaDon.png"),
      name: "Thanh toán hóa đơn",
    },
    {
      image: require("../images/NapTienDienThoai.png"),
      name: "Nạp tiền điện thoại",
    },
    {
      image: require("../images/Data.png"),
      name: "Data 3G/4G",
    },
    {
      image: require("../images/TuiThanTai.png"),
      name: "Túi Thần Tài",
    },
    {
      image: require("../images/ViTraSau.png"),
      name: "Ví Trả Sau",
    },
    {
      image: require("../images/ThanhToanKhoangVay.png"),
      name: "Thanh toán khoản vay",
    },
    {
      image: require("../images/MuaVeXemPhim.png"),
      name: "Mua vé xem phim",
    },
    {
      image: require("../images/VayNhanh.png"),
      name: "Vay Nhanh - Chủ Hộ Kinh...",
    },
    {
      image: require("../images/LinkNhanTien.png"),
      name: "Link nhận tiền",
    },
    {
      image: require("../images/XemThem.png"),
      name: "Xem thêm dịch vụ",
    },
  ];

  const quanTams = [
    {
      image: require("../images/QuanTam1.png"),
      title: "Grab đã có MoMo",
      desc: "Đặt Grab, thanh toán MoMo",
      ops: "Liên kết ngay",
    },
    {
      image: require("../images/QuanTam2.png"),
      title: "Gói quà 300K",
      desc: "Thanh toán Điện/ Nước",
      ops: "Thanh toán ngay",
    },
    {
      image: require("../images/QuanTam3.png"),
      title: "Thu tập deal HOT",
      desc: "Chỉ dành riêng cho nhà...",
      ops: "Thu thập ngay",
    },
  ];

  const deXuat = [
    {
      image: require("../images/ThanhToanTienNuoc.png"),
      name: "Thanh toán nước",
    },
    {
      image: require("../images/HeoDatMoMo.png"),
      name: "Heo Đất MoMo",
    },
    {
      image: require("../images/VayNhanh2.png"),
      name: "Vay nhanh",
    },
    {
      image: require("../images/DiBoCungMomo.png"),
      name: "Đi bộ cùng MoMo",
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View style={styles.upperHeaderPlaceholder} />
        </SafeAreaView>
        <SafeAreaView style={styles.header}>
          <View style={styles.upperHeader}>
            <View style={styles.searchContainer}>
              <Image
                source={require("../images/item0.png")}
                style={styles.searchIcon}
              />
              <AnimatedTextInput
                placeholder="Tìm kiếm"
                placeholderTextColor="rgba(255,255,255,0.8)"
                style={[styles.searchInput, searchInputAnimation]}
              />
            </View>
            <Image
              source={require("../images/item7.png")}
              style={styles.bellIcon}
            />
            <Image
              source={require("../images/item8.png")}
              style={styles.chatIcon}
            />
          </View>
          <View style={styles.lowerHeader}>
            <Animated.View style={[styles.feature, depositViewAnimation]}>
              <Animated.Image
                source={require("../images/Group 120.png")}
                style={[styles.featureIconCircle, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require("../images/item2.png")}
                style={[styles.featureIcon, featureIconAnimation]}
              />
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                Nạp/Rút
              </Animated.Text>
            </Animated.View>
            <Animated.View style={[styles.feature, withdrawViewAnimation]}>
              <Animated.Image
                source={require("../images/Group 121.png")}
                style={[styles.featureIconCircle, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require("../images/item4.png")}
                style={[
                  { width: 18, height: 18, position: "absolute", top: 8 },
                  featureIconAnimation,
                ]}
              />
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                QR Nhận tiền
              </Animated.Text>
            </Animated.View>
            <Animated.View style={[styles.feature, qrViewAnimation]}>
              <Animated.Image
                source={require("../images/Group 122.png")}
                style={[styles.featureIconCircle, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require("../images/item5.png")}
                style={[
                  { width: 18, height: 18, position: "absolute", top: 8 },
                  featureIconAnimation,
                ]}
              />
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                QR Thanh toán
              </Animated.Text>
            </Animated.View>
            <Animated.View style={[styles.feature, scanViewAnimation]}>
              <Animated.Image
                source={require("../images/Group 123.png")}
                style={[styles.featureIconCircle, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require("../images/item6.png")}
                style={[styles.featureIcon, featureIconAnimation]}
              />
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                Quét mã
              </Animated.Text>
            </Animated.View>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animateValue.setValue(offsetY);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent}>
          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
              numColumns={4}
              data={services}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress = {() => navigation.navigate(item.type)}
                  style={{
                    width: "25%",
                    height: 90,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 60, height: 60, resizeMode: "contain" }}
                  />
                  <Text style={{ fontSize: 12, textAlign: "center", height:30 }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={{ fontSize: 18, fontWeight: 600, paddingVertical: 20 }}
            >
              MoMo đề xuất
            </Text>
            <FlatList
              numColumns={4}
              data={deXuat}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: "25%",
                    height: 90,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 60, height: 60, resizeMode: "contain" }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "center",
                      fontWeight: 400,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={{ fontSize: 18, fontWeight: 600, paddingVertical: 20 }}
            >
              Có thể bạn quan tâm
            </Text>
            <FlatList
              horizontal={true}
              data={quanTams}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 332,
                    height: 245,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                    backgroundColor: "#ccc",
                    marginRight: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 332, height: 192, resizeMode: "contain" }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#8E8E8E" }}>
                        {item.desc}
                      </Text>
                    </View>
                    <Pressable
                      style={{
                        paddingHorizontal: 20,
                        marginLeft: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        backgroundColor: "#D82D8B",
                        height: 38,
                      }}
                    >
                      <Text
                        style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}
                      >
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#325340",
  },
  scrollViewContent: {
    height: 740,
    backgroundColor: "#fff",
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  upperHeaderPlaceholder: {
    height: UPPER_HEADER_HEIGHT,
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  feature: {
    alignItems: "center",
  },
  featureIconCircle: {
    width: 32,
    height: 32,
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: "absolute",
    top: 8,
  },
  featureName: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
    color: "#fff",
    marginTop: 12,
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
  },
  searchInput: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.3)",
    color: "#fff",
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  bellIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
  },
  chatIcon: {
    width: 16,
    height: 16,
  },
});
