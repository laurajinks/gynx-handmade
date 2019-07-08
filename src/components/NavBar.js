import React, {useState} from "react"
import { Link } from "gatsby"
import { scale } from "../utils/typography"
import styles from './NavBar.module.css'

export const NavBar = (props) => {
  const {title} = props
  const [hamburger, setHamburger] = useState(false)
  const lineStyle = {background: hamburger ? 'white' : 'black'}
  return (
    <div>
      <div className={styles['header']}>
        <h3
          style={{
            ...scale(1.2),
            margin: '7px'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <h3 style={{margin: '7px'}}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog`}
          >
            Blog
          </Link>
        </h3>
        <h3 style={{margin: '7px'}}>
          <a
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            href={'http://youtube.com/gynxhandmade'}
          >
            Podcast
          </a>
        </h3>
        <h3 style={{margin: '7px'}}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/about`}
          >
            About
          </Link>
        </h3>
        <h3 style={{margin: '7px'}}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/resources`}
          >
            Resources
          </Link>
        </h3>
        <h3 style={{margin: '7px'}}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/contact`}
          >
            Contact
          </Link>
        </h3>
      </div>
      <div className={styles['hamburgerHeader']}>
        <h3
          style={{
            ...scale(1.2),
            margin: '7px'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <div className={styles['burger']} onClick={() => setHamburger(!hamburger)}>
          <div className={styles['line']} style={lineStyle} />
          <div className={styles['line']} style={lineStyle} />
          <div className={styles['line']} style={lineStyle} />
        </div>
        {hamburger && (
          <div className={styles['dropDownMenu']}>
            <div className={styles['dropDownLinks']}>
              <h3 style={{margin: '7px'}}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/blog`}
                >
                  Blog
                </Link>
              </h3>
              <h3 style={{margin: '7px'}}>
                <a
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  href={'http://youtube.com/gynxhandmade'}
                >
                  Podcast
                </a>
              </h3>
              <h3 style={{margin: '7px'}}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/about`}
                >
                  About
                </Link>
              </h3>
              <h3 style={{margin: '7px'}}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/resources`}
                >
                  Resources
                </Link>
              </h3>
              <h3 style={{margin: '7px'}}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/contact`}
                >
                  Contact
                </Link>
              </h3>
            </div>
          </div>
        )
        }
      </div>
    </div>

  )
}