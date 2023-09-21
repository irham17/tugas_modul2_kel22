import React from 'react';

const informasi = {
    nomor : '22',
    shift : '3',
    jadwal : 'Senin, 13.00 - 15.00'
};

function greetings(informasi){
    return informasi.nomor + ' shift ' + informasi.shift + ' dengan jadwal ' + informasi.jadwal;
}

//menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1>Praktikum RPLBK</h1>
            <h2>Halo, kami dari kelompok {greetings(informasi)}</h2>
        </div>
    );
}

//tidak menggunakan JSX
const ReactNoJSX = () => {
    return React.createElement('div', null, 
    React.createElement('h1', null, 'Anggota kelompok kami terdiri dari:'),
    )
}

export default ReactJSX;
export {ReactNoJSX};