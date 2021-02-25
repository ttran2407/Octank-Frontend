import React,{Component} from 'react';
import './App.css';

class App extends Component {

constructor(props)
{

  super(props);
  this.state={
    name:'',
    rollno:''
  }
}

handleChange= (event) =>{
  event.preventDefault();
  const {name, value} = event.target;
this.setState({[name]:value});
console.log(this.state);
}

  render(){
  return (
    <div className="App">
        <form method='post' action='internal-OctankAppTier-628124198.us-east-1.elb.amazonaws.com'>
            <div className='name'>
              <label htmlFor='name'>Enter Name:</label>
              <input type='text' name='name' onChange={this.handleChange}/>
            </div>
            <div className='rollno'>
              <label htmlFor='rollno'>Enter Roll-no:</label>
              <input type='text' name='rollno' onChange={this.handleChange}/>
            </div>
            <div className='submit'>
              <input type='submit'/>
            </div>
        </form>

     </div>
  );
}
}
export default App;
