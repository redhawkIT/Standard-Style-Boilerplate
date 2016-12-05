// jshint ignore: start
import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import MessageBox from '../MessageBox/MessageBox'

const apiEndpoint = 'http://message-list.appspot.com/messages?limit=10'

class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: [],
      token: ''
    }
  }

  getMessages () {
    let url = apiEndpoint
    if (this.state.token !== '') { url += `&pageToken=${this.state.token}` }
    axios.get(url)
    .then((res) => {
      let oldMessages = this.state.messageList
      let newMessages = res.data.messages
      let combination = oldMessages.concat(newMessages)
      let sortedMessages = _.orderBy(combination, (o) => o.updated, 'desc')
      this.setState({
        messageList: sortedMessages,
        token: res.data.pageToken
      })
      console.log(this.state.messageList)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  componentDidMount () {
    // Calling after mount to prevent delays in rendering.
    this.getMessages()
  }

  render () {
    return (
      <div className='MessagesList'>
        <button onClick={this.getMessages.bind(this)}>Click me!</button>
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
