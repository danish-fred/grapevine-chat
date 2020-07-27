import './chatHead.html';

import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

Template.chatHead.onCreated(function () {
  SubsCache.subscribe('users.all');
  Session.set('chatTemplate', "");
});

Template.chatHead.onRendered(function () {
  // $('#action_menu_btn').click(function () {
  //   $('.action_menu').toggle();
  // });
});

Template.chatHead.helpers({
  useContacts () {
      return Session.get('chatTemplate');
  },
  member () {
    return Meteor.users.find({_id: Session.get('choosenFriend')})
  }
});

Template.chatHead.events({
  
  'click .btnHistory'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
  'click .btnVideo'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
  'click .btnPhone'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
  
  'click .btnChat'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
});