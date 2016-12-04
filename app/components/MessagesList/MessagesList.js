// jshint ignore: start
import React from 'react'
import axios from 'axios'

import MessageBox from '../MessageBox/MessageBox'

const url = 'http://message-list.appspot.com/messages'

class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: []
    }
  }

  componentDidMount () {
    // Calling after mount to prevent delays in rendering.
    axios.get(url)
    .then((res) => {
      this.setState({
        messageList: res.data.messages
      })
      console.log(this.messageList)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  render () {
    return (
      <div className='MessagesList'>
        {this.state.messageList.length > 0 &&
          <ul>
            {this.state.messageList.map((m, i) =>
              <MessageBox key={i}
                author={m.author}
                message={m.content}
                date={m.updated}
                />
            )}
          </ul>
        }
      </div>
    )
  }
}
// <li key={i}>{m.content}</li>
export default MessagesList
