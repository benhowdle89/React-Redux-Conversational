import React from 'react'

const style = {
    button: {
        backgroundColor: '#27ae60',
        color: '#fff'
    }
}

const Next = ({ nextField }) => {
    return <button style={style.button} onClick={nextField} className="center py2 px4 rounded h5 border bold mx2">
        Next
    </button>
}

export default Next
