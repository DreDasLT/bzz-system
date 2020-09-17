"use strict";
// const cars = [
//   {
//     "model": "Paspirtukai",
//     "category": "paspirtukai",
//     "prices": {
//       "minute": 0.1,
//       "hour": 0.5,
//       "day": 0.5,
//       "week": 0.5,
//       "month": 0.5,
//       "km": 0.5
//     },
//     "modelIdentifier": "Paspirtukai"
//   },
//   {
//     "model": "Toyota Yaris",
//     "category": "praktiskos miesto bites",
//     "prices": {
//       "minute": 0.16,
//       "hour": 4.9,
//       "day": 22.9,
//       "week": 129,
//       "month": 339,
//       "km": 0.18
//     },
//     "modelIdentifier": "ToyotaYaris"
//   },
//   {
//     "model": "Fiat 500",
//     "category": "praktiskos miesto bites",
//     "prices": {
//       "minute": 0.16,
//       "hour": 4.9,
//       "day": 22.9,
//       "week": 129,
//       "month": 339,
//       "km": 0.18
//     },
//     "modelIdentifier": "Fiat500"
//   },
//   {
//     "model": "Volkswagen Polo",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "VolkswagenPolo"
//   },
//   {
//     "model": "Volkswagen Golf",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "VolkswagenGolf"
//   },
//   {
//     "model": "Toyota Corolla",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "ToyotaCorolla"
//   },
//   {
//     "model": "Toyota Auris",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "ToyotaAuris"
//   },
//   {
//     "model": "Toyota C-HR",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "ToyotaC-HR"
//   },
//   {
//     "model": "Peugeot 308",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "Peugeot308"
//   },
//   {
//     "model": "Peugeot 208",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "Peugeot208"
//   },
//   {
//     "model": "Opel Crossland",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "OpelCrossland"
//   },
//   {
//     "model": "Seat Ibiza",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "SeatIbiza"
//   },
//   {
//     "model": "Mini One",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "MiniOne"
//   },
//   {
//     "model": "Fiat 500 Cabrio",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "Fiat500Cabrio"
//   },
//   {
//     "model": "Škoda Fabia",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.2,
//       "hour": 6.19,
//       "day": 32.9,
//       "week": 159,
//       "month": 379,
//       "km": 0.2
//     },
//     "modelIdentifier": "ŠkodaFabia"
//   },
//   {
//     "model": "Mini Cooper Cabrio",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.22,
//       "hour": 6.9,
//       "day": 35.9,
//       "week": 179,
//       "month": 459,
//       "km": 0.21
//     },
//     "modelIdentifier": "MiniCooperCabrio"
//   },
//   {
//     "model": "Nissan Qashqai",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.22,
//       "hour": 6.9,
//       "day": 35.9,
//       "week": 179,
//       "month": 459,
//       "km": 0.21
//     },
//     "modelIdentifier": "NissanQashqai"
//   },
//   {
//     "model": "Kia ProCeed",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.22,
//       "hour": 6.9,
//       "day": 35.9,
//       "week": 179,
//       "month": 459,
//       "km": 0.21
//     },
//     "modelIdentifier": "KiaProCeed"
//   },
//   {
//     "model": "VW Golf Variant",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.22,
//       "hour": 6.9,
//       "day": 35.9,
//       "week": 179,
//       "month": 459,
//       "km": 0.21
//     },
//     "modelIdentifier": "VWGolfVariant"
//   },
//   {
//     "model": "Seat Arona",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.22,
//       "hour": 6.9,
//       "day": 35.9,
//       "week": 179,
//       "month": 459,
//       "km": 0.21
//     },
//     "modelIdentifier": "SeatArona"
//   },
//   {
//     "model": "Volkswagen Passat",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.24,
//       "hour": 7.9,
//       "day": 39.9,
//       "week": 189,
//       "month": 539,
//       "km": 0.22
//     },
//     "modelIdentifier": "VolkswagenPassat"
//   },
//   {
//     "model": "Fiat Ducato",
//     "category": "talpios pagalbininkes",
//     "prices": {
//       "minute": 0.27,
//       "hour": 8.9,
//       "day": 39.9,
//       "week": 239,
//       "month": 599,
//       "km": 0.24
//     },
//     "modelIdentifier": "FiatDucato"
//   },
//   {
//     "model": "Fiat Talento",
//     "category": "talpios pagalbininkes",
//     "prices": {
//       "minute": 0.27,
//       "hour": 8.9,
//       "day": 39.9,
//       "week": 239,
//       "month": 599,
//       "km": 0.24
//     },
//     "modelIdentifier": "FiatTalento"
//   },
//   {
//     "model": "Opel Vivaro",
//     "category": "talpios pagalbininkes",
//     "prices": {
//       "minute": 0.27,
//       "hour": 8.9,
//       "day": 39.9,
//       "week": 239,
//       "month": 599,
//       "km": 0.24
//     },
//     "modelIdentifier": "OpelVivaro"
//   },
//   {
//     "model": "Volkswagen Crafter",
//     "category": "talpios pagalbininkes",
//     "prices": {
//       "minute": 0.27,
//       "hour": 8.9,
//       "day": 39.9,
//       "week": 239,
//       "month": 599,
//       "km": 0.24
//     },
//     "modelIdentifier": "VolkswagenCrafter"
//   },
//   {
//     "model": "Renault Master",
//     "category": "talpios pagalbininkes",
//     "prices": {
//       "minute": 0.27,
//       "hour": 8.9,
//       "day": 39.9,
//       "week": 239,
//       "month": 599,
//       "km": 0.24
//     },
//     "modelIdentifier": "RenaultMaster"
//   },
//   {
//     "model": "Toyota Proace",
//     "category": "talpios pagalbininkes",
//     "prices": {
//       "minute": 0.27,
//       "hour": 8.9,
//       "day": 39.9,
//       "week": 239,
//       "month": 599,
//       "km": 0.24
//     },
//     "modelIdentifier": "ToyotaProace"
//   },
//   {
//     "model": "BMW X1",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.32,
//       "hour": 10.9,
//       "day": 54.9,
//       "week": 269,
//       "month": 699,
//       "km": 0.24
//     },
//     "modelIdentifier": "BMWX1"
//   },
//   {
//     "model": "Volkswagen Arteon",
//     "category": "komforto zvaigzdes",
//     "prices": {
//       "minute": 0.32,
//       "hour": 10.9,
//       "day": 54.9,
//       "week": 269,
//       "month": 699,
//       "km": 0.24
//     },
//     "modelIdentifier": "VolkswagenArteon"
//   },
//   {
//     "model": "Dviračiai",
//     "category": "gamtos myletojams",
//     "prices": {
//       "undefined": 30
//     },
//     "modelIdentifier": "Dviračiai"
//   }
// ]
Object.defineProperty(exports, "__esModule", { value: true });
const cars = [
    {
        "id": 207,
        "license_plate": "LMR999",
        lat: 56.30001225555228,
        long: 22.352923750877384,
        "vehicle_type": 1,
        "type": "Car",
        "is_cargo": false,
        name: 'Volkswagen Golf',
        img: 'https://firebasestorage.googleapis.com/v0/b/citybeecalculator.appspot.com/o/cars%2FVolkswagenGolf.png?alt=media&token=ecbbcb41-b785-4760-998c-2a47dd8e9dd0',
        prices: {
            day: 10.99,
            hour: 6.19,
            km: 0.2,
            minute: 0.2,
            month: 329.7,
            week: 76.93,
        }
    },
    {
        "id": 208,
        "license_plate": "KPM498",
        lat: 56.299982491375715,
        long: 22.353224158287052,
        "vehicle_type": 1,
        "type": "Car",
        "is_cargo": false,
        name: 'Volkswagen Arteon',
        img: 'https://firebasestorage.googleapis.com/v0/b/citybeecalculator.appspot.com/o/cars%2FVolkswagenArteon.png?alt=media&token=09a4736e-9ebd-41a2-8a42-4d3193fda307',
        prices: {
            day: 54.9,
            hour: 10.9,
            km: 0.24,
            minute: 0.32,
            month: 699,
            week: 269,
        }
    },
    {
        "id": 209,
        "license_plate": "LHS999",
        lat: 56.299928915799505,
        long: 22.353782057762146,
        "vehicle_type": 1,
        "type": "Car",
        "is_cargo": false,
        name: 'Peugeot 308',
        img: 'https://firebasestorage.googleapis.com/v0/b/citybeecalculator.appspot.com/o/cars%2FPeugeot308.png?alt=media&token=b10125d9-eeb8-47fc-8825-12394efbd38a',
        prices: {
            day: 10.99,
            hour: 6.19,
            km: 0.2,
            minute: 0.2,
            month: 329.7,
            week: 76.93,
        }
    },
    {
        "id": 210,
        "license_plate": "KHH999",
        lat: 56.299586625622894,
        long: 22.35395908355713,
        "vehicle_type": 1,
        "type": "Car",
        "is_cargo": false,
        name: 'BMW X1',
        img: 'https://firebasestorage.googleapis.com/v0/b/citybeecalculator.appspot.com/o/cars%2FBMWX1.png?alt=media&token=6a0aa7ca-3eef-4317-9cf3-293c755dd934',
        prices: {
            day: 29.99,
            hour: 10.9,
            km: 0.24,
            minute: 0.32,
            month: 699,
            week: 209.63,
        }
    },
    {
        "id": 211,
        "license_plate": "LMZ999",
        lat: 56.30411353736669,
        long: 22.332050800323486,
        "vehicle_type": 1,
        "type": "Car",
        "is_cargo": true,
        name: 'Volkswagen Golf',
        img: 'https://firebasestorage.googleapis.com/v0/b/citybeecalculator.appspot.com/o/cars%2FVolkswagenGolf.png?alt=media&token=ecbbcb41-b785-4760-998c-2a47dd8e9dd0',
        prices: {
            day: 10.99,
            hour: 6.19,
            km: 0.2,
            minute: 0.2,
            month: 329.7,
            week: 76.93,
        }
    },
    {
        "id": 212,
        "license_plate": "LIV999",
        lat: 56.30497064369587,
        long: 22.332184910774235,
        "vehicle_type": 1,
        "type": "Car",
        "is_cargo": true,
        name: 'Volkswagen Golf',
        img: 'https://firebasestorage.googleapis.com/v0/b/citybeecalculator.appspot.com/o/cars%2FVolkswagenGolf.png?alt=media&token=ecbbcb41-b785-4760-998c-2a47dd8e9dd0',
        prices: {
            day: 10.99,
            hour: 6.19,
            km: 0.2,
            minute: 0.2,
            month: 329.7,
            week: 76.93,
        }
    },
    {
        "id": 214,
        "license_plate": "LIU999",
        lat: 56.3102140491547,
        long: 22.348632216453552,
        "vehicle_type": 1,
        "type": "Car",
        "is_cargo": true,
        name: 'Volkswagen Golf',
        img: 'https://firebasestorage.googleapis.com/v0/b/citybeecalculator.appspot.com/o/cars%2FVolkswagenGolf.png?alt=media&token=ecbbcb41-b785-4760-998c-2a47dd8e9dd0',
        prices: {
            day: 10.99,
            hour: 6.19,
            km: 0.2,
            minute: 0.2,
            month: 329.7,
            week: 76.93,
        }
    },
];
exports.default = cars;
//# sourceMappingURL=cars.js.map