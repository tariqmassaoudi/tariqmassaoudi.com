import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (<div className="text-center my-8">
      <div className="uppercase text-xl font-sans font-bold text-black my-5">
       Hi there 👋, I’m 
    </div>
     <div className="text-7xl font-serif font-bold text-black my-5">Tariq Massaoudi
      </div>
      <div className="text-xl font-sans text-black">Software Engineer from Morocco.<br/>
      I do techy experiments and write about them.<br/>
      I’m currently working at SAS Institute.
      </div> 
    </div>
       
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {/* {title} */}
      </Link>
    )
  }

  return (<div>
    <Header></Header>
    <div className="global-wrapper" data-is-root-path={isRootPath}>
    
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Designed and Developed by Tariq
      </footer>
    </div>
  </div>
    
  )
}

export default Layout
