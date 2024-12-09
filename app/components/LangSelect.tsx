"use client"

import { Select } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { locale } from '../i18n/settings';

const LangSelect = ({
  onMobile = false,
}:{onMobile?:boolean}) => {
  const [locale, setLocale] = useState<locale>("en");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setLocale(value);
    router.push(`/${value}`);
  };

  useEffect(() => {
    setLocale(
      location.pathname.split('/')[1] != undefined
      ? location.pathname.split('/')[1]
      : 'en'
    );
  }, []);

  return (
    <Select
      size="md"
      value={locale}
      display={onMobile ? "flex" : { base: 'none', md: 'flex' }}
      onChange={handleChange}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </Select>
  );
};

export default LangSelect;