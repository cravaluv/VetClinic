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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
        "birthDate": new Date(),
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
