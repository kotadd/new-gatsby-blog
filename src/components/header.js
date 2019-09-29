import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import SvgIcon from "@material-ui/core/SvgIcon"

import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Switch from "@material-ui/core/Switch"

function GithubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
    </SvgIcon>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--bgHead)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            float: `left`,
          }}
        >
          {siteTitle}
        </Link>
        <div style={{ textAlign: "right" }}>
          <a href="https://github.com/kotadd">
            <GithubIcon color="action" />
          </a>
          <a href="https://www.linkedin.com/in/kota-nishinaka-95550290/">
            <LinkedInIcon color="action" style={{ fontSize: 30 }} />
          </a>
          <a href="https://twitter.com/_kotadd">
            <TwitterIcon color="action" style={{ fontSize: 30 }} />
          </a>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <Switch
                defaultChecked
                value="checkedF"
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
            )}
          </ThemeToggler>
        </div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
