import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<H1>name {{name}}</H1>
    <p>email {{email}}</p>
    <p>Address {{address.street}} {{address.city}} {{address.state}} {{address.zip}}</p>
    <button (click) = "toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
    <div *ngIf = "showHobbies">
        <ul>
            <li *ngFor = "let Hobby of hobbies;let i = index">{{Hobby}} <button (click) = "deleteHobby(i)">X</button></li>
        </ul>
        <form (submit) = "addHobby(Hobby.value)">
            <label>Add Hobby </label><input type = "text" #Hobby> <br /> 
        </form>
    </div>
    <H3>Edit User</H3>
    <form>
        <label>Name: </label>
        <input type = "text" name = "name" [(ngModel)] = "name"/> <br />
        <label>Email: </label>
        <input type = "text" name = "email" [(ngModel)] = "email"/> <br />
        <label>Street: </label>
        <input type = "text" name = "address.street" [(ngModel)] = "address.street"/> <br />
        <label>City: </label>
        <input type = "text" name = "address.city" [(ngModel)] = "address.city"/> <br />
        <label>State: </label>
        <input type = "text" name = "address.state" [(ngModel)] = "address.state"/> <br />
        <label>Zip: </label>
        <input type = "text" name = "address.zip" [(ngModel)] = "address.zip"/> <br />
    </form>
    `,
})
export class UserComponent  { 
    name : string;
    email : string;
    address : address;
    hobbies : string[];
    showHobbies : boolean;
    constructor()
    {
        this.name = 'Angular';
        this.email = "Angular2@gmail.com";
        this.address = 
        {
        street : '18 main road',
        city : 'Wakanda',
        state : 'Slokovia',
        zip : '78787878'
        };
        this.hobbies = ['cricket','football'];
    }
    toggleHobbies()
    {
        if(this.showHobbies == true)
        {
            this.showHobbies = false;
        }
        else{
            this.showHobbies = true;
        }
    }
    addHobby(Hobby : string)
    {
        this.hobbies.push(Hobby);
    }
    deleteHobby(i : number)
    {
        debugger;
        this.hobbies.splice(i,1);
    }
}
interface address {
    street : string;
    city : string;
    state : string;
    zip : string
};
