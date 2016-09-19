import {Component} from 'angular2/core'
//**Class name should be correct here , I was using AuthorService instead of AuthorsService and it was giving me error here
import {AuthorsService} from './author.service'
//** Created By Sajjad as a first exercise of this course
@Component({
    selector: 'authors',//now anywheer in your HTML if you have a component calle <authors></authors> it will be replaced by the templete below
    template: `
    <h2>Authors</h2>
    <!--This is called one way binding with introplotation -->
    {{title}}
    <ul>
        <!-- For look syntax -->
        <li *ngFor="#author of authors">
        {{author}}

        </li>
    </ul>
    `,
    //**here you are mentioning what is teh data provider service for this component
    providers : [AuthorsService]
    //**This i s for dependency injection , this tells angularjs how to create the AuthorService (note the import also for the same service)
})

export class AuthorsComponent{
    authors;
    title="Title of the authors page";
    constructor(authorService:AuthorsService){
        this.authors=authorService.getAuthors();
    }
}