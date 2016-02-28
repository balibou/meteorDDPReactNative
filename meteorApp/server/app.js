Meteor.publish('tasks', function() {
  return Tasks.find();
});

Meteor.startup(function() {
  if (Tasks.find().count() === 0) {
      Tasks.insert({
        title: 'Hello world !',
        createdAt: new Date()});
  }
});
