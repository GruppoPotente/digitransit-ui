config = require('../../config')

module.exports = {
  "version": 8,
  "name": "Mapbox Streets",
  "sources": {
    "composite": {
      "url": config.URL.SERVER_ROOT + "/hsl-vector-map/index.json",
      "type": "vector"
    }
  },
  "sprite": config.ROOT_PATH + "/map/digitransit",
  "glyphs": config.ROOT_PATH + "/mapFonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "background-color": "#E8E0D8"
      }
    },
    {
      "id": "scrub",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 9,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "scrub"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#B0C89F",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              9,
              0
            ],
            [
              16,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "grass",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 9,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "grass"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#B0C89F",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              9,
              0
            ],
            [
              16,
              0.4
            ]
          ]
        }
      }
    },
    {
      "id": "wood",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 6,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "wood"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#B0C89F",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              6,
              0
            ],
            [
              16,
              0.5
            ]
          ]
        }
      }
    },
    {
      "id": "agriculture",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "agriculture"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "fill-color": "rgba(221,85,85,1.000)",
        "fill-opacity": 1
      }
    },
    {
      "id": "hospital",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "hospital"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#F2E3E1"
      }
    },
    {
      "id": "school",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "school"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#F2EAB8"
      }
    },
    {
      "id": "parks",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "park"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#C1E5A1",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "glaciers",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 9,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "glacier"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#EDE5DD",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              9,
              0
            ],
            [
              10,
              0.25
            ]
          ]
        }
      }
    },
    {
      "id": "pitch",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "pitch"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#CAE6A9"
      }
    },
    {
      "id": "pitch-line",
      "type": "line",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "pitch"
        ]
      ],
      "layout": {},
      "paint": {
        "line-color": "#e1f2c6"
      }
    },
    {
      "id": "cemetery",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "cemetery"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#D5DCC2"
      }
    },
    {
      "id": "industrial",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "industrial"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#DDDCDC"
      }
    },
    {
      "id": "sand",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "sand"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#F7ECD2"
      }
    },
    {
      "id": "waterway-river",
      "type": "line",
      "source": "composite",
      "source-layer": "waterway",
      "minzoom": 8,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "any",
        [
          "in",
          "class",
          "river"
        ],
        [
          "in",
          "class",
          "canal"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": {
          "base": 1,
          "stops": [
            [
              0,
              "butt"
            ],
            [
              11,
              "round"
            ]
          ]
        },
        "line-join": "round"
      },
      "paint": {
        "line-color": "#BEE4F8",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              8.5,
              0.1
            ],
            [
              20,
              8
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              8,
              0
            ],
            [
              8.5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "waterway-other",
      "type": "line",
      "source": "composite",
      "source-layer": "waterway",
      "minzoom": 13,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!=",
          "class",
          "river"
        ],
        [
          "!=",
          "class",
          "canal"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#BEE4F8",
        "line-width": {
          "base": 1.35,
          "stops": [
            [
              13.5,
              0.1
            ],
            [
              20,
              3
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13,
              0
            ],
            [
              13.5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "composite",
      "source-layer": "water",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#BEE4F8"
      }
    },
    {
      "id": "landuse-overlay",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse_overlay",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#9DD3D8",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              10,
              0.25
            ],
            [
              10.5,
              0.15
            ]
          ]
        }
      }
    },
    {
      "id": "landuse-overlay-pattern",
      "ref": "landuse-overlay",
      "interactive": true,
      "paint": {
        "fill-color": "#9DD3D8",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              10,
              0
            ],
            [
              10.5,
              1
            ]
          ]
        },
        "fill-pattern": {
          "base": 1,
          "stops": [
            [
              13,
              "marsh-16"
            ],
            [
              14,
              "marsh-32"
            ]
          ]
        }
      }
    },
    {
      "id": "building-bottom",
      "type": "fill",
      "source": "composite",
      "source-layer": "building",
      "minzoom": 12,
      "maxzoom": 22,
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#d4ccc4",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              12.5,
              0
            ],
            [
              14.5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "building-top",
      "ref": "building-bottom",
      "interactive": true,
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [
              12,
              "#E8E0D8"
            ],
            [
              13,
              "#e0d8d0"
            ]
          ]
        },
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              12,
              0
            ],
            [
              14,
              1
            ]
          ]
        },
        "fill-outline-color": "#d4ccc4",
        "fill-translate": {
          "base": 1,
          "stops": [
            [
              13,
              [
                0,
                0
              ]
            ],
            [
              20,
              [
                -5,
                -5
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-polygon",
      "type": "fill",
      "source": "composite",
      "source-layer": "aeroway",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "$type",
          "Polygon"
        ],
        [
          "!=",
          "type",
          "apron"
        ]
      ],
      "layout": {},
      "paint": {
        "fill-color": "#dbcedb",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              11.5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-runway",
      "type": "line",
      "source": "composite",
      "source-layer": "aeroway",
      "minzoom": 9,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "runway"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt"
      },
      "paint": {
        "line-color": "#dbcedb",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              9,
              1
            ],
            [
              18,
              80
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-taxiway",
      "type": "line",
      "source": "composite",
      "source-layer": "aeroway",
      "minzoom": 9,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "taxiway"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt"
      },
      "paint": {
        "line-color": "#dbcedb",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              10,
              0.5
            ],
            [
              18,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "admin-3-4-boundaries-bg",
      "type": "line",
      "source": "composite",
      "source-layer": "admin",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          ">=",
          "admin_level",
          3
        ],
        [
          "in",
          "maritime",
          0
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "bevel"
      },
      "paint": {
        "line-color": {
          "base": 1,
          "stops": [
            [
              8,
              "#E8E0D8"
            ],
            [
              16,
              "#f6e8e1"
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              3,
              3.5
            ],
            [
              10,
              8
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              7,
              0
            ],
            [
              8,
              0.75
            ]
          ]
        },
        "line-dasharray": [
          1,
          0
        ],
        "line-translate": [
          0,
          0
        ],
        "line-blur": {
          "base": 1,
          "stops": [
            [
              3,
              0
            ],
            [
              8,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-street_limited-polygon",
      "type": "fill",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "Polygon"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#EEE8E3",
        "fill-opacity": 0.75
      }
    },
    {
      "id": "tunnel-path-bg",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "path"
        ]
      ],
      "layout": {
        "visibility": "none",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              15,
              2
            ],
            [
              18,
              7
            ]
          ]
        },
        "line-dasharray": [
          1,
          0
        ],
        "line-color": "#666",
        "line-blur": 0,
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              15,
              0
            ],
            [
              15.25,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-path",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "path"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              15,
              1
            ],
            [
              18,
              4
            ]
          ]
        },
        "line-dasharray": {
          "base": 1,
          "stops": [
            [
              15,
              [
                0.1,
                1.25
              ]
            ],
            [
              16,
              [
                0.1,
                1.6
              ]
            ],
            [
              17,
              [
                0.1,
                1.45
              ]
            ],
            [
              18,
              [
                0.1,
                1.3
              ]
            ]
          ]
        },
        "line-color": "#f5f2ee",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              15,
              0
            ],
            [
              15.25,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-street-low",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-street_limited-low",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-motorway_link-case",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-dasharray": [
          3,
          3
        ]
      }
    },
    {
      "id": "tunnel-service-driveway-case",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "service",
          "driveway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-dasharray": [
          3,
          3
        ]
      }
    },
    {
      "id": "tunnel-street_limited-case",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ],
        [
          "!=",
          "type",
          "construction"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-dasharray": [
          3,
          3
        ],
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-street-case",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-dasharray": [
          3,
          3
        ],
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-main-case",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main"
        ],
        [
          "!=",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.75
            ],
            [
              18,
              2
            ]
          ]
        },
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ]
        },
        "line-color": "#666"
      }
    },
    {
      "id": "tunnel-trunk-case",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main"
        ],
        [
          "in",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-opacity": 1,
        "line-dasharray": [
          3,
          3
        ]
      }
    },
    {
      "id": "tunnel-motorway-case",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-opacity": 1,
        "line-dasharray": [
          3,
          3
        ]
      }
    },
    {
      "id": "tunnel-motorway_link",
      "ref": "tunnel-motorway_link-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": 1,
        "line-dasharray": [
          1,
          0
        ]
      }
    },
    {
      "id": "tunnel-service-driveway",
      "ref": "tunnel-service-driveway-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#fff",
        "line-dasharray": [
          1,
          0
        ]
      }
    },
    {
      "id": "tunnel-construction",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 14,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ],
        [
          "in",
          "type",
          "construction"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#666",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        },
        "line-dasharray": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0.4,
                0.8
              ]
            ],
            [
              15,
              [
                0.3,
                0.6
              ]
            ],
            [
              16,
              [
                0.2,
                0.3
              ]
            ],
            [
              17,
              [
                0.2,
                0.25
              ]
            ],
            [
              18,
              [
                0.15,
                0.15
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-street_limited",
      "ref": "tunnel-street_limited-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-street",
      "ref": "tunnel-street-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-main",
      "ref": "tunnel-main-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": 1,
        "line-dasharray": [
          1,
          0
        ],
        "line-blur": 0
      }
    },
    {
      "id": "tunnel-trunk",
      "ref": "tunnel-trunk-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-color": "#fff"
      }
    },
    {
      "id": "tunnel-motorway",
      "ref": "tunnel-motorway-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-dasharray": [
          1,
          0
        ],
        "line-opacity": 1,
        "line-color": "#fff",
        "line-blur": 0
      }
    },
    {
      "id": "tunnel-rail",
      "type": "line",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "major_rail",
          "minor_rail"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              11,
              "#d8d5c8"
            ],
            [
              16,
              "#c0beb2"
            ]
          ]
        },
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-rail-tracks",
      "ref": "tunnel-rail",
      "interactive": true,
      "paint": {
        "line-color": {
          "stops": [
            [
              11,
              "#d8d5c8"
            ],
            [
              16,
              "#c0beb2"
            ]
          ]
        },
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              4
            ],
            [
              20,
              8
            ]
          ]
        },
        "line-dasharray": [
          0.1,
          15
        ],
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              10,
              0
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road-path-bg",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "path"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              15,
              2
            ],
            [
              18,
              7
            ]
          ]
        },
        "line-dasharray": [
          1,
          0
        ],
        "line-color": "#666",
        "line-blur": 0,
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              15,
              0
            ],
            [
              15.25,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "road-path",
      "ref": "road-path-bg",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              15,
              1
            ],
            [
              18,
              4
            ]
          ]
        },
        "line-color": "#fff",
        "line-dasharray": {
          "base": 1,
          "stops": [
            [
              15,
              [
                0.1,
                1.25
              ]
            ],
            [
              16,
              [
                0.1,
                1.6
              ]
            ],
            [
              17,
              [
                0.1,
                1.45
              ]
            ],
            [
              18,
              [
                0.1,
                1.3
              ]
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              15,
              0
            ],
            [
              15.25,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road-street_limited-polygon-outline",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 12,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "Polygon"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "line-color": "#666",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              1.5
            ],
            [
              20,
              4
            ]
          ]
        },
        "line-opacity": 0.2
      }
    },
    {
      "id": "road-street-low",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "stops": [
            [
              11,
              0
            ],
            [
              11.25,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "road-street_limited-low",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "stops": [
            [
              11,
              0
            ],
            [
              11.25,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "road-motorway_link-case",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 10,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              10,
              0
            ],
            [
              11,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "road-service-driveway-case",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "service",
          "driveway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-opacity": 0.2,
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ]
        }
      }
    },
    {
      "id": "road-street_limited-case",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ],
        [
          "!=",
          "type",
          "construction"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-opacity": 0.2
      }
    },
    {
      "id": "road-street-case",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": 0.2
      }
    },
    {
      "id": "road-main-case",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main"
        ],
        [
          "!=",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.75
            ],
            [
              18,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              9,
              0
            ],
            [
              10,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "road-trunk-case",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 5,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main"
        ],
        [
          "in",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "road-motorway-case",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-opacity": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "road-street_limited-polygon",
      "type": "fill",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 12,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "Polygon"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "fill-color": "#fff",
        "fill-opacity": 1
      }
    },
    {
      "id": "road-service-driveway",
      "ref": "road-service-driveway-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#fff"
      }
    },
    {
      "id": "road-motorway_link",
      "ref": "road-motorway_link-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": 1
      }
    },
    {
      "id": "road-construction",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 14,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ],
        [
          "in",
          "type",
          "construction"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#666",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        },
        "line-dasharray": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0.4,
                0.8
              ]
            ],
            [
              15,
              [
                0.3,
                0.6
              ]
            ],
            [
              16,
              [
                0.2,
                0.3
              ]
            ],
            [
              17,
              [
                0.2,
                0.25
              ]
            ],
            [
              18,
              [
                0.15,
                0.15
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "road-street_limited",
      "ref": "road-street_limited-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road-street",
      "ref": "road-street-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road-main",
      "ref": "road-main-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ]
        },
        "line-color": {
          "base": 1,
          "stops": [
            [
              5,
              "#E8E0D8"
            ],
            [
              8,
              "#fff"
            ]
          ]
        },
        "line-opacity": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road-trunk",
      "ref": "road-trunk-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-color": "#fff"
      }
    },
    {
      "id": "road-motorway",
      "ref": "road-motorway-case",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road-rail",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "major_rail",
          "minor_rail"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        },
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road-rail-tracks",
      "ref": "road-rail",
      "interactive": true,
      "paint": {
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        },
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              4
            ],
            [
              20,
              8
            ]
          ]
        },
        "line-dasharray": [
          0.1,
          15
        ],
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              10,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-street_limited-polygon",
      "type": "fill",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "Polygon"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#EEE8E3",
        "fill-opacity": 0.75
      }
    },
    {
      "id": "bridge-path-bg",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "path"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              15,
              2
            ],
            [
              18,
              7
            ]
          ]
        },
        "line-dasharray": [
          1,
          0
        ],
        "line-color": "#666",
        "line-blur": 0,
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              15,
              0
            ],
            [
              15.25,
              0.25
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-path",
      "ref": "bridge-path-bg",
      "interactive": true,
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              15,
              1
            ],
            [
              18,
              4
            ]
          ]
        },
        "line-color": "#fff",
        "line-dasharray": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0.1,
                1.25
              ]
            ],
            [
              16,
              [
                0.1,
                1.6
              ]
            ],
            [
              17,
              [
                0.1,
                1.45
              ]
            ],
            [
              18,
              [
                0.1,
                1.3
              ]
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              15,
              0
            ],
            [
              15.25,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-street-low",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-street_limited-low",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-motorway_link-case",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 12,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": 0.25
      }
    },
    {
      "id": "bridge-service-driveway-case",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "service",
          "driveway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-opacity": 0.25
      }
    },
    {
      "id": "bridge-street_limited-case",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 14,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ],
        [
          "!=",
          "type",
          "construction"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-opacity": 0.25
      }
    },
    {
      "id": "bridge-street-case",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 14,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": 0.25
      }
    },
    {
      "id": "bridge-main-case",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 8,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main"
        ],
        [
          "!=",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.75
            ],
            [
              18,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ]
        },
        "line-opacity": 0.25,
        "line-translate": [
          0,
          0
        ]
      }
    },
    {
      "id": "bridge-motorway-trunk-case",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "any",
        [
          "in",
          "class",
          "motorway"
        ],
        [
          "in",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ]
        },
        "line-color": "#666",
        "line-gap-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-opacity": 0.25
      }
    },
    {
      "id": "bridge-motorway_link",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 10,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff"
      }
    },
    {
      "id": "bridge-service-driveway",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "service",
          "driveway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#fff"
      }
    },
    {
      "id": "bridge-construction",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 14,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ],
        [
          "in",
          "type",
          "construction"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#666",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        },
        "line-dasharray": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0.4,
                0.8
              ]
            ],
            [
              15,
              [
                0.3,
                0.6
              ]
            ],
            [
              16,
              [
                0.2,
                0.3
              ]
            ],
            [
              17,
              [
                0.2,
                0.25
              ]
            ],
            [
              18,
              [
                0.15,
                0.15
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-street_limited",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ],
        [
          "!=",
          "type",
          "construction"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-street",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-main",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main"
        ],
        [
          "!=",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ]
        },
        "line-color": "#fff",
        "line-opacity": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-trunk",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main"
        ],
        [
          "in",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-color": "#fff"
      }
    },
    {
      "id": "bridge-motorway",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ]
        },
        "line-color": "#fff"
      }
    },
    {
      "id": "bridge-rail",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "major_rail",
          "minor_rail"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        },
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-rail-tracks",
      "ref": "bridge-rail",
      "interactive": true,
      "paint": {
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        },
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              4
            ],
            [
              20,
              8
            ]
          ]
        },
        "line-dasharray": [
          0.1,
          15
        ],
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              10,
              0
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-aerialway",
      "type": "line",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 13,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "aerialway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt"
      },
      "paint": {
        "line-color": "#b3ada6",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "admin-2-boundaries-bg",
      "type": "line",
      "source": "composite",
      "source-layer": "admin",
      "minzoom": 1,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "admin_level",
          2
        ],
        [
          "in",
          "maritime",
          0
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "miter",
        "line-cap": "butt"
      },
      "paint": {
        "line-width": {
          "base": 1,
          "stops": [
            [
              3,
              3.5
            ],
            [
              10,
              10
            ]
          ]
        },
        "line-color": {
          "base": 1,
          "stops": [
            [
              6,
              "#E8E0D8"
            ],
            [
              8,
              "#f6e8e1"
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              3,
              0
            ],
            [
              4,
              0.5
            ]
          ]
        },
        "line-translate": [
          0,
          0
        ],
        "line-blur": {
          "base": 1,
          "stops": [
            [
              3,
              0
            ],
            [
              10,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "admin-3-4-boundaries",
      "type": "line",
      "source": "composite",
      "source-layer": "admin",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          ">=",
          "admin_level",
          3
        ],
        [
          "in",
          "maritime",
          0
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-dasharray": {
          "base": 1,
          "stops": [
            [
              6,
              [
                2,
                0
              ]
            ],
            [
              7,
              [
                2,
                2,
                6,
                2
              ]
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              7,
              0.75
            ],
            [
              12,
              1.5
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              2,
              0
            ],
            [
              3,
              1
            ]
          ]
        },
        "line-color": {
          "base": 1,
          "stops": [
            [
              3,
              "#c3bfcc"
            ],
            [
              7,
              "#aba8b3"
            ]
          ]
        }
      }
    },
    {
      "id": "admin-2-boundaries",
      "type": "line",
      "source": "composite",
      "source-layer": "admin",
      "minzoom": 1,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "admin_level",
          2
        ],
        [
          "in",
          "maritime",
          0
        ],
        [
          "in",
          "disputed",
          0
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#787680",
        "line-width": {
          "base": 1,
          "stops": [
            [
              3,
              0.5
            ],
            [
              10,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "admin-2-boundaries-dispute",
      "type": "line",
      "source": "composite",
      "source-layer": "admin",
      "minzoom": 1,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "admin_level",
          2
        ],
        [
          "in",
          "maritime",
          0
        ],
        [
          "in",
          "disputed",
          1
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          1.5,
          1.5
        ],
        "line-color": "#787680",
        "line-width": {
          "base": 1,
          "stops": [
            [
              3,
              0.5
            ],
            [
              10,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-oneway-arrows-color",
      "type": "symbol",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "oneway",
          1
        ],
        [
          "in",
          "class",
          "main",
          "street",
          "street_limited"
        ],
        [
          "!=",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": {
          "base": 1,
          "stops": [
            [
              16,
              "oneway-spaced-small"
            ],
            [
              17,
              "oneway-spaced-large"
            ]
          ]
        },
        "icon-ignore-placement": false,
        "symbol-spacing": 250
      },
      "paint": {}
    },
    {
      "id": "tunnel-oneway-arrows-white",
      "type": "symbol",
      "source": "composite",
      "source-layer": "tunnel",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "oneway",
          1
        ],
        [
          "any",
          [
            "in",
            "class",
            "motorway",
            "motorway_link"
          ],
          [
            "in",
            "type",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": {
          "base": 1,
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ]
        },
        "icon-ignore-placement": false,
        "symbol-spacing": 250
      },
      "paint": {}
    },
    {
      "id": "road-oneway-arrows-color",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "oneway",
          1
        ],
        [
          "in",
          "class",
          "main",
          "street",
          "street_limited"
        ],
        [
          "!=",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": {
          "base": 1,
          "stops": [
            [
              16,
              "oneway-spaced-small"
            ],
            [
              17,
              "oneway-spaced-large"
            ]
          ]
        },
        "icon-ignore-placement": false,
        "icon-rotation-alignment": "map",
        "icon-padding": 2,
        "symbol-spacing": 250
      },
      "paint": {}
    },
    {
      "id": "road-oneway-arrows-white",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "oneway",
          1
        ],
        [
          "any",
          [
            "in",
            "class",
            "motorway",
            "motorway_link"
          ],
          [
            "in",
            "type",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": {
          "base": 1,
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ]
        },
        "icon-ignore-placement": false,
        "icon-padding": 2,
        "symbol-spacing": 250
      },
      "paint": {}
    },
    {
      "id": "bridge-oneway-arrows-color",
      "type": "symbol",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "oneway",
          1
        ],
        [
          "in",
          "class",
          "main",
          "street",
          "street_limited"
        ],
        [
          "!=",
          "type",
          "trunk"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": {
          "base": 1,
          "stops": [
            [
              16,
              "oneway-spaced-small"
            ],
            [
              17,
              "oneway-spaced-large"
            ]
          ]
        },
        "icon-ignore-placement": false,
        "symbol-spacing": 250
      },
      "paint": {}
    },
    {
      "id": "bridge-oneway-arrows-white",
      "type": "symbol",
      "source": "composite",
      "source-layer": "bridge",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "oneway",
          1
        ],
        [
          "any",
          [
            "in",
            "class",
            "motorway",
            "motorway_link"
          ],
          [
            "in",
            "type",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": {
          "base": 1,
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ]
        },
        "icon-ignore-placement": false,
        "symbol-spacing": 250
      },
      "paint": {}
    },
    {
      "id": "waterway-label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "waterway_label",
      "minzoom": 12,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "river"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "visibility": "visible",
        "text-font": [
          "HSL Medium Italic"
        ],
        "symbol-placement": "line",
        "text-max-angle": 30,
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-halo-width": 0.5,
        "text-halo-color": "#ffffff",
        "text-color": "#004087",
        "text-halo-blur": 0.5
      }
    },
    {
      "id": "poi-scalerank4-l15",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 17,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "rail-light",
          "rail-metro",
          "rail",
          "airport",
          "airfield",
          "heliport",
          "rocket",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "in",
          "scalerank",
          4
        ],
        [
          ">=",
          "localrank",
          15
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": "{maki}-11",
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi-scalerank4-l1",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 16,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "rail-light",
          "rail-metro",
          "rail",
          "airport",
          "airfield",
          "heliport",
          "rocket",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "in",
          "scalerank",
          4
        ],
        [
          "<=",
          "localrank",
          14
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": "{maki}-11",
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi-parks_scalerank4",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 16,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "cemetery",
          "golf",
          "zoo",
          "playground",
          ""
        ],
        [
          "in",
          "scalerank",
          4
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": "{maki}-11",
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#4c661f",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi-scalerank3",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "rail-light",
          "rail-metro",
          "rail",
          "airport",
          "airfield",
          "heliport",
          "rocket",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "in",
          "scalerank",
          3
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": "{maki}-11",
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi-parks-scalerank3",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "cemetery",
          "golf",
          "zoo"
        ],
        [
          "in",
          "scalerank",
          3
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": "{maki}-11",
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#4c661f",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "road-label-small",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road_label",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "class",
          "motorway",
          "main",
          "street_limited",
          "street"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "text-ignore-placement": false,
        "text-max-angle": 30,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "visibility": "visible",
        "text-rotation-alignment": "map",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.01,
        "symbol-spacing": 500,
        "text-size": {
          "base": 1,
          "stops": [
            [
              15,
              10
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#3a3836",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25,
        "text-halo-blur": 1
      }
    },
    {
      "id": "road-label-medium",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road_label",
      "minzoom": 11,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "street",
          "street_limited"
        ],
        [
          "in",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "text-max-angle": 30,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "visibility": "visible",
        "text-rotation-alignment": "map",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.01,
        "symbol-spacing": 500,
        "text-size": {
          "base": 1,
          "stops": [
            [
              11,
              10
            ],
            [
              20,
              14
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#3a3836",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "road-label-large",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road_label",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "class",
          "main",
          "motorway"
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-max-angle": 30,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "visibility": "visible",
        "text-rotation-alignment": "map",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.01,
        "symbol-spacing": 500,
        "text-size": {
          "base": 1,
          "stops": [
            [
              9,
              10
            ],
            [
              20,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#3a3836",
        "text-halo-color": "rgba(255,255,255, 0.75)",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "other-motorway-shields",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road_label",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "shield",
          "us-interstate",
          "us-interstate-business",
          "us-interstate-duplex"
        ],
        [
          "<=",
          "reflen",
          6
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "icon-image": "{shield}-{reflen}-small",
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": false,
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Bold"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "text-padding": 2,
        "visibility": "visible",
        "text-rotation-alignment": "viewport",
        "text-field": "{ref}",
        "text-letter-spacing": 0.05,
        "icon-padding": {
          "base": 1,
          "stops": [
            [
              6,
              2
            ],
            [
              14,
              20
            ]
          ]
        },
        "symbol-spacing": 1000,
        "text-size": 9
      },
      "paint": {
        "text-color": "#3a3836",
        "icon-halo-color": "rgba(0, 0, 0, 1)",
        "icon-halo-width": 1,
        "text-opacity": 1,
        "icon-color": "white",
        "text-halo-color": "#ffffff",
        "text-halo-width": 0
      }
    },
    {
      "id": "interstate_motorway_shields",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road_label",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "shield",
          "us-interstate",
          "us-interstate-business",
          "us-interstate-duplex"
        ],
        [
          "<=",
          "reflen",
          6
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "icon-image": "{shield}-{reflen}-small",
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": false,
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "text-padding": 2,
        "visibility": "visible",
        "text-rotation-alignment": "viewport",
        "text-field": "{ref}",
        "text-letter-spacing": 0.05,
        "icon-padding": {
          "base": 0.7,
          "stops": [
            [
              6,
              2
            ],
            [
              14,
              20
            ]
          ]
        },
        "symbol-spacing": 1000,
        "text-size": 9
      },
      "paint": {
        "text-color": "#fff",
        "icon-halo-color": "rgba(0, 0, 0, 1)",
        "icon-halo-width": 1,
        "text-opacity": 1,
        "icon-color": "white",
        "text-halo-color": "#ffffff",
        "text-halo-width": 0
      }
    },
    {
      "id": "poi-scalerank2",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 13,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "rail-light",
          "rail-metro",
          "rail",
          "airport",
          "airfield",
          "heliport",
          "rocket",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "in",
          "scalerank",
          2
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": {
          "stops": [
            [
              14,
              "{maki}-11"
            ],
            [
              15,
              "{maki}-15"
            ]
          ]
        },
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1.25
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              14,
              11
            ],
            [
              20,
              14
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25
      }
    },
    {
      "id": "poi-parks-scalerank2",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 13,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "in",
          "scalerank",
          2
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": {
          "stops": [
            [
              14,
              "{maki}-11"
            ],
            [
              15,
              "{maki}-15"
            ]
          ]
        },
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1.25
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              14,
              11
            ],
            [
              20,
              14
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#4c661f",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25
      }
    },
    {
      "id": "rail-label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 12,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "Rail Station"
        ]
      ],
      "layout": {
        "icon-image": "{network}-11",
        "symbol-avoid-edges": true,
        "text-font": [
          "HSL Medium"
        ],
        "icon-allow-overlap": false,
        "symbol-placement": "point",
        "text-justify": "center",
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": {
          "base": 1,
          "stops": [
            [
              0,
              ""
            ],
            [
              13,
              "{name_en}"
            ]
          ]
        },
        "text-letter-spacing": 0.02,
        "icon-padding": 0,
        "text-max-width": 7,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "icon-halo-width": 4,
        "icon-halo-color": "#fff",
        "text-opacity": {
          "base": 1,
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "water-label-sm",
      "type": "symbol",
      "source": "composite",
      "source-layer": "water_label",
      "minzoom": 15,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "<=",
          "area",
          10000
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "visibility": "visible",
        "text-font": [
          "HSL Medium Italic"
        ],
        "text-max-width": 7,
        "text-size": {
          "base": 1,
          "stops": [
            [
              16,
              13
            ],
            [
              20,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-halo-width": 0,
        "text-halo-color": "#ffffff",
        "text-color": "#004087",
        "text-halo-blur": 1.5
      }
    },
    {
      "id": "water-label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "water_label",
      "minzoom": 5,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          ">",
          "area",
          10000
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "visibility": "visible",
        "text-font": [
          "HSL Medium Italic"
        ],
        "text-max-width": 7,
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              13
            ],
            [
              18,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-halo-width": 0,
        "text-halo-color": "#ffffff",
        "text-color": "#004087",
        "text-halo-blur": 1.5
      }
    },
    {
      "id": "poi-parks-scalerank1",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "<=",
          "scalerank",
          1
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": {
          "stops": [
            [
              13,
              "{maki}-11"
            ],
            [
              14,
              "{maki}-15"
            ]
          ]
        },
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              10,
              11
            ],
            [
              18,
              14
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#4c661f",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "text-halo-blur": 0
      }
    },
    {
      "id": "poi-scalerank1",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "rail-light",
          "rail-metro",
          "rail",
          "airport",
          "airfield",
          "heliport",
          "rocket",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "<=",
          "scalerank",
          1
        ],
        [
          "!=",
          "type",
          "Island"
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "icon-image": {
          "stops": [
            [
              13,
              "{maki}-11"
            ],
            [
              14,
              "{maki}-15"
            ]
          ]
        },
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              10,
              11
            ],
            [
              18,
              14
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "airport-label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 9,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "maki",
          "airport",
          "heliport",
          "rocket"
        ],
        [
          "<=",
          "scalerank",
          2
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "icon-image": {
          "stops": [
            [
              12,
              "{maki}-11"
            ],
            [
              13,
              "{maki}-15"
            ]
          ]
        },
        "text-ignore-placement": false,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": {
          "base": 1,
          "stops": [
            [
              12,
              [
                0,
                1
              ]
            ],
            [
              13,
              [
                0,
                1.25
              ]
            ]
          ]
        },
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": {
          "stops": [
            [
              12,
              "{ref}"
            ],
            [
              13,
              "{name_en}"
            ]
          ]
        },
        "text-letter-spacing": 0.02,
        "text-max-width": 9,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              10,
              12
            ],
            [
              18,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25
      }
    },
    {
      "id": "poi-islets",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "Islet"
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          0
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "center",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 8,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              10,
              11
            ],
            [
              14,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "place-neighbourhood",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 10,
      "maxzoom": 16,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "neighbourhood"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "text-field": "{name_en}",
        "text-transform": "uppercase",
        "text-letter-spacing": 0.1,
        "text-max-width": 7,
        "text-font": [
          "HSL Medium"
        ],
        "text-padding": 3,
        "text-size": {
          "base": 1,
          "stops": [
            [
              12,
              11
            ],
            [
              16,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "rgba(255,255,255, 0.5)",
        "text-halo-width": 1.75,
        "text-color": "#805540",
        "text-halo-blur": 0
      }
    },
    {
      "id": "place-suburb",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 10,
      "maxzoom": 16,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "suburb"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "text-field": "{name_en}",
        "text-transform": "uppercase",
        "text-font": [
          "HSL Medium"
        ],
        "text-letter-spacing": 0.15,
        "text-max-width": 7,
        "text-padding": 3,
        "text-size": {
          "base": 1,
          "stops": [
            [
              11,
              11
            ],
            [
              15,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "rgba(255,255,255, 0.5)",
        "text-halo-width": 1.75,
        "text-color": "#805540"
      }
    },
    {
      "id": "place-hamlet",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 10,
      "maxzoom": 16,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "hamlet"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "text-field": "{name_en}",
        "text-font": [
          "HSL Medium"
        ],
        "text-size": {
          "base": 1,
          "stops": [
            [
              12,
              11.5
            ],
            [
              15,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25,
        "text-color": "#000000"
      }
    },
    {
      "id": "place-village",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 8,
      "maxzoom": 15,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "village"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "text-field": "{name_en}",
        "text-font": [
          "HSL Medium"
        ],
        "text-max-width": 7,
        "text-size": {
          "base": 1,
          "stops": [
            [
              10,
              11.5
            ],
            [
              16,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25,
        "text-color": "#000000"
      }
    },
    {
      "id": "place-town",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 6,
      "maxzoom": 15,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "town"
        ]
      ],
      "layout": {
        "icon-image": "circle.sdf",
        "text-font": {
          "base": 1,
          "stops": [
            [
              11,
              [
                "HSL Medium"
              ]
            ],
            [
              12,
              [
                "HSL Medium"
              ]
            ]
          ]
        },
        "visibility": "visible",
        "text-offset": {
          "base": 1,
          "stops": [
            [
              7,
              [
                0,
                -0.15
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        },
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 7,
        "text-size": {
          "base": 1,
          "stops": [
            [
              7,
              11.5
            ],
            [
              15,
              20
            ]
          ]
        },
        "icon-size": 0.3
      },
      "paint": {
        "text-color": "#000000",
        "icon-halo-blur": 1,
        "icon-halo-color": "#ffffff",
        "icon-halo-width": 1,
        "icon-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25,
        "icon-opacity": {
          "base": 1,
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "poi-islands",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "minzoom": 0,
      "maxzoom": 22,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "type",
          "Island"
        ]
      ],
      "layout": {
        "text-line-height": 1.2,
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "text-font": [
          "HSL Medium"
        ],
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          0
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "center",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02,
        "text-max-width": 7,
        "symbol-spacing": 250,
        "text-size": {
          "base": 1,
          "stops": [
            [
              10,
              11
            ],
            [
              18,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#65513d",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "place-city-sm",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 0,
      "maxzoom": 14,
      "interactive": true,
      "filter": [
        "all",
        [
          "!in",
          "scalerank",
          0,
          1,
          2,
          3,
          4,
          5
        ],
        [
          "in",
          "type",
          "city"
        ]
      ],
      "layout": {
        "icon-image": "circle.sdf",
        "text-transform": "none",
        "text-font": {
          "base": 1,
          "stops": [
            [
              7,
              [
                "HSL Medium"
              ]
            ],
            [
              8,
              [
                "HSL Medium"
              ]
            ]
          ]
        },
        "visibility": "visible",
        "text-offset": {
          "base": 1,
          "stops": [
            [
              7.99,
              [
                0,
                -0.2
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        },
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 7,
        "text-size": {
          "base": 1,
          "stops": [
            [
              6,
              12
            ],
            [
              14,
              22
            ]
          ]
        },
        "icon-size": 0.3
      },
      "paint": {
        "text-color": "#000000",
        "icon-halo-blur": 1,
        "icon-halo-color": "#ffffff",
        "icon-halo-width": 1,
        "icon-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.25,
        "icon-opacity": {
          "base": 1,
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "place-city-md-s",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 0,
      "maxzoom": 14,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "scalerank",
          3,
          4,
          5
        ],
        [
          "in",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "S",
          "SE",
          "SW",
          "E"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "text-field": "{name_en}",
        "icon-image": "circle.sdf",
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              7,
              "top"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-offset": {
          "base": 1,
          "stops": [
            [
              7.99,
              [
                0,
                0.1
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        },
        "text-font": {
          "base": 1,
          "stops": [
            [
              7,
              [
                "HSL Medium"
              ]
            ],
            [
              8,
              [
                "HSL Medium"
              ]
            ]
          ]
        },
        "text-size": {
          "base": 0.9,
          "stops": [
            [
              5,
              12
            ],
            [
              12,
              22
            ]
          ]
        },
        "icon-size": 0.35
      },
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#000000",
        "text-halo-blur": 1,
        "icon-color": "#000000",
        "icon-opacity": {
          "base": 1,
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      }
    },
    {
      "id": "place-city-md-n",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 0,
      "maxzoom": 14,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "scalerank",
          3,
          4,
          5
        ],
        [
          "in",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "N",
          "NE",
          "NW",
          "W"
        ]
      ],
      "layout": {
        "icon-image": "circle.sdf",
        "text-font": {
          "base": 1,
          "stops": [
            [
              7,
              [
                "HSL Medium"
              ]
            ],
            [
              8,
              [
                "HSL Medium"
              ]
            ]
          ]
        },
        "visibility": "visible",
        "text-offset": {
          "base": 1,
          "stops": [
            [
              7.99,
              [
                0,
                -0.25
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        },
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 7,
        "text-size": {
          "base": 0.9,
          "stops": [
            [
              5,
              12
            ],
            [
              12,
              22
            ]
          ]
        },
        "icon-size": 0.35
      },
      "paint": {
        "text-color": "#000000",
        "icon-halo-blur": 1,
        "icon-halo-color": "#ffffff",
        "icon-halo-width": 1,
        "icon-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "icon-opacity": {
          "base": 1,
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ]
        },
        "text-halo-blur": 1
      }
    },
    {
      "id": "place-city-lg-s",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 1,
      "maxzoom": 14,
      "interactive": true,
      "filter": [
        "all",
        [
          "<=",
          "scalerank",
          2
        ],
        [
          "in",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "S",
          "SE",
          "SW",
          "E"
        ]
      ],
      "layout": {
        "icon-image": "circle.sdf",
        "text-font": {
          "base": 1,
          "stops": [
            [
              7,
              [
                "HSL Medium"
              ]
            ],
            [
              8,
              [
                "HSL Medium"
              ]
            ]
          ]
        },
        "visibility": "visible",
        "text-offset": {
          "base": 1,
          "stops": [
            [
              7.99,
              [
                0,
                0.15
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        },
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              7,
              "top"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 7,
        "text-size": {
          "base": 0.9,
          "stops": [
            [
              4,
              12
            ],
            [
              10,
              22
            ]
          ]
        },
        "icon-size": 0.4
      },
      "paint": {
        "text-color": "#000000",
        "icon-halo-blur": 1,
        "icon-halo-color": "#ffffff",
        "icon-halo-width": 1,
        "icon-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "icon-opacity": {
          "base": 1,
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ]
        },
        "text-halo-blur": 1
      }
    },
    {
      "id": "place-city-lg-n",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "minzoom": 1,
      "maxzoom": 14,
      "interactive": true,
      "filter": [
        "all",
        [
          "<=",
          "scalerank",
          2
        ],
        [
          "in",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "N",
          "NE",
          "NW",
          "W"
        ]
      ],
      "layout": {
        "icon-image": "circle.sdf",
        "text-font": {
          "base": 1,
          "stops": [
            [
              7,
              [
                "HSL Medium"
              ]
            ],
            [
              8,
              [
                "HSL Medium"
              ]
            ]
          ]
        },
        "visibility": "visible",
        "text-offset": {
          "base": 1,
          "stops": [
            [
              7.99,
              [
                0,
                -0.25
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        },
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 7,
        "text-size": {
          "base": 0.9,
          "stops": [
            [
              4,
              12
            ],
            [
              10,
              22
            ]
          ]
        },
        "icon-size": 0.4
      },
      "paint": {
        "text-color": "#000000",
        "icon-halo-blur": 1,
        "icon-halo-color": "#ffffff",
        "icon-halo-width": 1,
        "text-opacity": 1,
        "icon-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "icon-opacity": {
          "base": 1,
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ]
        },
        "text-halo-blur": 1
      }
    },
    {
      "id": "state-label-sm",
      "type": "symbol",
      "source": "composite",
      "source-layer": "state_label",
      "minzoom": 3,
      "maxzoom": 9,
      "interactive": true,
      "filter": [
        "all",
        [
          "<",
          "area",
          20000
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-transform": "uppercase",
        "text-font": [
          "HSL Bold"
        ],
        "visibility": "visible",
        "text-field": {
          "base": 1,
          "stops": [
            [
              0,
              "{abbr}"
            ],
            [
              6,
              "{name_en}"
            ]
          ]
        },
        "text-letter-spacing": 0.15,
        "text-max-width": 5,
        "text-size": {
          "base": 1,
          "stops": [
            [
              6,
              10
            ],
            [
              9,
              14
            ]
          ]
        }
      },
      "paint": {
        "text-opacity": 1,
        "text-color": "#242424",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "state-label-md",
      "type": "symbol",
      "source": "composite",
      "source-layer": "state_label",
      "minzoom": 3,
      "maxzoom": 8,
      "interactive": true,
      "filter": [
        "all",
        [
          "<",
          "area",
          80000
        ],
        [
          ">=",
          "area",
          20000
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-transform": "uppercase",
        "text-font": [
          "HSL Bold"
        ],
        "visibility": "visible",
        "text-field": {
          "base": 1,
          "stops": [
            [
              0,
              "{abbr}"
            ],
            [
              5,
              "{name_en}"
            ]
          ]
        },
        "text-letter-spacing": 0.15,
        "text-max-width": 6,
        "text-size": {
          "base": 1,
          "stops": [
            [
              5,
              10
            ],
            [
              8,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-opacity": 1,
        "text-color": "#242424",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "state-label-lg",
      "type": "symbol",
      "source": "composite",
      "source-layer": "state_label",
      "minzoom": 3,
      "maxzoom": 7,
      "interactive": true,
      "filter": [
        "all",
        [
          ">=",
          "area",
          80000
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-transform": "uppercase",
        "text-font": [
          "HSL Bold"
        ],
        "text-padding": 1,
        "visibility": "visible",
        "text-field": {
          "base": 1,
          "stops": [
            [
              0,
              "{abbr}"
            ],
            [
              4,
              "{name_en}"
            ]
          ]
        },
        "text-letter-spacing": 0.15,
        "text-max-width": 6,
        "text-size": {
          "base": 1,
          "stops": [
            [
              4,
              10
            ],
            [
              7,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-opacity": 1,
        "text-color": "#242424",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "country-label-sm",
      "type": "symbol",
      "source": "composite",
      "source-layer": "country_label",
      "minzoom": 1,
      "maxzoom": 10,
      "interactive": true,
      "filter": [
        "all",
        [
          ">=",
          "scalerank",
          5
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "visibility": "visible",
        "text-max-width": 6,
        "text-font": [
          "HSL Medium"
        ],
        "text-size": {
          "base": 0.9,
          "stops": [
            [
              5,
              14
            ],
            [
              9,
              22
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#000000",
        "text-halo-color": {
          "base": 1,
          "stops": [
            [
              2,
              "rgba(255,255,255,0.75)"
            ],
            [
              3,
              "#ffffff"
            ]
          ]
        },
        "text-halo-width": 1.25
      }
    },
    {
      "id": "country-label-md",
      "type": "symbol",
      "source": "composite",
      "source-layer": "country_label",
      "minzoom": 1,
      "maxzoom": 8,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "scalerank",
          3,
          4
        ]
      ],
      "layout": {
        "text-field": {
          "base": 1,
          "stops": [
            [
              0,
              "{code}"
            ],
            [
              2,
              "{name_en}"
            ]
          ]
        },
        "visibility": "visible",
        "text-max-width": 6,
        "text-font": [
          "HSL Medium"
        ],
        "text-size": {
          "base": 1,
          "stops": [
            [
              3,
              10
            ],
            [
              8,
              24
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#000000",
        "text-halo-color": {
          "base": 1,
          "stops": [
            [
              2,
              "rgba(255,255,255,0.75)"
            ],
            [
              3,
              "#ffffff"
            ]
          ]
        },
        "text-halo-width": 1.25
      }
    },
    {
      "id": "country-label-lg",
      "type": "symbol",
      "source": "composite",
      "source-layer": "country_label",
      "minzoom": 1,
      "maxzoom": 7,
      "interactive": true,
      "filter": [
        "all",
        [
          "in",
          "scalerank",
          1,
          2
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "visibility": "visible",
        "text-max-width": {
          "base": 1,
          "stops": [
            [
              0,
              5
            ],
            [
              3,
              6
            ]
          ]
        },
        "text-font": [
          "HSL Medium"
        ],
        "text-size": {
          "base": 1,
          "stops": [
            [
              1,
              10
            ],
            [
              6,
              24
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#000000",
        "text-halo-color": {
          "base": 1,
          "stops": [
            [
              2,
              "rgba(255,255,255,0.75)"
            ],
            [
              3,
              "#ffffff"
            ]
          ]
        },
        "text-halo-width": 1.25
      }
    }
  ],
  "owner": "nicki",
  "modified": "2015-05-07T16:43:40.332Z",
  "created": "2015-05-07T16:00:16.592Z",
  "id": "nicki.7bfc461f"
}
