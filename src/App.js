import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';

//Components
import Diller from './Components/Diller';
import Kelimeler from './Components/Kelimeler';
import CiktiSonuc from './Components/CiktiSonuc';
import Sifirla from './Components/Sifirla';

const SABITDILLER = [
  "TÜRKÇE",
  "İNGİLİZCE",
  "ALMANCA"
]


function App() {

  const [kayitliDiller, setKayitliDiller] = useState(SABITDILLER);
  const [veriler, setVeriler] = useState({});

  const handleOnChange = (data) => {
    setKayitliDiller(kayitliDiller => [...data]);

  }
  const onDataChanged = (data) => {
    setVeriler(data);
  }


  const deneme = [
    {
      name: "Serkan",
      surname: "Afşar",
      product: {
        category: "Elektronik",
        urun: "Bilgisayar"
      }
    },
    {
      name: "Selin",
      surname: "Afşar 1",
      product: {
        category: "deneme 2",
        urun: "deneme 3"
      }
    }
  ];

  console.log(JSON.stringify(deneme, (key, value) => {
    if (key == "product") {
      return `Merhaba Deneme ${value.category}`
    }
    return value;
  }, 1));


  console.log("Test 2 ", JSON.stringify(deneme, (key, value) => {
    if (key == "product") {
      return `Test Deneme 123 ${value.urun}`
    }
    return value;
  }, 2));


  return (
    <div className="App">
      <Diller handleOnChange={handleOnChange} {...{ kayitliDiller }} />
      <br />
      <Kelimeler {...{ kayitliDiller }} {...{ veriler }} onDataChanged={onDataChanged} />
      <br />
      <CiktiSonuc {...{ veriler }} />
      <br />
      <Sifirla {...{ veriler }} onReset={onDataChanged} />
    </div>
  );
}

export default App;
