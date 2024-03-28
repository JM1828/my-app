import React from "react";

//구구단 클래스 컴포넌트
class Gugudan extends React.Component {

    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
      };

  render() {
    return (
        <>
        <div>{this.state.first} 곱하기 {this.state.second} 는?</div>
        
        <form onSubmit={this.submit}>
        <input type="number" value={this.state.value} />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default Gugudan;