import './rightSide.html';
// import './video_chat.js';
// import './chatpage.js';
// import './phone.js';
// import './chat_history.js';
// import './payment.js';
// import './money_login.js';
// import '../build/app_calendar.js';
// import '../socials/wall/m-and-m/account_overview.js';



Template.rightSide.events({

  // 'click .openChatbtn': function () {
  //   document.getElementById("huggo").style.width = "10px";
  
  // },
  'click .btnClose': function () {
    document.getElementById("myChatnew").style.width = "16.66%";
    },
  // 'click .person': function () {
  //   document.getElementById("myChatnew").style.width = "75%";
  // },
  'click .utilitybtn': function () {
    document.getElementById("myChatnew").style.width = "100%";
  },
});
