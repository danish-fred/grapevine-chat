import './friendsDetails.html';

Template.friendsDetails.onCreated(function () {

});

Template.friendsDetails.onRendered(function () {

});

Template.friendsDetails.helpers({
    friendDetails () {
        var id = FlowRouter.getParam('id')
    return Meteor.users.findOne({
      _id: id
    });
    },
});

Template.friendsDetails.events({

});