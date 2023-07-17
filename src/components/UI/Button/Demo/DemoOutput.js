import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = (props) => {
    console.log('DemoOutput Running')
  return (
    <div>
        <MyParagraph>{props.show ? 'This is New!' : ''}</MyParagraph>
    </div>
  )
}

export default React.memo(DemoOutput)