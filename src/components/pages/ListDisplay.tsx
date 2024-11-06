import React from 'react'
import { PageType } from '../../types/enums'
import { useSelector } from 'react-redux'
import { Claim, Policy } from '../../types/redux'

interface Props {
    pageType:PageType
}

export default function ListDisplay({pageType}:Props ){
    // const arr:Claim[]|Policy[] = useSelector((s:any)=>s[pageType.toLowerCase()])
  return (
    <div>
        ListDisplay ft. {pageType.toLowerCase()}

        {/* { (arr.map((it:any)=>{
            if (pageType == PageType.CLAIMS) {
                return
            }else{
                return
            }
        })} */}
    </div>
  )
}
