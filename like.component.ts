import {Component,Input,Output,EventEmitter} from 'angular2/core'
@Component({
    selector : "like",
    /*
    Don't delete below lines , these are to be used to define inline templates
    Inline templates are good if small.
    However if the HTML code grows it's better to create a new HTML file like favorite.template.html for better sepration of concerns

     */
    // template:`
    // <h2>Favorite Component 3453456</h2>
    // <i class="glyphicon"
    // [class.glyphicon-star-empty]="!isLiked"
    // [class.glyphicon-star]="isLiked"
    // (click)="onClick()"
    // ></i>
    // `
    templateUrl:'app/like.template.html',
    styles:[`
        .glyphicon-heart {
            color : deeppink;
            cursor : pointer;
        }
        .glyphicon-heart-empty {
            color : GREEN;
        }
    `]
})
export class LikeComponent{
//**declaring a variable as input property which is visible to the any object of this component    
//**Declaring an input paramete with a different name to outer world
@Input('is_liked') isLiked =false;
//**Publish an output event
@Output() change=new EventEmitter();
//**Declaring an input parameter as it is
//@Input('is_favorite') isLiked =false;
noOfLikes=10;
 onClick(){
     this.isLiked=!this.isLiked;
     if(this.isLiked==true){
         this.noOfLikes=11;
     }else{
         this.noOfLikes=10;
     }
     //**Call the change event when the favorite is cicked
     this.change.emit({newValue:this.isLiked});
 }
 onmouseover($event){
     $event.t
 }
}