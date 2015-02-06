var React = require('react');

var UserProfileActions = require('../actions/UserProfileActions');


var Photo = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Photo</h1>

                <img src={this.props.photo} />

                <input onChange={this.onChangePhoto} type="file" />
            </div>
        );
    },

    onChangePhoto: function(evt) {
        var fileReader = new FileReader();
        var file = evt.target.files ? evt.target.files[0] : null;

        if (file) {
            fileReader.onload = this.onLoadPhoto;
            fileReader.readAsDataURL(file);
        }
    },

    onLoadPhoto: function(evt) {
        UserProfileActions.updatePhoto(evt.target.result);
    }
});

module.exports = Photo;
