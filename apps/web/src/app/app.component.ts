import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@oldws/api-interfaces';

@Component({
  selector: 'oldws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  @Input() name = 'Katerina';
  @Input() age = 34;
  @Input() happy = true;
  constructor(private http: HttpClient) {}
}
