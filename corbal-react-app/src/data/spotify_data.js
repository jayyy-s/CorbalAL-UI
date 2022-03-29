/*
const example_tracks_base = {
  "tracks": [
    {
      "album": {
        "album_type": "album",
        "total_tracks": 9,
        "available_markets": [
          "US",
          "AU",
          "MG"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4imRDpzmb4zwvxKhNzJhxr"
        },
        "followers": {
          "href": null,
          "total": 3
        },
        "genres": [
          "garage",
          "psych",
          "????????"
        ],
        "href": "string",
        "id": "6XYvaoDGE0VmRt83Jss9Sn",
        "images": [

        ],
        "name": "Nonagon Infinity",
        "release_date": "2016-04",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "explicit"
        },
        "type": "album",
        "uri": "spotify:album:4imRDpzmb4zwvxKhNzJhxr"
      }
    },
    "artist"
  ]
}
*/


const example_tracks = {

  "tracks": [

    {

      "album": {

        "album_type": "compilation",

        "total_tracks": 9,

        "available_markets": [

          "CA",

          "BR",

          "IT"

        ],

        "external_urls": {

          "spotify": "string"

        },

        "href": "string",

        "id": "2up3OPMp9Tb4dAKM2erWXQ",

        "images": [

          {

            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

            "height": 300,

            "width": 300

          }

        ],

        "name": "string",

        "release_date": "1981-12",

        "release_date_precision": "year",

        "restrictions": {

          "reason": "market"

        },

        "type": "album",

        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

        "album_group": "compilation",

        "artists": [

          {

            "external_urls": {

              "spotify": "string"

            },

            "href": "string",

            "id": "string",

            "name": "string",

            "type": "artist",

            "uri": "string"

          }

        ]

      },

      "artists": [

        {

          "external_urls": {

            "spotify": "string"

          },

          "followers": {

            "href": "string",

            "total": 0

          },

          "genres": [

            "Prog rock",

            "Grunge"

          ],

          "href": "string",

          "id": "string",

          "images": [

            {

              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

              "height": 300,

              "width": 300

            }

          ],

          "name": "string",

          "popularity": 0,

          "type": "artist",

          "uri": "string"

        }

      ],

      "available_markets": [

        "string"

      ],

      "disc_number": 0,

      "duration_ms": 0,

      "explicit": true,

      "external_ids": {

        "isrc": "string",

        "ean": "string",

        "upc": "string"

      },

      "external_urls": {

        "spotify": "string"

      },

      "href": "string",

      "id": "string",

      "is_playable": true,

      "linked_from": {

        "album": {

          "album_type": "compilation",

          "total_tracks": 9,

          "available_markets": [

            "CA",

            "BR",

            "IT"

          ],

          "external_urls": {

            "spotify": "string"

          },

          "href": "string",

          "id": "2up3OPMp9Tb4dAKM2erWXQ",

          "images": [

            {

              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

              "height": 300,

              "width": 300

            }

          ],

          "name": "string",

          "release_date": "1981-12",

          "release_date_precision": "year",

          "restrictions": {

            "reason": "market"

          },

          "type": "album",

          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

          "album_group": "compilation",

          "artists": [

            {

              "external_urls": {

                "spotify": "string"

              },

              "href": "string",

              "id": "string",

              "name": "string",

              "type": "artist",

              "uri": "string"

            }

          ]

        },

        "artists": [

          {

            "external_urls": {

              "spotify": "string"

            },

            "followers": {

              "href": "string",

              "total": 0

            },

            "genres": [

              "Prog rock",

              "Grunge"

            ],

            "href": "string",

            "id": "string",

            "images": [

              {

                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                "height": 300,

                "width": 300

              }

            ],

            "name": "string",

            "popularity": 0,

            "type": "artist",

            "uri": "string"

          }

        ],

        "available_markets": [

          "string"

        ],

        "disc_number": 0,

        "duration_ms": 0,

        "explicit": true,

        "external_ids": {

          "isrc": "string",

          "ean": "string",

          "upc": "string"

        },

        "external_urls": {

          "spotify": "string"

        },

        "href": "string",

        "id": "string",

        "is_playable": true,

        "linked_from": {

          "album": {

            "album_type": "compilation",

            "total_tracks": 9,

            "available_markets": [

              "CA",

              "BR",

              "IT"

            ],

            "external_urls": {

              "spotify": "string"

            },

            "href": "string",

            "id": "2up3OPMp9Tb4dAKM2erWXQ",

            "images": [

              {

                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                "height": 300,

                "width": 300

              }

            ],

            "name": "string",

            "release_date": "1981-12",

            "release_date_precision": "year",

            "restrictions": {

              "reason": "market"

            },

            "type": "album",

            "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

            "album_group": "compilation",

            "artists": [

              {

                "external_urls": {

                  "spotify": "string"

                },

                "href": "string",

                "id": "string",

                "name": "string",

                "type": "artist",

                "uri": "string"

              }

            ]

          },

          "artists": [

            {

              "external_urls": {

                "spotify": "string"

              },

              "followers": {

                "href": "string",

                "total": 0

              },

              "genres": [

                "Prog rock",

                "Grunge"

              ],

              "href": "string",

              "id": "string",

              "images": [

                {

                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                  "height": 300,

                  "width": 300

                }

              ],

              "name": "string",

              "popularity": 0,

              "type": "artist",

              "uri": "string"

            }

          ],

          "available_markets": [

            "string"

          ],

          "disc_number": 0,

          "duration_ms": 0,

          "explicit": true,

          "external_ids": {

            "isrc": "string",

            "ean": "string",

            "upc": "string"

          },

          "external_urls": {

            "spotify": "string"

          },

          "href": "string",

          "id": "string",

          "is_playable": true,

          "linked_from": {

            "album": {

              "album_type": "compilation",

              "total_tracks": 9,

              "available_markets": [

                "CA",

                "BR",

                "IT"

              ],

              "external_urls": {

                "spotify": "string"

              },

              "href": "string",

              "id": "2up3OPMp9Tb4dAKM2erWXQ",

              "images": [

                {

                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                  "height": 300,

                  "width": 300

                }

              ],

              "name": "string",

              "release_date": "1981-12",

              "release_date_precision": "year",

              "restrictions": {

                "reason": "market"

              },

              "type": "album",

              "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

              "album_group": "compilation",

              "artists": [

                {

                  "external_urls": {

                    "spotify": "string"

                  },

                  "href": "string",

                  "id": "string",

                  "name": "string",

                  "type": "artist",

                  "uri": "string"

                }

              ]

            },

            "artists": [

              {

                "external_urls": {

                  "spotify": "string"

                },

                "followers": {

                  "href": "string",

                  "total": 0

                },

                "genres": [

                  "Prog rock",

                  "Grunge"

                ],

                "href": "string",

                "id": "string",

                "images": [

                  {

                    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                    "height": 300,

                    "width": 300

                  }

                ],

                "name": "string",

                "popularity": 0,

                "type": "artist",

                "uri": "string"

              }

            ],

            "available_markets": [

              "string"

            ],

            "disc_number": 0,

            "duration_ms": 0,

            "explicit": true,

            "external_ids": {

              "isrc": "string",

              "ean": "string",

              "upc": "string"

            },

            "external_urls": {

              "spotify": "string"

            },

            "href": "string",

            "id": "string",

            "is_playable": true,

            "linked_from": {

              "album": {

                "album_type": "compilation",

                "total_tracks": 9,

                "available_markets": [

                  "CA",

                  "BR",

                  "IT"

                ],

                "external_urls": {

                  "spotify": "string"

                },

                "href": "string",

                "id": "2up3OPMp9Tb4dAKM2erWXQ",

                "images": [

                  {

                    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                    "height": 300,

                    "width": 300

                  }

                ],

                "name": "string",

                "release_date": "1981-12",

                "release_date_precision": "year",

                "restrictions": {

                  "reason": "market"

                },

                "type": "album",

                "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

                "album_group": "compilation",

                "artists": [

                  {

                    "external_urls": {

                      "spotify": "string"

                    },

                    "href": "string",

                    "id": "string",

                    "name": "string",

                    "type": "artist",

                    "uri": "string"

                  }

                ]

              },

              "artists": [

                {

                  "external_urls": {

                    "spotify": "string"

                  },

                  "followers": {

                    "href": "string",

                    "total": 0

                  },

                  "genres": [

                    "Prog rock",

                    "Grunge"

                  ],

                  "href": "string",

                  "id": "string",

                  "images": [

                    {

                      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                      "height": 300,

                      "width": 300

                    }

                  ],

                  "name": "string",

                  "popularity": 0,

                  "type": "artist",

                  "uri": "string"

                }

              ],

              "available_markets": [

                "string"

              ],

              "disc_number": 0,

              "duration_ms": 0,

              "explicit": true,

              "external_ids": {

                "isrc": "string",

                "ean": "string",

                "upc": "string"

              },

              "external_urls": {

                "spotify": "string"

              },

              "href": "string",

              "id": "string",

              "is_playable": true,

              "linked_from": {

                "album": {

                  "album_type": "compilation",

                  "total_tracks": 9,

                  "available_markets": [

                    "CA",

                    "BR",

                    "IT"

                  ],

                  "external_urls": {

                    "spotify": "string"

                  },

                  "href": "string",

                  "id": "2up3OPMp9Tb4dAKM2erWXQ",

                  "images": [

                    {

                      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                      "height": 300,

                      "width": 300

                    }

                  ],

                  "name": "string",

                  "release_date": "1981-12",

                  "release_date_precision": "year",

                  "restrictions": {

                    "reason": "market"

                  },

                  "type": "album",

                  "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

                  "album_group": "compilation",

                  "artists": [

                    {

                      "external_urls": {

                        "spotify": "string"

                      },

                      "href": "string",

                      "id": "string",

                      "name": "string",

                      "type": "artist",

                      "uri": "string"

                    }

                  ]

                },

                "artists": [

                  {

                    "external_urls": {

                      "spotify": "string"

                    },

                    "followers": {

                      "href": "string",

                      "total": 0

                    },

                    "genres": [

                      "Prog rock",

                      "Grunge"

                    ],

                    "href": "string",

                    "id": "string",

                    "images": [

                      {

                        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                        "height": 300,

                        "width": 300

                      }

                    ],

                    "name": "string",

                    "popularity": 0,

                    "type": "artist",

                    "uri": "string"

                  }

                ],

                "available_markets": [

                  "string"

                ],

                "disc_number": 0,

                "duration_ms": 0,

                "explicit": true,

                "external_ids": {

                  "isrc": "string",

                  "ean": "string",

                  "upc": "string"

                },

                "external_urls": {

                  "spotify": "string"

                },

                "href": "string",

                "id": "string",

                "is_playable": true,

                "linked_from": {

                  "album": {

                    "album_type": "compilation",

                    "total_tracks": 9,

                    "available_markets": [

                      "CA",

                      "BR",

                      "IT"

                    ],

                    "external_urls": {

                      "spotify": "string"

                    },

                    "href": "string",

                    "id": "2up3OPMp9Tb4dAKM2erWXQ",

                    "images": [

                      {

                        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                        "height": 300,

                        "width": 300

                      }

                    ],

                    "name": "string",

                    "release_date": "1981-12",

                    "release_date_precision": "year",

                    "restrictions": {

                      "reason": "market"

                    },

                    "type": "album",

                    "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

                    "album_group": "compilation",

                    "artists": [

                      {

                        "external_urls": {

                          "spotify": "string"

                        },

                        "href": "string",

                        "id": "string",

                        "name": "string",

                        "type": "artist",

                        "uri": "string"

                      }

                    ]

                  },

                  "artists": [

                    {

                      "external_urls": {

                        "spotify": "string"

                      },

                      "followers": {

                        "href": "string",

                        "total": 0

                      },

                      "genres": [

                        "Prog rock",

                        "Grunge"

                      ],

                      "href": "string",

                      "id": "string",

                      "images": [

                        {

                          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                          "height": 300,

                          "width": 300

                        }

                      ],

                      "name": "string",

                      "popularity": 0,

                      "type": "artist",

                      "uri": "string"

                    }

                  ],

                  "available_markets": [

                    "string"

                  ],

                  "disc_number": 0,

                  "duration_ms": 0,

                  "explicit": true,

                  "external_ids": {

                    "isrc": "string",

                    "ean": "string",

                    "upc": "string"

                  },

                  "external_urls": {

                    "spotify": "string"

                  },

                  "href": "string",

                  "id": "string",

                  "is_playable": true,

                  "linked_from": {

                    "album": {

                      "album_type": "compilation",

                      "total_tracks": 9,

                      "available_markets": [

                        "CA",

                        "BR",

                        "IT"

                      ],

                      "external_urls": {

                        "spotify": "string"

                      },

                      "href": "string",

                      "id": "2up3OPMp9Tb4dAKM2erWXQ",

                      "images": [

                        {

                          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                          "height": 300,

                          "width": 300

                        }

                      ],

                      "name": "string",

                      "release_date": "1981-12",

                      "release_date_precision": "year",

                      "restrictions": {

                        "reason": "market"

                      },

                      "type": "album",

                      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

                      "album_group": "compilation",

                      "artists": [

                        {

                          "external_urls": {

                            "spotify": "string"

                          },

                          "href": "string",

                          "id": "string",

                          "name": "string",

                          "type": "artist",

                          "uri": "string"

                        }

                      ]

                    },

                    "artists": [

                      {

                        "external_urls": {

                          "spotify": "string"

                        },

                        "followers": {

                          "href": "string",

                          "total": 0

                        },

                        "genres": [

                          "Prog rock",

                          "Grunge"

                        ],

                        "href": "string",

                        "id": "string",

                        "images": [

                          {

                            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                            "height": 300,

                            "width": 300

                          }

                        ],

                        "name": "string",

                        "popularity": 0,

                        "type": "artist",

                        "uri": "string"

                      }

                    ],

                    "available_markets": [

                      "string"

                    ],

                    "disc_number": 0,

                    "duration_ms": 0,

                    "explicit": true,

                    "external_ids": {

                      "isrc": "string",

                      "ean": "string",

                      "upc": "string"

                    },

                    "external_urls": {

                      "spotify": "string"

                    },

                    "href": "string",

                    "id": "string",

                    "is_playable": true,

                    "linked_from": {

                      "album": {

                        "album_type": "compilation",

                        "total_tracks": 9,

                        "available_markets": [

                          "CA",

                          "BR",

                          "IT"

                        ],

                        "external_urls": {

                          "spotify": "string"

                        },

                        "href": "string",

                        "id": "2up3OPMp9Tb4dAKM2erWXQ",

                        "images": [

                          {

                            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",

                            "height": 300,

                            "width": 300

                          }

                        ],

                        "name": "string",

                        "release_date": "1981-12",

                        "release_date_precision": "year",

                        "restrictions": {

                          "reason": "market"

                        },

                        "type": "album",

                        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

                        "album_group": "compilation",

                        "artists": [

                          {

                            "external_urls": {},

                            "href": "string",

                            "id": "string",

                            "name": "string",

                            "type": "artist",

                            "uri": "string"

                          }

                        ]

                      },

                      "artists": [

                        {

                          "external_urls": {

                            "spotify": "string"

                          },

                          "followers": {

                            "href": "string",

                            "total": 0

                          },

                          "genres": [

                            "Prog rock",

                            "Grunge"

                          ],

                          "href": "string",

                          "id": "string",

                          "images": [

                            {}

                          ],

                          "name": "string",

                          "popularity": 0,

                          "type": "artist",

                          "uri": "string"

                        }

                      ],

                      "available_markets": [

                        "string"

                      ],

                      "disc_number": 0,

                      "duration_ms": 0,

                      "explicit": true,

                      "external_ids": {

                        "isrc": "string",

                        "ean": "string",

                        "upc": "string"

                      },

                      "external_urls": {

                        "spotify": "string"

                      },

                      "href": "string",

                      "id": "string",

                      "is_playable": true,

                      "linked_from": {

                        "album": {

                          "album_type": "compilation",

                          "total_tracks": 9,

                          "available_markets": [

                            "CA",

                            "BR",

                            "IT"

                          ],

                          "external_urls": {

                            "spotify": "string"

                          },

                          "href": "string",

                          "id": "2up3OPMp9Tb4dAKM2erWXQ",

                          "images": [

                            {}

                          ],

                          "name": "string",

                          "release_date": "1981-12",

                          "release_date_precision": "year",

                          "restrictions": {

                            "reason": "market"

                          },

                          "type": "album",

                          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

                          "album_group": "compilation",

                          "artists": [

                            {}

                          ]

                        },

                        "artists": [

                          {

                            "external_urls": {},

                            "followers": {},

                            "genres": [

                              "Prog rock",

                              "Grunge"

                            ],

                            "href": "string",

                            "id": "string",

                            "images": [

                              {}

                            ],

                            "name": "string",

                            "popularity": 0,

                            "type": "artist",

                            "uri": "string"

                          }

                        ],

                        "available_markets": [

                          "string"

                        ],

                        "disc_number": 0,

                        "duration_ms": 0,

                        "explicit": true,

                        "external_ids": {

                          "isrc": "string",

                          "ean": "string",

                          "upc": "string"

                        },

                        "external_urls": {

                          "spotify": "string"

                        },

                        "href": "string",

                        "id": "string",

                        "is_playable": true,

                        "linked_from": {

                          "album": {

                            "album_type": "compilation",

                            "total_tracks": 9,

                            "available_markets": [

                              "CA",

                              "BR",

                              "IT"

                            ],

                            "external_urls": {},

                            "href": "string",

                            "id": "2up3OPMp9Tb4dAKM2erWXQ",

                            "images": [

                              {}

                            ],

                            "name": "string",

                            "release_date": "1981-12",

                            "release_date_precision": "year",

                            "restrictions": {},

                            "type": "album",

                            "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",

                            "album_group": "compilation",

                            "artists": [

                              {}

                            ]

                          },

                          "artists": [

                            {

                              "genres": [],

                              "images": []

                            }

                          ],

                          "available_markets": [

                            "string"

                          ],

                          "disc_number": 0,

                          "duration_ms": 0,

                          "explicit": true,

                          "external_ids": {

                            "isrc": "string",

                            "ean": "string",

                            "upc": "string"

                          },

                          "external_urls": {

                            "spotify": "string"

                          },

                          "href": "string",

                          "id": "string",

                          "is_playable": true,

                          "linked_from": {

                            "album": {

                              "available_markets": [],

                              "images": [],

                              "artists": []

                            },

                            "artists": [

                              {}

                            ],

                            "available_markets": [

                              null

                            ],

                            "disc_number": 0,

                            "duration_ms": 0,

                            "explicit": true,

                            "external_ids": {},

                            "external_urls": {},

                            "href": "string",

                            "id": "string",

                            "is_playable": true,

                            "linked_from": {

                              "artists": [],

                              "available_markets": []

                            },

                            "restrictions": {},

                            "name": "string",

                            "popularity": 0,

                            "preview_url": "string",

                            "track_number": 0,

                            "type": "string",

                            "uri": "string",

                            "is_local": true

                          },

                          "restrictions": {

                            "reason": "string"

                          },

                          "name": "string",

                          "popularity": 0,

                          "preview_url": "string",

                          "track_number": 0,

                          "type": "string",

                          "uri": "string",

                          "is_local": true

                        },

                        "restrictions": {

                          "reason": "string"

                        },

                        "name": "string",

                        "popularity": 0,

                        "preview_url": "string",

                        "track_number": 0,

                        "type": "string",

                        "uri": "string",

                        "is_local": true

                      },

                      "restrictions": {

                        "reason": "string"

                      },

                      "name": "string",

                      "popularity": 0,

                      "preview_url": "string",

                      "track_number": 0,

                      "type": "string",

                      "uri": "string",

                      "is_local": true

                    },

                    "restrictions": {

                      "reason": "string"

                    },

                    "name": "string",

                    "popularity": 0,

                    "preview_url": "string",

                    "track_number": 0,

                    "type": "string",

                    "uri": "string",

                    "is_local": true

                  },

                  "restrictions": {

                    "reason": "string"

                  },

                  "name": "string",

                  "popularity": 0,

                  "preview_url": "string",

                  "track_number": 0,

                  "type": "string",

                  "uri": "string",

                  "is_local": true

                },

                "restrictions": {

                  "reason": "string"

                },

                "name": "string",

                "popularity": 0,

                "preview_url": "string",

                "track_number": 0,

                "type": "string",

                "uri": "string",

                "is_local": true

              },

              "restrictions": {

                "reason": "string"

              },

              "name": "string",

              "popularity": 0,

              "preview_url": "string",

              "track_number": 0,

              "type": "string",

              "uri": "string",

              "is_local": true

            },

            "restrictions": {

              "reason": "string"

            },

            "name": "string",

            "popularity": 0,

            "preview_url": "string",

            "track_number": 0,

            "type": "string",

            "uri": "string",

            "is_local": true

          },

          "restrictions": {

            "reason": "string"

          },

          "name": "string",

          "popularity": 0,

          "preview_url": "string",

          "track_number": 0,

          "type": "string",

          "uri": "string",

          "is_local": true

        },

        "restrictions": {

          "reason": "string"

        },

        "name": "string",

        "popularity": 0,

        "preview_url": "string",

        "track_number": 0,

        "type": "string",

        "uri": "string",

        "is_local": true

      },

      "restrictions": {

        "reason": "string"

      },

      "name": "string",

      "popularity": 0,

      "preview_url": "string",

      "track_number": 0,

      "type": "string",

      "uri": "string",

      "is_local": true

    }

  ]

};