var React = require('react');

var UserProfileActions = require('../actions/UserProfileActions');


var Messages = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Messages</h1>

                {this.renderMessages()}
                {this.renderAddMessage()}
            </div>
        );
    },

    renderMessages: function() {
        return this.props.messages.map(function(message, i) {
            return (
                <div key={i}>
                    <div>From: {this.props.name}  &lt;{this.props.email}&gt; <img src={this.props.photo} /></div>
                    <div>To: {message.to.name} &lt;{message.to.email} &gt; <img src={message.to.photo} /></div>
                    <div>Message: {message.text}</div>
                    <hr />
                </div>
            );
        }, this);
    },

    renderAddMessage: function() {
        return (
            <div>
                <div>
                    <input
                    placeholder="Send To"
                    ref="sendTo"
                    type="text" />
                </div>
                <div>
                    <textarea
                    placeholder="New Message"
                    ref="message"></textarea>
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
    }
});

module.exports = Messages;
