import React, { Component } from 'react';
import download from '../../assests/images/download-doc.svg';
import Data from '../../assests/data/data.json';

export default class csv extends Component {

    state ={
    data: Data
    }

exportCSV()
  {
    let csvRow=[];
    let tempData=[['ID','FirstName','LastName','address', 'state', 'pincode']];
    let res = this.state !== null ? this.state.data:[];
    if(res !== undefined)
    {
      if(res.length > 0)
      {
        for(let item=0; item < res.length;item++)
        {
            tempData.push([res[item].firstname,
                res[item].lastname,
                res[item].address,
                res[item].state,
                res[item].pincode,
              ]);
        }

        for(let i=0; i<tempData.length;++i)
        {
           csvRow.push(tempData[i].join(","));
        }

        let csvString=csvRow.join("%0A");
        let a=document.createElement("a");
        a.href='data:attachment/csv.'+csvString;
        a.target="_Blank";
        a.download="Information.csv";
        document.body.appendChild(a);
        a.click(); 
      }
    }
  }

    render() {
        return (
            <div>
                <label>Download CSV file</label> &nbsp;&nbsp;
             <img alt="download" onClick={()=>{this.exportCSV()}} src={download} style={{height:'32px',width:'32px',cursor:'pointer'}}/>
            </div>
        )
    }
}
