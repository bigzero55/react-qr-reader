import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'

function Test(props) {
  const [delay, setDelay] = useState(100)
  const [result, setResult] = useState('No result')

  function handleScan(data) {
    setResult(data)
  }

  function handleError(err) {
    console.error(err)
  }

  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  )
}

export default Test
