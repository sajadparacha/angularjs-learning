import {Component,Input} from "angular2/core";

@Component({
    selector: "zippy",
    template :`
    <div>
        <div class="zippy-title" (click)="toggle()"
            
        >
        {{title}}
        <!-- pull-middle is a bootsrap style which will tell the icon to be in the middle , glyicon is the bootstrap base claas -->
        
        <i class="pull-middle glyphicon"
            [ngClass]="{
                'glyphicon-chevron-down':!isExpanded,
                'glyphicon-chevron-up':isExpanded
            }"
        ></i>
<!--ngclass above will apply the appropriate class based on the value of isExpanded variable  -->
        </div>
        <!--Because of the *ngif if teh value of isExpanded=true the below div will be shown otherwise it will be hidden-->
        <div *ngIf="isExpanded" class="zippy-content">
            <ng-content></ng-content>
        </div>

    </div>   
    
    `,

})
export class ZippyComponent{

    isExpanded=false;
    @Input() title : string;
    toggle(){
        this.isExpanded=!this.isExpanded;
    }
}