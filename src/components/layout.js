import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  console.log(location.pathname)
  let header

  if (isRootPath) {
    header = (<div className="text-center mt-8" >
      <div className="uppercase text-xl font-sans font-bold  my-5">
       Hi there 👋, I'm 
    </div>
     <div className="text-5xl md:text-7xl font-serif font-bold text-black my-5">Tariq Massaoudi
      </div>
      <div className="text-xl font-sans "><span className="font-bold text-green-700">AI Software Engineer</span> from Morocco.<br/>
      Specializing in GenAI, RAG architectures & MLOps.<br/>
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
    
    
    <div className="global-wrapper" data-is-root-path={isRootPath}>
    <Header></Header>
      <header >{header}</header>
      <main>{children}</main>
      <footer className="font-sans">
        {/* © {new Date().getFullYear()},  */}
        {/* Made with 🍵 by Tariq */}
      </footer>
    </div>
  </div>
    
  )
}

export default Layout
