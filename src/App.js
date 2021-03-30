import React,{Component} from 'react';
import './App.css';

class App extends Component {
    state = {
      name: "",
      rollno: ""
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
      console.log(this.state);
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.sendingForm(this.state)
    }

    sendingForm = (data) => {
    fetch('http://ec2-3-92-47-162.compute-1.amazonaws.com:3001', {
        method: "POST",
        headers: {
          "Content_Type": 'application/json',
          Accepts: "application/json"
        },
        body: JSON.stringify({data})
    })
    .then(res => res.json())
    .then(console.log())
    }

    render(){
    return (

    <div className="App">
    Hello World
      <form onSubmit={this.handleSubmit}>

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




// constructor(props)
// {
//
//   super(props);
//   this.state={
//     name:'',
//     rollno:''
//   }
// }
//
// handleChange= (event) =>{
//   event.preventDefault();
//   const {name, value} = event.target;
// this.setState({[name]:value});
// console.log(this.state);
// }
//
//   render(){
//   return (
//     <div className="App">
//         <form method='post' action='http://ec2-3-92-47-162.compute-1.amazonaws.com:3001 '>
//             <div className='name'>
//               <label htmlFor='name'>Enter Name:</label>
//               <input type='text' name='name' onChange={this.handleChange}/>
//             </div>
//             <div className='rollno'>
//               <label htmlFor='rollno'>Enter Roll-no:</label>
//               <input type='text' name='rollno' onChange={this.handleChange}/>
//             </div>
//             <div className='submit'>
//               <input type='submit'/>
//             </div>
//         </form>
//
//      </div>
//   );
// }
