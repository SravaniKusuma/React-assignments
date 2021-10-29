import React from 'react'
import './myStyles.css'

const heading={
    fontSize: '45px',
    color:'blue'
}

function StyleSheets(props) {
    // let className = props.primary?'primary':' ';
    // return (
    //     <div>
    //         <h2 className={`${className} font-incr`}> StyleSheets </h2>
    //     </div>
    // )
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default StyleSheets
