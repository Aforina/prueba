import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Map = props => {
  return (
    <div>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 41.900749, lng: 12.483367 }}
      />
    </div>
  )
}

export default withScriptjs(withGoogleMap(Map))
