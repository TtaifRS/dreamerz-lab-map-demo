import { useEffect, useMemo, useState } from 'react';
import Map, { Source, Layer } from 'react-map-gl';

import MainCard from '@/components/mainCard';

import { fillLayer } from '@/utils/mapStyle';



function MapSection() {
  const [allData, setAllData] = useState(null)
  const API_URL = process.env.NEXT_PUBLIC_GEOJSON_API
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setAllData(json))
      .catch(err => console.log("Something went wrong", err))
  })

  const data = useMemo(() => allData, [allData])





  return (
    <Map id='mapBox' initialViewState={{
      latitude: 38.5,
      longitude: -98,
      zoom: 3
    }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
      interactiveLayerIds={['data']}
      style={{ height: 600 }}
    >
      <Source type='geojson' data={data}>
        <Layer {...fillLayer} />

      </Source>

    </Map>
  )
}

export default MapSection