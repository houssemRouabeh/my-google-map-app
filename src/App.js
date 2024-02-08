import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 36.83584866264269,
      lng: 10.239103130698389,
    },
    zoom: 18,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCqWr0eYtStrb3hJW_vaFTUNxGkbeczNSQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={36.83584866264269}
          lng={10.239103130698389}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
