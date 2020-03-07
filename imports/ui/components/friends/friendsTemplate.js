import './friendsTemplate.html';

Template.friendsTemplate.onCreated(function () {
    this.subscribe('allUsers')

});

Template.friendsTemplate.onRendered(function () {

});

Template.friendsTemplate.helpers({
    friend () {
        return Meteor.users.find({});
    }
});

Template.friendsTemplate.events({

});