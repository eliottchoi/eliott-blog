import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class eluhouseIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Eluhouse" />
        <Hero title="엘루하우스" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default eluhouseIndex

export const pageQuery = graphql`
  query EluHouseQuery {
    allContentfulBlogPost(
      sort: {fields: publishDate, order: DESC}
      filter: {tags: {eq: "eluhouse"}}
    ) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
