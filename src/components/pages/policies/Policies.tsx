import React from 'react'
import AddNewPolicy from './AddNewPolicy'
import ListDisplay from '../ListDisplay'
import { PageType } from '../../../types/enums'

export default function Policies() {
  return (
    <div>
      <h1>Policies</h1>
      <AddNewPolicy />
      <ListDisplay pageType={PageType.POLICIES} />
    </div>
  )
}
