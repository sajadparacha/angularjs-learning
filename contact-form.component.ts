import {Component} from "angular2/core";
//import {FavoriteComponent} from "./favorite.component"
@Component({
    selector : 'contact-form',
    templateUrl :'./app/contact-form.componenet.html'
   /*,
directives:[FavoriteComponent]
 */
})


export class ContactFormComponent{
 log(firstName){
     console.log(firstName);
 }
}