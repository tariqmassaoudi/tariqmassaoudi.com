import React from "react"
import { MDXProvider } from "@mdx-js/react"
import testComp from "../components/testcomp"

const components = {

    testComp
  };

export default function DefaultLayout({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
