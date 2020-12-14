const OpenChannel = require('./rabbitMQ/open-channel')
const Rabbitmq = require('./rabbitMQ/rabbitMQ')

const initializeRabbitMq = async () => {
  console.log('Open the channel...')
  const channel = await OpenChannel()
  const rabbitmq = new Rabbitmq(channel)
  rabbitmq.up()
  console.log('Waiting for messages')
  rabbitmq.consumer()
}

const main = async () => {
  await initializeRabbitMq()
}

main()
