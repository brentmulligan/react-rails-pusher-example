const Message = (props) => {
  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="http://placehold.it/64x64" alt="..."/>
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">From: {props.from_uid}</h4>
        <div>{props.message}</div>
        <div>
          <small>{props.created_at}</small>
        </div>
      </div>
    </div>
  )
}

class MessagesContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      messages: props.initialMessages
    }
  }
  componentWillMount() {
    const pusher = new Pusher(this.props.clientUid, {
      encrypted: true
    });

    const { threadUid, channelUid } = this.props
    var channel = pusher.subscribe(channelUid);
    const _this = this
    channel.bind(threadUid, function (data) {
      const messages = [].concat(_this.state.messages)
      messages.unshift(data)
      _this.setState({ messages: messages })
    });
  }
  renderMessageForMessages(messages = []) {
    if (messages.length) {
      return messages.map((message) => <Message {...message} key={message.id}/>)
    } else {
      return (
        <div className="alert alert-warning">
          <p><strong>No Messages </strong></p>
          No messages were available for this thread.
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderMessageForMessages(this.state.messages)}
      </div>
    )
  }
}

const container = document.getElementById('messagesContainer')

ReactDOM.render(
  <MessagesContainer
    clientUid={ENV.clientUid}
    channelUid={ENV.channelUid}
    threadUid={ENV.threadUid}
    initialMessages={ENV.messages}
  />
, container)

