import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = ["Oxygen Tank", "Fuel", "Food"];
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if (!this.equipment.includes(name) && name.length > 0) {
      this.equipment.push(name);
    }
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(name: string) {
    let index = this.equipment.indexOf(this.itemBeingEdited);
    this.equipment[index] = name;
    this.itemBeingEdited = null;
  }

  remove(name: string) {
    let index = this.equipment.indexOf(name);
    this.equipment.splice(index, 1);
  }
}
