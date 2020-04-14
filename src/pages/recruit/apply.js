import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {attachment: ''}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ attatchment: e.target.files[0].name })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
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
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-6 is-offset-3 text-black">
                  <div className="content">
                    <form
                      name="recruit"
                      method="post"
                      action="/recruit/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input type="hidden" name="form-name" value="recruit" />
                      <div hidden>
                        <label>
                          Don’t fill this out:{' '}
                          <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'name'}>
                          お名前
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'email'}>
                          Emailアドレス
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'age'}>
                          年齢
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'age'}
                            onChange={this.handleChange}
                            id={'age'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'job-type'}>
                          希望職種
                        </label>
                        <div className="control">
                          <select
                            className="input"
                            type={'text'}
                            name={'job-type'}
                            onChange={this.handleChange}
                            id={'job-type'}
                            required={true}
                          >
                            <option value="depplearning">深層学習エンジニア</option>
                            <option value="backend">バックエンドエンジニア</option>
                            <option value="biz">事業企画</option>
                            <option value="soumu">総務</option>
                          </select>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'current-job'}>
                          現在の所属先
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'current-job'}
                            onChange={this.handleChange}
                            id={'current-job'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'educational-background'}>
                          最終学歴
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'educational-background'}
                            onChange={this.handleChange}
                            id={'educational-background'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">
                          職務履歴書
                        </label>
                        <div className="control">
                          <input
                            className="file-input"
                            type="file"
                            name="attachment"
                            id="resume"
                            onChange={this.handleAttachment}
                            required={true}
                          />
                          <label className="label" htmlFor={'resume'}>
                            <span className="file-cta" style={{width: '100%'}} htmlFor={'resume'}>
                              <span className="file-label">{this.state.attatchment ? this.state.attatchment : 'ファイルを選択'}</span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="field">
                        <button className="button is-link" type="submit" style={{borderColor: 'gray', marginTop: '30px'}}>
                          送信
                        </button>
                      </div>
                    </form>
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