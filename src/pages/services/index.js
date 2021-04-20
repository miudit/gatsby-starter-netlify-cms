import React from 'react'

import Layout from '../../components/Layout'
import ServiceRoll from '../../components/ServiceRoll'

export default class ServicesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            display: 'block',
            height: '100%',
            backgroundImage: `url('/img/background/ratapan-anantawat-HJV8woxmYpc-unsplash.jpg')`,
            boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.7)',
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
                          {/*
                          <h3 className="has-text-weight-semibold is-size-2">
                            サービス
                          </h3>
                          */}
                          <ServiceRoll />
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
