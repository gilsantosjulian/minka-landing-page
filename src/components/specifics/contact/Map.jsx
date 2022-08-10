import React from 'react';
import { Box, Image } from 'grommet';
import GoogleMapReact from 'google-map-react';

import mapStyle from 'config/mapStyle.json';

const styles = {
  marker: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: -40 / 2,
    top: -40 / 2
  }
};

export default () => {
  return (
    <Box
      width='100%'
      height='50vh'
      pad={{ vertical: 'medium', horizontal: 'xlarge' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB2WZ3j5oszSMJJf2JDYHDsvCGLOEsDdP8' }}
        options={{
          styles: mapStyle,
        }}
        defaultCenter={{
          lat: 4.679565,
          lng: -74.055775
        }}
        defaultZoom={16}>
        <Image
          style={styles.marker}
          lat={4.679565}
          lng={-74.055775}
          src={require('assets/images/marker.svg')}
        />
      </GoogleMapReact>
    </Box>
  );
};