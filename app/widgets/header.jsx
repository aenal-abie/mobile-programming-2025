import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Bell } from "lucide-react-native";

const Header = () => {
  return (
    <HStack className="justify-between items-center mt-5 mx-5">
      <VStack>
        <Text className="text-sm">Assalamualaikum</Text>
        <Text className="text-2xl font-bold">Karameena</Text>
      </VStack>
      <Icon as={Bell} size="md" />
    </HStack>
  );
};

export default Header;
