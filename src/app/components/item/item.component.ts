import { Component, Input, OnInit } from '@angular/core';
import { Report} from '../../model/report'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,
    FormsModule,ReactiveFormsModule
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'

})
export class ItemComponent implements OnInit{
 
 @Input()item:any
 //reportform = this.formsbuilder.group(new Report())
 reportform?:any
 baseurl: string = 'http://localhost:4200/api/'
 working:boolean=false

  constructor(private formsbuilder: FormBuilder,private http: HttpClient ) {}
  //constructor(private formsbuilder: FormBuilder, private http: HttpClient)
  ngOnInit(): void {
    //this.reportform = this.formsbuilder.group(new Report())
   this.reportform=this.formsbuilder.group(this.item)
   this.reportform.value.id='9999'
   this.reportform.value.s01='note 11'
   console.log('this.reportform',this.reportform.value.id)
   console.log('this.reportform',this.reportform.value.s01)
   //this.reportform=this.formsbuilder.group(this.get(this.item.id))
   //
   //let data=this.get(this.item.id)

   //let data=this.get("1234")
  //console.log('this.get(this.item.id):',data)
   // console.log('item:',this.reportform)
  }
  save(form:FormGroup){
    console.log('save',form)
    this.working=true
    console.log('form:',form.value)
    
    //console.log('put',form.value)
    this.http.put<any>(this.baseurl + '?file=' + form.value.id, JSON.stringify(form.value))
    .subscribe((data) => {

      
      console.log('app.component.save:',data)

     
      this.working = false
      //this.getindex()
      return data
    })
  }

  get(id:string):any {
    console.log('GET',id)
    console.log('get(id:string):any:',id)
  //   this.http.get<any>(this.baseurl + '?file=' + id +'&action=cv')
  //   .subscribe((data) => {

      
  //     console.log('app.component.get:',data)
  //     //this.reportform=this.formsbuilder.group(data)

     
  //     this.working = false
  //     //this.getindex()
  //     return data
  //   })
   }
}
