import { RomanNumber, ArabicNumber } from './model/NumberConvert';
import { ConverterNumbersService } from './converterNumbers.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(
    private converterNumbersService: ConverterNumbersService
  ) {

  }

  valueArabic: String = "";
  valueRoman: String = "";

  valueArabicChanged:  any;
  valueRomanChanged:  any = "";


  ngOnInit(): void {
  }

  public convertToRoman()  {
    if(!this.valueArabic) {
      return window.alert('Informar Um valor.');
    }
    this.converterNumbersService.convertToRoman(parseInt(this.valueArabic.toString()))

    .subscribe((romanNumber: RomanNumber) => {
        this.valueRomanChanged = romanNumber.romanNumber;
        this.valueArabic = "";
      },
      error => {
        window.alert(error.message);
    });


  }

  public convertToArabic(){
    if(!this.valueRoman) {
     return window.alert('Informar Um valor.');
    }
   this.converterNumbersService.convertToArabic(this.valueRoman.toUpperCase()).subscribe((arabicNumber: ArabicNumber) => {
      this.valueArabicChanged = arabicNumber.arabicNumber?.toString();
      this.valueRoman = "";
    },
      error => {
        window.alert(error.message);
    });

  }


}
