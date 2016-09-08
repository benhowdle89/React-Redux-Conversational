import React from 'react'

const style = {
    button: {
        backgroundColor: '#222',
        color: '#fff'
    }
}

const StartOver = ({ startOver }) => {
    return <button style={style.button} onClick={startOver} className="center py2 px4 rounded h5 border bold mx2">
        Start over
    </button>
}

export default StartOver
