import * as React from "react"
import { Link } from "gatsby"

const article=({key,link,date,title,description})=>{

return(
    <li key={key}>

              <article className="my-8"
              
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="mb-2">
                  <div className="mb-2">
                    <Link to={link} itemProp="url">
                      <div className="text-2xl font-serif font-semibold	 text-black hover:underline" itemProp="headline">{title}</div>
                    </Link>
                  </div>
                  <div className="text-md font-sans text-black font-semibold">{date.toUpperCase()}</div>
                </header>
                <section>
                  <div className="text-md font-sans"
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                    itemProp="description"
                  />
                </section>
                <Link to={link} itemProp="url">
                      <div className="text-md font-sans font-semibold	 text-lime-700 hover:underline" itemProp="headline">Read More</div>
                    </Link>
              </article>
              
{/* <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
    <p className="font-normal text-gray-700 ">{description}</p>
</a> */}

            </li>
)
}

export default article
