"use client"

import { Usable, use } from 'react'
import { useTranslation } from '../i18n'
import { TFunction } from 'i18next'
import {
  Navbar
} from '../components/index'
import {
  Hero,
  About,
  Projects,
  Contact
} from '../sections/index'

export interface SectionProps {
  t: TFunction
}

export default function Page({ params }: { params: Promise<{ lng: string }> }) {
  const paramsTemp = use(params as Usable<{lng:string}>)
  const { t } = use(useTranslation(paramsTemp.lng, "common"))
  return (
    <>
      <Navbar t={t}/>
      <Hero t={t}/>
      <About t={t}/>
      <Projects t={t}/>
      <Contact t={t}/>
    </>
  )
}