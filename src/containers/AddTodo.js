import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    if(!input.value.trim()) {
                        return false;
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                    return true
                }}
            >
                <input ref={node => (input === node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )    
}

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodo)