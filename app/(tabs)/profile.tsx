import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function Tab2() {
  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Profile</Heading>
      <Divider className="my-[30px] w-[80%]" />
      <Text className="p-4">Example below to use gluestack-ui components.</Text>
    </Center>
  );
}
