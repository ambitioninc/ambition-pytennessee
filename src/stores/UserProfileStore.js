var Reflux = require('reflux');

var UserProfileActions = require('../actions/UserProfileActions');


var _users = [{
    email: 'jeff@cool.com',
    name: 'Jeff',
    photo: 'static/images/jeff.jpg'
}, {
    email: 'micah@cool.com',
    name: 'Micah',
    photo: 'static/images/micah.jpg'
}, {
    email: 'rob@cool.com',
    name: 'Rob',
    photo: 'static/images/rob.jpg'
}, {
    email: 'wes@cool.com',
    name: 'Wes',
    photo: 'static/images/wes.jpg'
}];

var _storeData = {
    email: _users[0].email,
    messages: [],
    name: _users[0].name,
    photo: _users[0].photo
};

var UserProfileStore = Reflux.createStore({
    listenables: [UserProfileActions],

    onSendMessage: function(message) {
        var to = _users.filter(function(user) {
            return user.name.toLowerCase() === message.to.toLowerCase();
        })[0];

        if (to) {
            _storeData.messages.push({
                text: message.text,
                to: to
            });

            this.trigger();
        }
    },

    onUpdateEmail: function(email) {
        _storeData.email = email;

        this.trigger();
    },

    onUpdateName: function(name) {
        _storeData.name = name;

        this.trigger();
    },

    onUpdatePhoto: function(photo) {
        _storeData.photo = photo;

        this.trigger();
    }
});

Object.defineProperty(UserProfileStore, 'email', {
    get: function() {
        return _storeData.email;
    }
});

Object.defineProperty(UserProfileStore, 'messages', {
    get: function() {
        return _storeData.messages;
    }
});

Object.defineProperty(UserProfileStore, 'name', {
    get: function() {
        return _storeData.name;
    }
});

Object.defineProperty(UserProfileStore, 'photo', {
    get: function() {
        return _storeData.photo;
    }
});

module.exports = UserProfileStore;
