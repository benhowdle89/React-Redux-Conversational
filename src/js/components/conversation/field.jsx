import React from 'react'

const style = {
    question: {
        backgroundColor: '#E5E5EA'
    },
    response: {
        backgroundColor: '#3CA7F6',
        color: '#fff'
    },
    responseInput: {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        color: 'inherit'
    }
}

const Response = ({ field, editField, nextField, last }) => {
    return <div className="flex mb3 justify-between">
        <div className="flex items-center col-6 mr1">
            <span className="mr1 h2">😀</span>
            <p style={style.question} className="p1 rounded">{field.question}</p>
        </div>
        <div className="mt4 p1 rounded ml1" style={style.response}>
            <span className="mr1">{field.prefix}</span>
            <input style={style.responseInput} className="border-bottom pb1 h5" value={field.response} onChange={event => editField(field.field, event.target.value)} autoFocus={last} onKeyUp={event => {
                    if(event.which == 13 && event.target.value){
                        nextField()
                    }
                }} />
        </div>
    </div>
}

export default Response
