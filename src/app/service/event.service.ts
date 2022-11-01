import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  testEvent1: Event = new Event(
    'Halloween',
    '2022-10-31',
    '10am',
    new Location('Haunted Mansion 44', 'Leeds', 'United Kingdom')
  );

  testEvent2: Event = new Event(
    'Birthday',
    '2023-02-16',
    '10am',
    new Location('Blooming Street 5', 'New York', 'United States')
  );

  testEvent3: Event = new Event(
    'Christmas',
    '2022-12-24',
    '10am',
    new Location('Roten Rosen Straße 74', 'Berlin', 'Germany')
  );

  getAll(): any[] {
    return [this.testEvent1, this.testEvent2, this.testEvent3];
  }

  constructor() {}
}
