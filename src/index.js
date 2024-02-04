// Import modul React dan ReactDOM yang diperlukan
import React from 'react';
import ReactDOM from 'react-dom/client';

// Komponen fungsional Hello untuk merender pesan "Hello World!"
function Hello(props) {
  return <h1>Hello World!</h1>;
}

// Komponen App menggunakan arrow function untuk merender pesan "Hello ini APP !"
const App = () => {
  return <div> Hello ini APP !</div>;
}

// Komponen MainApp yang menggabungkan komponen App dan Hello dalam satu div
const MainApp = () => (
  <div>
    <App />
    <Hello />
  </div>
);

// Mengambil elemen HTML dengan ID "root" sebagai tempat mounting React
const container = document.getElementById("root");

// Membuat instance root dengan createRoot menggunakan container sebagai target mounting
const root = ReactDOM.createRoot(container);

// Melakukan render dengan komponen MainApp, yang merender App dan Hello bersamaan
root.render(<MainApp />);
