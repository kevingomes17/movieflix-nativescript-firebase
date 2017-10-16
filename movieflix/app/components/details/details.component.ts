import { Component, Input } from "@angular/core";
import { Movie } from "../../vm";

@Component({
    selector: 'details',
    templateUrl: './components/details/details.component.html'
})
export class DetailsComponent {
    @Input()
    movie: Movie;
}