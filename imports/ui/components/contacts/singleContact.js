import './singleContact.html';
import { Session } from 'meteor/session';


Template.singleContact.onCreated(function() {
    SubsCache.subscribe('users.all');

    Session.set('choosenFriend', "null")
});

Template.singleContact.onRendered(function() {
    // if (this.status.online =true) {style="bac"}
});

Template.singleContact.helpers({
    

});

Template.singleContact.events({
    'click .btnOpen': function (event) {
        event.preventDefault();
        
        document.getElementById("myChatnew").style.width = "90%";
        let id = (this._id);
        console.log(id)

         Session.set('choosenFriend', id ); // _id = wall.id  
        
        
        
    }
    
});