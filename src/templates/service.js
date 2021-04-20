import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServiceTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

ServiceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Meta = ({ post }) => {
  const origin = 'https://bestat-data.com/';

  return (
    <Helmet
      title={`${post.frontmatter.title} | Service`}
      meta={[
        { name: 'description', content: post.frontmatter.description },
        { property: 'og:title', content: post.frontmatter.title },
        { property: 'og:description', content: post.frontmatter.description },
        { property: 'og:image', content: `${origin}${post.frontmatter.image}` },
      ]}
    />
  );
};

const Service = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServiceTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={Meta({post})}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Service

export const pageQuery = graphql`
  query ServiceByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
