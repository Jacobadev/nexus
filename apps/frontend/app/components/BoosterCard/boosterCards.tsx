import { Flex, Heading, Text } from "@radix-ui/themes";

import star from "@/images/rating-star-red.png";

import icon from "@/images/124599.jpeg";
export function BoosterCards() {
  return (
    <div className="grid grid-rows-5 gap-3 justify-center p-8 w-2/6 h-3/6 rounded-3xl shadow-sm shadow-gray-600">
      <Flex gap="3" className="">
        <Flex justify="center" align="center">
          <div className="overflow-hidden w-11 h-11 rounded-full">
            <img src={icon} className="booster__slide__image" />
          </div>
        </Flex>
        <Flex direction="column" justify="center">
          <Heading size="4">Jacoba da silva</Heading>
          <Flex>
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
          </Flex>
        </Flex>
      </Flex>

      <div className="flex flex-col row-span-3 auto-rows-max justify-center">
        <Heading className="">fodase</Heading>
        <Text className="">
          slc esse mano ai absurdo genio do league maluco tem um conhecimento mt
          slc esse mano ai absurdo genio do league maluco tem um conhecimento mt
        </Text>
      </div>
      <Flex justify="between">
        <Text>eaokdoeako</Text>
        <Text>12/08/2002</Text>
      </Flex>
    </div>
  );
}
