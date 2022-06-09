import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // Defininig type as string or interface
  // @Input() color?: string;

  // defining the type of each task coming from Task
  @Input() task?: Task; 

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
