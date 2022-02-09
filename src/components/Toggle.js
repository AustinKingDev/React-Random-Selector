import React, { Component } from 'react'

class Toggle extends Component {
    state = {}
    
    render() {
        return (
            <div>
                <label class="switch">
                    <input type="checkbox" />
                        <span class="slider round"></span>
                </label>
            </div>
        )
    }
}

export default Toggle