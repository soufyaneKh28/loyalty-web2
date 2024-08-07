"use client";

// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function ContactMap() {
  return (
    // <MapContainer
    //   className="map"
    //   center={[51.505, -0.09]}
    //   zoom={13}
    //   style={{ width: "100%", zIndex: 1 }}
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   />
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.555200516301!2d28.899898011970247!3d41.01310781900758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb5a476fc517%3A0x3a6df56aeda3f6ea!2zRElHSVRBTCBMT1lBTFRZINi02LHZg9ipINmE2YjZitin2YTYqtmKINmE2YTYqtiz2YjZitmCINin2YTYsdmC2YXZiiDZiNin2YTYrdmE2YjZhCDYp9mE2KjYsdmF2KzZitip!5e0!3m2!1sen!2str!4v1717751872770!5m2!1sen!2str"
      width="100%"
      height="600"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
