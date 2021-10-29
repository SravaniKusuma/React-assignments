import React ,{useContext} from 'react'
import { ChannelContext } from '../App'
import ComponentF from './ComponentF'
import UserContext from './UserContext'



function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user}-{channel}
            <ComponentF />
        </div>
    )
}

export default ComponentE
