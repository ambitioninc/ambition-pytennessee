var React = require('react');

var Contact = require('./Contact');
var Messages = require('./Messages');
var Photo = require('./Photo');
var UserProfileStore = require('../stores/UserProfileStore');


var UserProfileApp = React.createClass({
    componentDidMount: function() {
        this.unsubscribe = UserProfileStore.listen(this.onStoreChange);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    getInitialState: function() {
        return {
            email: UserProfileStore.email,
            messages: UserProfileStore.messages,
            name: UserProfileStore.name,
            photo: UserProfileStore.photo
        };
    },

    render: function() {
        return (
            <div className="user-profile">
                <Contact
                email={this.state.email}
                name={this.state.name} />

                <Photo photo={this.state.photo} />

                <Messages
                email={this.state.email}
                messages={this.state.messages}
                name={this.state.name}
                photo={this.state.photo} />
            </div>
        );
    },

    onStoreChange: function() {
        this.setState({
            email: UserProfileStore.email,
            messages: UserProfileStore.messages,
            name: UserProfileStore.name,
            photo: UserProfileStore.photo
        });
    }
});

module.exports = UserProfileApp;
