'use client'

import { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { useDispatch, useSelector } from 'react-redux'

import data from '@/public/data/charts.json'
import { State } from '@/lib/interfaces'
import { formatMonths, isObjectEmpty } from '@/lib/helpers/halpers'

import s from './Charts.module.sass'

export default function SimpleCharts() {
  const [currentData, setCurrentData] = useState<any>([])
  const [months, setMonth] = useState<any>([])
  const [total, setTotal] = useState<number[]>([])



  const currentYear = useSelector(
    (state: State) => state?.selectedData?.selectedData
  )

  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  // useEffect(() => {
  //   const filteredData = data.filter((el) => el.year === currentYear)

  //   if (filteredData.length > 0) {
  //     setCurrentData(filteredData[0].months)
  //     console.log('11', filteredData[0].months)

  //     const totalArray = currentData.map((monthData: any) => {
  //       const monthKey: any = Object.values(monthData)[0]
  //       console.log(monthKey)

  //       return monthKey.total
  //     })
  //     console.log({ totalArray })

  //     setTotal(totalArray)
  //   } else {
  //     setCurrentData({})
  //   }
  // }, [currentYear])

  // useEffect(() => {
  // if (!isObjectEmpty(currentData)) {
  //   const months = currentData?.months
  //     ?.map((el) => Object.keys(el))
  //     .map((e) => {
  //       return e[0]
  //     })

  //   setMonth(formatMonths(months))
  // }
  // }, [currentData])

  return (
    <div className={s.chartContainer}>
      {currentYear?.months?.length > 0 && (
        <BarChart
          xAxis={[
            {
              scaleType: 'band',
              id: 'barCategories',
              data: 
              formatMonths([...currentYear.months].map((el) => el.month)).slice(0, 7),
              
            },
          ]}
          series={[
            {
              color: '#FAFAFA',

              data: [...currentYear.months].map((el) => el.total).slice(0, 7),
            },
          ]}
          height={300}
        />
      )}
    </div>
  )
}
