import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Gallery from 'react-photo-gallery'
import Container from '../components/container'

class MyGallery extends React.Component {
  render() {
    const [yardGallery] = get(this, 'props.data.allContentfulYardGallery.nodes')

    const photos = [];
    yardGallery.photos.forEach( photo =>
      photos.push({
        src: photo.file.url,
        width: Math.ceil(photo.file.details.image.width/1000),
        height: Math.ceil(photo.file.details.image.height/1000),
      }))

    return (
      <Layout>
        <Seo title="Gallery" />
        <Hero title="Gallery" />
        <Container>
          <Gallery photos={photos} />
        </Container>
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
