const addReactions = (message, reactions) => {
    for (let i = 0; i != reactions.length; ++i) {
        // we use the index to calculate the time we want to wait: 750 * 0, 750 * 1, ... for each index.
        // that way we can ensure the `message.react` calls are separated 750 ms
        setTimeout(() => message.react(reactions[i]), 750 * i);
    }
  }
  
    module.exports = async (client, id, text, reactions = []) => {
      const channel = await client.channels.fetch(id)
    
      channel.messages.fetch().then((messages) => {
        if (messages.size === 0) {
          // Send a new message
          channel.send(text).then((message) => {
            addReactions(message, reactions)
          })
  
              } else {
          // Edit the existing message
          for (const message of messages) {
           message[1].edit(text)
           addReactions(message[1], reactions)
          }
  
  }
      })
    }