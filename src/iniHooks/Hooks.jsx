import React, {Component, useState} from 'react';
import './Hooks.css';

// // Versi menggunakan statefull componen
// class Hooks extends Component {
//     state = {
//         hitung: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             hitung: this.state.hitung + 1
//         })
//     }

//     render(){
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini yaitu : {this.state.hitung}</p>
//                 <button onClick={this.onUpdate}>Update</button>
//             </div>
//         )
//     }
// }

// Versi menggunakan hooks
const Hooks = () => {
    const [iniState, iniFunction] = useState(0);

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini yaitu : {iniState}</p>
            <button onClick={() => iniFunction(iniState + 1)}>Update</button>
        </div>
    )
}

export default Hooks;