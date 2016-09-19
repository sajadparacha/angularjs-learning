import {Component} from 'angular2/core';

@Component({

    selector:'usingpipe',
    template:`
        
            {{course.title | uppercase}}<br/>
            {{course.noOfStudent | number:'2.2-2'}}<br/>
            <!--2.2-2 means min 2 initial digits and after decimal point max 2 and minimum 2 digits-->
            
            {{course.price | currency:'AUD':true:'2.2-2'}}<br/>
            <!-- 'PKR' is the currency , true means we want to see currency symbol , 2.2-2 is decimal formating   -->
           <!-- {{course.date | date:'mm yyyy'}}<br/> -->
            {{course | json}}<br/>
            
    `

})
export class UsingPipe{
    course={
        title:' Angular js',
        noOfStudent : 12345,
        price:20.789,
        date:'9-4-2016'

    }
}