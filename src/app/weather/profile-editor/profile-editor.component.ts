import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  @Input() childMessage: string;
  profileForm = new FormGroup({
    searchCity: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }
}
