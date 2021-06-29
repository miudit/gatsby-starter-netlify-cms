import React, { useEffect } from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.location.replace('https://www.notion.so/3bb247fae20b433595c5dcfa38e047f3');
  }

  render() {
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
                  <h1>特定商取引法に基づく表記</h1>
                  <p>
                    ＜アプリ名＞ <br/>
                    ************ <br/>
                  </p>
                  <p>
                    ＜販売事業者名（会社名） <br/>
                    bestat株式会社 <br/>
                  </p>
                  <p>
                    ＜代表者名＞ <br/>
                    代表取締役　松田尚子 <br/>
                  </p>
                  <p>
                    ＜所在地＞ <br/>
                    〒113-0033　東京都文京区本郷6-25-14 <br/>
                  </p>
                  <p>
                    ＜お問い合わせ＞ <br/>
                    こちら（info@bestat-data.com）からお問い合わせください。
                  </p>
                  <p>
                    ＜販売価格＞ <br/>
                    購入手続きの際に画面に表示されます。消費税は外税として表示しております。
                  </p>
                  <p>
                    ＜販売価格以外でお客様に発生する金銭＞ <br/>
                    ・当サイトのページの閲覧、消費購入、ソフトウェアのダウンロード等に必要となるインターネット接続料金、通信料金は、お客様のご負担となります。 <br/>
                    ・サービス内容に応じて、会員登録料金と月額料金を頂く場合があります。
                  </p>
                  <p>
                    ＜お支払方法＞ <br/>
                    各種クレジットカードでお支払い頂けます。
                  </p>
                  <p>
                    ＜商品購入方法＞ <br/>
                    App Store・Google Playで提供するアプリケーションの詳細ページから「購入」ボタンを押下し、決済していただきますと、商品が購入されたことになります。
                  </p>
                  <p>
                    ＜動作環境＞ <br/>
                    アプリケーションのダウンロードの前に、必ずアプリケーションの詳細ページで利用環境・対応機種をご確認ください。
                  </p>
                  <p>
                    ＜返品・キャンセル＞ <br/>
                    １.お客様のご都合による返品・キャンセル <br/>
                    会員規約に合致した場合のみキャンセル頂けます。 <br/>
                    ２.商品の瑕疵に基づく返品・キャンセル <br/>
                    商品に瑕疵が発見されたときは、アプリ内の会員規約に合致した場合のみキャンセル頂けます。
                  </p>
                  <p>
                    ＜特別条件＞ <br/>
                    １．クーリングオフについて <br/>
                    特定商取引法に規定されているクーリングオフが適用されるサービスではありません。 <br/>
                    ２．定期課金方式の注意事項 <br/>
                    月額料金の契約期間途中の解約となった場合も契約満了日までの料金が発生し、日割精算等による返金を含めた一切の返金は行われません。この場合、サービスも契約満了日まで提供されます。
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
