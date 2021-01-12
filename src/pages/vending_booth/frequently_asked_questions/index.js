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
                  <div className="faq">
                    <div className="question">
                      Q：予約をキャンセルしたいのですが、どうすればいいですか？
                    </div>
                    <div className="answer">
                      A：キャンセル期限が過ぎた商品のキャンセルはお受けできません。キャンセルが可能な商品については、受け取り画面より商品を選択し、注文をキャンセルしてください。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}