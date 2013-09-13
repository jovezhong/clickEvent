if (Meteor.isClient) {
  Template.append.greeting = function () {
    return "Welcome to clickEvent.";
  };

  Template.append.events({
    'click input' : function () {
      Meteor.call('addLog');
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    fs = Npm.require('fs');
  });
  Meteor.methods({
    addLog: function(){
      var str=new Date()+" new message\n";
      fs.appendFileSync('/Users/jzhong/alert.log',str,'utf8');
    }
  });
}
