import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COURSES } from '../../db-data'
import { Course } from '../model/course';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() cardIndex: number;


  @Output() selectedCourse = new EventEmitter<Course>();
  constructor() { }
  ngOnInit(): void {
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){
    this.selectedCourse.emit(this.course);
  }

  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner'
    }
  }
}
