'use client'

import { useSelector } from 'react-redux'

import Card from '@/components/Card/Card'
import DatePicker from '@/components/DatePicker/DatePicker'

import { State } from '@/lib/interfaces'

export default function ContainerCalendarDataPicker() {
  const btnFocus = useSelector((state: State) => state?.btnFocus?.btnFocus)

  return (
    <>
      {btnFocus.card && <Card />}
      {btnFocus.calendar && <DatePicker />}
    </>
  )
}
