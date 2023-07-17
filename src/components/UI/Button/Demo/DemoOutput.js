import React from 'react'

export default function DemoOutput(data) {
  return (
    <div>
        <p>{data.show ? 'This is New!' : ''}</p>
    </div>
  )
}
