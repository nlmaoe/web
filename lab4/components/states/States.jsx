import React from 'react';
import './States.css';

class States extends React.Component {
  constructor(props) {
    super(props);
    // console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state = {
      name : window.cs142models.statesModel(),
      search : "",
      info : '',
      statesAfterFilter : null
    };
    this.arr = [];
    this.sub = this.sub.bind(this);
  }

    sub(){
      
      if(this.state.search){
        this.arr = [];
        
        for(var i=0;i<this.state.name.length;i++){
          if(this.state.name[i].toLowerCase().includes(this.state.search.toLowerCase())){
            this.arr.push(this.state.name[i]); 
        }
      }
      if(this.arr.length==0){
        this.setState({info : "No Matching states"});
      }else {
        this.setState({info : "Matching states"});
      }
    }else {
      this.setState({info : "Matching states"});
      this.arr = this.state.name;
    }

    // this.setState({statesAfterFilter : arr});
  }

  handleChange2(event){
    this.setState({search : event.target.value});
    this.sub();
  }

  render() {
    return (
      <div className="container">
        <div className="one">
        <h3 className="list">All States</h3>
          <div >
            {this.state.name.map(item=>(
              <p className="c" key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="two">
          
            <span>Search : <input className="input" type="text" value={this.state.search} onChange={(event)=>this.handleChange2(event)}/></span>
         
          
          </div> 
          <div className="three">
          <h3 className="list">{this.state.info}</h3>
          <div>
            {this.arr.map(item=>(
              <p className="c" key={item}>{item}</p>
            ))}
          </div>
          </div>
      </div>

    );
  }
}

export default States;
