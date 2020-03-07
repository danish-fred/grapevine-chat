import './chatHead.html';

import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

// import './phone.js';
// import './moneyLogin.js';
// import './chatHistory.js';
// import './videoChat.js';
// import './chatPage.js';
// import '../build/appCalendar.js';

Template.chatHead.onCreated(function () {
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
  'click .btnMoney'(event) {
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