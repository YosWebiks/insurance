import React from 'react'
import AddNewClaim from './AddNewClaim'
import ListDisplay from '../ListDisplay'
import { PageType } from '../../../types/enums'

export default function Claims() {
  return (
    <div>
      <h1>Claims</h1>
      <AddNewClaim/>
      <ListDisplay pageType={PageType.CLAIMS} />
    </div>
  )
}
