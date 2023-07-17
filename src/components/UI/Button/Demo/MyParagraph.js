import React from 'react'

export default function MyParagraph(props) {
    console.log('My Paragraph is Running')
    return <p>{props.children}</p>
     
    
}
