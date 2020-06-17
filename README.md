# NgDirectives

This library is Ivy Compatible and is tested against an Angular 9 app. 

* A collection of `directives` to be used with Angular app to give additional functionality which will help to avoid wrong inputs
* It is developed using `Angular >=9.0.0` and its newly introduced `ng g library` schematics.
* This library is part of NgDirectives project and it is generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.
* Library location: `projects/ng-directives` directory of this repository.

## Examples/Demo

* A simple Example can be found under `src/app` directory of this repository. 

## Installation

`npm i ng-directives`

****
`import { NgDirectivesModule } from "ng-directives";`<br>

## Directive List 

| selector          |                 Description                     |  
| ------------------| :---------------------------------------------: |
| `ngDirNumberOnly` | Allow only number in input (on type and paste)  | 



## Usage

1) Register the `NgDirectivesModule` in your app module.
 > `import { NgDirectivesModule } from "ng-directives";`

 ```typescript
 import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgDirectivesModule } from "ng-directives";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgDirectivesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

 ```

 2) Use the directive `(NgDirectives)` in your component.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "ng-dir-root",
  template: `<form>
  <div class="form-group">
    <label for="age">Age</label>
    <input ngDirNumberOnly type="text" class="form-control" id="age">
  </div>
</form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
}
```

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build the NgDirectives module

Run `ng build NgDirectives` to build the library. The build artifacts will be stored in the `dist/ng-directives` directory. Use the `--prod` flag for a production build.


## Credits

I want to thanks entire [Angular](https://angular.io) team for creating this awesome framework.
