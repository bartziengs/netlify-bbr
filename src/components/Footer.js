import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import OpeningHours from '../components/OpeningHours'
import '../styles/footer.sass'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <p
            className="content font-bell-mt"
            style={{ color: 'white', fontSize: '2rem' }}
          >
            BEAUTY BLOCK
          </p>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4 is-hidden-touch">
                <section className="menu">
                  <ul className="menu-list is-mobile">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/behandelingen">
                        Behandelingen
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/producten">
                        Producten
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/nieuws">
                        Laatste nieuws
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <OpeningHours />
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/pages/category/Beauty-Salon/Beauty-Block-219292342197905/"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/beautyblock_rosmalen/"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                {/* Adresgegevens */}
                <div
                  className="has-text-left opening-hours columns is-centered is-mobile"
                  style={{ marginTop: '1rem' }}
                >
                  <table className="table is-narrow column">
                    <thead>
                      <tr>
                        <th>Contactgegevens:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Beauty Block</td>
                      </tr>
                      <tr>
                        <td>Dorpsstraat55b</td>
                      </tr>
                      <tr>
                        <td>5241 EA Rosmalen</td>
                      </tr>
                      <tr>
                        <td>Tel.no: 0634631851</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
