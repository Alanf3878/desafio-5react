import React, { Component } from 'react';

class Soma extends Component {


  teste = (nome) => {
    return <p>Meu nome é: {nome}</p>;
  }
  soma = (x) => {
    return x * 5;
  };

  render() {
    return <div>
      <h1>{this.soma(5)}</h1>
      <p>{this.teste('Alan')}</p>
    </div>
  }
}

export default Soma;