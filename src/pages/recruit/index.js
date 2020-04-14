import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class RecruitIndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeJobType: 'deeplearning',
    }
  }

  render() {
    return (
      <Layout>
        <div className="content">
          <div
            className="full-width-image-container margin-top-0 recruit-header"
            style={{
              backgroundImage: `url('/img/background/68.jpg')`,
              boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
              backgroundPosition: `top left`,
              backgroundAttachment: `fixed`,
              paddingTop: '50px',
              marginBottom: '0',
              backgroundSize: '100% auto',
              height: '500px'
            }}
          >
            <h2
              className="has-text-weight-bold"
              style={{
                color: 'white',
                padding: '1rem',
              }}
            >
              We are hiring!
            </h2>
          </div>
          <section className="section section--gradient">
            <div className="container">
              <div className="section">
                <div className="columns">
                  <div className="column is-6 is-offset-3 text-black">
                    <div className="columns is-mobile select-card-style">
                      <div className="column is-3 is-6-mobile text-black">
                        <input type="radio" name="recruit" id="deeplearning" value="深層学習エンジニア" defaultChecked
                          checked={this.state.activeJobType === 'deeplearning'} onChange={() => this.setState({activeJobType: 'deeplearning'})}>
                        </input>
                        <label class="tab_item" for="deeplearning">深層学習エンジニア</label>
                      </div>
                      <div className="column is-3 is-6-mobile text-black">
                        <input type="radio" name="recruit" id="backend" value="バックエンドエンジニア"
                          checked={this.state.activeJobType === 'backend'} onChange={() => this.setState({activeJobType: 'backend'})}>
                        </input>
                        <label class="tab_item" for="backend">バックエンドエンジニア</label>
                      </div>
                      <div className="column is-3 is-6-mobile text-black">
                        <input type="radio" name="recruit" id="biz" value="事業企画"
                          checked={this.state.activeJobType === 'biz'} onChange={() => this.setState({activeJobType: 'biz'})}>
                        </input>
                        <label class="tab_item" for="biz">事業企画</label>
                      </div>
                      <div className="column is-3 is-6-mobile text-black">
                        <input type="radio" name="recruit" id="soumu" value="総務"
                          checked={this.state.activeJobType === 'soumu'} onChange={() => this.setState({activeJobType: 'soumu'})}>
                        </input>
                        <label class="tab_item" for="soumu">総務</label>
                      </div>
                    </div>
                    {/* ------------------------------------------------------------------ */}
                    { this.state.activeJobType === 'deeplearning' && 
                    <div class="job-description deeplearning">
                      <h3 className="has-text-weight-semibold is-size-4">深層学習エンジニア</h3>
                      <div className="columns">
                        <div className="column is-12 has-text-centered">
                          <Link className="btn" to="/recruit/apply">
                            <div>応募する</div>
                          </Link>
                        </div>
                      </div>
                      <p>画像系AIサービスを支える深層学習のリードエンジニア募集！</p>
                      <div className="content">
                        <h4>募集概要</h4>
                        <p>
                          画像系AIサービスの本格的サービスローンチに向けて、フルコミットで深層学習に関する開発をリードするエンジニアを募集しています。<br></br>
                          高速で安定的、かつ精度の高い画像系AIをユーザに提供するため、最先端の深層学習の研究成果を研究者と議論しながら、実装し製品化出来るエンジニアを募集します。
                        </p>
                      </div>
                      <div className="content">
                        <h4>応募資格</h4>
                        <ul>
                          <li>優れたプログラミング能力を有すること</li>
                          <li>コンピューターサイエンス系・理学系・工学系のカリキュラムを有する領域の修士号もしくは博士号を有すること</li>
                          <li>コンピューターサイエンス分野全般を幅広く学習し、業務に積極的に応用する姿勢を有すること</li>
                          <li>
                            下記のいずれかの条件を満たすこと
                            <ul>
                              <li>深層学習を使用した研究成果として国内外の学会に筆頭著者として1件以上投稿し採択されたことがある※エントリー時に上記いずれかのご提出をお願いいたします</li>
                              <li>修士・博士のいずれかの学位論文において深層学習を活用していること※エントリー時に上記いずれかのご提出をお願いいたします</li>
                              <li>年間60本以上の深層学習関連論文を読み、そのうち6本以上に着いて自分で実装したことがあること※エントリー時にGithubのアカウント、または御自分で書かれたスクリプトの提出をお願いいたします</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4>必須スキル</h4>
                        <ul>
                          <li>汎用プログラミング言語の知識と使用経験（Pythonは必須、さらにC++が使えることが望ましい）</li>
                          <li>機械学習/深層学習のツールまたはライブラリの使用経験（特にTensorFlow）</li>
                          <li>深層学習に関する論文を読み、アルゴリズムを理解し、実装する能力</li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4>歓迎スキル</h4>
                        <li>Dockerの仮想環境の構築経験がある++が使えることが望ましい）</li>
                        <li>クラウド上での機械学習環境の構築経験がある</li>
                        <li>SLAMの実装経験がある</li>
                        <li>ローカルのGPUマシンの利用経験がある</li>
                        <li>エッジデバイスの実装経験がある</li>
                        <li>機械学習/深層学習プロジェクトのマネジメント経験</li>
                        <li>他のエンジニアとの高いコミュニケーション能力</li>
                      </div>
                      <div className="content">
                        <h4>雇用形態</h4>
                        <p>
                          正社員（※契約社員スタートの場合もあります）
                        </p>
                      </div>
                      <div className="content">
                        <h4>給与</h4>
                        <p>
                          年俸制、業績連動型（経験・能力を考慮の上、当社規定により決定します）
                        </p>
                      </div>
                      <div className="content">
                        <h4>勤務時間</h4>
                        <p>
                          10時～19時（途中休憩1時間） 出社時間は8-11時で自由に選べます
                        </p>
                      </div>
                      <div className="content">
                        <h4>休日休暇</h4>
                        <p>
                        完全週休2日制（土曜・日曜）、祝日、夏期休暇（7月1日～11月30日までの期間に3日間）、年末年始休暇（12月28日～1月4日）、年次有給休暇（初年度10日間）、慶弔休暇、誕生日休暇
                        </p>
                      </div>
                      <div className="content">
                        <h4>各種保険</h4>
                        <ul>
                          <li>雇用保険、社会保険</li>
                          <li>福利厚生（研修費、食事手当）</li>
                          <li>入社研修プログラム、学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当</li>
                          <li>※学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当は正社員のみ</li>
                        </ul>
                      </div>
                    </div>
                    }
                    {/* ------------------------------------------------------------------ */}
                    { this.state.activeJobType === 'backend' && 
                    <div class="job-description backend">
                      <h3 className="has-text-weight-semibold is-size-4">バックエンドエンジニア</h3>
                      <div className="columns">
                        <div className="column is-12 has-text-centered">
                          <Link className="btn" to="/recruit/apply">
                            <div>応募する</div>
                          </Link>
                        </div>
                      </div>
                      <p>画像系AIサービスを支えるバックエンドのリードエンジニア募集！</p>
                      <div className="content">
                        <h4>募集概要</h4>
                        <p>
                          画像系AIサービスの本格的サービスローンチに向けて、フルコミットでサービスのバックエンド構築をリードするエンジニアを募集しています。<br></br>
                          高速で安定的、かつ精度の高い画像系AIをユーザに提供するためのバックエンドシステム構築のため、最先端ツールの導入と改良を繰り返し、製品化出来るエンジニアを募集します
                        </p>
                      </div>
                      <div className="content">
                        <h4>応募資格</h4>
                        <ul>
                          <li>優れたプログラミング能力を有すること</li>
                          <li>機械学習/深層学習に関連する理解がある程度あることが望ましい（無い場合は、研修制度あり）</li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4>必須スキル</h4>
                        <ul>
                          <li>AWSのクラウドインフラ設計・構築・運用ができる方</li>
                          <li>Terraform, Ansible等を利用したInfrastracture as codeの実践経験のある方</li>
                          <li>モニタリングツール/プロファイラーの運用経験がある方</li>
                          <li>Linux/UNIXでのシステム設計・構築・運用経験がある方</li>
                          <li>Apacheやnginx等のWebサーバの運用経験がある方</li>
                          <li>MySQL/PostgreSQL等のリレーショナルデータベースの運用経験がある方</li>
                          <li>Java, Python, Ruby, Go等を利用したAPI開発の経験がある方</li>
                          <li>セキュリティを意識した設計・開発ができる方</li>
                          <li>Git等のバージョン管理システムを利用した開発経験のある方</li>
                          <li>ECS, Kubernetes等のコンテナクラスターの設計・構築・運用経験がある方</li>
                          <li>テストコードが記述できる方</li>
                          <li>Jenkins, CircleCI等のCI/CDツールの利用経験がある方</li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4>歓迎スキル</h4>
                        <li>Linuxカーネルのチューニング経験がある方</li>
                        <li>HTML/CSS/JavaScriptに関する基礎的な知識のある方</li>
                        <li>エラーバジェットやポストモーテム等のSREを取り入れた運用経験がある方</li>
                        <li>WebRTCネイティブクライアントを利用したシステム開発の経験がある方</li>
                        <li>CUDA等のGPU関係の運用、保守が出来る方</li>
                        <li>WebRTCなどのP2P通信をひとりで実装、運用できる方</li>
                      </div>
                      <div className="content">
                        <h4>雇用形態</h4>
                        <p>
                          正社員（※契約社員スタートの場合もあります）
                        </p>
                      </div>
                      <div className="content">
                        <h4>給与</h4>
                        <p>
                          年俸制、業績連動型（経験・能力を考慮の上、当社規定により決定します）
                        </p>
                      </div>
                      <div className="content">
                        <h4>勤務時間</h4>
                        <p>
                          10時～19時（途中休憩1時間） 出社時間は8-11時で自由に選べます
                        </p>
                      </div>
                      <div className="content">
                        <h4>休日休暇</h4>
                        <p>
                        完全週休2日制（土曜・日曜）、祝日、夏期休暇（7月1日～11月30日までの期間に3日間）、年末年始休暇（12月28日～1月4日）、年次有給休暇（初年度10日間）、慶弔休暇、誕生日休暇
                        </p>
                      </div>
                      <div className="content">
                        <h4>各種保険</h4>
                        <ul>
                          <li>雇用保険、社会保険</li>
                          <li>福利厚生（研修費、食事手当）</li>
                          <li>入社研修プログラム、学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当</li>
                          <li>※学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当は正社員のみ</li>
                        </ul>
                      </div>
                    </div>
                    }
                    {/* ------------------------------------------------------------------ */}
                    { this.state.activeJobType === 'biz' && 
                    <div class="job-description backend">
                      <h3 className="has-text-weight-semibold is-size-4">事業企画</h3>
                      <div className="columns">
                        <div className="column is-12 has-text-centered">
                          <Link className="btn" to="/recruit/apply">
                            <div>応募する</div>
                          </Link>
                        </div>
                      </div>
                      <p>事業企画担当メンバー募集！</p>
                      <div className="content">
                        <h4>募集概要</h4>
                        <p>
                        画像系AIサービスの本格的サービスローンチに向けて、ユーザー企業からフィードバックを受けて、新商品/新事業開発につなげられる事業企画担当スタッフを募集します。<br></br>
                        創業メンバーの一員として、最先端のAIサービスの市場を一緒に開拓できます。
                        </p>
                      </div>
                      <div className="content">
                        <h4>応募資格</h4>
                        <ul>
                          <li>協力企業と社内エンジニア両方と円滑にコミュニケーションを行い、信頼関係を築くことが出来る</li>
                          <li>スライド作成、表計算、文書作成をPCで円滑に行うことが出来る</li>
                          <li>ゼロからイチを作り出すことに関心がある、スポーツや学業など分野を問わずやりきる経験をしたことがある、新しい学びや経験を楽しんで取組むことができる</li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4>歓迎する経験、スキル</h4>
                        <li>事業会社における事業企画、ビジネスディベロップメント経験</li>
                        <li>AI、IOTテクノロジーに関する基礎的な理解（業務レベルの知識については採用後社内トレーニング制度があります）</li>
                      </div>
                      <div className="content">
                        <h4>雇用形態</h4>
                        <p>
                          正社員（※契約社員スタートの場合もあります）
                        </p>
                      </div>
                      <div className="content">
                        <h4>給与</h4>
                        <p>
                          年俸制、業績連動型（経験・能力を考慮の上、当社規定により決定します）
                        </p>
                      </div>
                      <div className="content">
                        <h4>勤務時間</h4>
                        <p>
                          10時～19時（途中休憩1時間） 出社時間は8-11時で自由に選べます
                        </p>
                      </div>
                      <div className="content">
                        <h4>休日休暇</h4>
                        <p>
                        完全週休2日制（土曜・日曜）、祝日、夏期休暇（7月1日～11月30日までの期間に3日間）、年末年始休暇（12月28日～1月4日）、年次有給休暇（初年度10日間）、慶弔休暇、誕生日休暇
                        </p>
                      </div>
                      <div className="content">
                        <h4>各種保険</h4>
                        <ul>
                          <li>雇用保険、社会保険</li>
                          <li>福利厚生（研修費、食事手当）</li>
                          <li>入社研修プログラム、学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当</li>
                          <li>※学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当は正社員のみ</li>
                        </ul>
                      </div>
                    </div>
                    }
                    {/* ------------------------------------------------------------------ */}
                    { this.state.activeJobType === 'soumu' && 
                    <div class="job-description backend">
                      <h3 className="has-text-weight-semibold is-size-4">総務</h3>
                      <div className="columns">
                        <div className="column is-12 has-text-centered">
                          <Link className="btn" to="/recruit/apply">
                            <div>応募する</div>
                          </Link>
                        </div>
                      </div>
                      <p>総務メンバー募集！</p>
                      <div className="content">
                        <h4>募集概要</h4>
                        <p>
                          画像系AIサービスの本格的サービスローンチに向けて、自由闊達に働きながら社会に貢献できる企業を一緒に作ってくれる総務スタッフ募集します。創業メンバーの一員として、総務部門をゼロから立ち上げる経験ができます。東京大学本郷キャンパスの目の前の緑豊かで落ち着いた環境で働くことができます。
                        </p>
                      </div>
                      <div className="content">
                        <h4>応募資格</h4>
                        <ul>
                          <li>社内の職員や社外のステークホールダーと円滑にコミュニケーションを行い、信頼関係を築き、仲間と様々な課題を解決できる</li>
                          <li>ゼロからイチを作り出すことに関心がある、スポーツや学業など分野を問わずやりきる経験をしたことがある、新しい学びや経験を楽しんで取組むことができる</li>
                          <li>少数精鋭のオフィスで、裁量と責任を感じながら働くことができる</li>
                          <li>スライド作成、表計算、文書作成をPCで円滑に行うことが出来る</li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4>歓迎する経験、スキル</h4>
                        <li>AI、IOTテクノロジーに関する基礎的な理解（業務レベルの知識については採用後社内トレーニング制度があります） ※総務業務の未経験者歓迎</li>
                      </div>
                      <div className="content">
                        <h4>雇用形態</h4>
                        <p>
                          正社員（※契約社員スタートの場合もあります）
                        </p>
                      </div>
                      <div className="content">
                        <h4>給与</h4>
                        <p>
                          年俸制、業績連動型（経験・能力を考慮の上、当社規定により決定します）
                        </p>
                      </div>
                      <div className="content">
                        <h4>勤務時間</h4>
                        <p>
                          10時～19時（途中休憩1時間） 出社時間は8-11時で自由に選べます
                        </p>
                      </div>
                      <div className="content">
                        <h4>休日休暇</h4>
                        <p>
                        完全週休2日制（土曜・日曜）、祝日、夏期休暇（7月1日～11月30日までの期間に3日間）、年末年始休暇（12月28日～1月4日）、年次有給休暇（初年度10日間）、慶弔休暇、誕生日休暇
                        </p>
                      </div>
                      <div className="content">
                        <h4>各種保険</h4>
                        <ul>
                          <li>雇用保険、社会保険</li>
                          <li>福利厚生（研修費、食事手当）</li>
                          <li>入社研修プログラム、学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当</li>
                          <li>※学会参加勉強会参加サポート制度、家賃補助制度（2駅ルール）、引越手当、子ども手当は正社員のみ</li>
                        </ul>
                      </div>
                    </div>
                    }
                    {/* ------------------------------------------------------------------ */}
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
