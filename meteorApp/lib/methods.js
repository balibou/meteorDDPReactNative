Meteor.methods({
  addTask(text) {
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });
  }
})
