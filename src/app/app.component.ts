import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { LucideAngularModule, Bed, Info } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Menubar,
    LucideAngularModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'boraxpr-blog';
  readonly BedIcon = Bed;
  readonly InfoIcon = Info;
  items: any[] = [
    { label: 'Home', icon: 'bed', routerLink: '/' },
    { label: 'About', icon: 'info', routerLink: '/about' },
  ];
}
