import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  theimagearr=["../../assets/tm1.jpg","../../assets/tm2.jpg","../../assets/tm3.jpg","../../assets/tm4.jpg","../../assets/tm5.jpg","../../assets/tm6.jpg"];
}
