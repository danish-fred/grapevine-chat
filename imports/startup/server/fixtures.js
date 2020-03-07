// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish("allUsers", function() {
  return Meteor.users.find({});
});

// Meteor.startup(() => {
//   // process.env.MONGO_URL="mongodb://localhost:27017/work";

//   createUsers()
// });

// function createUsers () {
//   var users

//   if (Meteor.users.find().fetch().length === 0) {

//     console.log('Creating users: ');

//     users = [
//       {first_name:"Normal ", last_name:"gråsen", email:"normal@f.dk", roles:[]},
//       {first_name:"Jimmy", last_name:"Drevfors", email:"secret@f.dk", roles:['secrets']},
//       {first_name:"Sara", last_name:"Michael", email:"roles@f.dk", roles:['manage_roles']},
//       {first_name:"Freddy", last_name:"Nordling", avatar:"clown.jpg", email:"freddy@f.dk", roles:['admin']}
//     ];

//     users.forEach(function (userData) {
//       var id

//       console.log(userData);

//       id = Accounts.createUser({
//         email: userData.email,
//         password: "6019007",
//         profile: {
//           usertype: 'customer',
//           first_name: userData.first_name,
//           last_name: userData.last_name,
//           avatar: userData.avatar,
//         }
//       });

//       // email verification
//       Meteor.users.update({_id: id},
//                           {$set:{'emails.0.verified': true}});

//       userData.roles.forEach(function (role) {
//         Roles.createRole(role, {unlessExists: true});
//       });
//       Roles.addUsersToRoles(id, userData.roles);
//     });
//   }
// };
