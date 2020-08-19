import React from 'react'

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input className={`${props.error ? 'error-input' : ''}`} type="text" name="city" placeholder="City" />
        <button>Get</button>
    </form>
)

export default Form