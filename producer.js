const OpenChannel = require('./rabbitMQ/open-channel')
const Rabbitmq = require('./rabbitMQ/rabbitMQ')

const initializeRabbitMq = async () => {
  const channel = await OpenChannel()
  const rabbitmq = new Rabbitmq(channel)
  rabbitmq.up()
  return rabbitmq
}

const main = async () => {
  const rabbitMQ = await initializeRabbitMq()
  let count = 1
  while(count <= 5) {
    console.log(`Sending message: "Hello World ${count}" `)
    rabbitMQ.publisher(JSON.stringify({message: `Hello World ${count}`}))
    count = count + 1
  }
}

main()
