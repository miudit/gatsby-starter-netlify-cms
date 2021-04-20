import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ServiceRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: services } = data.allMarkdownRemark

    return (
      <div className="content">
        <div className="columns desktop-hidden">
          <div className="column is-6 is-12-mobile">
            <h3>無人販売ブースの展開</h3>
            <img
                src="/img/services/service1.png"
                alt="無人販売ブースの展開"
            />
          </div>
          <div className="column is-6">
            <p>
              AIの技術が身近なものとなり、日常の一部になって欲しい、そんな思いからこのサービスは始まりました。
              AIによる画像解析は、小売販売を無人化するだけでなく、普段の消費活動に驚きをもった新鮮さを与えてくれます。1人でも多くの方々にこれらの経験をして頂くもらうために、弊社は単なるシステム提供だけなく、自社で小売販売を展開しております。
              出店させて頂けるパートナー様、商品を卸して頂けるパートナー様を随時募集しておりますので、興味をお持ち頂ける方はお気軽に、admin@bestat-data.com、までご連絡ください。もちろん、その他弊社サービスにご関心ある方からのご連絡もお待ちしております。
            </p>
          </div>
        </div>
        <div className="columns mobile-hidden">
          <div className="column is-6">
            <h3>無人販売ブースの展開</h3>
            <p>
              AIの技術が身近なものとなり、日常の一部になって欲しい、そんな思いからこのサービスは始まりました。
              AIによる画像解析は、小売販売を無人化するだけでなく、普段の消費活動に驚きをもった新鮮さを与えてくれます。1人でも多くの方々にこれらの経験をして頂くもらうために、弊社は単なるシステム提供だけなく、自社で小売販売を展開しております。
              出店させて頂けるパートナー様、商品を卸して頂けるパートナー様を随時募集しておりますので、興味をお持ち頂ける方はお気軽に、admin@bestat-data.com、までご連絡ください。もちろん、その他弊社サービスにご関心ある方からのご連絡もお待ちしております。
            </p>
          </div>
          <div className="column is-6 is-12-mobile">
            <img
                src="/img/services/service1.png"
                alt="無人販売ブースの展開"
            />
          </div>
        </div>
        <div 
          className="columns desktop-hidden"
          style={{ paddingTop: '5em' }}
        >
          <div className="column is-6 is-12-mobile">
            <h3>画像AIの受託開発</h3>
            <img
                src="/img/services/service2.png"
                alt="画像AIの受託開発"
            />
          </div>
          <div className="column is-6">
            <p>
              弊社では、画像AIの技術力を用いて、画像AIのエンジン開発・提供 / 画像AIのSaasとデバイスの提供 / 監視カメラ用画像AIの開発・提供、といった分野のご支援を行っております。
              これまで、ヒューマンセンシングによるリモート管理システム提供、購買行動把握解析、小売店需要予測、作業員生産性定量化などの分野で実績があります。
              こちらの分野にご興味お持ち頂ける場合、お気軽に、admin@bestat-data.com、までご連絡ください。
            </p>
          </div>
        </div>
        <div 
          className="columns mobile-hidden"
          style={{ paddingTop: '5em' }}
        >
          <div className="column is-6 is-12-mobile">
            <img
                src="/img/services/service2.png"
                alt="画像AIの受託開発"
            />
          </div>
          <div className="column is-6">
            <h3>画像AIの受託開発</h3>
            <p>
              弊社では、画像AIの技術力を用いて、画像AIのエンジン開発・提供 / 画像AIのSaasとデバイスの提供 / 監視カメラ用画像AIの開発・提供、といった分野のご支援を行っております。
              これまで、ヒューマンセンシングによるリモート管理システム提供、購買行動把握解析、小売店需要予測、作業員生産性定量化などの分野で実績があります。
              こちらの分野にご興味お持ち頂ける場合、お気軽に、admin@bestat-data.com、までご連絡ください。
            </p>
          </div>
        </div>
      </div>
      
      /*
      <div className="columns is-multiline">
        {services &&
          services.map(({ node: service }) => (
            <div className="is-parent column is-6" key={service.id}>
              <article
                  className={`blog-list-item tile is-child box notification`}
                >
                  <header>
                    {service.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: service.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${service.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p className="post-meta">
                      <Link
                        className="title is-size-4"
                        to={service.fields.slug}
                        style={{textDecoration: 'none'}}
                      >
                        {service.frontmatter.title}
                      </Link> <br></br>
                      <span className="subtitle is-size-5 is-block">
                        {service.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {service.excerpt}
                  </p>
                </article>
            </div>
          ))}
      </div>
      */
    )
  }
}

ServiceRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ServiceRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "service" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 10000)
              id
              fields {
                slug
              }
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ServiceRoll data={data} count={count} />}
  />
)
