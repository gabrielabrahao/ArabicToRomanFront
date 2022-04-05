import { RomanNumber, ArabicNumber } from './model/NumberConvert';
import { ConverterNumbersService } from './converterNumbers.service';
import { Component, OnInit } from '@angular/core';

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

  valueArabic: String = "2";
  valueRoman: String = "";

  valueArabicChanged:  any;
  valueRomanChanged:  any = "";


  ngOnInit(): void {
  }

  public convertToRoman()  {
    this.converterNumbersService.convertToRoman(parseInt(this.valueArabic.toString())).subscribe((romanNumber: RomanNumber) => {
        this.valueRomanChanged = romanNumber.romanNumber;
        this.valueArabic = "";
        console.log(this.valueRomanChanged);
      }
    );
  }

  public convertToArabic(){
   this.converterNumbersService.convertToArabic(this.valueRoman.toUpperCase()).subscribe((arabicNumber: ArabicNumber) => {
      this.valueArabicChanged = arabicNumber.arabicNumber?.toString();
      this.valueRoman = "";
      console.log(this.valueArabicChanged);
    });
  }


}
