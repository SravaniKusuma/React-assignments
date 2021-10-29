import React from 'react'

type  StyleProps={
    styles: React.CSSProperties
}
const Styling = (props:StyleProps) => {
    return (
        <div  style={props.styles}>
            This is a styling demo
        </div>
    )
}

export default Styling
