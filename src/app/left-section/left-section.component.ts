import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit{
  configu:any;
  data:any;
  left_title:any;
  titles=[];
  finalrows=[];
  constructor(private http : HttpClient){
    
}
ngOnInit():void {
  this.http.get('https://private-b02bbd-assignement2.apiary-mock.com/questions')
    .subscribe(Response => {
      this.configu=Response;
      console.log(this.configu);
      this.http.get(this.configu.config.data_source.api)
    .subscribe(Response => {
      this.data=Response;
      console.log(this.data);
      this.left_title=this.data.response.data.section_left_title;
      left_section(this.configu,this.data);
    });
    });
    function left_section(data,data2){
      let i=0;
      document.querySelector('.left_title').innerHTML=`${data2.response.data.section_left_title}`
      let ab=data2.response.data;
       
      for(let r of data.config.main_section_left.rows){
        i++;
        if(!responses(r.rhs,ab) || responses(r.rhs,ab)==''){ 
         
        }
        else{
        if(r.edit){
          console.log("yes")
         
          let row = document.createElement('div');  
          row.className = 'row';
          row.innerHTML = `<div class="col-sm-3">${r.lhs}</div>
                        <!-- <div class="edits${i}" contenteditable= "false" id="edit${i}">${responses(r.rhs,ab)}</div> -->
                        <input class = "edits${i}" disabled = "true" id = "edits${i}" value = "${responses(r.rhs,ab)}" >
                        
                        <input  type= "button" value = "edit" id='thisis${i}'>
                        <button id='btn${i}' value='${i}' (click)='show(${i},"${r.lhs}")'>Save</button> 
                        <div><br>
                        <br></div>`;
          document.querySelector('.container-left').appendChild(row);
          document.getElementById(`edits${i}`).setAttribute("type",r.edit.data_type);
          document.getElementById(`thisis${i}`).addEventListener("(click)",editl(i));
        //document.getElementById("btn").addEventListener("onclick", show());
      } 
        else{
        let row = document.createElement('div');  
        row.className = 'row';
        row.innerHTML = `<div class="col-sm-6">${r.lhs}</div>
                        <div class="col-sm-6">${responses(r.rhs,ab)}</div>
                        <div><br>
                        <br></div>`;
        document.querySelector('.container-left').appendChild(row);
      }}}
    function responses(rhs,ab){
      let v = ab;
      if(rhs.includes('.')){
        for(let item of rhs.split('.')){
          v = v[item];
        }
      } else{
        v = v[rhs];
      }
      return v;
    }
    function editl(no){
      console.log('hiii');
      document.getElementById(`edits${no}`).disabled = false;
    }
}

}}
