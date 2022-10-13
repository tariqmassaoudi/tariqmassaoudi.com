import * as React from "react"
import Tag from "./tag"
import { Link} from "gatsby"

const BlogPostCard = ({title,description,tagName,link,style}) => {
    if (style==1){
        return (
            <Link to={link} className="relative flex mx-auto h-[240px]  mt-4 transition ease-in-out delay-75 hover:scale-[1.02]">
              {/* Gradient background of same width & height  as Blog post card  */}
              <div className=" rounded-xl w-full bg-gradient-to-r p-[5px] from-[#D8B4FE] to-[#818CF8]">
                <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
                  <div className="flex flex-col justify-center text-white">
      
                    <div className="text-xl font-bold font-sans text-black mb-2">
                      {title}
                    </div>
                    <p className="text-md md:text-md font-medium mb-2 text-black  ">
                      {description}
                    </p>
                  </div>
                  <Tag tagName={tagName}/>
                </div>
              </div>
            </Link>
          );
    }else if (style==2){
        return (
            <Link to={link} className="relative flex mx-auto h-[240px] mt-4 transition ease-in-out delay-75 hover:scale-[1.02]">
              {/* Gradient background of same width & height  as Blog post card  */}
              <div className=" rounded-xl w-full bg-gradient-to-r p-[5px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
                <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
                  <div className="flex flex-col justify-center text-white">
      
                    <div className="text-xl font-bold font-sans text-black mb-4">
                      {title}
                    </div>
                    <p className="text-md md:text-md font-medium mb-2 text-black  ">
                      {description}
                    </p>
                  </div>
                  <Tag tagName={tagName}/>
                </div>
              </div>
            </Link>
          );
    }else{
        return (
            <Link to={link} className="relative flex mx-auto h-[240px] mt-4 transition ease-in-out delay-75 hover:scale-[1.02]">
              {/* Gradient background of same width & height  as Blog post card  */}
              <div className=" rounded-xl w-full bg-gradient-to-r p-[5px] from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]">
                <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
                  <div className="flex flex-col justify-center text-white">
      
                    <div className="text-xl font-bold font-sans text-black mb-4">
                      {title}
                    </div>
                    <p className="text-md md:text-md font-medium mb-2 text-black  ">
                      {description}
                    </p>
                  </div>
                  <Tag tagName={tagName}/>
                </div>
              </div>
            </Link>
          );
    }

  };
  
  export default BlogPostCard;