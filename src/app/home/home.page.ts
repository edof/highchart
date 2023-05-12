import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
import HC_drilldown from 'highcharts/modules/drilldown'
highcharts3d(Highcharts);
HC_drilldown(Highcharts);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  mileageOptions: Highcharts.Options = {};
  driverBehaviourOptions: Highcharts.Options = {};
  utilisationOptions: Highcharts.Options = {};
  fuelConsumptionOptions: Highcharts.Options = {};
  constructor() {}

  ngOnInit(): void {
    var dataMileage = [
      [
        {
          "name": "Mar",
          "y": 5644974.87,
          "drilldown": "Mar"
        },
        {
          "name": "Apr",
          "y": 9875098.22,
          "drilldown": "Apr"
        },
        {
          "name": "May",
          "y": 3588904.05,
          "drilldown": "May"
        }
      ],
      [
        {
          "name": "Apr",
          "id": "Apr",
          "type": 'column',
          "data": [
            [
              "1072000005",
              4313804.25
            ],
            [
              "L802_13763",
              1155785.56
            ],
            [
              "LD0375",
              450754.41
            ],
            [
              "LD0199",
              312546.44
            ],
            [
              "VL103_15477",
              291146.05
            ],
            [
              "LD0364",
              268490.43
            ],
            [
              "LD0071",
              250376.63
            ],
            [
              "LD0389",
              218020.41
            ],
            [
              "LD0136",
              164087.77
            ],
            [
              "SADT152",
              144232.03
            ],
            [
              "LD0105",
              140968.85
            ],
            [
              "LD0137",
              105316.19
            ],
            [
              "LD0138",
              101064.45
            ],
            [
              "DA 8529 HI (RAM-07)",
              85626.22
            ],
            [
              "DA 8524 HI (WOWS.04)",
              78711.88
            ],
            [
              "LD0212",
              67993.49
            ],
            [
              "LD0068",
              67484.79
            ],
            [
              "LD0090",
              54284.11
            ],
            [
              "LD0095",
              50832.13
            ],
            [
              "LD0113",
              48629.67
            ],
            [
              "LD0133",
              33642.18
            ],
            [
              "LD0370",
              28890.65
            ],
            [
              "SADT6111",
              27311.58
            ],
            [
              "LD0141",
              19744.54
            ],
            [
              "S 1063 BR",
              18832.2
            ],
            [
              "LD0140",
              16220.09
            ],
            [
              "SADT162",
              15723.92
            ],
            [
              "SADT156",
              15468.64
            ],
            [
              "LD0157",
              15243.9
            ],
            [
              "LD0388",
              15107.1
            ]
          ]
        },
        {
          "name": "May",
          "id": "May",
          "type": 'column',
          "data": [
            [
              "L802_13763",
              1168035.58
            ],
            [
              "LD0375",
              456251.42
            ],
            [
              "LD0364",
              376116.6
            ],
            [
              "LD0390",
              174058.43
            ],
            [
              "LD0105",
              143332.48
            ],
            [
              "DA 8524 HI (WOWS.04)",
              103136.98
            ],
            [
              "SADT6107",
              69309.02
            ],
            [
              "LD0071",
              61037.15
            ],
            [
              "LD0107",
              60038.08
            ],
            [
              "LD0090",
              56219.19
            ],
            [
              "LD0138",
              55782.18
            ],
            [
              "LD0158",
              42795.92
            ],
            [
              "1072000005",
              41889.49
            ],
            [
              "LD0095",
              37424.89
            ],
            [
              "LD0216",
              35292.36
            ],
            [
              "LD0191",
              32376.11
            ],
            [
              "LD0113",
              21213.21
            ],
            [
              "LD0157",
              20700.37
            ],
            [
              "LD0223",
              19483.52
            ],
            [
              "LD0369",
              16305.99
            ],
            [
              "LD0388",
              6554.34
            ],
            [
              "SADT162",
              6553.04
            ],
            [
              "LD0398",
              6442.06
            ],
            [
              "LD0190",
              6339.18
            ],
            [
              "LD0392",
              6191.6
            ],
            [
              "KT 8179 YW",
              6037.5
            ],
            [
              "LD0192",
              5904.42
            ],
            [
              "LD0365",
              5876.25
            ],
            [
              "SADT175",
              5792.97
            ],
            [
              "SADT6114",
              5752.67
            ]
          ]
        },
        {
          "name": "Mar",
          "id": "Mar",
          "type": 'column',
          "data": [
            [
              "LD0136",
              868634.81
            ],
            [
              "LD0375",
              500227.46
            ],
            [
              "LD0071",
              490401.95
            ],
            [
              "LD0388",
              232563.75
            ],
            [
              "LD0364",
              212358.83
            ],
            [
              "L802_13763",
              203490.99
            ],
            [
              "LD0112",
              153972
            ],
            [
              "DA 8519 HI (PO-04)",
              124226.21
            ],
            [
              "DA 8527 HI (RAM-04)",
              103374.83
            ],
            [
              "LD0157",
              76868.38
            ],
            [
              "LD0241",
              76305.26
            ],
            [
              "LD0223",
              74041.07
            ],
            [
              "LD0133",
              71290.81
            ],
            [
              "LD0191",
              66364.75
            ],
            [
              "LD0158",
              63214.64
            ],
            [
              "LD0090",
              50757.91
            ],
            [
              "LD0139",
              49381
            ],
            [
              "LD0140",
              46943.68
            ],
            [
              "LD0216",
              44017.71
            ],
            [
              "LD0078",
              42962.26
            ],
            [
              "LD0062",
              42494.8
            ],
            [
              "1072000005",
              35962.05
            ],
            [
              "LD0110",
              35127.75
            ],
            [
              "LD0095",
              34047.26
            ],
            [
              "LD0374",
              31901.51
            ],
            [
              "LD0115",
              28318.62
            ],
            [
              "DA 8419 HI (PO-07)",
              27250.22
            ],
            [
              "AT4_23711",
              18288.47
            ],
            [
              "DA 8416 HI (PO-06)",
              18143.96
            ],
            [
              "LD0349",
              17744.58
            ]
          ]
        }
      ]
    ]

    var dataDriverBehavior = [
      [
        {
          "name": "Accel",
          type: 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Accel",
              "y": 35938
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Accel",
              "y": 25624
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Accel",
              "y": 8205
            }
          ]
        },
        {
          "name": "Decel",
          type: 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Decel",
              "y": 1179
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Decel",
              "y": 813
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Decel",
              "y": 399
            }
          ]
        },
        {
          "name": "Geofence Speeding",
          type: 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Geofence Speeding",
              "y": 4133
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Geofence Speeding",
              "y": 4776
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Geofence Speeding",
              "y": 1938
            }
          ]
        },
        {
          "name": "Overspeeding",
          type: 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Overspeeding",
              "y": 3409
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Overspeeding",
              "y": 2582
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Overspeeding",
              "y": 1097
            }
          ]
        },
        {
          "name": "Harsh Cornering",
          type: 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Harsh Cornering",
              "y": 0
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Harsh Cornering",
              "y": 0
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Harsh Cornering",
              "y": 0
            }
          ]
        }
      ],
      [
        {
          "name": "Mar / Accel",
          "id": "2023-03 / Accel",
          type: 'column',
          "data": [
            [
              "SPARE-005",
              34722
            ],
            [
              "SPARE-019",
              127
            ],
            [
              "SPARE-001",
              105
            ],
            [
              "SPARE-023",
              78
            ],
            [
              "SPARE-015",
              69
            ],
            [
              "DENNY INDRA",
              59
            ],
            [
              "Hutomo B Suradi",
              43
            ],
            [
              "Wantono",
              39
            ],
            [
              "Sugiyanto",
              34
            ],
            [
              "HASUDUNGAN SIREGAR",
              33
            ],
            [
              "Widodo Widiharsono",
              32
            ],
            [
              "MUHAMMAD",
              32
            ],
            [
              "SPARE-018",
              29
            ],
            [
              "Sigit Prihandoko",
              29
            ],
            [
              "Jaliyadi",
              28
            ],
            [
              "Adil Alamsyah",
              27
            ],
            [
              "SPARE-035",
              27
            ],
            [
              "Totok Iwan R",
              27
            ],
            [
              "IMAM SAPII",
              26
            ],
            [
              "SISWANTO",
              25
            ],
            [
              "FEBRI RUSKA",
              25
            ],
            [
              "Regi Antariksa",
              22
            ],
            [
              "TRIYANTO",
              21
            ],
            [
              "MOHAMAD REZA",
              21
            ],
            [
              "MUHAMMAD NUR",
              20
            ],
            [
              "ABU BAKAR",
              20
            ],
            [
              "Uus Usman",
              18
            ],
            [
              "SPARE-016",
              16
            ],
            [
              "Wawan Gunawan",
              15
            ],
            [
              "SPARE-021",
              13
            ]
          ]
        },
        {
          "name": "Apr / Accel",
          "id": "2023-04 / Accel",
          type: 'column',
          "data": [
            [
              "SPARE-005",
              24915
            ],
            [
              "SPARE-001",
              111
            ],
            [
              "SPARE-023",
              72
            ],
            [
              "SPARE-035",
              48
            ],
            [
              "Adil Alamsyah",
              41
            ],
            [
              "HASUDUNGAN SIREGAR",
              32
            ],
            [
              "DENNY INDRA",
              32
            ],
            [
              "Totok Iwan R",
              29
            ],
            [
              "FEBRI RUSKA",
              22
            ],
            [
              "IMAM SAPII",
              21
            ],
            [
              "Sugiyanto",
              20
            ],
            [
              "MUHAMMAD NUR",
              18
            ],
            [
              "Sigit Prihandoko",
              16
            ],
            [
              "Wantono",
              15
            ],
            [
              "Hutomo B Suradi",
              15
            ],
            [
              "MUHAMMAD",
              14
            ],
            [
              "Widodo Widiharsono",
              14
            ],
            [
              "Wawan Gunawan",
              13
            ],
            [
              "MOHAMAD REZA",
              12
            ],
            [
              "ABU BAKAR",
              12
            ],
            [
              "SPARE-011",
              10
            ],
            [
              "SPARE-002",
              10
            ],
            [
              "TRIYANTO",
              9
            ],
            [
              "Regi Antariksa",
              9
            ],
            [
              "Uus Usman",
              8
            ],
            [
              "Jaliyadi",
              7
            ],
            [
              "SPARE-014",
              7
            ],
            [
              "SPARE-018",
              7
            ],
            [
              "SPARE-004",
              7
            ],
            [
              "SPARE-040",
              6
            ]
          ]
        },
        {
          "name": "May / Accel",
          "id": "2023-05 / Accel",
          type: 'column',
          "data": [
            [
              "SPARE-005",
              7888
            ],
            [
              "DENNY INDRA",
              51
            ],
            [
              "SPARE-001",
              33
            ],
            [
              "Regi Antariksa",
              17
            ],
            [
              "SPARE-023",
              16
            ],
            [
              "SISWANTO",
              16
            ],
            [
              "MUHAMMAD NUR",
              12
            ],
            [
              "Hutomo B Suradi",
              11
            ],
            [
              "ABU BAKAR",
              11
            ],
            [
              "Sigit Prihandoko",
              11
            ],
            [
              "HASUDUNGAN SIREGAR",
              10
            ],
            [
              "Uus Usman",
              9
            ],
            [
              "Wawan Gunawan",
              9
            ],
            [
              "Jaliyadi",
              8
            ],
            [
              "FEBRI RUSKA",
              8
            ],
            [
              "Adil Alamsyah",
              8
            ],
            [
              "SPARE-045",
              7
            ],
            [
              "Wantono",
              7
            ],
            [
              "SPARE-018",
              6
            ],
            [
              "MUHAMMAD",
              6
            ],
            [
              "MOHAMAD REZA",
              6
            ],
            [
              "Widodo Widiharsono",
              6
            ],
            [
              "SPARE-035",
              6
            ],
            [
              "SPARE-011",
              5
            ],
            [
              "SPARE-012",
              4
            ],
            [
              "TRIYANTO",
              4
            ],
            [
              "Totok Iwan R",
              4
            ],
            [
              "SPARE-002",
              3
            ],
            [
              "SPARE-029",
              3
            ],
            [
              "IMAM SAPII",
              2
            ]
          ]
        },
        {
          "name": "Mar / Decel",
          "id": "2023-03 / Decel",
          type: 'column',
          "data": [
            [
              "SPARE-021",
              165
            ],
            [
              "SPARE-005",
              50
            ],
            [
              "SPARE-019",
              43
            ],
            [
              "DENNY INDRA",
              43
            ],
            [
              "M. FACHRI NST",
              31
            ],
            [
              "SPARE-007",
              30
            ],
            [
              "SPARE-017",
              29
            ],
            [
              "M. SYAHRIL",
              28
            ],
            [
              "SPARE-015",
              25
            ],
            [
              "EDI DARMA",
              22
            ],
            [
              "SPARE-018",
              21
            ],
            [
              "SPARE-045",
              20
            ],
            [
              "Hutomo B Suradi",
              20
            ],
            [
              "Wantono",
              19
            ],
            [
              "IWAN SUSILO",
              19
            ],
            [
              "SPARE PSU 007",
              17
            ],
            [
              "SPARE-023",
              17
            ],
            [
              "HENDI PERMANA",
              17
            ],
            [
              "SYAFI'I",
              17
            ],
            [
              "SPARE-027",
              17
            ],
            [
              "SPARE-022",
              17
            ],
            [
              "CHAIRILSYAH",
              17
            ],
            [
              "SPARE-035",
              16
            ],
            [
              "ZAINAL ALAM",
              16
            ],
            [
              "SPARE-014",
              16
            ],
            [
              "SPARE-001",
              15
            ],
            [
              "Agus Arianto",
              14
            ],
            [
              "MOHAMAD REZA",
              13
            ],
            [
              "Widodo Widiharsono",
              13
            ],
            [
              "Regi Antariksa",
              12
            ]
          ]
        },
        {
          "name": "Apr / Decel",
          "id": "2023-04 / Decel",
          type: 'column',
          "data": [
            [
              "DENNY INDRA",
              41
            ],
            [
              "SPARE-035",
              38
            ],
            [
              "HENDI PERMANA",
              37
            ],
            [
              "SPARE-005",
              36
            ],
            [
              "M. FACHRI NST",
              34
            ],
            [
              "SPARE-017",
              31
            ],
            [
              "SPARE PSU 007",
              31
            ],
            [
              "SPARE-007",
              20
            ],
            [
              "Adil Alamsyah",
              18
            ],
            [
              "SPARE-019",
              18
            ],
            [
              "IWAN SUSILO",
              17
            ],
            [
              "SPARE-023",
              17
            ],
            [
              "SPARE-022",
              16
            ],
            [
              "SPARE-009",
              15
            ],
            [
              " Wahyu Kurniawan",
              15
            ],
            [
              "M. SYAHRIL",
              15
            ],
            [
              "ZAINAL ALAM",
              14
            ],
            [
              "M. Fajar Afrisan",
              13
            ],
            [
              "HASUDUNGAN SIREGAR",
              13
            ],
            [
              "Widodo Widiharsono",
              11
            ],
            [
              "SYAFI'I",
              11
            ],
            [
              "SPARE-011",
              11
            ],
            [
              "SPARE-018",
              10
            ],
            [
              "Agus Arianto",
              10
            ],
            [
              "FEBRI RUSKA",
              9
            ],
            [
              "IMAM SAPII",
              9
            ],
            [
              "SPARE-016",
              9
            ],
            [
              "Sugiyanto",
              9
            ],
            [
              "Sigit Prihandoko",
              9
            ],
            [
              "Dwi Kusulistyono",
              9
            ]
          ]
        },
        {
          "name": "May / Decel",
          "id": "2023-05 / Decel",
          type: 'column',
          "data": [
            [
              "DENNY INDRA",
              59
            ],
            [
              "IWAN SUSILO",
              17
            ],
            [
              "SPARE-005",
              14
            ],
            [
              "SPARE-018",
              11
            ],
            [
              "SPARE PSU 007",
              11
            ],
            [
              "ANIL",
              11
            ],
            [
              "SPARE-045",
              10
            ],
            [
              "SPARE-009",
              10
            ],
            [
              "M. SYAHRIL",
              10
            ],
            [
              "SPARE-022",
              10
            ],
            [
              "HUSIN HIDAYAT",
              9
            ],
            [
              "ZULFADLI",
              9
            ],
            [
              "Hutomo B Suradi",
              9
            ],
            [
              "SPARE-017",
              8
            ],
            [
              "SPARE-014",
              8
            ],
            [
              "Regi Antariksa",
              7
            ],
            [
              "ZAINAL ALAM",
              6
            ],
            [
              "M. IDRIS",
              6
            ],
            [
              "Wawan Gunawan",
              6
            ],
            [
              "INDRAWAN HR",
              6
            ],
            [
              "ABD. LATIEF",
              6
            ],
            [
              "SPARE-019",
              6
            ],
            [
              "SPARE-031",
              5
            ],
            [
              "Uus Usman",
              5
            ],
            [
              "SPARE-002",
              5
            ],
            [
              "HASUDUNGAN SIREGAR",
              5
            ],
            [
              "MUHAMMAD NUR",
              5
            ],
            [
              "RIFKY PRADIFTA EKA P",
              5
            ],
            [
              "Adeng Rohman",
              5
            ],
            [
              "SPARE-035",
              5
            ]
          ]
        },
        {
          "name": "Mar / Geofence Speeding",
          "id": "2023-03 / Geofence Speeding",
          type: 'column',
          "data": [
            [
              "M. SYAHRIL",
              538
            ],
            [
              "HAMLIZA",
              378
            ],
            [
              "M.RIZAL",
              316
            ],
            [
              "M. IDRIS",
              261
            ],
            [
              "CHAIRILSYAH",
              219
            ],
            [
              "TEKNISI PNG HENDRA DOSTI",
              208
            ],
            [
              "ZAINAL ALAM",
              162
            ],
            [
              "M. ERWIN",
              155
            ],
            [
              "RIFKY PRADIFTA EKA P",
              144
            ],
            [
              "SUHERMAN",
              115
            ],
            [
              "M. SYAHRIL AR",
              112
            ],
            [
              "INDRAWAN HR",
              107
            ],
            [
              "SYAFI'I",
              104
            ],
            [
              "EDI DARMA",
              97
            ],
            [
              "M. HAMDANI",
              96
            ],
            [
              "M. FACHRI NST",
              89
            ],
            [
              "FADLI",
              85
            ],
            [
              "SURIANTO",
              85
            ],
            [
              "WANDA SAPUTRA",
              82
            ],
            [
              "SPARE PSU 007",
              80
            ],
            [
              "M. Fajar Afrisan",
              72
            ],
            [
              "TEKNISI PNG ROKHIM",
              69
            ],
            [
              "IWAN SUSILO",
              63
            ],
            [
              "Selamet Aditia",
              55
            ],
            [
              " Wahyu Kurniawan",
              46
            ],
            [
              "SUPRIONO",
              45
            ],
            [
              "HENDI PERMANA",
              44
            ],
            [
              "DEDI ISBANDI",
              39
            ],
            [
              "YANI SUHENDRI",
              28
            ],
            [
              "FEBRI RUSKA",
              27
            ]
          ]
        },
        {
          "name": "Apr / Geofence Speeding",
          "id": "2023-04 / Geofence Speeding",
          type: 'column',
          "data": [
            [
              "HENDI PERMANA",
              440
            ],
            [
              "SUHERMAN",
              397
            ],
            [
              "HAMLIZA",
              379
            ],
            [
              "M. SYAHRIL",
              374
            ],
            [
              "M.RIZAL",
              329
            ],
            [
              "M. IDRIS",
              234
            ],
            [
              "TEKNISI PNG HENDRA DOSTI",
              222
            ],
            [
              "CHAIRILSYAH",
              184
            ],
            [
              "IWAN SUSILO",
              184
            ],
            [
              "WANDA SAPUTRA",
              149
            ],
            [
              "YANI SUHENDRI",
              143
            ],
            [
              "M. Fajar Afrisan",
              143
            ],
            [
              "M. FACHRI NST",
              136
            ],
            [
              "M. SYAHRIL AR",
              125
            ],
            [
              "M. ERWIN",
              123
            ],
            [
              "ZAINAL ALAM",
              120
            ],
            [
              "ABD. LATIEF",
              115
            ],
            [
              "SURIANTO",
              113
            ],
            [
              "M. HAMDANI",
              111
            ],
            [
              "Selamet Aditia",
              95
            ],
            [
              "SPARE PSU 007",
              89
            ],
            [
              "SYAFI'I",
              85
            ],
            [
              "INDRAWAN HR",
              64
            ],
            [
              "DEDI ISBANDI",
              55
            ],
            [
              "RIFKY PRADIFTA EKA P",
              55
            ],
            [
              "SUPRIONO",
              46
            ],
            [
              "HERMAN NORVES",
              42
            ],
            [
              "M.RIO",
              41
            ],
            [
              " Wahyu Kurniawan",
              37
            ],
            [
              "AGUSLIANTO",
              27
            ]
          ]
        },
        {
          "name": "May / Geofence Speeding",
          "id": "2023-05 / Geofence Speeding",
          type: 'column',
          "data": [
            [
              "IWAN SUSILO",
              175
            ],
            [
              "M. SYAHRIL",
              165
            ],
            [
              "WANDA SAPUTRA",
              157
            ],
            [
              "ANIL",
              146
            ],
            [
              "SUHERMAN",
              129
            ],
            [
              "M. ERWIN",
              106
            ],
            [
              "M.RIZAL",
              106
            ],
            [
              "ANDRE NOPIANA",
              101
            ],
            [
              "INDRAWAN HR",
              96
            ],
            [
              "NUR AFFANDY",
              86
            ],
            [
              "M. Fajar Afrisan",
              63
            ],
            [
              "M. IDRIS",
              61
            ],
            [
              "Selamet Aditia",
              55
            ],
            [
              "HAMLIZA",
              50
            ],
            [
              "AGUSLIANTO",
              43
            ],
            [
              "ZAINAL ALAM",
              40
            ],
            [
              "DEDI ISBANDI",
              39
            ],
            [
              "SYAFI'I",
              35
            ],
            [
              "YANI SUHENDRI",
              34
            ],
            [
              "HUSIN HIDAYAT",
              33
            ],
            [
              "SPARE PSU 009",
              26
            ],
            [
              "ZULFADLI",
              25
            ],
            [
              "M. SYAHRIL AR",
              25
            ],
            [
              "AMRIZAL",
              19
            ],
            [
              "Husni Nanda",
              19
            ],
            [
              "SPARE PSU 007",
              19
            ],
            [
              "RIFKY PRADIFTA EKA P",
              15
            ],
            [
              "M. HAMDANI",
              15
            ],
            [
              "HERMAN NORVES",
              11
            ],
            [
              "TEKNISI PNG HENDRA DOSTI",
              10
            ]
          ]
        },
        {
          "name": "Mar / Overspeeding",
          "id": "2023-03 / Overspeeding",
          type: 'column',
          "data": [
            [
              "Eko Santoso",
              548
            ],
            [
              "SPARE-014",
              357
            ],
            [
              "SPARE-018",
              317
            ],
            [
              "SPARE-009",
              309
            ],
            [
              "M. IDRIS",
              227
            ],
            [
              "CHAIRILSYAH",
              176
            ],
            [
              "M. ERWIN",
              151
            ],
            [
              "SPARE-019",
              132
            ],
            [
              "M. SYAHRIL",
              112
            ],
            [
              "SPARE-010",
              99
            ],
            [
              "SPARE-022",
              79
            ],
            [
              "SUHERMAN",
              78
            ],
            [
              "RIFKY PRADIFTA EKA P",
              76
            ],
            [
              "ZAINAL ALAM",
              67
            ],
            [
              "TEKNISI PNG HENDRA DOSTI",
              63
            ],
            [
              "Adeng Rohman",
              62
            ],
            [
              "SPARE-005",
              52
            ],
            [
              "OSNALDI",
              51
            ],
            [
              "Eko Andik W",
              45
            ],
            [
              "Kristian Arnianto Nugroho",
              38
            ],
            [
              "SUPRIONO",
              38
            ],
            [
              "Edi Susanto",
              31
            ],
            [
              "IWAN SUSILO",
              27
            ],
            [
              "Eko Yurianto",
              27
            ],
            [
              "WANDA SAPUTRA",
              24
            ],
            [
              "Hutomo B Suradi",
              22
            ],
            [
              "SPARE-017",
              20
            ],
            [
              "M. Fajar Afrisan",
              19
            ],
            [
              "SPARE-007",
              18
            ],
            [
              "HENDI PERMANA",
              17
            ]
          ]
        },
        {
          "name": "Apr / Overspeeding",
          "id": "2023-04 / Overspeeding",
          type: 'column',
          "data": [
            [
              "Eko Santoso",
              630
            ],
            [
              "SPARE-009",
              481
            ],
            [
              "SPARE-018",
              180
            ],
            [
              "M. IDRIS",
              125
            ],
            [
              "Rio Bima Maulana",
              102
            ],
            [
              "TEKNISI PNG HENDRA DOSTI",
              98
            ],
            [
              "M. ERWIN",
              82
            ],
            [
              "IWAN SUSILO",
              76
            ],
            [
              "WANDA SAPUTRA",
              75
            ],
            [
              "HENDI PERMANA",
              70
            ],
            [
              "SUHERMAN",
              63
            ],
            [
              "CHAIRILSYAH",
              63
            ],
            [
              "Edi Susanto",
              60
            ],
            [
              "Adeng Rohman",
              59
            ],
            [
              "M. SYAHRIL",
              58
            ],
            [
              "YANI SUHENDRI",
              53
            ],
            [
              "Wahyudi",
              44
            ],
            [
              "SPARE-010",
              44
            ],
            [
              "SPARE-020",
              42
            ],
            [
              "RIFKY PRADIFTA EKA P",
              31
            ],
            [
              "ZAINAL ALAM",
              22
            ],
            [
              " Wahyu Kurniawan",
              21
            ],
            [
              "SPARE-019",
              13
            ],
            [
              "DENNY INDRA",
              11
            ],
            [
              "SPARE-015",
              10
            ],
            [
              "Eko Andik W",
              7
            ],
            [
              "SPARE-012",
              6
            ],
            [
              "SPARE PSU 007",
              6
            ],
            [
              "Dian Tri Gunarso",
              5
            ],
            [
              "M. HAMDANI",
              4
            ]
          ]
        },
        {
          "name": "May / Overspeeding",
          "id": "2023-05 / Overspeeding",
          type: 'column',
          "data": [
            [
              "M. ERWIN",
              102
            ],
            [
              "Rio Bima Maulana",
              100
            ],
            [
              "SPARE-009",
              96
            ],
            [
              "SPARE-014",
              92
            ],
            [
              "Eko Santoso",
              84
            ],
            [
              "DENNY INDRA",
              84
            ],
            [
              "SUHERMAN",
              81
            ],
            [
              "SPARE-005",
              58
            ],
            [
              "Wahyudi",
              48
            ],
            [
              "SPARE-012",
              43
            ],
            [
              "SPARE-020",
              38
            ],
            [
              "WANDA SAPUTRA",
              36
            ],
            [
              "SPARE-010",
              31
            ],
            [
              "IWAN SUSILO",
              29
            ],
            [
              "M. IDRIS",
              29
            ],
            [
              "NUR AFFANDY",
              27
            ],
            [
              "SPARE-018",
              26
            ],
            [
              "M. Fajar Afrisan",
              16
            ],
            [
              "HUSIN HIDAYAT",
              11
            ],
            [
              "ZULFADLI",
              10
            ],
            [
              "M. SYAHRIL",
              10
            ],
            [
              "ANDRE NOPIANA",
              7
            ],
            [
              "Edi Susanto",
              6
            ],
            [
              "RIFKY PRADIFTA EKA P",
              5
            ],
            [
              "HASUDUNGAN SIREGAR",
              4
            ],
            [
              "SPARE-085",
              3
            ],
            [
              "SPARE-022",
              3
            ],
            [
              "SPARE PSU 007",
              3
            ],
            [
              "Hutomo B Suradi",
              2
            ],
            [
              "Uus Usman",
              2
            ]
          ]
        },
        {
          "name": "Mar / Harsh Cornering",
          "id": "2023-03 / Harsh Cornering",
          type: 'column',
          "data": [
            [
              "ROBY YUSUF",
              0
            ],
            [
              "MOHAMAD REZA",
              0
            ],
            [
              "Ruddy Suhartono",
              0
            ],
            [
              "SPARE-020",
              0
            ],
            [
              "SPARE-026",
              0
            ],
            [
              "M. FACHRI NST",
              0
            ],
            [
              "Lulus Sampurno",
              0
            ],
            [
              "Eko Andik W",
              0
            ],
            [
              "HERMAN NORVES",
              0
            ],
            [
              "Kristian Arnianto Nugroho",
              0
            ],
            [
              "Kustono",
              0
            ],
            [
              "SPARE-089",
              0
            ],
            [
              "",
              0
            ],
            [
              "Rio Antoni",
              0
            ],
            [
              "Rasito",
              0
            ],
            [
              "SUPRIONO",
              0
            ],
            [
              "Saiful Anwar",
              0
            ],
            [
              "Suhariyanto",
              0
            ],
            [
              "RASYID FADLAH",
              0
            ],
            [
              "Priyo Sedjati",
              0
            ],
            [
              "Edi Susanto",
              0
            ],
            [
              "FADLI",
              0
            ],
            [
              "Karsiban",
              0
            ],
            [
              "M. Syafii",
              0
            ],
            [
              "Dwi Ekky Nonik TS",
              0
            ],
            [
              "Dhadhang Cahyono",
              0
            ],
            [
              "TEKNISI PNG HENDRA DOSTI",
              0
            ],
            [
              "Suwandi",
              0
            ],
            [
              "TEKNISI PNG ROKHIM",
              0
            ],
            [
              "TRIYANTO",
              0
            ]
          ]
        },
        {
          "name": "Apr / Harsh Cornering",
          "id": "2023-04 / Harsh Cornering",
          type: 'column',
          "data": [
            [
              "Wahyudi",
              0
            ],
            [
              "WINZECA APRIYONO SAPUTRA",
              0
            ],
            [
              "YANTI",
              0
            ],
            [
              "Yunus Apriyanto",
              0
            ],
            [
              "Aries Prasetyo",
              0
            ],
            [
              "Trihono Heru Setyanto",
              0
            ],
            [
              "Sugiyanto",
              0
            ],
            [
              "SPARE-025",
              0
            ],
            [
              "SPARE-037",
              0
            ],
            [
              "SURIANTO",
              0
            ],
            [
              "Selamet Aditia",
              0
            ],
            [
              "Djiono",
              0
            ],
            [
              "FADLI",
              0
            ],
            [
              "NUR AFFANDY",
              0
            ],
            [
              "Rio Antoni",
              0
            ],
            [
              "SISWANTO",
              0
            ],
            [
              "SPARE-024",
              0
            ],
            [
              "MUHAMMAD NUR",
              0
            ],
            [
              "M. HAMDANI",
              0
            ],
            [
              "HASUDUNGAN SIREGAR",
              0
            ],
            [
              "Heryberthus Suharyono",
              0
            ],
            [
              "Hutomo B Suradi",
              0
            ],
            [
              "Jaliyadi",
              0
            ],
            [
              "SPARE-020",
              0
            ],
            [
              "SPARE-008",
              0
            ],
            [
              "ANDRE NOPIANA",
              0
            ],
            [
              "Adik Puryanto",
              0
            ],
            [
              "Ali Mashar",
              0
            ],
            [
              "Dwi Kusulistyono",
              0
            ],
            [
              "ABU BAKAR",
              0
            ]
          ]
        },
        {
          "name": "May / Harsh Cornering",
          "id": "2023-05 / Harsh Cornering",
          type: 'column',
          "data": [
            [
              "Regi Antariksa",
              0
            ],
            [
              "MUHAMMAD NUR",
              0
            ],
            [
              "SISWANTO",
              0
            ],
            [
              "SPARE-006",
              0
            ],
            [
              "SPARE-008",
              0
            ],
            [
              "MOHAMAD REZA",
              0
            ],
            [
              "M. SYAHRIL AR",
              0
            ],
            [
              "Heryberthus Suharyono",
              0
            ],
            [
              "Hutomo B Suradi",
              0
            ],
            [
              "IMAM SAPII",
              0
            ],
            [
              "Jaliyadi",
              0
            ],
            [
              "SPARE-016",
              0
            ],
            [
              "SPARE-032",
              0
            ],
            [
              "TRIYANTO",
              0
            ],
            [
              "Totok Iwan R",
              0
            ],
            [
              "Uus Usman",
              0
            ],
            [
              "WANDA SAPUTRA",
              0
            ],
            [
              "Sugiyanto",
              0
            ],
            [
              "Sismadi",
              0
            ],
            [
              "SPARE-041",
              0
            ],
            [
              "SPARE-046",
              0
            ],
            [
              "SPARE-085",
              0
            ],
            [
              "Sigit Prihandoko",
              0
            ],
            [
              "HENDRIK HARI",
              0
            ],
            [
              "HASUDUNGAN SIREGAR",
              0
            ],
            [
              "Wantono",
              0
            ],
            [
              "Winih Soemarsono",
              0
            ],
            [
              "YANI SUHENDRI",
              0
            ],
            [
              "Yudi Purwinto",
              0
            ],
            [
              "WINZECA APRIYONO SAPUTRA",
              0
            ]
          ]
        }
      ]
    ]

    var utilisationData = [
      [
        {
          "name": "Drive",
          "type": 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Drive",
              "y": 306883598
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Drive",
              "y": 236107895
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Drive",
              "y": 93537216
            }
          ]
        },
        {
          "name": "Idle",
          "type": 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Idle",
              "y": 82107070
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Idle",
              "y": 63040426
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Idle",
              "y": 25221562
            }
          ]
        },
        {
          "name": "Stop",
          "type": 'column',
          "data": [
            {
              "name": "Mar",
              "drilldown": "2023-03 / Stop",
              "y": 897144414
            },
            {
              "name": "Apr",
              "drilldown": "2023-04 / Stop",
              "y": 889122972
            },
            {
              "name": "May",
              "drilldown": "2023-05 / Stop",
              "y": 260575609
            }
          ]
        }
      ],
      [
        {
          "name": "Mar / Drive",
          "id": "2023-03 / Drive",
          "type": 'column',
          "data": [
            [
              "EMP01 - BM 7110 CH",
              2613969
            ],
            [
              "K 8022 Y (OBD)",
              2458386
            ],
            [
              "K 1835 RN (OBD)",
              2424568
            ],
            [
              "K 1840 RN (OBD)",
              2417362
            ],
            [
              "BM 8954 ZU",
              2374085
            ],
            [
              "B - 33",
              2316344
            ],
            [
              "K 8023 Y (OBD)",
              2292790
            ],
            [
              "BM 8856 CH",
              2235029
            ],
            [
              "K 1836 RN (OBD)",
              2114217
            ],
            [
              "BM 8974 ZU",
              2052034
            ],
            [
              "B - 34",
              2031789
            ],
            [
              "K 1841 RN (OBD)",
              1991584
            ],
            [
              "BM 8857 CH",
              1906424
            ],
            [
              "B 1942 VJC (BP)",
              1833538
            ],
            [
              "K 1832 RN (OBD)",
              1793541
            ],
            [
              "BM 8216 ZU",
              1790518
            ],
            [
              "LD0138",
              1703080
            ],
            [
              "LD0195",
              1697774
            ],
            [
              "LD0096",
              1672168
            ],
            [
              "K 7466 AN (OBD)",
              1671766
            ],
            [
              "LD0167",
              1666818
            ],
            [
              "K 7467 AN (OBD)",
              1661455
            ],
            [
              "LD0137",
              1642505
            ],
            [
              "B 1458 TFN",
              1634167
            ],
            [
              "BM 8240 FU",
              1628742
            ],
            [
              "LD0136",
              1621125
            ],
            [
              "LD0095",
              1619074
            ],
            [
              "B 2237 BGZ",
              1618888
            ],
            [
              "LD0389",
              1606974
            ],
            [
              "LD0113",
              1590507
            ]
          ]
        },
        {
          "name": "Apr / Drive",
          "id": "2023-04 / Drive",
          "type": 'column',
          "data": [
            [
              "LONG ARM",
              2692293
            ],
            [
              "K 1840 RN (OBD)",
              2418098
            ],
            [
              "EMP01 - BM 7110 CH",
              2414878
            ],
            [
              "K 8022 Y (OBD)",
              2245704
            ],
            [
              "B - 33",
              2230415
            ],
            [
              "K 1835 RN (OBD)",
              2132307
            ],
            [
              "K 8023 Y (OBD)",
              2092710
            ],
            [
              "B - 34",
              2080337
            ],
            [
              "K 1836 RN (OBD)",
              2075249
            ],
            [
              "K 1841 RN (OBD)",
              2072349
            ],
            [
              "BM 8856 CH",
              2027860
            ],
            [
              "BM 8857 CH",
              1800767
            ],
            [
              "LD0389",
              1597450
            ],
            [
              "B 2237 BGZ",
              1537456
            ],
            [
              "K 1843 RN (OBD)",
              1510349
            ],
            [
              "LD0388",
              1489639
            ],
            [
              "K 1832 RN (OBD)",
              1481523
            ],
            [
              "LD0136",
              1453095
            ],
            [
              "LD0113",
              1433555
            ],
            [
              "LD0392",
              1418509
            ],
            [
              "LD0368",
              1412551
            ],
            [
              "LD0364",
              1409046
            ],
            [
              "LD0137",
              1388014
            ],
            [
              "LD0105",
              1379601
            ],
            [
              "LD0095",
              1348229
            ],
            [
              "LD0139",
              1343163
            ],
            [
              "LD0157",
              1340971
            ],
            [
              "LD0068",
              1310905
            ],
            [
              "A 5732 CK (Amin MKT)",
              1304384
            ],
            [
              "SADT6108",
              1273599
            ]
          ]
        },
        {
          "name": "May / Drive",
          "id": "2023-05 / Drive",
          "type": 'column',
          "data": [
            [
              "K 1840 RN (OBD)",
              811918
            ],
            [
              "EMP01 - BM 7110 CH",
              799073
            ],
            [
              "B - 34",
              775863
            ],
            [
              "BM 8857 CH",
              752502
            ],
            [
              "B - 33",
              724226
            ],
            [
              "K 1841 RN (OBD)",
              723315
            ],
            [
              "K 8022 Y (OBD)",
              708130
            ],
            [
              "K 1835 RN (OBD)",
              700523
            ],
            [
              "K 1836 RN (OBD)",
              679005
            ],
            [
              "BM 8216 ZU",
              674767
            ],
            [
              "BM 8856 CH",
              673622
            ],
            [
              "BM 8954 ZU",
              647818
            ],
            [
              "B 2237 BGZ",
              635685
            ],
            [
              "LD0388",
              621233
            ],
            [
              "LD0392",
              609148
            ],
            [
              "LD0398",
              596115
            ],
            [
              "LD0368",
              582015
            ],
            [
              "LD0349",
              579715
            ],
            [
              "K 7466 AN (OBD)",
              574766
            ],
            [
              "LD0370",
              565971
            ],
            [
              "K 7467 AN (OBD)",
              562658
            ],
            [
              "LD0364",
              555685
            ],
            [
              "LD0192",
              551469
            ],
            [
              "B 1942 VJC",
              550578
            ],
            [
              "LD0166",
              549900
            ],
            [
              "SADT6111",
              545036
            ],
            [
              "LD0369",
              539250
            ],
            [
              "LD0136",
              532031
            ],
            [
              "SADT6114",
              531546
            ],
            [
              "LD0201",
              524969
            ]
          ]
        },
        {
          "name": "Mar / Idle",
          "id": "2023-03 / Idle",
          "type": 'column',
          "data": [
            [
              "BM 8591 ZU",
              3208242
            ],
            [
              "B - 29",
              2305580
            ],
            [
              "Crane 004 (XCT 60T)",
              1314392
            ],
            [
              "LD0351",
              1066396
            ],
            [
              "HITACHI 110-RENTAL",
              863040
            ],
            [
              "ZAXIS 110 / DVS4",
              809470
            ],
            [
              "EXCAVATOR ZAXIS-138",
              762406
            ],
            [
              "Crane 001 (XCMG 50T)",
              738403
            ],
            [
              "GH-034",
              707331
            ],
            [
              "L802_13763",
              682558
            ],
            [
              "GH-30",
              680448
            ],
            [
              "GH-026",
              648095
            ],
            [
              "LONG ARM",
              638425
            ],
            [
              "GH-27",
              630947
            ],
            [
              "GH-029",
              603516
            ],
            [
              "SADT164",
              589891
            ],
            [
              "GH-020",
              587521
            ],
            [
              "Crane 002 (ZL 55T)",
              576859
            ],
            [
              "EXCAVATOR LIUGONG",
              571010
            ],
            [
              "Crane 005 (ZTC 55T)",
              560632
            ],
            [
              "LD0112",
              552999
            ],
            [
              "SADT165",
              533077
            ],
            [
              "SADT6101",
              529819
            ],
            [
              "K 1235 HN",
              509114
            ],
            [
              "A 5732 CK (Amin MKT)",
              500386
            ],
            [
              "BLZ-002",
              494331
            ],
            [
              "SADT5107",
              477647
            ],
            [
              "B - 34",
              475533
            ],
            [
              "GH-033",
              461658
            ],
            [
              "LD0372",
              453395
            ]
          ]
        },
        {
          "name": "Apr / Idle",
          "id": "2023-04 / Idle",
          "type": 'column',
          "data": [
            [
              "BM 8591 ZU",
              1844587
            ],
            [
              "LONG ARM",
              1159031
            ],
            [
              "Crane 005 (ZTC 55T)",
              1019861
            ],
            [
              "L802_13763",
              945819
            ],
            [
              "EXCAVATOR ZAXIZ 110",
              639458
            ],
            [
              "AGUS / DVS4",
              530931
            ],
            [
              "GH-034",
              524957
            ],
            [
              "HITACHI 110-RENTAL",
              508424
            ],
            [
              "GH-026",
              499587
            ],
            [
              "SADT156",
              466770
            ],
            [
              "GH-30",
              462476
            ],
            [
              "B - 29",
              453892
            ],
            [
              "EXCAVATOR ZAXIS-138",
              453755
            ],
            [
              "SADT162",
              450562
            ],
            [
              "K 1841 RN (OBD)",
              439237
            ],
            [
              "SADT165",
              437953
            ],
            [
              "A 5732 CK (Amin MKT)",
              407661
            ],
            [
              "LD0350",
              406787
            ],
            [
              "DA 8419 HI (PO-07)",
              401554
            ],
            [
              "EXCAVATOR LIUGONG",
              393296
            ],
            [
              "LD0168",
              393103
            ],
            [
              "LD0212",
              390955
            ],
            [
              "SADT164",
              380123
            ],
            [
              "SADT5107",
              379848
            ],
            [
              "LD0154",
              377194
            ],
            [
              "GH-024",
              375704
            ],
            [
              "S 9096 HL",
              372983
            ],
            [
              "LD0192",
              368384
            ],
            [
              "PS03011567 - KOBELCO -MINI EXCAVATOR SK50",
              364882
            ],
            [
              "LD0368",
              363261
            ]
          ]
        },
        {
          "name": "May / Idle",
          "id": "2023-05 / Idle",
          "type": 'column',
          "data": [
            [
              "Crane 001 (XCMG 50T)",
              426056
            ],
            [
              "Crane 005 (ZTC 55T)",
              409981
            ],
            [
              "GH-034",
              254929
            ],
            [
              "SADT5107",
              248672
            ],
            [
              "Crane 002 (ZL 55T)",
              232872
            ],
            [
              "GH-029",
              218866
            ],
            [
              "SBYDT021",
              218838
            ],
            [
              "LD0193",
              218311
            ],
            [
              "EXCAVATOR ZAXIZ 110",
              216868
            ],
            [
              "SADT163",
              213654
            ],
            [
              "LONG ARM",
              209840
            ],
            [
              "GH-30",
              209804
            ],
            [
              "LD0350",
              208662
            ],
            [
              "LD0372",
              205004
            ],
            [
              "EXCAVATOR ZAXIS-138",
              204829
            ],
            [
              "GH-020",
              202077
            ],
            [
              "LD0095",
              198390
            ],
            [
              "SADT6113",
              196839
            ],
            [
              "1072000005",
              192986
            ],
            [
              "GH-022",
              191945
            ],
            [
              "SADT162",
              184781
            ],
            [
              "VL103_15477",
              184749
            ],
            [
              "L802_13763",
              182156
            ],
            [
              "DA 8537 HI (PO-02)",
              175056
            ],
            [
              "SBYDT010",
              174852
            ],
            [
              "LD0365",
              173246
            ],
            [
              "LD0194",
              173100
            ],
            [
              "SADT247",
              172703
            ],
            [
              "G19S_62961",
              171944
            ],
            [
              "LD0191",
              170900
            ]
          ]
        },
        {
          "name": "Mar / Stop",
          "id": "2023-03 / Stop",
          "type": 'column',
          "data": [
            [
              "LD0072",
              7335006
            ],
            [
              "LD0155",
              7023142
            ],
            [
              "K 8023 Y",
              6647070
            ],
            [
              "B 1685 BOE",
              6567282
            ],
            [
              "KOMATSU PC130F",
              6406913
            ],
            [
              "BM 8301 QF",
              6061319
            ],
            [
              "KT 8089 YF",
              6040345
            ],
            [
              "LD0375",
              5980802
            ],
            [
              "SBYDT010",
              5710241
            ],
            [
              "GH-060167",
              5687896
            ],
            [
              "KT 8441 YH",
              5591565
            ],
            [
              "GH-021",
              5301372
            ],
            [
              "LD0104",
              4838655
            ],
            [
              "K 7002 Y",
              4677074
            ],
            [
              "DOOSAN MINI-001",
              4445786
            ],
            [
              "S 9019 HL",
              4199621
            ],
            [
              "BM 8571 ZU",
              4097433
            ],
            [
              "EXCAVATOR LIUGONG",
              3999686
            ],
            [
              "DA 8543 HI (WOWS.01)",
              3654875
            ],
            [
              "EXCAVATOR ZAXIZ 110",
              3561429
            ],
            [
              "S 9033 HL",
              3542831
            ],
            [
              "BM 8368 QF",
              3449102
            ],
            [
              "B 2774 KN",
              3356670
            ],
            [
              "K 7465 AN",
              3334498
            ],
            [
              "B 1566 PKU",
              3284360
            ],
            [
              "B 9564 UCS",
              3127359
            ],
            [
              "S 9050 HL",
              3095549
            ],
            [
              "SBYDT011",
              3092507
            ],
            [
              "B 2344 UFE",
              3067541
            ],
            [
              "EP 01",
              3066324
            ]
          ]
        },
        {
          "name": "Apr / Stop",
          "id": "2023-04 / Stop",
          "type": 'column',
          "data": [
            [
              "B 1685 BOE",
              9378980
            ],
            [
              "LD0104",
              8698382
            ],
            [
              "K 7002 Y",
              7354835
            ],
            [
              "LD0155",
              7005951
            ],
            [
              "GH-060167",
              6955623
            ],
            [
              "LD0072",
              6892710
            ],
            [
              "LD0391",
              6229825
            ],
            [
              "BM 8301 QF",
              5434733
            ],
            [
              "SBYDT011",
              5367300
            ],
            [
              "LD0071",
              5274744
            ],
            [
              "K 7465 AN",
              4977662
            ],
            [
              "KOMATSU PC130F",
              4911991
            ],
            [
              "B 2015 UFE",
              4670480
            ],
            [
              "B 9429 UCM",
              4580650
            ],
            [
              "S 1057 BR",
              4529187
            ],
            [
              "B 2904 UFD",
              4509256
            ],
            [
              "BM 1063 VQ (Rifky)",
              4440591
            ],
            [
              "B 2672 UFE",
              4367655
            ],
            [
              "LD0375",
              4350357
            ],
            [
              "S 9019 HL",
              4284126
            ],
            [
              "K 7472 AN",
              4276362
            ],
            [
              "B 2703 UFD",
              4271814
            ],
            [
              "CASE PC210",
              4215893
            ],
            [
              "B 2701 UFD",
              4187496
            ],
            [
              "B 2003 UFE",
              4173434
            ],
            [
              "BM 1766 AY (Wanda)",
              4123142
            ],
            [
              "K 7467 AN",
              4083347
            ],
            [
              "GH-029",
              4047526
            ],
            [
              "GH-028",
              4000644
            ],
            [
              "B 9085 BCW",
              3947654
            ]
          ]
        },
        {
          "name": "May / Stop",
          "id": "2023-05 / Stop",
          "type": 'column',
          "data": [
            [
              "LD0376",
              3013216
            ],
            [
              "LD0391",
              3010042
            ],
            [
              "LD0104",
              3008158
            ],
            [
              "LD0377",
              2536374
            ],
            [
              "EP 21",
              2334032
            ],
            [
              "LD0076",
              2163564
            ],
            [
              "GH-060167",
              2146372
            ],
            [
              "K 7002 Y",
              1917735
            ],
            [
              "LD0071",
              1850647
            ],
            [
              "B 9564 UCS",
              1765059
            ],
            [
              "B 2585 OB",
              1698997
            ],
            [
              "S 9019 HL",
              1567600
            ],
            [
              "LD0088",
              1539184
            ],
            [
              "LD0072",
              1419967
            ],
            [
              "BM 8301 QF",
              1358809
            ],
            [
              "BA 1651 ID",
              1336165
            ],
            [
              "GH-021",
              1323610
            ],
            [
              "EP 01",
              1311942
            ],
            [
              "B 1757 BMD",
              1185098
            ],
            [
              "B 1649 SOJ",
              1147016
            ],
            [
              "S 9033 HL",
              1129367
            ],
            [
              "ZAXIS 110 / DVS4",
              1128078
            ],
            [
              "PS03011567 - KOBELCO -MINI EXCAVATOR SK50",
              1106996
            ],
            [
              "BM 8849 TQ L300 - Toni",
              1079423
            ],
            [
              "DA 8528 HI (RAM-06)",
              1076090
            ],
            [
              "B - 18",
              1072854
            ],
            [
              "BM 1826 TA (Hendra Dosti)",
              1072157
            ],
            [
              "B 9731 BCY",
              1062147
            ],
            [
              "S 9050 HL",
              1029416
            ],
            [
              "RIAN PC 110 / DVS4",
              1009372
            ]
          ]
        }
      ]
    ]

    var fuelConsumptionData = [
      [
        {
          "name": "Mar",
          "y": 3950659.9
        },
        {
          "name": "Apr",
          "y": 1139020.1
        },
        {
          "name": "May",
          "y": 693194.3
        }
      ],
      [
        {
          "name": "Mar",
          "y": 50042580017.821
        },
        {
          "name": "Apr",
          "y": 14356575072.286
        },
        {
          "name": "May",
          "y": 8758055971.4801
        }
      ]
    ]

    this.mileageChart(dataMileage, 'Milleage Month', 'Total Mileage')
    this.driverBehaviourChart(dataDriverBehavior, 'Driver Behavior', 'Values')
    this.utilisationChart(utilisationData, 'Utilisation Graph')
    this.fuelConsumptionChart(fuelConsumptionData, 'Fuel Consumption')
  }

  fuelConsumptionChart(arr: any[], title: string){
    this.fuelConsumptionOptions = {
      chart: {
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
          align: 'left',
          text: title
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value}',
        },
        title: {
          text: 'Price',
        }
      }, { // Secondary yAxis
        title: {
          text: 'Price',
        },
        labels: {
          format: 'Rp. {value}',
        },
        opposite: true
      }],

      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
              },
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
      },
      series: [
        {
          type: 'column',
          name: 'Fuel Consumption',
          data: arr[0]
        },
        {
          type: 'spline',
          name: 'Fuel Price',
          yAxis: 1,
          data: arr[1]
        }
      ]
    }
  }

  utilisationChart(arr: any[], title: string) {
    this.utilisationOptions = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
          align: 'left',
          text: title
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category'
      },
      legend: {
          enabled: true
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
              },
              stacking: 'normal'
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
      },
      series: arr[0],
      drilldown: {
          breadcrumbs: {
              position: {
                  align: 'right'
              }
          },
          series: arr[1]
      }
    }
  }

  driverBehaviourChart(arr: any[], title: string, _yAxis: string) {
    this.driverBehaviourOptions = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
          align: 'left',
          text: title
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: _yAxis
          }

      },
      legend: {
          enabled: true
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
              },
              stacking: 'normal'
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
      },
      series: arr[0],
      drilldown: {
          breadcrumbs: {
              position: {
                  align: 'right'
              }
          },
          series: arr[1]
      }
    }
  }

  mileageChart(arr: any[], title: string, _yAxis: string) {
    this.mileageOptions = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
          align: 'left',
          text: title
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: _yAxis
          }

      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
              }
          },
      },

      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
      },

      series: [
          {
              name: 'Mileage Month',
              colorByPoint: true,
              type: 'column',
              data: arr[0]
          }
      ],
      drilldown: {
          breadcrumbs: {
              position: {
                  align: 'right'
              }
          },
          series: arr[1]
      }
    }
  }
}
