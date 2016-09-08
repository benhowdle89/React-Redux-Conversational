import React, {PropTypes} from 'react'

import Conversation from './../components/conversation/index.jsx'

class App extends React.Component {

    render() {
        return (
            <div className="mx-auto max-width-4">
                <h1 className="h1 center py2 border-bottom mx-auto max-width-2">React Redux Conversational UI</h1>
                <Conversation />
            </div>
        )
    }
}

export default App
