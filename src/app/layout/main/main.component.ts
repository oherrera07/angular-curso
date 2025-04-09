import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinksComponent } from "../../design/links/links.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, LinksComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
