import {VStack,Image,Text,Center} from 'native-base'
import BackGroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

export function SignIn(){
  return( 
    <VStack flex={1} bg="gray.700">
      <Image 
      source={BackGroundImg}
      alt="Pesssoas treinando na academia"
      resizeMode='contain'
      position="absolute"
      />

      <Center my={24}>
      <LogoSvg />
     <Text color="gray.100" fontSize="sm">
      Treine sua mente e o seu corpo
     </Text>
     </Center>
    </VStack>
  );
}