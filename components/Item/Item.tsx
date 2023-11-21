import s from './Item.module.sass'

interface Props {
  storeName: string
  bankAccount: string
  amount: number
}

export default function Item({ storeName, bankAccount, amount }: Props) {
  return (
    <div className={s.container}>
      <div>
        <h4>{storeName}</h4>
        <span>${amount}</span>
      </div>
      <div>
        <p>Bank Account</p>
        <p>{bankAccount}</p>
      </div>
    </div>
  )
}
