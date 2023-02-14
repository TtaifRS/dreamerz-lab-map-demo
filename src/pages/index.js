import MainCard from '@/components/mainCard'
import FieldInformation from '@/sections/mapPage/fieldInformation'
import MapSection from '@/sections/mapPage/map'
import MapHeader from '@/sections/mapPage/mapHeader'
import RequestedInfo from '@/sections/mapPage/requestedInfo'
import { Stack } from '@mui/material'
import Head from 'next/head'


function Home() {

  return (
    <> <Head>
      <title>Map</title>
    </Head>
      <MainCard>
        <Stack spacing={2}>
          <MapHeader />
          <MapSection />
          <RequestedInfo />
          <FieldInformation />
        </Stack>
      </MainCard></>

  )
}


export default Home