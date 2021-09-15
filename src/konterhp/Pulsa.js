import React, { Component } from "react";
class Pulsa extends Component {
    state = {
        isi: 0
    }
     componentDidMount(){
        alert('Show Pulsa! (Proses mount)')
}
    tambahisi = () => {
        this.setState((state) => { return { isi: state.isi + 5000 } })
    }
    kurangiisi = () => {
        this.setState((state) => { return { isi: state.isi - 5000 } })
    }
    componentWillUnmount(){
        alert('Hide Kuota gan (Unmount)!')
    }
    render() {
        return (
            <div>
            <h3>(ISI PULSA MINIM 5 RIBUU!!)</h3>
                <p>1. PULSA 5000 = Rp. 6.500</p>
                <p>2. PULSA 10000= Rp. 11.000</p>
                <p>3. PULSA 100000 = Rp. 99.000</p>
                <h4>PULSA YANG MAU DIISI : Rp {this.state.isi} </h4>
                
                <button onClick={this.tambahisi}>Tambah</button>
                <button onClick={this.kurangiisi}>Kurang</button>
                <br/>
                <p>{this.state.isi}</p>
            </div>
        );
    }
}
export default Pulsa;