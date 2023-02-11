import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Math Genius');
    meta.addTags([
    { name: 'keywords', content: 'Math Genius,Math Genius in UK, Math 121,Math 121 in UK, iGCSE,iGCSE in UK, GCSE, GCSE preperations,A level exams ,A level preperation, A Level in UK, Math Tutoring, Short Courses Math, Exam Preparation Math' },
    { name: 'description', content:  `Looking for a reliable tutoring platform that can help you excel in Math121, iGCSE, A Level, and GCSE? Look no further! Our platform offers short courses, exam preparation, and full-time one-to-one tutoring to help you achieve your academic goals. Whether you're looking to improve your grades or prepare for an important exam, our experienced tutors are here to support you every step of the way.` }
    ])
    
  }

  ngOnInit(): void {
  }
}
