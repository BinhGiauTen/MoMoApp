import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import UuDai from "./UuDai";
import LichSuGD from "./LichSuGD";
import CongDong from "./CongDong";
import Toi from "./Toi";
import { View, Image, Text } from "react-native-web";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: { position: "absolute", height: 60, borderTopWidth: 0 ,paddingLeft:10, paddingRight:10},
        headerShown: false,
      }}
      initialRouteName="LichSuGD"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: 78,
              }}
            >
              {focused ? (
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    height: 3,
                    width: "100%",
                    backgroundColor: "#B0006D",
                    borderRadius: 5,
                  }}
                ></View>
              ) : null}
              <Image
                source={
                  focused
                    ? require("../images/MomoFocus.png")
                    : require("../images/Momo.png")
                }
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ color: focused ? "#B0006D" : "#BDBDBD" }}>
                MoMo
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UuDai"
        component={UuDai}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: 78,
              }}
            >
              {focused ? (
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    height: 3,
                    width: "100%",
                    backgroundColor: "#B0006D",
                    borderRadius: 5,
                  }}
                ></View>
              ) : null}
              <Image
                source={
                  focused
                    ? require("../images/UuDaiFocus.png")
                    : require("../images/UuDai.png")
                }
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ color: focused ? "#B0006D" : "#BDBDBD" }}>
                Ưu đãi
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LichSuGD"
        component={LichSuGD}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: 78,
              }}
            >
              {focused ? (
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    height: 3,
                    width: "100%",
                    backgroundColor: "#B0006D",
                    borderRadius: 5,
                  }}
                ></View>
              ) : null}
              <Image
                source={
                  focused
                    ? require("../images/LichSuGDFocus.png")
                    : require("../images/LichSuGiaoDich.png")
                }
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ color: focused ? "#B0006D" : "#BDBDBD" }}>
                Lịch sử GD
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CongDong"
        component={CongDong}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: 78,
              }}
            >
              {focused ? (
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    height: 3,
                    width: "100%",
                    backgroundColor: "#B0006D",
                    borderRadius: 5,
                  }}
                ></View>
              ) : null}
              <Image
                source={
                  focused
                    ? require("../images/CongDongFocus.png")
                    : require("../images/CongDong.png")
                }
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ color: focused ? "#B0006D" : "#BDBDBD" }}>
                Cộng đồng
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Toi"
        component={Toi}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                minWidth: 78,
              }}
            >
              {focused ? (
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    height: 3,
                    width: "100%",
                    backgroundColor: "#B0006D",
                    borderRadius: 5,
                  }}
                ></View>
              ) : null}
              <Image
                source={
                  focused
                    ? require("../images/ToiFocus.png")
                    : require("../images/Toi.png")
                }
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ color: focused ? "#B0006D" : "#BDBDBD" }}>
                Tôi
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
