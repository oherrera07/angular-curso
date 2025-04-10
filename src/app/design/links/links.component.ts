import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
  @Input()
  href: string='';
  @Input()
  src: string='';
  @Input()
  alt: string='no description given';
  @Input()
  text: string='no text given';
}
