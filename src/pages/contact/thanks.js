import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        display: 'block',
        height: '100%',
        backgroundImage: `url('/img/background/ratapan-anantawat-HJV8woxmYpc-unsplash.jpg')`,
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        paddingTop: '50px',
        marginBottom: '0'
      }}
    >
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="content">
                <h1>Thank you!</h1>
                <p>ご連絡いただきありがとうございます。後ほど、ご入力いただいたメールアドレス宛にお返事いたします。</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/">
                <div style={{color: 'white'}}>トップに戻る</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)
