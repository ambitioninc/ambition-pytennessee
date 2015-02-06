var React = require('react');

var UserProfileActions = require('../actions/UserProfileActions');


var Contact = React.createClass({
    render: function() {
        return (
            <div className="component">
                <h1>Contact Info</h1>

                <div>
                    <input
                    defaultValue={this.props.name}
                    onChange={this.onNameChange}
                    placeholder="Name"
                    type="text" />
                </div>

                <div>
                    <input
                    defaultValue={this.props.email}
                    onChange={this.onEmailChange}
                    placeholder="Email"
                    type="text" />
                </div>
            </div>
        );
    },

    onNameChange: function(evt) {
        UserProfileActions.updateName(evt.target.value);
    },

    onEmailChange: function(evt) {
        UserProfileActions.updateEmail(evt.target.value);
    }
});

module.exports = Contact;
