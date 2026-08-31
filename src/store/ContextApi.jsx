import React, { useState } from 'react'
import storedata from '../utils/ContextApi'
import { categories } from '../utils/product'

function ContextApi({children}) {
   const [categoriesdata] = useState (categories)
  return (
  <>
<storedata.Provider value={{categoriesdata}}>
    {children}
</storedata.Provider>
  </>
  )
}

export default ContextApi