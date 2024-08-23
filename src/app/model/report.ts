import { v4 as uuidv4} from 'uuid'

export class Report {
    id:string=uuidv4()
    creationdate?:number= Date.now()
    s01?:string='s01'
    s02?:string=''
}
