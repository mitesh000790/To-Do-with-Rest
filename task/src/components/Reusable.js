import React from 'react'

function Reusable(props) {
    return (
        <div>
            <input 
            type={props.text} 
            placeholder={props.placeholder} 
            name={props.name}
            class="input-field" 
            />
        </div>
    )
}

export default Reusable
