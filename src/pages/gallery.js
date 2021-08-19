import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Gallery from 'react-photo-gallery'

class MyGallery extends React.Component {
  render() {
    const [yardGallery] = get(this, 'props.data.allContentfulYardGallery.nodes')

    const photos = [];
    yardGallery.photos.forEach( photo =>
      photos.push({
        src: photo.file.url,
      }))

    return (
      <Layout>
        <Seo title="Gallery" />
        <Hero title="Gallery" />
        <Gallery photos={photos} />
      </Layout>
    )
  }
}

export default MyGallery

export const query = graphql`
  {
    allContentfulYardGallery(limit: 4) {
      nodes {
        photos {
          id
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`
