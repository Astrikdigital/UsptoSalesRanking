import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tracker',
  imports: [RouterOutlet],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css',
  standalone:true
})
export class TrackerComponent {
  @HostBinding('class') class = 'content';
  constructor(private cdRef:ChangeDetectorRef){}
  ngOnInit() {
  }
}
