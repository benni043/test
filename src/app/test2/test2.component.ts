import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn: boolean = false;

  adminUser: string = "admin";
  adminPassword: string = "admin";

  adminUserInput: string = "admin";
  adminPasswordInput: string = "admin";

  images: string[] = ["https://www.planet-wissen.de/kultur/theater/deutsches_theater_achzehntes_und_neunzehntesjahrhundert/introtheaterbarockgjpg100~_v-gseagaleriexl.jpg", "https://www.muenchenticket.de/media/image/original/19666_Cuvilli_s-Theater_neu.jpg", "https://www.akzent.at/rassets/content/vor_Buehne.jpg"];

  img: string = this.images[0];
  interval: any;

  count: number = 1;

  login(): void {
    if(this.adminUserInput === "") {
      alert("please enter a username");
      return;
    }

    if(this.adminUser === this.adminUserInput && this.adminPassword === this.adminPasswordInput) {
      this.loggedIn = true;

      this.interval = setInterval(() => {
        this.img = this.images[this.count];

        this.count >= 2 ? this.count = 0 : this.count++;
      }, 5000)

    } else {
      alert("wrong username or password!");
    }
  }

  colorGreen: boolean = false;
  bold: boolean = false;
  customFont: boolean = false;

  employees: {
    name: string,
    age: number,
    gender: string,
    Hobby: string,
  }[] = [
    {
      "name": "John",
      "age": 12,
      "gender": "Male",
      "Hobby": "Reading"
    },
    {
      "name": "Susan",
      "age": 34,
      "gender": "Female",
      "Hobby": "Gardening"
    },
    {
      "name": "Larry",
      "age": 24,
      "gender": "Male",
      "Hobby": "Gaming"
    },
    {
      "name": "Jack",
      "age": 3,
      "gender": "Male",
      "Hobby": "Sleeping"
    },
    {
      "name": "Minnie",
      "age": 15,
      "gender": "Female",
      "Hobby": "Partying"
    }
  ]

}
