import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
// we are removing this Tasks and placing it into services f
// import { TASKS } from '../../mock-tasks'; 
import { TaskService } from 'src/app/services/task.service';
// When we are using a fake/mock server for api
import {HttpClient, HttpServer} from '@angular/common/http'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Getting all the tasks and their types in task component
  tasks: Task[] = [];

  // in order to use a service as a provider into the constructor argument
  // Constructor : put into use to inject dependencies into the component class. 
  constructor(private taskService : TaskService ) { }

  // void means this wouldnt return anything
  
  ngOnInit(): void {
    // this getTasks() is coming from the service that we created when it gives me data i put into my empty array
    // subscribe is like promise .then()
      this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks)
  }

}
