import { Box, Divider, HStack, Image, ScrollView, VStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";

const InventoryItem = ({
  storeName,
  storeImg,
  onItemClick
}) => {
  return (
    <TouchableOpacity onPress={onItemClick}>
      <HStack>
        <Image 
          source={{
            uri:storeImg
          }}
          alt="storeImg"
          w="20"
          h="20"
          rounded="md"
        />
        <Text ml={5} fontSize="xl" fontWeight="bold">{storeName}</Text>
      </HStack>
    </TouchableOpacity>
  )
}

export default function SelectStore({ navigation }) {

  const inventoryItems = [
    {
      storeName: '이셰프꼬꼬파닭',
      storeImg: 
        "https://mblogthumb-phinf.pstatic.net/MjAxOTAyMTJfMjk3/MDAxNTQ5OTA3MTgxNTQ1.cN0LgBRYNM19oKc-60Tu-6hK55C3xUmeUfSuMuVh-dwg.jhBOllA_Z_T3XDD_nNu-MKFpUliOCFfG7GrANo8c-X4g.JPEG.mainmylife/IMG_20190211_173409868.jpg?type=w800"
    },
    {
      storeName: '오리고기',
      storeImg:
        "https://upload3.inven.co.kr/upload/2021/01/26/bbs/i15365577324.jpg"
    }
  ]

  const handleClick = (item) => {
    navigation.navigate('Main', {});
  }

  return (
    <Box margin={5}>
      <ScrollView>
        <Text 
          fontSize="sm" 
          color='coolGray.600'
          _dark={{
            color: 'warmGray.200',
          }}
        >
          매장을 선택해주세요
        </Text>
        <VStack space={3} mt="5" divider={<Divider />}>
          {inventoryItems.map((item, index)=>(
            <InventoryItem
              key={index}
              storeName={item.storeName}
              storeImg={item.storeImg}
              onItemClick={()=>{handleClick(item);}}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  )
}