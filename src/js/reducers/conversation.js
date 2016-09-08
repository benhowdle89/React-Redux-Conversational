import {
    EDIT_FIELD,
    NEXT_FIELD,
    CLEAR_ALL,
    SAVING
}
from '../constants/action-types'

const initialState = {
    saving: false,
    answered: 0,
    fields: [{
        question: 'Hey, what is your name?',
        field: 'NAME',
        prefix: 'My name is',
        response: ''
    }, {
        question: 'And what might your job be?',
        field: 'JOB',
        prefix: 'My job is',
        response: ''
    }, {
        question: 'What\'s your email address?',
        field: 'EMAIL',
        prefix: 'My email is',
        response: '',
    }]
}

const updateFields = (fields, action) => {
    return fields.map(response => {
        if (response.field !== action.field) {
            return response
        }
        return {
            ...response,
            response: action.response
        }
    })
}

export default function conversationState(state = initialState, action) {
    switch (action.type) {
        case NEXT_FIELD:
            return {
                ...state,
                answered: (state.fields.length == state.answered) ? state.answered : ++state.answered
            }
        case EDIT_FIELD:
            return {
                ...state,
                fields: [
                    ...updateFields(state.fields, action)
                ]
            }
        case SAVING:
            return {
                ...state,
                saving: true
            }
        case CLEAR_ALL:
            return {
                ...initialState,
                answered: 0,
                saving: false
            }
        default:
            return state
    }
}
