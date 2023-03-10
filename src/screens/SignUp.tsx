import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackGroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import Input from '@components/Input';
import Button from '@components/Button';

export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="gray.700" px={10} pb={16}>
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
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Senha'
            secureTextEntry
          />
          <Button title='Criar e acessar ' />
        </Center>
        <Center mt={24}>
          <Button
            title='Voltar para o login'
            variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}