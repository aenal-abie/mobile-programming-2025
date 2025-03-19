import React from "react";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Icon } from "@/components/ui/icon";
import { LucideIcon, Star } from "lucide-react-native";
import { Home } from "lucide-react-native";

function TabBarIcon({ icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <Icon
      as={icon}
      stroke={color}
      style={{ marginBottom: -3 }}
    />
  );
}

const homeTabIcon = () => <TabBarIcon icon={Home} color={"#125297"} />;
const tab1TabIcon = () => <TabBarIcon icon={Star} color={"#125297"} />;
const tab2TabIcon = () => <TabBarIcon icon={Star} color={"#125297"} />;
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, false),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => homeTabIcon(),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => tab1TabIcon(),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => tab2TabIcon(),
        }}
      />
    </Tabs>
  );
}
