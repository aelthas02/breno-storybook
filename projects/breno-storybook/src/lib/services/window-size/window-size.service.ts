import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WindowsSize } from '../../types/window-size.enum';

@Injectable({
  providedIn: 'root',
})
export class WindowsSizeService {
  private sizeSubject = new BehaviorSubject<number>(0);
  public size$: Observable<number>;

  private isMobileSubject = new BehaviorSubject<boolean>(false);
  public isMobile$: Observable<boolean>;

  constructor() {
    this.size$ = this.sizeSubject.asObservable();
    this.isMobile$ = this.isMobileSubject.asObservable();
  }

  setWindowsSize(value: number) {
    this.sizeSubject.next(value);
    this.isMobileSubject.next(this.isMobile());
  }

  isMobile(): boolean {
    return this.sizeSubject.value <= Number(WindowsSize.MAX_WIDTH_MOBILE);
  }
}
