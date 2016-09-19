import {Component} from 'angular2/core';

@Component({
    selector : 'condition',
    template : `
    <!-- ngIf statement will remove an element from the dom if the expression it has evaluate to false -->
    <!--
        <h3> List of cources with if condition</h3>
        <div *ngIf="cources.legth >0">
            Many cources to display here
        </div>

        <div *ngIf="cources.length==0">
            NO COURCES TO DISPLAY HERE
        </div>
        -->
 <!--hidden property binding will include the element in dom but make it as hidden -->        
<!--Using hidden property -->
      <h3> List of cources with if condition</h3>
        <div [hidden]="cources.length== 0">
            Many cources to display here dsdsadas
        </div>

        <div [hidden]="cources.length > 0">
            NO COURCES TO DISPLAY HERE 32432
        </div>
    `
})

export class IfConditionRuleConponent{

  cources=[];
}