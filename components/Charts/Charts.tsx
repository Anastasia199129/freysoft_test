'use client'

import { useSelector } from 'react-redux'

import { BarChart } from '@mui/x-charts/BarChart'

import { State } from '@/lib/interfaces'
import { formatMonths } from '@/lib/helpers/halpers'

import s from './Charts.module.sass'

export default function SimpleCharts() {
  const currentYear = useSelector(
    (state: State) => state?.selectedData?.selectedData
  )

  return (
    <div className={s.chartContainer}>
      {currentYear?.months?.length > 0 && (
        <BarChart
          xAxis={[
            {
              scaleType: 'band',
              id: 'barCategories',
              data: formatMonths(
                [...currentYear.months].map((el) => el.month)
              ).slice(0, 7),
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
