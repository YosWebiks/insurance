import React from 'react'
import { PageType } from '../../types/enums'

interface Props {
    pageType:PageType
}

export default function ListDisplay({pageType}:Props ){
  return (
    <div>
        ListDisplay ft. {pageType.toLowerCase()}

        {/* { ([].map((it:any)=>{
            if (pageType == PageType.CLAIMS) {
                return
            }else{
                return
            }
        })} */}
    </div>
  )
}
