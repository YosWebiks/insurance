import React from 'react'
import { PageType } from '../../types/enums'

interface Props {
    pageType:PageType
}

export default function ListDisplay({pageType}:Props ){
  return (
    <div>ListDisplay ft. {pageType.toLowerCase()}</div>
  )
}
