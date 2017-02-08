import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'hello';

    onButtonClick() {
        this.title = 'Helo from kendo UI';
    }
}

