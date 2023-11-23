import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  RootTagContext,
  Pressable,
} from "react-native";
import React from "react";

const CongDong = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F97AB3",
            paddingBottom: 10,
            paddingTop: 5,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../images/search.png")}
              style={{ width: 24, height: 24, left: 40, position: "absolute" }}
            />
            <TextInput
              placeholder="Tìm kiếm "
              style={{
                width: 270,
                height: 46,
                borderRadius: 20,
                backgroundColor: "#fff",
                marginHorizontal: 16,
                paddingLeft: 60,
                fontSize: 14,
                color: "#727272",
              }}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../images/user-plus2.png")}
              style={{ width: 28, height: 22, resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 5,
            }}
          >
            <Image
              source={require("../images/chat.png")}
              style={{ width: 28, height: 22, resizeMode: "contain" }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            backgroundColor: "#fff",
            height: 60,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 90,
              height: 3,
              position: "absolute",
              bottom: 0,
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
            Quan tâm
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Xu hướng
          </Text>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 8 }}
          >
            Bạn bè
          </Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ height: 120 }}></View>
        <View style={{ height:1050, backgroundColor: "#ECECEE" }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 20,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 40,
                }}
              >
                <Image
                  source={require("../images/Ellipse 3.png")}
                  style={{ width: 62, height: 58, resizeMode: "contain" }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: 600 }}>Mcredit</Text>
                  <Image
                    source={require("../images/check.png")}
                    style={{
                      width: 35,
                      height: 20,
                      resizeMode: "contain",
                      marginHorizontal: 4,
                    }}
                  />
                  <Text
                    style={{ fontSize: 16, fontWeight: 600, color: "#BF1B74" }}
                  >
                    Theo dõi
                  </Text>
                </View>
                <Text style={{ fontSize: 16, color: "#727272" }}>
                  5 tháng trước
                </Text>
              </View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>...</Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                paddingHorizontal: 10,
                marginTop: 5,
              }}
            >
              TIỀN MẶT TRONG TAY, GẠT ĐI NỖI LO TÀI CHÍNH BAO NGÀY
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 10,
                color: "#313233",
                marginTop: 8,
              }}
            >
              Cứ đến mỗi cuối tháng là bạn lại lao đao với vô số tài khoản phải
              chi đang xếp hàng cần cô cô “xắn tay” vào thanh toán. Từ hóa đơn
              tiền điện, tiền nhà, tiền nhập hàng cho đến tiền nước, ... bạn
              không biết...
            </Text>
            <Image
              source={require("../images/credit.png")}
              style={{
                width: "100%",
                height: 380,
                resizeMode: "contain",
                marginTop: 10,
              }}
            />
            <View
              style={{
                backgroundColor: "#D82D8B",
                height: 60,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
                Tải app & Đăng ký vay ngay!
              </Text>
              <Image
                source={require("../images/chevron-right2.png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
            </View>
            <View
              style={{
                height: 50,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 14, color: "#727272" }}>91 thích</Text>
              <Text style={{ fontSize: 14, color: "#727272" }}>
                6 bình luận
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Pressable
                style={{
                  borderRadius: 10,
                  height: 38,
                  backgroundColor: "#F9F9F9",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  paddingHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../images/heart.png")}
                  style={{
                    width: 12,
                    height: 12,
                    resizeMode: "contain",
                    marginRight: 5,
                  }}
                />
                <Text style={{ fontSize: 14 }}>Thích</Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 10,
                  height: 38,
                  backgroundColor: "#F9F9F9",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/message.png")}
                  style={{
                    width: 12,
                    height: 12,
                    resizeMode: "contain",
                    marginRight: 5,
                  }}
                />
                <Text style={{ fontSize: 14 }}>Bình luận</Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 10,
                  height: 38,
                  backgroundColor: "#F9F9F9",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/share.png")}
                  style={{
                    width: 12,
                    height: 12,
                    resizeMode: "contain",
                    marginRight: 5,
                  }}
                />
                <Text style={{ fontSize: 14 }}>Chia sẻ</Text>
              </Pressable>
            </View>
            <View style={{paddingHorizontal: 10, borderBottomColor: '#999', borderBottomWidth:1}}>
              <View
                style={{
                  height: 96,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../images/avatar1.png")}
                  style={{
                    width: 37,
                    height: 37,
                    resizeMode: "contain",
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>
                    LÊ CHÍ NHỊN
                  </Text>
                  <View
                    style={{
                      borderRadius: 8,
                      backgroundColor: "#F0F0F0",
                      marginVertical: 3,
                    }}
                  >
                    <Text style={{ fontSize: 16, padding: 10 }}>
                      Cần hỗ trợ
                    </Text>
                  </View>
                  <Text style={{ fontSize: 16, color: "#727272" }}>
                    3 giờ trước
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 96,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../images/avatar2.png")}
                  style={{
                    width: 37,
                    height: 37,
                    resizeMode: "contain",
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>
                    Nguyễn Tấn Quang
                  </Text>
                  <View
                    style={{
                      borderRadius: 8,
                      backgroundColor: "#F0F0F0",
                      marginVertical: 3,
                    }}
                  >
                    <Text style={{ fontSize: 16, padding: 10 }}>
                      Cần hỗ trợ
                    </Text>
                  </View>
                  <Text style={{ fontSize: 16, color: "#727272" }}>
                    12 giờ trước
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: "row", padding: 10}}>
              <Image source={require("../images/message-square.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                  }}/>
              <Text style={{fontSize: 16, fontWeight: 700, color: '#B0006D', marginLeft: 10}}>Xem tất cả 6 bình luận</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 60 }}></View>
      </ScrollView>
    </View>
  );
};

export default CongDong;
