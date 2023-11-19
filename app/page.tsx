import ButtonSection from '@/components/ButtonSection/ButtonSection'
import Card from '@/components/Card/Card'
import Header from '@/components/Header/Header'
import DatePicker from '@/components/DatePicker/DatePicker'

export default function Home() {
  return (
    <>
      <Header title='Home' avatarSrc='/img/header/avatar.svg' />
      <main>
        <div>
          <ButtonSection />
          <Card />
          <DatePicker/>
        </div>
      </main>
    </>
  )
}
