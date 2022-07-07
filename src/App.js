import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import './App.css';

function App({ text }) {
  const [src, setSrc] = useState("")
  useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setSrc(data)
    })
  })


  return (
    <div className="App">
      <header className="App-header">
        <img
          src={src}
          alt="scannerImg"
        />
      </header>
    </div>
  );
}

export default App;
