import {Pipe,PipeTransform} from 'angular2/core',
@Pipe({
    name:'summary'
})
export class CustomePipe implements PipeTransform{
  limit=0;
  transform(value:string,args:string[]){
     this.limit=(args && args[0])?parseInt(args[0]):0;
      if(value.length>this.limit){
          return value.substr(0,this.limit)+".....";
      }
  }  
}