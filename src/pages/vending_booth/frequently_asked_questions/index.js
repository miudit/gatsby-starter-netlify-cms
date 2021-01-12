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
                    <dl>
                      <div className="faq-content">
                        <dt className="question">予約をキャンセルしたいのですが、どうすればいいですか？</dt>
                        <dd className="answer">キャンセル期限が過ぎた商品のキャンセルはお受けできません。キャンセルが可能な商品については、受け取り画面より商品を選択し、注文をキャンセルしてください。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">カードの登録ができません</dt>
                        <dd className="answer">カード情報についてのお問合せは当社では受け付けておりません。お使いのカード会社にお問い合わせいただきますようお願いします。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">予約した商品が置かれていません</dt>
                        <dd className="answer">ご注文いただいた商品が届いておらず申し訳ございませんでした。お気づきになった場合はお問合せフォームよりご連絡ください。速やかに個別に対応させていただきます。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">商品に不備や異常を感じる場合</dt>
                        <dd className="answer">商品に異常を感じた場合は速やかにお問合せフォームよりご連絡ください。</dd>
                      </div>
                    </dl>
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