import React from 'react'
import { PageType } from '../../types/enums'
import { useSelector } from 'react-redux'
import { Claim, Policy } from '../../types/redux'
import ClaimItem from './claims/ClaimItem'
import PolicyItem from './policies/PolicyItem'

interface Props {
    pageType:PageType
}

export default function ListDisplay({pageType}:Props ){
    const arr:Claim[]|Policy[] = useSelector((s:any)=>s[pageType.toLowerCase()])
  return (
    <div>
        ListDisplay ft. {pageType.toLowerCase()}

        { arr.map(
            (it)=> pageType == PageType.CLAIMS ?
             <ClaimItem key={it.id} claim={it as Claim}/> :
             <PolicyItem key={it.id} policy={it as Policy}/>) 
        }
    </div>
  )
}
