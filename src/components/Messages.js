var React = require('react');

var UserProfileActions = require('../actions/UserProfileActions');


var Messages = React.createClass({
    render: function() {
        return (
            <div className="component">
                <h1>Messages</h1>

                {this.renderAddMessage()}
                {this.renderMessages()}
            </div>
        );
    },

    renderMessages: function() {
        return this.props.messages.map(function(message, i) {
            return (
                <div className="message" key={i}>
                    <div className="from">
                        <span>From: {this.props.name}  &lt;{this.props.email}&gt; <img src={this.props.photo} /></span>
                    </div>

                    <div className="to">
                        <span>To: {message.to.name} &lt;{message.to.email} &gt; <img src={message.to.photo} /></span>
                    </div>

                    <div className="message-text">&quot;{message.text}&quot;</div>
                </div>
            );
        }, this);
    },

    renderAddMessage: function() {
        return (
            <div>
                <div>
                    <input
                    placeholder="Send To:"
                    ref="sendTo"
                    type="text" />
                </div>
                <div>
                    <input
                    placeholder="New Message"
                    onKeyDown={this.onKeyDownMessage}
                    ref="message"
                    type="text" />
                </div>
                <button onClick={this.onSend}>Send</button>
            </div>
        );
    },

    onSend: function() {
        var text = this.refs.message.getDOMNode();
        var to = this.refs.sendTo.getDOMNode();

        UserProfileActions.sendMessage({
            text: text.value,
            to: to.value
        });

        text.value = '';
        to.value = '';
    },

    onKeyDownMessage: function(evt) {
        if (evt.keyCode === 13) {
            this.onSend();
            this.refs.sendTo.getDOMNode().focus();
        }
    }
});

module.exports = Messages;
