import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { Report } from './model/report'
import { DateTime } from "luxon";
import {MatTabsModule} from '@angular/material/tabs'
import { ItemComponent} from './components/item/item.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormatdatePipe } from './pipes/formatdate.pipe'
import { ExamplesComponent } from './components/examples/examples.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    ItemComponent,
    //FormatdatePipe,
    //BrowserAnimationsModule
    ExamplesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = '18-3';
  baseurl: string = 'http://localhost:4200/api/'
  //jsonarray: Array<any> = [{'id':9}]
  jsonarray: Array<Report> = [new Report()]
  working: boolean = false
  error: boolean = false;
  //reportform //= this.formsbuilder.group(new Report())
 // @Input() public reportform:Report
  @Output() count:number=0

  constructor(private formsbuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {

    //this.reportform = this.formsbuilder.group(new Report())
    this.getindex() 
  }

  settime(milli:number):string {
    return DateTime.fromMillis(Number(milli)).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)
}

getindex() {
this.error = false
console.log(this.baseurl+ '?file=index.dat&action=index')

this.http.get<any>(this.baseurl + '?file=index.dat&action=index')
    .subscribe({
    next: (result: any) => {
      this.jsonarray = []
      console.log('index subscribe:',result)
      

      for (let item of result) {
        this.jsonarray.push(JSON.parse(item))
        }
      this.count=this.jsonarray.length
      console.log('XXapp.component.getimdex:',this.count)
      //this.jsonarray=this.jsonarray.filter((val)=>{true})
      //let array=this.jsonarray.filter((val)=>{console.log('ZZ',val.creationdate);return val.creationdate==12345678})
      //let array=this.jsonarray.filter((val)=>{console.log('ZZ',val.creationdate);return false})
      //let array=this.jsonarray.filter((val)=>{return val.creationdate==12345678;console.log('ZZ',val.creationdate)})
      this.jsonarray=this.jsonarray.filter((val2)=>{return val2.creationdate==12345678})
      console.log('YYthis.jsonarray',this.jsonarray,this.jsonarray.length)
      //console.log('array',array,array.length)
    },
    error: (err: any) => {
      this.error = true
      this.working = false
    },
    complete: () => {
      this.working = false
    }
  });                                           
}

put (form: any) {
  this.working=true
  console.log('form:',form.value)
  
  //console.log('put',form.value)
  this.http.put<any>(this.baseurl + '?file=' + form.value.id, JSON.stringify(form.value))
  .subscribe((data) => {

    
    console.log('app.component.put:',data)

   
    this.working = false
    this.getindex()
    return data
  })
  
}
open(time:any){
  console.log('time:',time)
}
}
