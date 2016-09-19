import {Component} from "angular2/core";

@Component({
    selector : 'usingngcontent',
    template :
    `
    <h2>Using ng content to place any content in div from another component</h2>
    <div class="panel panel-default">
  <div class="panel-heading">
  <ng-content select=".heading"></ng-content>
  </div>
  <div class="panel-body">
   <!--This means that any component with class "body" will be placed here -->
    <ng-content select=".body"></ng-content>
  </div>
</div>
<h2>Using ng content to place any content in div from another component</h2>

`
 
})


export class UsingNgContent{

}