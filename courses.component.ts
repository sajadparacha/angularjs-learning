import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
//import {FavoriteComponent} from './favorite.component'
@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        <input type="text" autoGrow/>
        <button class="btn btn-primary "
        [style.backgroundColor]="isActive ? 'BLUE':'GRAY'"
        >Submit</button>
        <!-- CSS Style binding 
        [] is used for property binding
        () is used for event binding
        change the value of isActive=true;
        to test this example
         -->
 <div (click)="onDivClick($event)">
 <button (click)="onClick($event)"
        
        >Submit With event binding</button>
</div>
<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>

<strong>Two Way Binding Example</strong>
<input type="text" [value]="twoWayBindedText" 
(input)="twoWayBindedText=$event.target.value"/>
<!-- We are using inline code here however the 
best practice is to use function here 
because we want to have our component easily testable -->

<input type="button" (click)="twoWayBindedText=''" value="Clear"/>
Priview : {{twoWayBindedText}}

<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>
<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>

<strong>Two Way Binding Example Using ngModel</strong>
<input type="text" [(ngModel)]="twoWayBindedTextUsingNgModel" />

<input type="button" (click)="twoWayBindedTextUsingNgModel=''" value="Clear"/>
Priview : {{twoWayBindedTextUsingNgModel}}

<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            <li>
        </ul>
        `,
        providers : [CourseService],
        directives : [AutoGrowDirective]
})
export class CoursesComponent{
 title = "Title of the courses page";
 twoWayBindedText="Hello Two Way Binding";
 twoWayBindedTextUsingNgModel="Hello Two Way Binding Using ngModel";
 courses ;
 isActive=true;
 constructor(courseService:CourseService){
     this.courses=courseService.getCourses();
 }
onDivClick ($event){
    console.log("Handled by Div "+$event);
}
 onClick ($event){
     //** getting the event information inside the event handler
     console.log('Button Clicked '+$event);
     //**Means dont call the click event of the parent object    
     $event.stopPropagation();

 }

}