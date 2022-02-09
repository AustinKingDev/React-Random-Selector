import React, {Component} from 'react';
import './App.css';
import Student from './components/Student';
import Button from './components/Button';
import Toggle from './components/Toggle';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          name: 'Bob Ross',
          img: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif'
        },
        {
          name: 'Mr Rogers',
          img: 'https://media.giphy.com/media/x0npYExxCGOZeo/giphy.gif'
        },
        {
          name: 'Carrie Fisher',
          img: 'https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif'
        }
      ],

      pickFromAll: true,

      pickedStudent: null
    }
  }

  pickRandomStudent = () => {
    this.setState(() => ({
      pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
    }))

  }

  render() {
    return (
      <div className="App">
        <Student student={this.state.pickedStudent} />
        <br/>
        <Button handleClick={this.pickRandomStudent} />
        <br/>
        <Toggle />
      </div>
    );
  }
}

export default App;
