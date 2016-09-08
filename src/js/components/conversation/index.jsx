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

        if(!saving && answered == fields.length){
            return saveResponses()
        }
    }

    getFields = (fieldsToShow) => {
        return this.props.conversationState.fields
            .slice(0, fieldsToShow)
    }

    render() {
        let { answered, fields, saving } = this.props.conversationState,
            fieldsToShow = answered + 1

        if(saving) {
            return <div className="max-width-2 mx-auto">
                <h2 className="h2 center my2">Object sent to server, for example</h2>
                <Output fields={fields} />
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
