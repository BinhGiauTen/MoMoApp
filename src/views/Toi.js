import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";

const Toi = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          position: "absolute",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#EB65A4",
          height: 42,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>
          Tôi
        </Text>
      </View>
      <ScrollView
        style={{ backgroundColor: "#F2F1F6", flex: 1, paddingHorizontal: 20 }}
      >
        <View style={{ height: 42 }}></View>
        <View style={{ height: 1300 }}>
          <View
            style={{
              height: 116,
              borderRadius: 10,
              backgroundColor: "#fff",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 35,
                  backgroundColor: "#FFF0F5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#B0006D", fontSize: 16 }}>TV</Text>
                <Image
                  source={require("../images/checkGreen.png")}
                  style={{
                    width: 12,
                    height: 12,
                    resizeMode: "contain",
                    position: "absolute",
                    right: 0,
                    bottom: 5,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Trần Văn Bình</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#777",
                    marginVertical: 5,
                  }}
                >
                  0234538293
                </Text>
                <Pressable
                  style={{
                    width: 92,
                    height: 32,
                    borderRadius: 20,
                    backgroundColor: "#53C41A",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 14, color: "#fff" }}>
                    Đã xác thực
                  </Text>
                </Pressable>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 90 }}>
                <Image
                  source={require("../images/Rectangle 69.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                  }}
                />
                <Image
                  source={require("../images/chevron-right-72.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 73,
              borderRadius: 10,
              backgroundColor: "#fff",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../images/Rectangle 72.png")}
                style={{ width: 33, height: 29, resizeMode: "contain" }}
              />
              <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 20 }}>
                Giới thiệu MoMo
              </Text>
            </View>
            <Image
              source={require("../images/chevron-right-72.png")}
              style={{
                width: 24,
                height: 24,
                resizeMode: "contain",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Quản lý Ví
            </Text>
            <View
              style={{
                height: 350,
                borderRadius: 10,
                backgroundColor: "#fff",
                padding: 20,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 700 }}>
                  Tài khoản/Thẻ
                </Text>
                <Image
                  source={require("../images/chevron-up.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View
                style={{
                  marginVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  borderTopWidth: 1,
                  borderTopColor: "#ccc",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/Rectangle 74.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      style={{ fontSize: 14, fontWeight: 600, marginLeft: 5 }}
                    >
                      Ví MoMo
                    </Text>
                  </View>
                  <Text style={{ fontSize: 14, fontWeight: 600 }}>
                    1.051.626đ
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/TuiThanTai2.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      style={{ fontSize: 14, fontWeight: 600, marginLeft: 5 }}
                    >
                      Túi Thần Tài
                    </Text>
                  </View>
                  <Text style={{ fontSize: 14, fontWeight: 600 }}>
                    22.731.334đ
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/AG2.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      style={{ fontSize: 14, fontWeight: 600, marginLeft: 5 }}
                    >
                      Agribank
                    </Text>
                  </View>
                  <Text style={{ fontSize: 14, fontWeight: 600 }}>
                    **** **** **13
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#b0006d",
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                Xem tất cả
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/Rectangle 72-2.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      style={{ fontSize: 16, fontWeight: 600, marginLeft: 10 }}
                    >
                      Thanh toán, nạp tiền tự động
                    </Text>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/Rectangle 72-3.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      style={{ fontSize: 16, fontWeight: 600, marginLeft: 10 }}
                    >
                      Đăng nhập và bảo mật
                    </Text>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                Tiện ích
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 700, color: "#BF1B74" }}>
                Xem tất cả
              </Text>
            </View>
            <View
              style={{
                height: 330,
                borderRadius: 10,
                backgroundColor: "#fff",
                padding: 20,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconDiemTinCay.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        Điểm tin cậy MoMo
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#8E8E8E",
                        }}
                      >
                        Cập nhật quyền lợi tài chính của bạn
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconQuanLyChiTieu.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        Quản lý chi tiêu
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#8E8E8E",
                        }}
                      >
                        Ghi chép và theo dõi chi tiêu mỗi ngày
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconQuanLyDatCho.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        Quản lý đặt chỗ
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#8E8E8E",
                        }}
                      >
                        Thông tin đặt phòng, vé đã mua
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconThanhToanHoaDon.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        Thanh toán hóa đơn
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#8E8E8E",
                        }}
                      >
                        Chưa có hóa đơn
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconTheQuaTang.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        Thẻ quà tặng
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#8E8E8E",
                        }}
                      >
                        0 thẻ quà tặng
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Khác
            </Text>

            <View
              style={{
                height: 190,
                borderRadius: 10,
                backgroundColor: "#fff",
                padding: 20,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconCaiDat.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />

                    <Text
                      style={{ fontSize: 16, fontWeight: 600, marginLeft: 10 }}
                    >
                      Cài đặt ứng dụng
                    </Text>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconBaoMat.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />

                    <Text
                      style={{ fontSize: 16, fontWeight: 600, marginLeft: 10 }}
                    >
                      Trung tâm bảo mật
                    </Text>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../images/iconTroGiup.png")}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: "contain",
                      }}
                    />

                    <Text
                      style={{ fontSize: 16, fontWeight: 600, marginLeft: 10 }}
                    >
                      Trung tâm trợ giúp
                    </Text>
                  </View>
                  <Image
                    source={require("../images/chevron-right-72.png")}
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
              style={{
                height: 52,
                borderRadius: 10,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Text style={{fontSize: 18, fontWeight: 700, textAlign: "center"}}>Đăng xuất</Text>
            </View>
        </View>
        <View style={{ height: 60 }}></View>
      </ScrollView>
    </View>
  );
};

export default Toi;
