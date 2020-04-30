import React from "react"

import { Map, Marker, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"
import { Box } from "@material-ui/core"
import logoPin from "../images/logopin.png"

export default function LocationMap() {
  return typeof window !== "undefined" ? (
    <Box>
      <Map
        center={[28.609654, -13.92936]}
        zoom={16}
        style={{
          height: "20rem",
          width: "100%",
        }}
        className="rounded"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[28.609654, -13.92936]}
          icon={
            new Icon({
              iconUrl: logoPin,
              iconSize: [40, 79],
              iconAnchor: [20, 79],
            })
          }
        />
      </Map>
    </Box>
  ) : null
}
