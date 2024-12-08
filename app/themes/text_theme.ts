import { HeadingProps, TextProps } from "@chakra-ui/react"

const h1: HeadingProps = {
  as: "h1",
  color: "yellow.default",
  width: "100%",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  fontSize: {
    base: "50px",
    sm: "70px",
    md: "80px",
    lg: "100px",
    xl: "120px",
  },
}

const h2: HeadingProps = {
  as: "h2",
  color: "yellow.default",
  width: "100%",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  fontSize: {
    base: "30px",
    sm: "40px",
    md: "50px",
    lg: "60px",
    xl: "70px",
  },
}

const p: TextProps = {
  as: "p",
  textAlign: "center",
  color: "grey.light",
}

export {
  h1,
  h2,
  p
}