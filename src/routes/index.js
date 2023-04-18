import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6000",

        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#FF6000" size={size} />;
            }

            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#FF6000" size={size} />;
            }

            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Kart"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="cart" color="#FF6000" size={size} />;
            }

            return <Ionicons name="cart-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="settings" color="#FF6000" size={size} />;
            }

            return (
              <Ionicons name="settings-outline" color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
