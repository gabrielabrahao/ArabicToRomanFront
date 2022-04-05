import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converter-crud',
  templateUrl: './converter-crud.component.html',
  styleUrls: ['./converter-crud.component.scss']
})
export class ConverterCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/converter']);
  }

}
