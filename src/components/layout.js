/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import {Content, Footer} from "../styles/components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
 
  return (
    <>
      <Header />
      <Content>
        <main>{children}</main>
        <Footer>
           Made with <span role='img' aria-label='emoji' >💚</span>💚
          <a href="https://www.platzi.com">by Platzi</a>
        </Footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
