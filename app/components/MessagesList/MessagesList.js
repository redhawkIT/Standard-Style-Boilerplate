// jshint ignore: start
import React from 'react'
import axios from 'axios'
// import _ from 'lodash'

const url = 'http://message-list.appspot.com/messages'

class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: []
    }
  }

  componentDidMount () {
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
              <li key={i}>{m.content}</li>
            )}
          </ul>
        }
      </div>
    )
  }
}

// {messageList.map((m, i) =>
//                 <li key={i}>{m.content}</li>
//                )}

// <li key={i}>{messageList[m].content}</li>
export default MessagesList
