import {Component} from "angular2/core";

@Component({
    selector : "ngforwithindex",
    template :`

        <ui *ngFor="#course of cources,#i=index">
            <li>({{i+1}}) --- {{course}}</li>
        </ui>
    `
})
export class NgForWithIndex{
    cources = ['Course 1','Course 2','Course 3','Course 4'];
}