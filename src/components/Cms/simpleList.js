import React from 'react'
import { Text } from './text'

export const SimpleList = (props) => {
  const listEntries = props.props.data.st_elements
  if (!listEntries || !listEntries.length) {
    return
  }

  const classId = props?.props?.sectionType || ''

  return (
    <div>
      <ul>
        {listEntries.map((entry, idx) => {
          return (
            <li className={`fs-${classId} mt-4`}>
              <Text props={entry} key={idx} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
