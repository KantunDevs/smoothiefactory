/* global google*/
import type { FC } from 'react';

import { useEffect } from 'react';

import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import markerIcon from '../../../../../../../public/images/location-dot.png';
import { useStore } from 'src/context/StoreProvider';

import type { Marker } from '@layouts/LocationsLayout/LocationsLayout';

import { MapWrapper } from './Map.styles';

const containerStyle = {
  flex: 1,
  height: '100%',
};

const Map: FC<{
  markers: Marker[];
  handleOnLoad?: (map: google.maps.Map) => Promise<void> | void;
  onCenterChanged?: (() => void) | undefined;
  center: { lat: number; lng: number };
}> = ({ markers, handleOnLoad, onCenterChanged, center }) => {
  const { isLoaded } = useLoadScript({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    id: 'google-map-script',
    language: 'EN',
    libraries: ['places'],
  });

  const { setIsGoogleScriptLoaded } = useStore();

  useEffect(() => {
    if (isLoaded) {
      setIsGoogleScriptLoaded(true);
    }
  }, [isLoaded, setIsGoogleScriptLoaded]);

  return (
    <MapWrapper>
      {isLoaded ? (
        <GoogleMap
          center={center}
          mapContainerStyle={containerStyle}
          onCenterChanged={onCenterChanged}
          onLoad={handleOnLoad}
          zoom={10}
        >
          {markers.map((marker) => (
            <MarkerF key={marker.id} icon={markerIcon.src} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}
        </GoogleMap>
      ) : (
        <div style={containerStyle} />
      )}
    </MapWrapper>
  );
};

export default Map;
