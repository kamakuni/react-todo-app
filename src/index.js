import React from 'react'
import ReactDOM from 'react-dom'

const title = 'app title'

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById("root")
)

module.hot.accept()