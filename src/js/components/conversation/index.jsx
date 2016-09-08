import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as conversationActions from './../../actions/conversation'

import Field from './field.jsx'
import Save from './save.jsx'
import StartOver from './start-over.jsx'
import Next from './next.jsx'
import Output from './output.jsx'

class Conversation extends React.Component {

    componentWillReceiveProps(nextProps) {

        let { answered, fields, saving } = nextProps.conversationState,
            { saveResponses } = nextProps.conversationActions

        // have they just answered the last question and hit enter? Then lets
        // save the fields
        if(!saving && answered == fields.length){
            return saveResponses()
        }
    }

    getFields = (fieldsToShow) => {
        // display the answered fields plus the next one for them to answer
        return this.props.conversationState.fields
            .slice(0, fieldsToShow)
    }

    render() {
        let { answered, fields, saving } = this.props.conversationState,
            fieldsToShow = answered + 1

        // they've hit Save, lets output the data
        if(saving) {
            return <div className="max-width-2 mx-auto">
                <h3 className="h3 my2">Example data structure sent to the server</h3>
                <Output fields={fields} />
                <a href='#' style={{
                        color: 'inherit'
                    }} onClick={e => {
                    e.preventDefault()
                    return this.props.conversationActions.startOver()
                }}>Reset demo</a>
            </div>
        }

        return (
            <div style={{ maxWidth: '40rem' }} className="mx-auto mt3">
                {
                    (
                            this.getFields(fieldsToShow)
                                .map((field, index) => {
                                    return <Field
                                        key={field.question}
                                        field={field}
                                        editField={this.props.conversationActions.editField}
                                        nextField={() => {
                                            if(answered == fields.length){
                                                return this.props.conversationActions.saveResponses()
                                            }
                                            return this.props.conversationActions.nextField()
                                        }}
                                        last={index == fieldsToShow - 1}
                                    />
                                })
                    )
                }
                <div className="flex justify-center mt4">
                    {
                        (answered == fields.length - 1 || answered == fields.length) && (
                            <Save saveResponses={this.props.conversationActions.saveResponses} />
                        )
                    }
                    {
                        (answered < fields.length - 1) && (
                            <Next nextField={this.props.conversationActions.nextField} />
                        )
                    }
                    <StartOver startOver={this.props.conversationActions.startOver} />
                </div>
            </div>
        )
    }
}

Conversation.propTypes = {
    conversationState: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        conversationState: state.conversationState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        conversationActions: bindActionCreators(conversationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation)
