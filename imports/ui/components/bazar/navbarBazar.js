import './navbarBazar.html';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';

Template.navbarBazar.helpers({
});

Template.navbarBazar.events({
    'click .loadTemplate'(event) {
      event.preventDefault();
      const targetName =  $(event.currentTarget).attr('data-target');
      Session.set('targetTemplate', targetName)
    }
 
});