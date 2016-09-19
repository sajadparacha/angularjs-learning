import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {TweetComponent} from './tweet.component'
import {IfConditionRuleConponent} from './if-condition.component'
import {SwitchConditionComponent} from './switchcondition.component'
import {NgForWithIndex} from './ngforwithindex.component'
import {UsingPipe} from './usingpipe.component'
import {ComponentUsingCutomePipe} from './componentusingcutomepipe.component'
import {FavoriteUsingNgClass} from './favoriteusingngclass.component'
import {NullChecksUsingELVISOperator} from './nullchecksusingelvisoperator.component'
import {UsingNgContent} from './usingngcontent.component'
import {ZippyComponent} from './zipppy.component'
import {ContactFormComponent} from './contact-form.component'




@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
<h1>Contact form</h1>
<contact-form></contact-form>
<h1>Contact form</h1>

  <zippy title="Title of the accordian component">
    body of the 1st accordian componenet
  </zippy>  
  <zippy title="Title of the accordian component">
    body of the 2nd accordian componenet
  </zippy>  
 <!-- the content inside this tag will be placed where the ng-contant tag is used look at the related component class -->
 <usingngcontent>
 <div class="body">
 This is Body!
 </div>
 <div class="heading">
 This is Heading
 </div>
 </usingngcontent> 
 
 <nullchecksusinglvsoperator></nullchecksusinglvsoperator>   
<favoriteusingngclass></favoriteusingngclass>    
<h2>Component Using cutome pipe </h2>
<componentusingcutomepipe></componentusingcutomepipe>
<h2>Component Using cutome pipe</h2>

<h2>Using pipe in a component </h2>
<usingpipe></usingpipe>
<h2>Using pipe in a component</h2>

<h2>NGFor loop testing with index </h2>
<ngforwithindex></ngforwithindex>
<h2>NGFor loop testing with index</h2>

<h2>Switch Condition Component testing</h2>
<switch></switch>
<h2>Switch Condition Component testing</h2>
<condition></condition>                
                <tweet></tweet>

                <courses></courses>
                <authors></authors>
<i class="glyphicon glyphicon-star" ></i>
               <!--Property binding for an input property-->
                <!--Event binding of an output event -->
                <favorite [is_favorite]="post.isFavorite" (change)="favoriteChanged($event)"></favorite> 
                <like></like>
                <vote 
                [myvote]="post.myvote"
                [totalVoteCount]="post.totalVoteCount"
                (vote)="onVote($event)"
                ></vote>
                
                
                `,
    directives:[ContactFormComponent,ZippyComponent,UsingNgContent,NullChecksUsingELVISOperator,FavoriteUsingNgClass,ComponentUsingCutomePipe,UsingPipe,NgForWithIndex,SwitchConditionComponent,IfConditionRuleConponent,TweetComponent,CoursesComponent,AuthorsComponent,FavoriteComponent,LikeComponent,VoterComponent]
    //**Since we have added directives in our template we 
    //**need to tell Angularjs about the corresponding 
    //**componenets of these directives (if we don't do that application will run fine but will not be able to shw us the content of the missed directives)
    /**
     * When I ran this applicaiton I missed adding AuthorsComponent directives
     so my directive definition was

      directives:[CoursesComponent]

      The applcaition compiled fine but I was not able to see the list of authors
      so than I came back and realized that I had missed Authors Component
      By adding the missing directive I was able to see the authors list

       directives:[CoursesComponent,AuthorsComponent]


     */
})
export class AppComponent { 

  post={
    title:'Input Property',
    isFavorite:false,
    totalVoteCount:10,
    myvote:0
  }


favoriteChanged($event){
 console.log($event);
}

onVote($event){
  console.log($event);
}
}