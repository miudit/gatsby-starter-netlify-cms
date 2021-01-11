import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
          className=""
          style={{
            display: 'block',
            //backgroundColor: 'black',
            color: 'black',
            height: '100%',
            width: '100%',
            paddingTop: '50px',
          }}
      >
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div className="document">
                  <h1>よくある質問</h1>
                  <p>
                    現在準備中です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}