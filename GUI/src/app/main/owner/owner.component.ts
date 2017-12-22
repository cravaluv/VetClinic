import { Component } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { OwnerEditComponent } from './owner-edit.component';

export const DATA = [
  {
    "idOwner": 1,
    "name": "Ivy",
    "surname": "Horne",
    "tel": "(877) 408-3160",
    "onlineReg": false,
    "address": {
      "address": "Beverly Road",
      "city": "Iola",
      "postalCode": "33-124"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Vanessa",
        "birthDate": "Sun Dec 13 1981 23:50:14 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Marylou",
        "birthDate": "Wed Dec 15 1982 21:18:47 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 2,
    "name": "George",
    "surname": "Burton",
    "tel": "(961) 485-2113",
    "onlineReg": false,
    "address": {
      "address": "Anchorage Place",
      "city": "Maury",
      "postalCode": "83-342"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Rochelle",
        "birthDate": "Sat Nov 09 1974 22:15:49 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Olsen",
        "birthDate": "Mon Nov 01 2010 06:00:54 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 3,
    "name": "Reyna",
    "surname": "Steele",
    "tel": "(875) 419-3961",
    "onlineReg": false,
    "address": {
      "address": "Pooles Lane",
      "city": "Mammoth",
      "postalCode": "63-455"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Cassandra",
        "birthDate": "Fri Nov 04 1994 09:41:54 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 4,
    "name": "Araceli",
    "surname": "Curtis",
    "tel": "(933) 519-2902",
    "onlineReg": false,
    "address": {
      "address": "Emerson Place",
      "city": "Dunlo",
      "postalCode": "69-771"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Rojas",
        "birthDate": "Mon Aug 05 2013 05:58:36 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Stewart",
        "birthDate": "Sat Mar 16 2002 14:51:12 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 5,
    "name": "Terrie",
    "surname": "Delaney",
    "tel": "(813) 451-2107",
    "onlineReg": false,
    "address": {
      "address": "Perry Terrace",
      "city": "Matthews",
      "postalCode": "85-821"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Shirley",
        "birthDate": "Mon Oct 23 2017 14:53:51 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Frances",
        "birthDate": "Wed Sep 03 2014 12:54:19 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 6,
    "name": "Grimes",
    "surname": "Buckley",
    "tel": "(914) 490-3984",
    "onlineReg": false,
    "address": {
      "address": "Gerald Court",
      "city": "Leming",
      "postalCode": "70-728"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Gentry",
        "birthDate": "Mon Nov 09 1992 06:28:25 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Casey",
        "birthDate": "Tue Mar 12 1991 06:50:15 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 7,
    "name": "Stevenson",
    "surname": "Burgess",
    "tel": "(800) 541-2059",
    "onlineReg": false,
    "address": {
      "address": "Argyle Road",
      "city": "Caron",
      "postalCode": "52-569"
    },
    "animals": []
  },
  {
    "idOwner": 8,
    "name": "Jeannette",
    "surname": "Armstrong",
    "tel": "(948) 548-2100",
    "onlineReg": false,
    "address": {
      "address": "Ebony Court",
      "city": "Allison",
      "postalCode": "94-901"
    },
    "animals": []
  },
  {
    "idOwner": 9,
    "name": "Scott",
    "surname": "Patrick",
    "tel": "(896) 593-2713",
    "onlineReg": false,
    "address": {
      "address": "Dekalb Avenue",
      "city": "Clarence",
      "postalCode": "81-565"
    },
    "animals": []
  },
  {
    "idOwner": 10,
    "name": "Pate",
    "surname": "Rojas",
    "tel": "(902) 468-3932",
    "onlineReg": false,
    "address": {
      "address": "Erasmus Street",
      "city": "Gordon",
      "postalCode": "51-420"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Delores",
        "birthDate": "Tue Jan 16 2001 10:01:55 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 11,
    "name": "Rosa",
    "surname": "Pate",
    "tel": "(874) 461-3993",
    "onlineReg": false,
    "address": {
      "address": "Quentin Road",
      "city": "Garberville",
      "postalCode": "88-427"
    },
    "animals": []
  },
  {
    "idOwner": 12,
    "name": "Chen",
    "surname": "Banks",
    "tel": "(950) 587-3544",
    "onlineReg": false,
    "address": {
      "address": "Joralemon Street",
      "city": "Whitmer",
      "postalCode": "55-316"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Pennington",
        "birthDate": "Sat Mar 17 1979 01:22:33 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 13,
    "name": "Lourdes",
    "surname": "Branch",
    "tel": "(830) 529-3090",
    "onlineReg": false,
    "address": {
      "address": "Homecrest Court",
      "city": "Oneida",
      "postalCode": "73-224"
    },
    "animals": []
  },
  {
    "idOwner": 14,
    "name": "Dejesus",
    "surname": "Lawson",
    "tel": "(943) 521-3011",
    "onlineReg": false,
    "address": {
      "address": "Clermont Avenue",
      "city": "Mappsville",
      "postalCode": "21-669"
    },
    "animals": []
  },
  {
    "idOwner": 15,
    "name": "Angelia",
    "surname": "Mcneil",
    "tel": "(925) 555-3544",
    "onlineReg": false,
    "address": {
      "address": "Autumn Avenue",
      "city": "Neahkahnie",
      "postalCode": "82-521"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Cantu",
        "birthDate": "Fri Jul 17 2015 09:54:59 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Dorothy",
        "birthDate": "Sun Jan 25 1976 17:51:04 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 16,
    "name": "Russell",
    "surname": "Ellison",
    "tel": "(948) 421-2126",
    "onlineReg": false,
    "address": {
      "address": "Cox Place",
      "city": "Statenville",
      "postalCode": "19-701"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Laurel",
        "birthDate": "Wed Jul 11 2001 04:01:30 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Fischer",
        "birthDate": "Sat Apr 22 1995 11:46:22 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 17,
    "name": "Estella",
    "surname": "Murphy",
    "tel": "(841) 418-2653",
    "onlineReg": false,
    "address": {
      "address": "Jefferson Street",
      "city": "Sparkill",
      "postalCode": "68-682"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Cleo",
        "birthDate": "Thu Nov 19 1992 18:43:41 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 18,
    "name": "Beverley",
    "surname": "Gonzalez",
    "tel": "(888) 401-3453",
    "onlineReg": false,
    "address": {
      "address": "Pierrepont Place",
      "city": "Savannah",
      "postalCode": "19-879"
    },
    "animals": []
  },
  {
    "idOwner": 19,
    "name": "Bianca",
    "surname": "Santiago",
    "tel": "(920) 464-3628",
    "onlineReg": false,
    "address": {
      "address": "Arion Place",
      "city": "Zortman",
      "postalCode": "20-952"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Rosella",
        "birthDate": "Sun Oct 12 2003 15:00:07 GMT+0200 (Środkowoeuropejski czas letni)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      },
      {
        "idAnimal": 2,
        "name": "Higgins",
        "birthDate": "Thu Jan 25 1973 03:50:04 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": false,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
  },
  {
    "idOwner": 20,
    "name": "Krystal",
    "surname": "Hall",
    "tel": "(978) 419-2018",
    "onlineReg": false,
    "address": {
      "address": "Gilmore Court",
      "city": "Rushford",
      "postalCode": "53-979"
    },
    "animals": [
      {
        "idAnimal": 1,
        "name": "Preston",
        "birthDate": "Mon Jan 28 2013 01:17:04 GMT+0100 (Środkowoeuropejski czas stand.)",
        "active": true,
        "color": {
          "idColor": 1,
          "color": "plawy"
        },
        "animalType": {
          "idAnimalType": 1,
          "type": "pies"
        }
      }
    ]
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
