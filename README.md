# AngularWeblog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` (via `npm start`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Building for GitHub Pages
See: https://angular.io/guide/deployment#deploy-to-github-pages

`ng build --prod --output-path docs --base-href /weblog/`

Make a copy of docs/index.html and name it docs/404.html.
Commit your changes and push.
On the GitHub project page, configure it to publish from the docs folder.
You can see your deployed page at https://jamiestevenson.github.io/weblog/.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dependencies

### ngx-markdown

https://daviddalbusco.medium.com/add-a-blog-to-your-angular-website-using-markdown-files-31cdb0627bdd
https://github.com/jfcere/ngx-markdown

### markdown

A dependency for ngx-markdown
https://github.com/markedjs/marked

## ng update

To run `ng update` use `npm run ng update`

You will probably need to use `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser` in powershell to run this update then
`Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser` to restore the default setting.