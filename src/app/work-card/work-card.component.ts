import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {
  @Input() public frameUrl: string = ""
  @Input() public title: string = ""
  @Input() public body: string = ""
  @Input() public gitUrl: string = ""

  ngOnInit(): void {
  }

}
