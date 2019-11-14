import {Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter, Output} from '@angular/core';
import {ITaskView} from "../_models/task-view";
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit, OnChanges {

  @Input() task: ITaskView;
  @Output() formClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if('task' in changes){
      this.task = changes.task.currentValue;
      this.updateFormValues();
    }
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      header: new FormControl(''),
      date: new FormControl(''),
      description: new FormControl(''),
      state: new FormControl(''),
      priority: new FormControl(),
    });
    this.updateFormValues();
  }

  updateFormValues() {
    if (this.formGroup) {

      console.log(this.task);

      this.formGroup.setValue({
        header: this.task.header,
        date: this.task.date,
        description: this.task.description,
        state: this.task.state,
        priority: this.task.priority,
      });

        this.formGroup.patchValue(this.task);
      }
  }

  close() {
    this.task = null;
    this.formClosed.emit(true);
  }

  save() {
    this.close();
  }

}
