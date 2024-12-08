import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

const p: TextProps = {
  as: "p",
  textAlign: "center",
  color: "grey.light",
}

const CustomParagraph = (props:{children:ReactNode} & TextProps) => {
  const SIZES = ["18px", "20px", "20px", "22px", "22px", "22px", "24px"]

  return (
        <Text 
          fontSize={SIZES}
          {...p}
          {...props}
        >
          {props.children}
        </Text>
  );
};

export default CustomParagraph;