import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiment: string[] = ["Retrieve rock samples", "Test water ph", "Float in space"]
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if (!this.experiment.includes(name) && name.length > 0) {
      this.experiment.push(name);
    }
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(name: string) {
    let index = this.experiment.indexOf(this.itemBeingEdited);
    this.experiment[index] = name;
    this.itemBeingEdited = null;
  }

  remove(name: string) {
    let index = this.experiment.indexOf(name);
    this.experiment.splice(index, 1);
  }

}
