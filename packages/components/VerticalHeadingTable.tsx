import { Child } from '@khai-personal-website/utility-types'
import React from 'react'

export interface VerticalHeadingTableAttr {
  readonly data: Record<string, Child>
}

export const VerticalHeadingTable = (attr: VerticalHeadingTableAttr) =>
  <table>
    <tbody>
      {Object.entries(attr.data).map(([title, content], key) =>
        <tr key={key}>
          <th>{title}</th>
          <td>{content}</td>
        </tr>
      )}
    </tbody>
  </table>

export default VerticalHeadingTable
