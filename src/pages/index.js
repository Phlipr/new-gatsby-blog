import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Phillip's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        fields {
          slug
        }
        html
        excerpt
      }
    }
  }
}
`;
