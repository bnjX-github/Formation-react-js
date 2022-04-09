import React from 'react';

export default class FirstComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            compteur: 0,
            isCompteur: false
        };
    }

    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }
  
    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }

    incrementCompteur = () => {
        this.setState({compteur: this.state.compteur + 1});

        this.props.printLucie();
        console.log(this.props.name);
    }
  
    render() {
        return (
            <>
                <button onClick={this.incrementCompteur}>Click</button>
                <div>{this.state.compteur}</div>
            </>
        );
    }

}