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

export function saveField(field, response) {
    return {
        type: types.SAVE_FIELD,
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
        const { fields } = getState().conversationState
        dispatch(saving())
        return fetch('/fields/', {
            body: {
                fields
            }
        })
    }
}
