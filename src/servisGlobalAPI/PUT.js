import axios from 'axios';
import {rootLain, rutPath} from './Config';

const iniPut = (path, root, data1) => {
    // ini fungsi async
    const promis = new Promise((resolve, reject) => {
        axios.put(`${root?rootLain:rutPath}/${path}`, data1)
        // Jika root-nya bernilai true, maka memanggil rootLain, jika false maka rutPath
        .then((hasil) => {
            // console.log(hasil);
            resolve(hasil);
            
        }, (gagal) => {
            // console.log('gagal: ', gagal);
            reject(gagal);
        })
    })
    return promis;
}

export default iniPut;