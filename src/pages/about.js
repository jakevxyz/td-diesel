import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class AboutUs extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="About" />
        <Hero title="About" />
        <div>
          <h1>Our Story</h1>
          <p>
            A long, long time ago in a galaxy far, far away...
          </p>
        </div>
      </Layout>
    )
  }
}

export default AboutUs
