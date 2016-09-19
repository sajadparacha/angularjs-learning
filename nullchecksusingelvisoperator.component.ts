import {Component} from 'angular2/core';
@Component({

    selector:'nullchecksusinglvsoperator',
    template:`
        <h1>Null Check using ELVIS operator</h1>
        <h2>Title: {{post.title}}</h2>
        <!-- ?. is the ELVIS operator which means display empty string if the object is null -->
        <h2>Name: {{post.assignee?.name}}</h2>
        <h2>Department: {{post.assignee?.department}}</h2>
        <h2>Address: {{post.address}}</h2>
        <h1>Null Check using ELVIS operator</h1>
    `
})

export class NullChecksUsingELVISOperator{
   //**Example of a nested JSON object
    post={
        title:"Angular js course",
        assignee : null/*{
            name: "Sajjad Ahmed Paracha",
            department : "PEASD DWSD"   
        }*/,
        address:"Khobar" 

    }
}