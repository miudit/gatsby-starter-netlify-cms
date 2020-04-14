import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            display: 'block',
            height: '100%',
            backgroundImage: `url('/img/ben-o-bro-wpU4veNGnHg-unsplash.jpg')`,
            boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
            paddingTop: '50px',
            marginBottom: '0'
          }}
        >
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
