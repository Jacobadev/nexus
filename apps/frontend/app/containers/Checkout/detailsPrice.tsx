import { Flex, Text } from "@radix-ui/themes";

export function DetailsPrice() {
  return (
    <Flex direction="column" gap="2" align="center" justify="center">
      <Flex gap="6">
        <Text size="4" className="tracking-wide">
          RS 15
        </Text>
        <Flex align="center" gap="2">
          <Text size="4" className="tracking-wide text-gray-400 line-through">
            RS 10
          </Text>
          <Text className="tracking-wide text-red-400">25% OFF</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
