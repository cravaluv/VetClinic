import { Component } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { OwnerEditComponent } from './owner-edit.component';

export const DATA = [
  {
    "idOwner": 1,
    "name": "Walsh",
    "surname": "Anderson",
    "tel": "(965) 460-2855",
    "onlineReg": false,
    "address": {
      "address": "Oriental Court",
      "city": "Stouchsburg",
      "postalCode": "18-132"
    },
    "animals": []
  },
  {
    "idOwner": 2,
    "name": "Ellison",
    "surname": "Charles",
    "tel": "(899) 517-2989",
    "onlineReg": false,
    "address": {
      "address": "Stockton Street",
      "city": "Hegins",
      "postalCode": "88-447"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Kirsten",
        "birthDate": "Sun Aug 30 1970 05:50:23 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 3,
    "name": "Garrison",
    "surname": "Mcdonald",
    "tel": "(913) 435-3724",
    "onlineReg": false,
    "address": {
      "address": "Sandford Street",
      "city": "Tibbie",
      "postalCode": "67-368"
    },
    "animals": []
  },
  {
    "idOwner": 4,
    "name": "Tisha",
    "surname": "Bryan",
    "tel": "(853) 561-3274",
    "onlineReg": false,
    "address": {
      "address": "Calyer Street",
      "city": "Bluffview",
      "postalCode": "45-834"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Maxwell",
        "birthDate": "Sun Oct 15 1972 10:39:32 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 5,
    "name": "Joyce",
    "surname": "Terrell",
    "tel": "(825) 596-3358",
    "onlineReg": false,
    "address": {
      "address": "Pershing Loop",
      "city": "Welch",
      "postalCode": "58-572"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Gonzales",
        "birthDate": "Tue Oct 26 1999 17:18:58 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 6,
    "name": "Lucille",
    "surname": "Eaton",
    "tel": "(872) 578-3598",
    "onlineReg": false,
    "address": {
      "address": "Sedgwick Street",
      "city": "Belfair",
      "postalCode": "60-229"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Cherie",
        "birthDate": "Sun Jun 19 2011 19:43:06 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 7,
    "name": "Josie",
    "surname": "Clements",
    "tel": "(801) 461-3539",
    "onlineReg": false,
    "address": {
      "address": "Moore Street",
      "city": "Coinjock",
      "postalCode": "78-137"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Whitley",
        "birthDate": "Tue Sep 30 2003 13:24:34 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      },
      {
        "idAnimal": 2,
        "name": "Willis",
        "birthDate": "Mon Feb 05 1996 05:39:58 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 8,
    "name": "Rosalie",
    "surname": "Barnes",
    "tel": "(984) 542-2761",
    "onlineReg": false,
    "address": {
      "address": "Abbey Court",
      "city": "Rockhill",
      "postalCode": "79-737"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Sonia",
        "birthDate": "Tue Mar 12 1985 02:40:54 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false
      },
      {
        "idAnimal": 2,
        "name": "Erickson",
        "birthDate": "Wed Nov 17 1993 00:24:46 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 9,
    "name": "Johnson",
    "surname": "Wright",
    "tel": "(856) 473-3655",
    "onlineReg": false,
    "address": {
      "address": "Lee Avenue",
      "city": "Albrightsville",
      "postalCode": "78-209"
    },
    "animals": []
  },
  {
    "idOwner": 10,
    "name": "Lorene",
    "surname": "Foreman",
    "tel": "(862) 439-2411",
    "onlineReg": false,
    "address": {
      "address": "Grace Court",
      "city": "Alleghenyville",
      "postalCode": "61-514"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Sabrina",
        "birthDate": "Mon Jul 26 2010 04:45:49 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true
      }
    ]
  },
  {
    "idOwner": 11,
    "name": "Latasha",
    "surname": "Malone",
    "tel": "(964) 538-3412",
    "onlineReg": false,
    "address": {
      "address": "Cedar Street",
      "city": "Macdona",
      "postalCode": "23-126"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Mcgee",
        "birthDate": "Sun Sep 01 2002 22:39:28 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true
      },
      {
        "idAnimal": 2,
        "name": "Hickman",
        "birthDate": "Wed Dec 15 1993 03:37:50 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 12,
    "name": "Wade",
    "surname": "Lane",
    "tel": "(972) 490-2716",
    "onlineReg": false,
    "address": {
      "address": "Montague Street",
      "city": "Emerald",
      "postalCode": "62-133"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Brittany",
        "birthDate": "Wed Apr 01 1992 19:49:10 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true
      },
      {
        "idAnimal": 2,
        "name": "Brandi",
        "birthDate": "Mon Jan 10 1972 03:19:48 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 13,
    "name": "Charlene",
    "surname": "Goodwin",
    "tel": "(984) 559-2400",
    "onlineReg": false,
    "address": {
      "address": "Harden Street",
      "city": "Westerville",
      "postalCode": "97-232"
    },
    "animals": []
  },
  {
    "idOwner": 14,
    "name": "Todd",
    "surname": "Cain",
    "tel": "(981) 537-3839",
    "onlineReg": false,
    "address": {
      "address": "Nova Court",
      "city": "Bethany",
      "postalCode": "23-525"
    },
    "animals": []
  },
  {
    "idOwner": 15,
    "name": "Gwen",
    "surname": "Oconnor",
    "tel": "(950) 544-2230",
    "onlineReg": false,
    "address": {
      "address": "Keen Court",
      "city": "Walland",
      "postalCode": "22-699"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Kari",
        "birthDate": "Wed Jun 25 2003 21:35:14 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true
      },
      {
        "idAnimal": 2,
        "name": "Fuentes",
        "birthDate": "Wed Apr 18 1979 14:15:09 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true
      }
    ]
  },
  {
    "idOwner": 16,
    "name": "Pat",
    "surname": "Whitley",
    "tel": "(977) 462-2396",
    "onlineReg": false,
    "address": {
      "address": "Amber Street",
      "city": "Harrodsburg",
      "postalCode": "30-443"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Therese",
        "birthDate": "Sat May 21 1988 08:31:19 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      },
      {
        "idAnimal": 2,
        "name": "Daniels",
        "birthDate": "Tue Feb 23 2016 04:19:55 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": true
      }
    ]
  },
  {
    "idOwner": 17,
    "name": "Amber",
    "surname": "Holman",
    "tel": "(993) 491-2878",
    "onlineReg": false,
    "address": {
      "address": "Chester Court",
      "city": "Witmer",
      "postalCode": "21-871"
    },
    "animals": []
  },
  {
    "idOwner": 18,
    "name": "Marianne",
    "surname": "Hartman",
    "tel": "(903) 582-3180",
    "onlineReg": false,
    "address": {
      "address": "Lott Avenue",
      "city": "Wollochet",
      "postalCode": "88-743"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Gertrude",
        "birthDate": "Tue Oct 12 1999 07:34:36 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      },
      {
        "idAnimal": 2,
        "name": "Aline",
        "birthDate": "Thu May 28 1970 20:57:29 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 19,
    "name": "Lauri",
    "surname": "Carson",
    "tel": "(951) 520-2984",
    "onlineReg": false,
    "address": {
      "address": "Lawrence Street",
      "city": "Northridge",
      "postalCode": "70-939"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Zimmerman",
        "birthDate": "Mon Dec 04 2000 17:53:10 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false
      },
      {
        "idAnimal": 2,
        "name": "Faith",
        "birthDate": "Thu Dec 24 1998 04:28:34 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false
      }
    ]
  },
  {
    "idOwner": 20,
    "name": "Jana",
    "surname": "Tran",
    "tel": "(909) 571-2661",
    "onlineReg": false,
    "address": {
      "address": "Harwood Place",
      "city": "Kennedyville",
      "postalCode": "33-245"
    },
    "animals": []
  }
]

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  owners: Owner[] = [];
  filter;
  selected: Owner;

  filteredItems: Owner[];
  p = 1;
  pages = 4;
  pageSize = 5;
  pageNumber = 0;
  currentIndex = 1;
  items: Owner[];
  pagesIndex: Array<number>;
  pageStart = 1;
  inputName = '';

  // Sortowanie
  key: string;
  reverse = false;

  constructor(private ownerService: OwnerService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.owners = DATA;
    this.filteredItems = this.owners;
    // this.initPagination();
    // this.ownerService.getOwners().subscribe((data) => {
    //   this.owners = Object.keys(data).map((key) => data[key]);
    // },
    //   (error) => {
    //     console.log(error);
    //   });
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  add() {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.model = new Owner();

    modal.result.then((result) => {
      this.ownerService.addOwner(result);
    }, (reason) => {
    });
  }

  update(owner: Owner) {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.model = owner;

    modal.result.then((result) => {
      this.ownerService.update(result);
    }, (reason) => {
    });
  }
}
