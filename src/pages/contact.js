import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Marker from '../components/marker'

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const HQ = {
  key:1234567890,
  text:"TD Diesel",
  lat:34.18626218454834,
  lng:-83.71928008263869
}

const ContactInfo = "Phone: 555-5555";

class Contact extends React.Component {
  static defaultProps = {
    center: {
      lat: 34.0,
      lng: -84.0
    },
    zoom: 9
  }
  render() {
    return (
      <Layout>
        <Seo title="Contact" />
        <Hero title="Contact" content={ContactInfo} />
      <div style={{ height: '50vh', width: '100%', paddingLeft: '15%', paddingRight: '15%' }}>
        <Wrapper>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}  // find better way to insert key
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              key={HQ.key}
              text={HQ.text}
              lat={HQ.lat}
              lng={HQ.lng}
            />
          </GoogleMapReact>
        </Wrapper>
      </div>
      </Layout>
    )
  }
}

export default Contact
