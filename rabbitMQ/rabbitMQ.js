module.exports = class Rabbitmq {
  constructor(channel){
    this.channel = channel
  }

  up() {
    try {
      this.channel.assertExchange('test_exchange', 'direct', {
        durable: true
      })
      this.channel.assertQueue('test_queue', { durable: true })
      this.channel.bindQueue(
        'test_queue',
        'test_exchange'
      )
    } catch (err) {
      console.log('Error to up the rabbitmq server', err)
    }
  }

  publisher(content) {
    this.channel.publish('test_exchange', '', Buffer.from(content))
  }

  consumer() {
    this.channel.consume(
      'test_queue',
      async (msg) => {
        if (msg.content) {
          const body = JSON.parse(msg.content.toString())
          console.log(body)
        }
      }, { noAck: true })
  }
}
