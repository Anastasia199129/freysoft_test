'use client'


import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Box from '@mui/joy/Box'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import ListItemButton from '@mui/joy/ListItemButton'
import Item from '../Item/Item'

import { State } from '@/lib/interfaces'

import s from './Transactions.module.sass'

export default function Transactions() {
  const data = useSelector(
    (state: State) => state?.selectedData?.selectedData?.months
  )
  const [transactions, seTtransactions] = useState([])
  const [viewAll, setViewAll] = useState(false)
  console.log(data)

  useEffect(() => {
    if (data.length > 0) {
      const result = data.reduce((acc: [any], el: { transactions: any }) => {
        acc.push(...el.transactions)
        return acc
      }, [])
      if (result.length > 0) {
        seTtransactions(result)
      }
    }
  }, [data])

  const onViewAllClick = () => {
    setViewAll(!viewAll)
  }

  return (
    <div>
      <div className={s.titleWrapper}>
        <h3>Transactions</h3>{' '}
        <button onClick={onViewAllClick} type='button'>
          View All
        </button>
      </div>
      {transactions.length > 0 && (
        <Box
          className={`${viewAll ? s.container : s.hidenContainer}`}
          sx={{
            width: '100%',
            flexGrow: 1,
            gap: 2,
            flexWrap: 'wrap',
            '& > *': { minWidth: 0, flexBasis: 200 },
          }}
        >
          {transactions.map(
            ({
              id,
              storeName,
              bankAccount,
              amount,
              icon = { url: '', alt: '', title: '' },
            }) => (
              <div key={id}>
                <List
                  variant='plain'
                  sx={{
                    borderRadius: 'sm',
                    paddingLeft: 0,
                  }}
                >
                  <ListItem
                    sx={{
                      background: '#FAFAFA',
                      borderRadius: '10px',
                    }}
                  >
                    <ListItemButton
                      sx={{
                        padding: '10px 15px 10px 7px',
                      }}
                    >
                      <ListItemDecorator>
                        <img src={icon.url} alt={icon.alt} title={icon.title} />
                      </ListItemDecorator>
                      <Item
                        storeName={storeName}
                        bankAccount={bankAccount}
                        amount={amount}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
            )
          )}
        </Box>
      )}
    </div>
  )
}
