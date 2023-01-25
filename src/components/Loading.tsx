import { Spinner,Center } from 'native-base';
import React from 'react';

const Loading = () => {
  return (
    <Center flex={1} bg="gray.700">
          <Spinner color="gray.500" />
    </Center>

  );
};

export default Loading;