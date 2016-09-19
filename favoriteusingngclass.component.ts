import {Component,Input,Output,EventEmitter} from 'angular2/core'
@Component({
    selector : "favoriteusingngclass",
    /*
    Don't delete below lines , these are to be used to define inline templates
    Inline templates are good if small.
    However if the HTML code grows it's better to create a new HTML file like favorite.template.html for better sepration of concerns

     */
    // template:`
    // <h2>Favorite Component 3453456</h2>
    // <i class="glyphicon"
    // [class.glyphicon-star-empty]="!isFavorite"
    // [class.glyphicon-star]="isFavorite"
    // (click)="onClick()"
    // ></i>
    // `
    template:`
    <h2>Favorite Component  using ngclass</h2>
     <i class="glyphicon"
     [ngClass]="{
         'glyphicon-star-empty':!isFavorite,
         'glyphicon-star':isFavorite
     }"
     (click)="onClick()"
     ></i>
     <h2>Favorite Component  using ngclass</h2>
 
    `
})
export class FavoriteUsingNgClass{
//**declaring a variable as input property which is visible to the any object of this component    
//**Declaring an input paramete with a different name to outer world
@Input('is_favorite') isFavorite =true;
//**Publish an output event
@Output() change=new EventEmitter();
//**Declaring an input parameter as it is
//@Input('is_favorite') isFavorite =false;

 onClick(){
     this.isFavorite=!this.isFavorite;
     //**Call the change event when the favorite is cicked
     this.change.emit({newValue:this.isFavorite});
 }
}