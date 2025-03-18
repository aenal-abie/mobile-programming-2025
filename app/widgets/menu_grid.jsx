import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@/components/ui/icon";
import { BarChart, Globe, Phone, Droplet, Flash, CreditCard, Play, More, PlugZap, Plug, Zap, CircleEllipsis, Gamepad2 } from "lucide-react-native";
import { VStack } from "@/components/ui/vstack";

const menuItems = [
  { icon: BarChart, title: "Pulse" },
  { icon: Globe, title: "Internet" },
  { icon: Phone, title: "Phone" },
  { icon: Droplet, title: "Water" },
  { icon: Zap, title: "Electricity" },
  { icon: CreditCard, title: "Insurance" },
  { icon: Gamepad2, title: "Game" },
  { icon: CircleEllipsis, title: "More" },
];

const MenuGrid = () => {
  return (
    <VStack style={styles.container}>
      {menuItems.map((item, index) => (
        <VStack key={index} style={styles.menuItem}>
          <VStack style={styles.iconContainer}>
            <Icon as={item.icon} strokeWidth={2} stroke="#125297" style={styles.icon} />
          </VStack>
          <Text style={styles.text}>{item.title}</Text>
        </VStack>
      ))}
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  menuItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    height: 55,
    width: 55,
    backgroundColor: "#F7F7F7",
    borderRadius: 120,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default MenuGrid;
