import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { ChartPie } from "lucide-react-native";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
const Progress = () => {
  return (
    <HStack className="mx-2" style={styles.container}>
      <VStack style={styles.historyContainer}>
        <Icon as={ChartPie}  strokeWidth={3} stroke="#FFD101" style={styles.icon} />
      </VStack>
      <VStack style={{ flexDirection: "column" }}>
        <Text className="text-xl" style={styles.name}>
          Transaksi Bulanan
        </Text>
        <Text className="text-sm" style={styles.name}>
          Kenaikan penjualan 25% dari sebelumnya
        </Text>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 10,
    marginTop: 20,
    height: 80,
    marginBottom: 20,
    backgroundColor: "#125297",
  },
  icon: {
    alignItems: "center",   
    justifyContent: "center",
    width: 32,
    height: 32,
  },
  name: {
    color: "#FFD101",
  },
  historyContainer: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    borderRadius: 120,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
});

export default Progress;
