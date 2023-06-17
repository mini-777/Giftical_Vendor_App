import {
  Box,
  Divider,
  HStack,
  Image,
  ScrollView,
  VStack,
  Text,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import base64 from 'base-64';
const InventoryItem = ({ storeName, storeImg, onItemClick }) => {
  return (
    <TouchableOpacity onPress={onItemClick}>
      <HStack>
        <Image
          source={{
            uri: `data:image/png;base64,${base64.decode(storeImg)}`,
          }}
          alt='storeImg'
          w='20'
          h='20'
          rounded='md'
        />
        <Text ml={5} fontSize='xl' fontWeight='bold'>
          {storeName}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};

export default function SelectStore({ navigation, route }) {
  const inventoryItems = route.params;

  const handleClick = (item) => {
    navigation.navigate('Main', item);
    console.log(route.params[0].storeImg);
  };

  return (
    <Box margin={5}>
      <ScrollView>
        <Text
          fontSize='sm'
          color='coolGray.600'
          _dark={{
            color: 'warmGray.200',
          }}
        >
          매장을 선택해주세요
        </Text>
        <VStack space={3} mt='5' divider={<Divider />}>
          {inventoryItems.map((item, index) => (
            <InventoryItem
              key={index}
              storeName={item.storeName}
              storeImg={item.storeImg}
              onItemClick={() => {
                handleClick(item);
              }}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
