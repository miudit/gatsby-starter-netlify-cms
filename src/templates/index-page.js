import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        display: 'block',
        height: '100%',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100vh',
          textAlign: 'center',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Overview
                      </h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 is-offset-3 bold">社名</div>
                    <div className="column is-3">bestat株式会社</div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 is-offset-3 bold">所在地</div>
                    <div className="column is-3">東京都文京区本郷6丁目25−14</div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 is-offset-3 bold">代表</div>
                    <div className="column is-3">松田尚子</div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 is-offset-3 bold">技術顧問</div>
                    <div className="column is-3">松尾豊 東京大学工学系研究科 教授</div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 is-offset-3 bold">事業内容</div>
                    <div className="column is-3">
                      <div>画像AIのエンジン開発・提供</div>
                      <div>画像AIのSaasとデバイスの提供</div>
                      <div>監視カメラ用画像AIの開発・提供</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Members
                      </h3>
                    </div>
                  </div>
                  <div className="columns is-multiline">
                    <div className="is-parent member-cell column is-4">
                      <img
                        src="/img/members/matsuda.jpg"
                        alt="Kaldi"
                        style={{ width: '7em', height: '7em', borderRadius: '4px' }}
                      />
                      <div
                        style={{width: '100%', padding: '0px 20px'}}>
                        <div>松田尚子 / 代表取締役</div>
                        <div className="member-intro">
                          経済産業省/RIETIを経て、bestat株式会社を創業<br></br>
                          東京大学工学博士(工学系研究科 松尾豊研究室所属)
                        </div>
                      </div>
                    </div>
                    <div className="is-parent member-cell column is-4">
                      <img
                        src="/img/members/matsuo_3.jpg"
                        alt="Kaldi"
                        style={{ width: '7em', height: '7em', borderRadius: '4px' }}
                      />
                      <div
                        style={{width: '100%', padding: '0px 20px'}}>
                        <div>松尾豊 / 技術顧問</div>
                        <div className="member-intro">
                          東京大学工学系研究科 教授
                        </div>
                      </div>
                    </div>
                    <div className="is-parent member-cell column is-4">
                      <img
                        src="/img/members/doi.jpg"
                        alt="Kaldi"
                        style={{ width: '7em', height: '7em', borderRadius: '4px' }}
                      />
                      <div
                        style={{width: '100%', padding: '0px 20px'}}>
                        <div>土居 健人 / エンジニア</div>
                        <div className="member-intro">
                          東大工学系研究科博士課程在学中（松尾研究室）
                        </div>
                      </div>
                    </div>
                    <div className="is-parent member-cell column is-4">
                      <img
                        src="/img/members/miura.jpg"
                        alt="Kaldi"
                        style={{ width: '7em', height: '7em', borderRadius: '4px' }}
                      />
                      <div
                        style={{width: '100%', padding: '0px 20px'}}>
                        <div>三浦大地 / エンジニア</div>
                        <div className="member-intro">
                          LINE株式会社を経てbestat株式会社に参画
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Information
                      </h3>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          <div>すべて見る</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
