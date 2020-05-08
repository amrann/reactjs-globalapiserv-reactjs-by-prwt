import axios from 'axios';

const rutPath = 'http://localhost:3004'
const rootLain = ''

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


const getNewsBlog = () => iniGet('inidataposts?_sort=id&_order=desc')

const GlobalAPI = {
    getNewsBlog
}

export default GlobalAPI;

