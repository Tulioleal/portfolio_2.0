import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

const ToggleModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      variant="ghost"
      borderColor={"none"}
      borderWidth={0}
    >
      {
        colorMode === 'light' ?
          <MoonIcon color="blue.default" fontSize={"20px"}/> :
          <SunIcon color="yellow.default" fontSize={"20px"}/> 
      }
    </Button>
  );
};

export default ToggleModeButton;
