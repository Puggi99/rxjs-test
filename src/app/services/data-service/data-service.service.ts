import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterValue } from 'src/app/model/counter-value';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //public counterValues: CounterValue[] = [{ value: 0, changes: 0, type: 'start' }];

  public counterValuesSubject: BehaviorSubject<CounterValue[]> = new BehaviorSubject([{ value: 0, changes: 0, type: 'start' }])

  constructor() {}

  increment() {
    const counterValuesArray = this.counterValuesSubject.value // valore attualmente dentro
    const oldCounterValues = counterValuesArray[counterValuesArray.length - 1];
    const oldValue = oldCounterValues.value;
    const oldChanges = oldCounterValues.changes;
    const newCounterValues = { value: oldValue + 1, changes: oldChanges + 1, type: 'increment' };
    counterValuesArray.push(newCounterValues);
    this.counterValuesSubject.next(counterValuesArray) // butta via il vecchio, il prossimo valore corretto è counterValuesArray nuovo(modificato)
  }

  decrement() {
    const counterValuesArray = this.counterValuesSubject.value
    const oldCounterValues = counterValuesArray[counterValuesArray.length - 1];
    const oldValue = oldCounterValues.value;
    const oldChanges = oldCounterValues.changes;
    const newCounterValues = { value: oldValue - 1, changes: oldChanges + 1, type: 'decrement' };
    counterValuesArray.push(newCounterValues);
    this.counterValuesSubject.next(counterValuesArray)
  }

  resetOddCounterValues() {
    const counterValuesArray = this.counterValuesSubject.value
    for (let i = 0; i < counterValuesArray.length; i++) {
      const counterValue = counterValuesArray[i];
      if (counterValue.changes % 2 === 1) {
        counterValue.value = 0;
      }
    }
    this.counterValuesSubject.next(counterValuesArray);
  }
}
