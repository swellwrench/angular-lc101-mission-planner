import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   inactive: boolean = false;

   constructor() { }

   ngOnInit() { }

   addItem(equipmentObject: object) {
     this.cargoHold.push(equipmentObject);
     this.cargoMass += equipmentObject.mass;
     if (this.cargoHold.length === this.maxItems) {
       this.inactive = true;
     }
     if (this.cargoMass + 200 <= this.maximumAllowedMass) {
       return true;
     } else {
       return false;
     }
   }

   calculateMassRemaining() {
     let remaining = this.maximumAllowedMass - this.cargoMass;
     return remaining;
   }

   emptyHold() {
     this.cargoHold = [];
     this.cargoMass = 0;
     this.inactive = false;
   }
   
}
