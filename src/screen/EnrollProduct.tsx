import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  TextArea,
  Image,
  HStack,
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import axios from 'axios';
import { StackActions } from '@react-navigation/native';

export default function EnrollProduct({ navigation, route }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productExplain, setProductExplain] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageBase, setImageBase] = useState('');

  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
      base64: true,
    });
    if (result.canceled) {
      return null;
    }

    // console.log(result.assets)
    setImageUrl(result.assets[0].uri);
    setImageBase(result.assets[0].base64);
  };

  const enroll = () => {
    console.log(route.params);
    axios
      .post(
        'http://ec2-54-180-2-24.ap-northeast-2.compute.amazonaws.com:8080/vendor/store/product/add',
        {
          storeId: route.params.id,
          productName: productName,
          productPrice: productPrice,
          productImg: imageBase,
        }
      )
      .then(function (response) {
        navigation.navigate('Main', route.params);

        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Center w='100%' flex={1} px='3'>
      <Box safeArea p='0' w='90%'>
        <Heading
          size='xl'
          color='coolGray.800'
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight='semibold'
        >
          상품 등록
        </Heading>
        <Heading
          mt='1'
          color='coolGray.600'
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight='medium'
          size='xs'
        >
          상품 정보를 입력해주세요
        </Heading>
        <VStack space={3} mt='5'>
          <FormControl>
            <FormControl.Label>상품명</FormControl.Label>
            <Input onChangeText={(e) => setProductName(e)} size='md' />
          </FormControl>
          <FormControl>
            <FormControl.Label>가격</FormControl.Label>
            <Input onChangeText={(e) => setProductPrice(e)} size='md' />
          </FormControl>
          <FormControl>
            <FormControl.Label>사진</FormControl.Label>
            <HStack justifyContent='space-between'>
              {imageUrl && (
                <Image
                  source={{
                    uri: imageUrl,
                  }}
                  alt='productImg'
                  size='xl'
                  rounded='md'
                />
              )}
              <Button
                maxH='12'
                margin='2'
                colorScheme='indigo'
                onPress={() => {
                  uploadImage();
                }}
                alignSelf='flex-end'
              >
                업로드
              </Button>
            </HStack>
          </FormControl>
          <FormControl>
            <FormControl.Label>태그</FormControl.Label>
            <Input onChangeText={(e) => setProductDetail(e)} />
          </FormControl>

          <FormControl>
            <FormControl.Label>설명</FormControl.Label>
            <TextArea
              autoCompleteType={true}
              numberOfLines={4}
              onChangeText={(e) => setProductExplain(e)}
            />
          </FormControl>
          <Button
            mt='2'
            colorScheme='indigo'
            onPress={() => navigation.navigate('Complete')}
          >
            등록
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
