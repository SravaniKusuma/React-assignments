import React, { Component } from 'react'
import { ChannelContext } from '../App'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div> Context value {username} and channel {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
