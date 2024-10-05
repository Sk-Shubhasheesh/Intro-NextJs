// Layouts in sub routes  - if you want to show the all the pageses the same banner that start with /sigin route we add these things in layout 

/** Merging routes
 *  What if you wan’t to get the banner in both signup and signin?

Approach #1
Move both the signin and signup folder inside a auth folder where we have the layout
You can access the routes at 
http://localhost:3000/auth/signup and http://localhost:3000/auth/signin



Approach #2
You can use create a new folder with () around the name. 
This folder is ignored by the router.
You can access the routes at -
http://localhost:3000/signup and http://localhost:3000/signin
 */

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
