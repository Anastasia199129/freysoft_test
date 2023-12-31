import ButtonSection from '@/components/ButtonSection/ButtonSection'
import Header from '@/components/Header/Header'
import Charts from '@/components/Charts/Charts'
import Select from '@/components/Select/Select'
import ContainerCalendarDataPicker from '@/components/Card/ContainerCalendarDataPicker/ContainerCalendarDataPicker'
import Transactions from '@/components/Transactions/Transactions'

export default function Home() {

  return (
    <>
      <Header title='Home' avatarSrc='/img/header/avatar.svg' />
      <main>
        <div>
          <ButtonSection />
          <ContainerCalendarDataPicker />
          <Select />
          <Charts />
          <Transactions/>
        </div>
      </main>
    </>
  )
}
