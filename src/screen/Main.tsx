import {
  HStack,
  Center,
  Pressable,
  Box,
  Heading,
  Text,
  Image,
  Input,
  Icon,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function Main({ navigation }) {
  return (
    <Box safeArea>
      <Box ml={5} mb={2}>
        <Heading size='2xl'>GIFTICAL</Heading>
      </Box>

      <Box alignItems='center'>
        <Center margin={4}>
          <Pressable onPress={() => navigation.navigate('Scan')}>
            {({ isHovered, isPressed }) => {
              return (
                <Center
                  h='280'
                  w='330'
                  bg={
                    isPressed
                      ? 'muted.200'
                      : isHovered
                      ? 'muted.200'
                      : 'muted.50'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  p='5'
                  rounded='20'
                  shadow={9}
                  borderWidth='1'
                  borderColor='coolGray.300'
                >
                  <Text fontWeight='medium' textAlign='center' fontSize='3xl'>
                    기프티콘 결제
                  </Text>
                  <Image
                    source={{
                      uri: 'https://cdn.icon-icons.com/icons2/1875/PNG/512/qrcodescan_120401.png',
                    }}
                    alt='Barcode Image'
                    w={200}
                    h={200}
                  />
                </Center>
              );
            }}
          </Pressable>
        </Center>
        <HStack margin={4} space={8} justifyContent='center'>
          <Center>
            <Pressable onPress={() => navigation.navigate('EnrollProduct')}>
              {({ isHovered, isPressed }) => {
                return (
                  <Center
                    alignItems='center'
                    h='148'
                    w='148'
                    bg={
                      isPressed
                        ? 'muted.200'
                        : isHovered
                        ? 'muted.200'
                        : 'muted.50'
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    p='5'
                    rounded='20'
                    shadow={9}
                    borderWidth='1'
                    borderColor='coolGray.300'
                    _text={{
                      fontWeight: 'medium',
                      textAlign: 'center',
                      fontSize: '2xl',
                    }}
                  >
                    상품 등록
                  </Center>
                );
              }}
            </Pressable>
          </Center>
          <Center>
            <Pressable onPress={() => navigation.navigate('ManageProduct')}>
              {({ isHovered, isPressed }) => {
                return (
                  <Center
                    h='148'
                    w='148'
                    bg={
                      isPressed
                        ? 'muted.200'
                        : isHovered
                        ? 'muted.200'
                        : 'muted.50'
                    }
                    _text={{
                      fontWeight: 'medium',
                      textAlign: 'center',
                      fontSize: '2xl',
                    }}
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    p='5'
                    rounded='20'
                    shadow={9}
                    borderWidth='1'
                    borderColor='coolGray.300'
                  >
                    상품 관리
                  </Center>
                );
              }}
            </Pressable>
          </Center>
        </HStack>
        <HStack margin={4} space={8} justifyContent='center'>
          <Center>
            <Pressable onPress={() => navigation.navigate('StockOrder')}>
              {({ isHovered, isPressed }) => {
                return (
                  <Center
                    h='148'
                    w='148'
                    bg={
                      isPressed
                        ? 'muted.200'
                        : isHovered
                        ? 'muted.200'
                        : 'muted.50'
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    p='5'
                    rounded='20'
                    shadow={9}
                    borderWidth='1'
                    borderColor='coolGray.300'
                    _text={{
                      fontWeight: 'medium',
                      textAlign: 'center',
                      fontSize: '2xl',
                    }}
                  >
                    정산
                  </Center>
                );
              }}
            </Pressable>
          </Center>
          <Center>
            <Pressable onPress={() => navigation.navigate('Chat')}>
              {({ isHovered, isPressed }) => {
                return (
                  <Center
                    h='148'
                    w='148'
                    bg={
                      isPressed
                        ? 'muted.200'
                        : isHovered
                        ? 'muted.200'
                        : 'muted.50'
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    p='5'
                    rounded='20'
                    shadow={9}
                    borderWidth='1'
                    borderColor='coolGray.300'
                    _text={{
                      fontWeight: 'medium',
                      textAlign: 'center',
                      fontSize: '2xl',
                    }}
                  >
                    매장 관리
                  </Center>
                );
              }}
            </Pressable>
          </Center>
        </HStack>
      </Box>
    </Box>
  );
}
