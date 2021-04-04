import React,{Component} from 'react';
import './App.css';


class App extends Component {
    state = {
      name: "",
      rollno: "",
      list:[{"name": "Tien","rollno":"0"}]
    }

    componentDidMount = () => {
      fetch('http://OctankAppTier-931399693.us-east-1.elb.amazonaws.com',{
        method: "GET",
        headers: {"Content-Type": "application/json"}
      })
      .then(res => res.json())
      .then(data => this.setState({list: data}))
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
      fetch('http://OctankAppTier-931399693.us-east-1.elb.amazonaws.com',{
        method: "GET",
        headers: {"Content-Type": "application/json"}
      })
      .then(res => res.json())
      .then(data => this.setState({list: data}))
    }

    sendingForm = (data) => {
      console.log(data.name)
      fetch('http://OctankAppTier-931399693.us-east-1.elb.amazonaws.com', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(info => console.log(info))
    }

    getColumns = () => {
      if(this.state.list[0] != null){
        return Object.keys(this.state.list[0]).map((key) => {
          return {
            Header: key,
            accessor: key
          };
        });
      }
    }

    renderTableData() {
       return this.state.list.map((student, index) => {
          const { name, rollno } = student //destructuring
          return (
             <tr key={rollno}>
                <td>{name}</td>
                <td>{rollno}</td>
             </tr>
          )
       })
    }

    renderTableHeader() {
       let header = Object.keys(this.state.list[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }

    render(){
      console.log(this.state.list)
    return (

    <div className="App">

      <table id='student'>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>


      <form onSubmit={this.handleSubmit} >

        <div className='name'>
          <label htmlFor='name'>Enter Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        </div>

          <div className='rollno'>
            <label htmlFor='rollno'>Enter Roll-no:</label>
            <input type='text' name='rollno' value={this.state.rollno} onChange={this.handleChange}/>
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
