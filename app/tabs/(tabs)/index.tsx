import React from "react";
import Header from "../widgets/header";
import { VStack } from "@/components/ui/vstack";
import WalletCard from "../widgets/wallet_card";
import Progress from "../widgets/progress";
import MenuGrid from "../widgets/menu_grid";
const HomeScreen = () => {
  return (
    <VStack className="bg-white h-[100vh]">
      <Header />
      <WalletCard />
      <Progress />
      <MenuGrid />
    </VStack>
  );
};

export default HomeScreen;
