import {Component} from "angular2/core";
import {CustomePipe} from './customepipe.pipe'
@Component({
    selector:"componentusingcutomepipe",
    template:`
        <div>{{postForCustomePipeExample.title}}</div>
        <div>{{postForCustomePipeExample.body | summary:200}}</div>
        <!--postForCustomePipeExample.body | summary:200 means pipe should be applied to have a substring of 200 characters for more details see the implementation of pipe-->
    `,
    pipes:[CustomePipe]


})
export class ComponentUsingCutomePipe{
  postForCustomePipeExample={
    title:'Angular Js Course',
    body:`
      Angular 2 is the next big thing. It's one of the leading frameworks for building modern, scalable, cross-platform apps. If you want to establish yourself as a front-end or a full-stack developer, you need to learn Angular 2.
    `

  };


}