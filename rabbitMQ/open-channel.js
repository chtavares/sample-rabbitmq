const Amqp = require('amqplib/callback_api')

const openChannel = () => {
  return new Promise((resolve, reject) => {
    Amqp.connect('amqp://localhost:5672', (err, connection) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      connection.createChannel((err, channel) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        resolve(channel)
      })
    })
  })
}

module.exports = openChannel
