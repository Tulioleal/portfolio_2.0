"use client"

import { Select } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LangSelect = ({
  onMobile = false,
}:{onMobile?:boolean}) => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    if (event.target.value === "en") {
      router.push("/en")
      setLanguage("en");
    }
    if (event.target.value === "es") {
      router.push("/es")
      setLanguage("es");
    }
  };

  return (
    <Select
      size="md"
      defaultValue={language}
      display={ onMobile ? "flex" : { base: 'none', md: 'flex' }}
      onChange={handleChange}
      isRequired
      >
      <option value="" disabled>Languages</option>
      <option value="en" selected={language == "en"}>English</option>
      <option value="es" selected={language == "es"}>Español</option>
    </Select>
  );
};

export default LangSelect;