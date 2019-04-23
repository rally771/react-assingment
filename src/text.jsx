import React, { Component } from 'react'
export default class Text extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    findingString = (e) => {
        e.preventDefault();
        const textarea = this.state.textarea;
        const string = this.state.textbox;
        let sentence = [];
        let i = 0;
        let position = textarea.indexOf(string);
        let sentences = textarea.split("\n");
        // const sentenceArray = Object.keys(sentences).map(i => sentences[i]);
        // console.log("sentence in textarea",typeof(sentences));
        // console.log("sentence in string",typeof(sentenceArray));
        // console.log("sentence in textarea",sentences);
        // console.log("sentence in textarea",sentenceArray);

        const keys = Object.values(sentences)
for (const key of keys) {
  i++;
  // console.log("for loop keys",key)
  let keyvalue = key.split(" ");
  console.log("keyvalue",keyvalue);
  let keyvalues = Object.values(keyvalue);
  console.log("keyvalues",keyvalues)
  for(const keyval of keyvalues){
    if (keyval === string) {
      var themainvalue = "the word " + string +"is in line no " + i;
      document.getElementById("mainh1").innerHTML= themainvalue;
    }
    else{
      console.log("key values inside if", typeof(string),string)
      console.log("not found in line no ",i)
    }
    
  }
  
}

        
        //  console.log("position of string in textarea",position);

        //  for(sentence in sentenceArray){
        //    console.log(sentence);
        //  }

         





        // // while(countLine < position){
        // //  let countLine1 = textarea.indexOf("\n", countLine + 1);
        // //  countLine = countLine1;
        // //  console.log("counting line " , countLine1);
        // //  count++;
        // // }
        // console.log("line of string is :", count);


    // //determine what the fontsize will be
    // let fontsize = 12;
    // //get number of characters that can fit in a row
    // let charsperrow = textarea.clientWidth / fontsize;
    // //get any hard returns
    // let hardreturns = textarea.textContent.split(/\r|\r\n|\n/);
    // let rows = hardreturns.length;
    // //loop through returns and calculate soft returns
    // for(let i = 0,len = rows; i < len; i++){
    //     let line = hardreturns[i];
    //     let softreturns = Math.round(line.length / charsperrow);
    //     //if softreturns is greater than 0, minus by 1 (hard return already counted)
    //     softreturns = Math.round(softreturns > 0 ? (softreturns - 1) : 0);
    //     rows += softreturns;
    // }
    // console.log(Math.round(rows));




        
    }

  render() {
    // console.log(this.state,"this.state")
    return (
      <div className="form-main"> 
        <form onSubmit = {this.findingString}>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label><br/>
                <textarea   className="form-control text-area-form" name = "textarea" onChange = {this.handleChange} id="exampleFormControlTextarea1" rows="3" cols="40"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="inputtext"></label><br />
                <input onChange = {this.handleChange} name = "textbox" className="form-control text-form" id="inputtext" type="text" placeholder="Default input" />
            </div>
            <button type="button" onClick = {this.findingString} className="btn btn-primary button">Find Text</button>
        </form>
        <h1 id ="mainh1"></h1>
      </div>
    )
  }
}