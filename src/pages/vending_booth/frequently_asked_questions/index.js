import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    window.location.href = 'https://www.notion.so/db981ff67a46427ab892de1167f6410e'; 
    return null;
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
                        <dt className="question">カードの登録ができません</dt>
                        <dd className="answer">カード情報についてのお問合せは当社では受け付けておりません。お使いのカード会社にお問合せいただきますようお願いします。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">商品に不備や異常を感じる場合</dt>
                        <dd className="answer">商品に異常を感じた場合は、速やかに「ホーム画面」→「設定」→「お問い合わせ」よりご連絡ください。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">アプリ上に表示されている商品がありません</dt>
                        <dd className="answer">品切れ中だと思われますので、いつ納品されるかは「ホーム画面」→「設定」→「お問い合わせ」よりご連絡ください</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">初めて使うため、使い方に不安があります</dt>
                        <dd className="answer">今までの買い物と異なる体験なので、皆様不安や心配を感じられますが、いたってシンプルです。ダウンロードしたアプリを使ってQR認証、後は欲しい商品を持って帰るだけです！使い方ガイダンスを再度ご覧になりたい場合、「ホーム画面」→「設定」→「ご利用方法」を参照ください。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">どのように無人化を実現しているのですか？</dt>
                        <dd className="answer">当社の画像AIの技術を使って、「誰が何を」棚から取ったか認識することで無人化を実現しております。通常のお買い物と同様、商品を手にしてブースから離れると、「退店」したとみなし、後から取った商品のご請求をさせて頂きます。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">持ち帰った商品の通知がなかなか来ないのですが、大丈夫でしょうか？</dt>
                        <dd className="answer">お持ち帰りになられた商品の通知は受け取り後、最大1日以内に通知されるので、それまではお待ちください。もし通知が1日経っても来ない場合、「ホーム画面」→「設定」→「お問い合わせ」からご連絡頂けると幸いです。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">持ち帰った商品の通知と、実際に持ち帰った商品が違いました</dt>
                        <dd className="answer">大変申し訳ありません。微々たる確率ですが、認識にズレが発生する場合があります。そのため、通知画面もしくは利用履歴画面から、受取商品の修正をすることが可能となっております。お手数ですが、そちらから商品の修正をよろしくお願いします。なお、修正ができるのは通知の受取後、48時間以内となっておりますので、通知をご覧頂いたら速やかにご対応をよろしくお願いします。</dd>
                      </div>
                      <div  className="faq-content">
                        <dt className="question">アプリおよびブースのサービスに不具合がありました</dt>
                        <dd className="answer">大変申し訳ありません。不具合に関するお問い合わせは、「ホーム画面」→「設定」→「お問い合わせ」より当社までご連絡ください。</dd>
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