import axios from 'axios';
import {rutPath} from './Config';

// fungsion ini berfungsi untuk menerima path secara dinamis
const iniGet = (path) => {
    // ini fungsi async
    const promis = new Promise((resolve, reject) => {
        // resolve yang akan memberikan return ketika kita menerima path yang benar (success)
        // reject merupakan param yang akan me-return ketika terjadi kesalahan (misal server error mngkin)
        axios.get(`${rutPath}/${path}`)
        .then((hasil)=> {
            resolve(hasil.data);
        }, (err) => {
            reject(err);
        })
    })
    return promis;
}

export default iniGet;