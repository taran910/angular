import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit{
  configu:any;
  data:any;
  right_title:any;
  titles=[];
  finalrows=[];
  constructor(private http : HttpClient){
    
}
ngOnInit():void{
  this.http.get('https://private-b02bbd-assignement2.apiary-mock.com/questions')
    .subscribe(Response => {
      this.configu=Response;
      console.log(this.configu);
      this.http.get(this.configu.config.data_source.api)
    .subscribe(Response => {
      this.data=Response;
      console.log(this.data);
      this.right_title=this.data.response.data.section_right_title;
      let k;
      let ab=this.data.response.data;
      for (let r of this.configu.config.main_section_right.rows)
      {
        console.log(r);
        let v=responses(r.rhs,ab);
        if(!responses(r.rhs,ab) || responses(r.rhs,ab)==''){
      

        }
        else{
          this.titles.push(r.lhs);
          this.finalrows.push(v);
        }
        
      }
      console.log(this.titles);
      console.log(this.finalrows)
    });
    });

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
}
}

