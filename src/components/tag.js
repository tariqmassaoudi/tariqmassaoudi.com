
import * as React from "react"

const tag=({tagName})=>{

    return(
        <div>
        <div
          class="text-xs inline-flex items-center font-bold font-sans leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
        >
          {tagName}
        </div>
        </div>
    )
    }
    
    export default tag
    