const React = require('react');
const {Component} = React;


class WordChain extends Component {
    state = {
        word: 'jin',
        value: '',
        result: '',
        sound:'',

    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {

            this.setState({
                    result: 'Perfect!',
                    word : this.state.value,
                    value: '',
                   
             })
             this.input.focus();
            }
            else {
                this.setState({
                   result: 'Boo! Think again',
                   value:''
                })
                this.input.focus();
            }
        
        }
  

    onChangeInput = (e) => {
       this.setState({value: e.target.value})
    }

    input;
    onRefInput = (c) => {this.input = c;}
render() {
    return (
        <div>
        <h1> {this.state.word} and What starts with <text claseename='uppercase'>{this.state.word.slice(-1)}</text></h1>
        <form onSubmit={this.onSubmitForm}>
        <input ref={this.onRefInput} type='text' value={this.state.value} placeholder='Type your answer' onChange={this.onChangeInput}/> <button>Check</button>
        </form>
        <div classname='summary'>{this.state.result}</div>
        </div>
    );
}  }
module.exports = WordChain;
