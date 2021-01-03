import React from 'react'

import Layout from '../../components/Layout'
import { FullBlogRoll }  from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/bbr3.jpg')`,
            backgroundPosition: 'center center',
          }}
        >
          <h1
            className="has-text-weight-bold has-text-centered is-size-2-widescreen is-size-3-mobile is-size-2-tablet page-title header-home"
            style={{
              color: 'white',
              padding: '1rem',
              textTransform: 'uppercase',
            }}
          >
            Het laatste nieuws
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
            <div className="columns is-multiline">
              <FullBlogRoll />
            </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
