// Layouts in sub routes  - if you want to show the all the pageses the same banner that start with /sigin route we add these things in layout 

import React from "react"

export default function({children}:{
    children: React.ReactNode
}){
  return <div>
    <div className="border-b text-center">
         20% off for thee next 3 day
    </div>
    {children}
  </div>

}
