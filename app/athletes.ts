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
        "lane": 7,
        "result": "8:19.69",
        "position": 6
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
        "lane": 4,
        "result": "3:51.98",
        "position": 7
      },
      {
        "distance": 200,
        "stroke": "Combinados",
        "eventNumber": 17,
        "seedTime": "3:50.00",
        "date": "2026-10-24",
        "time": "14:10",
        "heat": 5,
        "heatCount": 16,
        "lane": 3,
        "result": "3:49.78",
        "position": 6
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
        "lane": 8,
        "result": "1:49.08",
        "position": 8
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
        "time": "14:08",
        "heat": 8,
        "heatCount": 16,
        "lane": 6,
        "result": "13:09.84",
        "position": 4
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
        "lane": 0,
        "result": "3:07.96",
        "position": 4
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
        "lane": 3,
        "result": "3:51.30",
        "position": 7
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
        "lane": 4,
        "result": "6:26.07",
        "position": 6
      },
      {
        "distance": 100,
        "stroke": "Pecho",
        "eventNumber": 37,
        "seedTime": "1:48.88",
        "date": "2026-10-27",
        "time": "18:17",
        "heat": 5,
        "heatCount": 14,
        "lane": 7,
        "result": "1:48.06",
        "position": 5
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
        "time": "18:17",
        "heat": 10,
        "heatCount": 18,
        "lane": 7,
        "result": "11:48.87",
        "position": 2
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
        "lane": 7,
        "result": "2:33.46",
        "position": 5
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
        "lane": 4,
        "result": "5:36.06",
        "position": 5
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
        "lane": 7,
        "result": "3:15.33",
        "position": 16
      },
      {
        "distance": 100,
        "stroke": "Libre",
        "eventNumber": 11,
        "seedTime": "1:34.32",
        "date": "2026-10-23",
        "time": "15:43",
        "heat": 16,
        "heatCount": 27,
        "lane": 6,
        "result": "1:26.20",
        "position": 23
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 15,
        "seedTime": "41.73",
        "date": "2026-10-24",
        "time": "12:25",
        "heat": 15,
        "heatCount": 27,
        "lane": 7,
        "result": "38.26",
        "position": 23
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
        "lane": 5,
        "result": "6:59.08",
        "position": 17
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
        "time": "19:22",
        "heat": 18,
        "heatCount": 33,
        "lane": 6,
        "result": "28.72",
        "position": 6
      },
      {
        "distance": 100,
        "stroke": "Libre",
        "eventNumber": 12,
        "seedTime": "56.80",
        "date": "2026-10-23",
        "time": "17:10",
        "heat": 23,
        "heatCount": 37,
        "lane": 3,
        "result": "1:02.65",
        "position": 12
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 16,
        "seedTime": "25.22",
        "date": "2026-10-24",
        "time": "13:24",
        "heat": 25,
        "heatCount": 42,
        "lane": 3,
        "result": "27.47",
        "position": 13
      },
      {
        "distance": 100,
        "stroke": "Mariposa",
        "eventNumber": 20,
        "seedTime": "1:04.00",
        "date": "2026-10-24",
        "time": "17:37",
        "heat": 11,
        "heatCount": 21,
        "lane": 6,
        "result": "1:10.28",
        "position": 8
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
        "lane": 6,
        "result": "1:38.23",
        "position": 6
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
        "lane": 9,
        "result": "44.72",
        "position": 5
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
        "time": "18:21",
        "heat": 5,
        "heatCount": 31,
        "lane": 4,
        "result": "49.06",
        "position": 20
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 16,
        "seedTime": "38.55",
        "date": "2026-10-24",
        "time": "12:58",
        "heat": 7,
        "heatCount": 42,
        "lane": 0,
        "result": "37.76",
        "position": 29
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
        "lane": 0,
        "result": "48.80",
        "position": 14
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
        "time": "15:53",
        "heat": 20,
        "heatCount": 27,
        "lane": 9,
        "result": "1:14.34",
        "position": 13
      },
      {
        "distance": 50,
        "stroke": "Libre",
        "eventNumber": 15,
        "seedTime": "32.91",
        "date": "2026-10-24",
        "time": "12:33",
        "heat": 19,
        "heatCount": 27,
        "lane": 2,
        "result": "32.50",
        "position": 14
      },
      {
        "distance": 200,
        "stroke": "Combinados",
        "eventNumber": 17,
        "seedTime": "3:20.13",
        "date": "2026-10-24",
        "time": "14:24",
        "heat": 8,
        "heatCount": 16,
        "lane": 5,
        "result": "3:11.64",
        "position": 8
      }
    ]
  }
];
