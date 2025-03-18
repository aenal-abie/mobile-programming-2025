import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import {
  ArchiveRestore,
  ArrowLeftRight,
  ScanLine,
  StarIcon,
  Wallet,
} from "lucide-react-native";
import { VStack } from "@/components/ui/vstack";

const WalletCard = () => {
  return (
    <VStack className="mt-5 mx-2">
      <ImageBackground
        source={require("../../../assets/images/bg.jpg")} // Background Gradient
        style={styles.card}
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={styles.balanceContainer}>
          <View>
            <Text category="s2">Saldo</Text>
            <Text category="h5" style={styles.balanceText}>
              IDR 895.500,00
            </Text>
          </View>
          <View style={styles.pointContainer}>
            <Icon
              as={StarIcon}
              className="text-yellow-300"
              style={styles.starIcon}
            />
            <Text category="s1" style={styles.pointText}>
              9.500
            </Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon as={Wallet} size="xl" style={styles.menuIcon} />
            </View>
          </View>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon as={ArrowLeftRight} size="xl" style={styles.menuIcon} />
            </View>
          </View>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon as={ArchiveRestore} style={styles.menuIcon} />
            </View>
          </View>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon as={ScanLine} style={styles.menuIcon} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </VStack>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    width: "100%",
    height: 200,
    justifyContent: "space-around",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 20,
  },
  balanceText: {
    fontWeight: "bold",
    marginTop: 5,
  },
  pointContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    color: "#F5A623",
  },
  pointText: {
    fontWeight: "bold",
    color: "#F5A623",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  menuIcon: {
    width: 28,
    height: 28,
    backgroundColor: "#F5A623",
    color: "#fff",
    borderRadius: 100,
  },

  menuItemContainer: {
    alignItems: "center",
  },
  menuItemWrapper: {
    backgroundColor: "#F5A623",
    borderRadius: 100,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
});

export default WalletCard;
