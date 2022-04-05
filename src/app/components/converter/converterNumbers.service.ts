import { RomanNumber, ArabicNumber } from './model/NumberConvert';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterNumbersService {
  baseUrl = "/api"

  constructor(private http: HttpClient) {  }

  convertToRoman(value: Number): Observable<RomanNumber> {
    const url = `${this.baseUrl}/arabicToRoman?value=${value}`;
    return this.http.get<RomanNumber>(url);
  }

  convertToArabic(value: String): Observable<ArabicNumber> {
    const url = `${this.baseUrl}/romanToArabic?value=${value}`;
    return this.http.get<ArabicNumber>(url);
  }



}
