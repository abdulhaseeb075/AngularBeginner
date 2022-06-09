import { Injectable } from '@angular/core';
import { Task } from '../Task';
// we are removing this Tasks from components folder and placing it into services folder
// These tasks are coming from mock data file
import { TASKS } from '../mock-tasks'; 
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // getTasks will ultimately come from backend

// We make it observable(rxjs) & of to get the tasks from backend
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks;
  }
}
