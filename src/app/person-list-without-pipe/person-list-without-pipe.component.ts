import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDict, initializePersonDict } from 'src/models/PersonDict';

@Component({
  selector: 'app-person-list-without-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list-without-pipe.component.html',
  styleUrls: ['./person-list-without-pipe.component.css']
})
export class PersonListWithoutPipeComponent implements OnInit{
  personDict : PersonDict = {}
 ngOnInit(): void {
   this.personDict = initializePersonDict();
 }

 getPerosnName(key : number): string {
   return this.personDict[key];
 }
}
