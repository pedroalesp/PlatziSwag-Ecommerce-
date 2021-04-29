import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {MenuItem, StyledHeader} from "../styles/components"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="Logo de Platzi Swag" />
    </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Products</Link>
          </MenuItem>
            
          <MenuItem margin>
          <a href="http://platzi.com">Platzi</a>
          </MenuItem>

          <MenuItem>
            <Link to="/cart">
              <span>
              <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cart logo"/>
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
