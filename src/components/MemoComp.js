import React from 'react'

function MemoComp({name}) {
    console.log('Redering Memo....')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)