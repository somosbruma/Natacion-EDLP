export type SwimEvent = { distance: number; stroke: string; eventNumber: number; seedTime: string; date?: string; time?: string; heat?: number; heatCount?: number; lane?: number; result?: string; position?: number; status?: string; medal?: string };
export type Athlete = { id: string; name: string; age: number; category: string; team: string; events: SwimEvent[] };
export const athletes: Athlete[] = [
  {
    "id": "nadador-1",
    "name": "María De La Paz Gibert",
    "age": 55,
    "category": "55–59",
    "team": "EDELP",
    "events": [
      {
        "distance": 400,
        "stroke": "Combinados",
        "eventNumber": 3,
        "seedTime": "7:55.00",
        "date": "2026-10-22",
        "time": "12:32",
        "heat": 4,
        "heatCount": 10,
        "lane": 1
      },
      {
        "distance": 200,
        "stroke": "Espalda",
        "eventNumber": 9,
        "seedTime": "3:50.00",
        "date": "2026-10-23",
        "time": "12:33",
        "heat": 6,
        "heatCount": 18,
        "lane": 7
      },
      {
        "distance": 200,
        "stroke": "Combinados",
        "eventNumber": 17,
        "seedTime": "3:50.00",
        "date": "2026-10-24",
        "time": "14:12",
        "heat": 5,
        "heatCount": 16,
        "lane": 6
      },
      {
        "distance": 100,
        "stroke": "Espalda",
        "eventNumber": 29,
        "seedTime": "1:50.00",
        "date": "2026-10-26",
        "time": "15:48",
        "heat": 9,
        "heatCount": 19,
        "lane": 8
      }
    ]
  },
  {
    "id": "nadador-2",
    "name": "Evangelina Julia Montero Labat",
    "age": 58,
    "category": "55–59",
    "team": "EDELP",
    "events": [
      {
        "distance": 800,
        "stroke": "Libre",
        "eventNumber": 1,
        "seedTime": "13:39.65",
        "date": "2026-10-21",
        "time": "14:06",
        "heat": 8,
        "heatCount": 16,
        "lane": 6
      },
      {
        "distance": 200,
        "stroke": "Libre",
        "eventNumber": 5,
        "seedTime": "3:11.74",
        "date": "2026-10-22",
        "time": "16:04",
        "heat": 9,
        "heatCount": 19,
        "lane": 0
      },
      {
        "distance": 200,
        "stroke": "Pecho",
        "eventNumber": 27,
        "seedTime": "3:51.32",
        "date": "2026-10-26",
        "time": "13:31",
        "heat": 6,
        "heatCount": 13,
        "lane": 3
      },
      {
        "distance": 400,
        "stroke": "Libre",
        "eventNumber": 35,
        "seedTime": "6:36.07",
        "date": "2026-10-27",
        "time": "14:30",
        "heat": 8,
        "heatCount": 18,
        "lane": 4
      },
      {
        "distance": 100,
        "stroke": "Pecho",
        "eventNumber": 37,
        "seedTime": "1:48.88",
        "date": "2026-10-27",
        "time": "18:16",
        "heat": 5,
        "heatCount": 14,
        "lane": 7
      }
    ]
  },
  {
    "id": "nadador-3",
    "name": "César Damián Vigo",
    "age": 58,
    "category": "55–59",
    "team": "EDELP",
    "events": [
      {
        "distance": 800,
        "stroke": "Libre",
        "eventNumber": 2,
        "seedTime": "11:20.00",
        "date": "2026-10-21",
        "time": "18:15",
        "heat": 10,
        "heatCount": 18,
        "lane": 1
      },
      {
        "distance": 200,
        "stroke": "Libre",
        "eventNumber": 6,
        "seedTime": "2:20.00",
        "date": "2026-10-22",
        "time": "17:56",
        "heat": 18,
        "heatCount": 26,
        "lane": 2
      },
      {
        "distance": 400,
        "stroke": "Libre",
        "eventNumber": 36,
        "seedTime": "5:18.00",
        "date": "2026-10-27",
        "time": "17:10",
        "heat": 11,
        "heatCount": 19,
        "lane": 4
      }
    ]
  },
  {
    "id": "nadador-4",
    "name": "María Victoria Spacapan",
    "age": 42,
    "category": "40–44",
    "team": "EDELP",
    "events": [
      {
        "distance": 200,
        "stroke": "Libre",
        "eventNumber": 5,
        "seedTime": "3:25.00",
        "date": "2026-10-22",
        "time": "15:56",
        "heat": 7,
        "heatCount": 19,
        "lane": 7
      },
      {
        "distance": 100,
        "stroke": "Libre",
        "eventNumber": 11,
        "seedTime": "1:34.32",
        "date": "2026-10-23",
        "time": "15:42",
        "heat": 16,
        "heatCount": 27,
        "lane": 6
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 15,
        "seedTime": "41.73",
        "date": "2026-10-24",
        "time": "12:27",
        "heat": 16,
        "heatCount": 28,
        "lane": 7
      },
      {
        "distance": 400,
        "stroke": "Libre",
        "eventNumber": 35,
        "seedTime": "7:14.00",
        "date": "2026-10-27",
        "time": "14:14",
        "heat": 6,
        "heatCount": 18,
        "lane": 5
      }
    ]
  },
  {
    "id": "nadador-5",
    "name": "Pedro Manuel Bin",
    "age": 42,
    "category": "40–44",
    "team": "EDELP",
    "events": [
      {
        "distance": 50,
        "stroke": "Mariposa",
        "eventNumber": 8,
        "seedTime": "27.02",
        "date": "2026-10-22",
        "time": "19:23",
        "heat": 18,
        "heatCount": 33,
        "lane": 6
      },
      {
        "distance": 100,
        "stroke": "Libre",
        "eventNumber": 12,
        "seedTime": "56.80",
        "date": "2026-10-23",
        "time": "17:08",
        "heat": 23,
        "heatCount": 37,
        "lane": 3
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 16,
        "seedTime": "25.22",
        "date": "2026-10-24",
        "time": "13:25",
        "heat": 25,
        "heatCount": 42,
        "lane": 3
      },
      {
        "distance": 100,
        "stroke": "Mariposa",
        "eventNumber": 20,
        "seedTime": "1:04.00",
        "date": "2026-10-24",
        "time": "17:40",
        "heat": 11,
        "heatCount": 21,
        "lane": 6
      }
    ]
  },
  {
    "id": "nadador-6",
    "name": "Yanina Leila Picchio",
    "age": 56,
    "category": "55–59",
    "team": "EDELP",
    "events": [
      {
        "distance": 100,
        "stroke": "Espalda",
        "eventNumber": 29,
        "seedTime": "2:40.00",
        "date": "2026-10-26",
        "time": "15:44",
        "heat": 8,
        "heatCount": 19,
        "lane": 6
      },
      {
        "distance": 50,
        "stroke": "Espalda",
        "eventNumber": 33,
        "seedTime": "1:00.00",
        "date": "2026-10-27",
        "time": "12:22",
        "heat": 8,
        "heatCount": 18,
        "lane": 9
      }
    ]
  },
  {
    "id": "nadador-7",
    "name": "Diego Martín Prol",
    "age": 62,
    "category": "60–64",
    "team": "EDELP",
    "events": [
      {
        "distance": 50,
        "stroke": "Pecho",
        "eventNumber": 14,
        "seedTime": "48.94",
        "date": "2026-10-23",
        "time": "18:22",
        "heat": 6,
        "heatCount": 32,
        "lane": 4
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 16,
        "seedTime": "38.55",
        "date": "2026-10-24",
        "time": "13:00",
        "heat": 7,
        "heatCount": 42,
        "lane": 0
      },
      {
        "distance": 50,
        "stroke": "Espalda",
        "eventNumber": 34,
        "seedTime": "40.25",
        "date": "2026-10-27",
        "time": "12:55",
        "heat": 6,
        "heatCount": 19,
        "lane": 0
      }
    ]
  },
  {
    "id": "nadador-8",
    "name": "Marcela Luciana Tobes",
    "age": 39,
    "category": "35–39",
    "team": "EDELP",
    "events": [
      {
        "distance": 100,
        "stroke": "Libre",
        "eventNumber": 11,
        "seedTime": "1:13.76",
        "date": "2026-10-23",
        "time": "15:52",
        "heat": 20,
        "heatCount": 27,
        "lane": 9
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 15,
        "seedTime": "32.91",
        "date": "2026-10-24",
        "time": "12:33",
        "heat": 19,
        "heatCount": 28,
        "lane": 2
      },
      {
        "distance": 200,
        "stroke": "Combinados",
        "eventNumber": 17,
        "seedTime": "3:20.13",
        "date": "2026-10-24",
        "time": "14:26",
        "heat": 8,
        "heatCount": 16,
        "lane": 5
      }
    ]
  }
];
