import React from "react";
import Header from "../widgets/header";
import { VStack } from "@/components/ui/vstack";
import WalletCard from "../widgets/wallet_card";

const HomeScreen = () => {
  return (
   <VStack>
     <Header />
     <WalletCard />
   </VStack>
  );
};

export default HomeScreen;
