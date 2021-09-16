import React, { Component } from "react";
class Kuota extends Component {
    state = {
        internet: " "
    }
    componentDidMount(){
        alert('Show Kuota! (Proses mount)')
    }
    ChangeKuota = () => {
        this.setState((state) => { 
            if (state.internet === "Kuota UNLIMITED XL 30 hari = Rp. 300.000") {
                return {internet : "Kuota 5g Telkomsel 30 hari = 500.000"}   
            } else {
                return {internet : "Kuota UNLIMITED XL 30 hari = Rp. 300.000"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('Hide Kuota gan (Proses Unmount)!')
    }
    render() {
        return (
            <div>  
             <h3>(KUOTA 5gb an broo! Kuota laen ada di menu "PILIHAN"!)</h3>                       
                <p>1. XL 5gb 30hari = Rp. 24.000</p>  
                <p>2. 3 5gb 15hari = Rp. 15.000</p>
                <p>3. IM3 5gb 30hari = Rp. 25.000</p>
                <p>4. Smartfren Unlimited 30 hari = Rp. 100.000</p>
                <p>4. Telkomsel 5gb 30hari = Rp. 590.000</p>

                <button onClick={this.ChangeKuota}>Pilihan laen bro</button>
                <br />
                <p>{this.state.internet}</p>
            </div>
        );
    }
}
export default Kuota;