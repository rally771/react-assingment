import React, { Component } from 'react'
export default class Text extends Component {
  constructor(props){
    super();
    this.state = {
      textarea : '', //Save state of paragraph
      textbox  : '',//Save state of input
      found : [],//if found save values
      notfound:'',//output for notfound
      stringvalue:[]//to display sentence
    }
    this.baseState = this.state ={
      found : [],//if found save values
      notfound:'',//output for notfound
      stringvalue:[]//to display sentence
    }
  }
  resetForm = () => {
    this.setState(this.baseState)
  }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }

    findingString = async (e) => {
        e.preventDefault();
        const textarea = this.state.textarea;
        const string = this.state.textbox;
        let i = 0;
        let sentences = textarea.toLowerCase().split("\n");// split the object from endline
        let multiplestring = string.toLowerCase().split(" ");// split inut search word to search mutiple words
        
        console.log(multiplestring);
        const keys = Object.values(sentences) // got values from the splitted sentence
for (const key of keys) {
  i++;
  
  let keyvalue = key.split(" "); // get words from sentence
  console.log("keyvalue",keyvalue);
  let keyvalues = Object.values(keyvalue); //save values 
  
  let multiplestringvalues = Object.values(multiplestring); // for multiple words
  for(const keyval of keyvalues ){ //
    for(const multiplestringval of multiplestringvalues){
    if (keyval === multiplestringval) {
      await this.setState({
       found : this.state.found.concat(i),
         stringvalue :this.state.stringvalue.concat( Object.values(sentences)[i-1]) // to display sentence 
      });
     
      console.log("sentence" ,Object.entries(sentences)[i-1]); // to display sentence 
      console.log("founded at", this.state.found)
    }
    else{
      
    }
  }
  }
  await this.setState({
        notfound : this.state.notfound.concat("not found")
       });
  
}
        
    }

  render() {
    const { found } = this.state;
    const { notfound } = this.state;
    const { stringvalue } = this.state;
    // console.log(this.state,"this.state")
    return (
      
      <div className="form-main"> 
      
        <form onSubmit = {this.findingString}>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Please Enter The Paragraph with endline </label><br/>
                <textarea value = {this.state.textarea}  className="form-control text-area-form" name = "textarea" onChange = {this.handleChange} id="exampleFormControlTextarea1" rows="3" cols="40"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="inputtext">Please enter words to search for</label><br />
                <input onChange = {this.handleChange} value = {this.state.textbox} name = "textbox" className="form-control text-form" id="inputtext" type="text" placeholder="Default input" />
            </div>
            <button type="button" onClick = {this.findingString} className="btn btn-primary button">Find Text</button>
            <button type="button" onClick = {this.resetForm} className="btn btn-primary button clear-button">Clear Search Results</button>
            <br/>
            <div className="resume"><a href ="https://drive.google.com/open?id=1L49lOZZVbAFz9yJG2BaMKMmHe8gTvtM7">Download Resume</a></div>
        <br/>
        </form>
        
        {
          found.length > 0 ? 
            <p id ="mainh1">The words found at line {found.map(at => (at + " "))}</p> :
            <p id ="mainh1">{notfound}</p>
        }
        {
          found.length && stringvalue.length> 0 ? 
            found.map(at => <p id ="mainh1">The words  found at {at}</p>) && stringvalue.map(att => <p id ="mainh1"> {att}</p>) :
            <p id ="mainh1">{notfound}</p>
        }
        </div>
     
    )
  }
}
