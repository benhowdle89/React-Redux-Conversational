import React from 'react'

const style = {
    button: {
        backgroundColor: '#3CA7F6',
        color: '#fff'
    }
}

const Save = ({ saveResponses }) => {
    return <button style={style.button} onClick={saveResponses} className="center py2 px4 rounded h5 border bold mx2">
        Save
    </button>
}

export default Save
