var Reflux = require('reflux');


var UserProfileActions = Reflux.createActions([
    'sendMessage',
    'updateEmail',
    'updateName',
    'updatePhoto'
]);

module.exports = UserProfileActions;
