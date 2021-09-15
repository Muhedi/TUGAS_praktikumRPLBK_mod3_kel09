import { Component } from "react";
import React from "react";
import Pulsa from "./Pulsa";
import Kuota from "./Kuota";

class Home extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Pulsa /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Harga pulsa </button>
                <div style={{ border: "0.5px solid black" }}>
                </div>
                {this.state.komponen2 ? <Kuota /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Menu Kuota</button>
            </div>
        );
    }
}
export default Home;