var React = require('react');

var UserProfileActions = require('../actions/UserProfileActions');


var Photo = React.createClass({
    render: function() {
        var inputStyle = {display: 'none'};

        return (
            <div className="component">
                <h1>Profile Photo</h1>

                <img
                className="photo"
                onClick={this.onClickPhoto}
                src={this.props.photo} />

                <input
                onChange={this.onChangePhoto}
                ref="file"
                style={inputStyle}
                type="file" />

            </div>
        );
    },

    onClickPhoto: function() {
        this.refs.file.getDOMNode().click();
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
