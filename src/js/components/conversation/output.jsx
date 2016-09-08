import React from 'react'
import JSONPretty from 'react-json-pretty'

const Output = ({ fields }) => {
    return <div className="mb2">
        <JSONPretty id="json-pretty" json={fields.reduce((accum, current) => {
                return {
                    ...accum,
                    [current.field]: current.response
                }
            }, {})}></JSONPretty>
    </div>
}

export default Output
