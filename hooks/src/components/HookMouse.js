import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect( () =>{
        console.log("UseEffect")
        window.addEventListener('mousemove',logPosition)

        return ()=>{
            console.log("component unmounted")
            window.removeEventListener('mousemove',logPosition)
        }
    },[])

    const logPosition = (e) =>{
        console.log("Mouse evenet")
        setX(e.clientX)
        setY(e.clientY)

    }
    return (
        <div>
            Mouse Co-ordinates  X-{x} Y-{y}
        </div>
    )
}

export default HookMouse
