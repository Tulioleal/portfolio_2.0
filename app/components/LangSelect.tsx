import { Select } from '@chakra-ui/react';
import React, { useState } from 'react';

const LangSelect = ({
  onMobile = false,
}:{onMobile?:boolean}) => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "en" || event.target.value === "es") return

    setLanguage(event.target.value as "en" | "es");
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
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </Select>
  );
};

export default LangSelect;