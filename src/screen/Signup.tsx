import * as React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Select,
  HStack,
  CheckIcon,
  Alert,
  Collapse,
  Text,
  IconButton,
  CloseIcon,
  ZStack,
  Image,
} from 'native-base';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function Signup({ navigation }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [bank, setBank] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [businessNum, setBusinessNum] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
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
    });
    if (result.canceled) {
      return null;
    }

    console.log(result.assets);
    setImageUrl(result.assets[0].uri);
  };
  const signUp = () => {
    axios
      .post(
        'http://ec2-54-180-89-26.ap-northeast-2.compute.amazonaws.com:8080/vendor/join',
        {
          businessUserId: id,
          businessUserPw: password,
          businessBankCode: bank,
          businessBankAccount: bankAccount,
          businessStoreNo: businessNum,
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          navigation.navigate('Login');
        } else {
          setShow(true);
        }
        console.log(response.status);
      })
      .catch(function (error) {
        setShow(true);
      });
  };

  return (
    <ZStack alignItems='center' flex={1}>
      <Box mt={0} safeArea p='2' w='90%' maxW='290' py='8'>
        <Heading
          size='lg'
          color='coolGray.800'
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight='semibold'
        >
          환영합니다!
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
          회원가입을 통해 서비스를 시작하세요
        </Heading>
        <VStack space={3} mt='5'>
          <FormControl>
            <FormControl.Label>아이디</FormControl.Label>
            <Input onChangeText={(e) => setId(e)} />
          </FormControl>

          <FormControl>
            <FormControl.Label>비밀번호</FormControl.Label>
            <Input type='password' onChangeText={(e) => setPassword(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>비밀번호 확인</FormControl.Label>
            <Input type='password' />
          </FormControl>
          <FormControl>
            <FormControl.Label>핸드폰 번호</FormControl.Label>
            <Input onChangeText={(e) => setPhone(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>사업자 등록번호</FormControl.Label>
            <Input onChangeText={(e) => setBusinessNum(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>계좌번호</FormControl.Label>
            <HStack space={3}>
              <Select
                shadow={2}
                selectedValue={bank}
                minWidth='120'
                accessibilityLabel='Choose Service'
                placeholder='Choose Service'
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size='5' />,
                }}
                _light={{
                  bg: 'coolGray.100',
                  _hover: {
                    bg: 'coolGray.200',
                  },
                  _focus: {
                    bg: 'coolGray.200:alpha.70',
                  },
                }}
                _dark={{
                  bg: 'coolGray.800',
                  _hover: {
                    bg: 'coolGray.900',
                  },
                  _focus: {
                    bg: 'coolGray.900:alpha.70',
                  },
                }}
                onValueChange={(itemValue) => setBank(itemValue)}
              >
                <Select.Item shadow={2} label='카카오뱅크' value='KAKAO' />
                <Select.Item shadow={2} label='농협은행' value='NH' />
                <Select.Item shadow={2} label='대구은행' value='DAEGU' />
                <Select.Item shadow={2} label='부산은행' value='BUSAN' />
                <Select.Item shadow={2} label='KB은행' value='KB' />
              </Select>

              <Input flex='1' onChangeText={(e) => setBankAccount(e)} />
            </HStack>
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
          <Button mt='2' colorScheme='indigo' onPress={() => signUp()}>
            회원가입
          </Button>
        </VStack>
      </Box>
      <Box>
        <Collapse isOpen={show} mt={20} w='350'>
          <Alert maxW='400' status='error'>
            <VStack space={1} flexShrink={1} w='100%'>
              <HStack
                flexShrink={1}
                space={2}
                alignItems='center'
                justifyContent='space-between'
              >
                <HStack flexShrink={1} space={2} alignItems='center'>
                  <Alert.Icon />
                  <Text
                    fontSize='md'
                    fontWeight='medium'
                    _dark={{
                      color: 'coolGray.800',
                    }}
                  >
                    아이디가 중복됩니다!
                  </Text>
                </HStack>
                <IconButton
                  variant='unstyled'
                  _focus={{
                    borderWidth: 0,
                  }}
                  icon={<CloseIcon size='3' />}
                  _icon={{
                    color: 'coolGray.600',
                  }}
                  onPress={() => setShow(false)}
                />
              </HStack>
              <Box
                pl='6'
                _dark={{
                  _text: {
                    color: 'coolGray.600',
                  },
                }}
              >
                새로운 아이디로 다시 회원가입 해주세요
              </Box>
            </VStack>
          </Alert>
        </Collapse>
      </Box>
    </ZStack>
  );
}
