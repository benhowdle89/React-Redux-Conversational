import {
    fetch
} from './../etc/fetch'

import * as types from '../constants/action-types'

export function editField(field, response) {
    return {
        type: types.EDIT_FIELD,
        field,
        response
    }
}

export function nextField() {
    return {
        type: types.NEXT_FIELD
    }
}

export function saving() {
    return {
        type: types.SAVING
    }
}

export function startOver() {
    return {
        type: types.CLEAR_ALL
    }
}

export function saveResponses() {
    return (dispatch, getState) => {
        // grab the fields from the state, and serialise the structure
        const fields = getState().conversationState.fields.reduce((accum, current) => {
                return {
                    ...accum,
                    [current.field]: current.response
                }
            }, {})
        dispatch(saving())
        return fetch('/fields/', {
            body: {
                fields
            }
        })
    }
}
