// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SerialPort from 'serialport'
const port = new SerialPort('CNCA0', {baudRate: 57600})

export default function handler(req, res) {
  
  const data = req.body
  // console.log(data)
  const {led} = data
  if (led === 'ON'){
    port.write('A', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
    })
  }
  else if (led === 'OFF'){
    port.write('B', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
    })
  }
  // Open errors will be emitted as an error event
  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })
  res.status(200).json({ name: 'John Doe' })
}
