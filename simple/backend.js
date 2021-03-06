const FAKE_INPUT = JSON.parse(`
[
  {
    "id": 0,
    "name": "Mariam",
    "age": 21,
    "birthday": "1997-03-28",
    "working": true,
    "test": {
      "id": 3,
      "name": "nnnnnn",
      "age": 91
    },
    "followers": [
      {
        "name": "aaa",
        "id": 1,
        "thing": {
          "a": "a"
        }
      },
      {
        "name": "bbb",
        "id": 2
      },
      {
        "name": "ccc",
        "id": 3,
        "thing": {
          "a": "a"
        }
      },
      {
        "name": "ddd",
        "id": "a"
      },
      {
        "name": "eee",
        "id": "2018-07-18"
      }
    ]
  },
  {
    "id": 1,
    "name": "Naheel"
  }
]
`);

const FAKE_DES = JSON.parse(`
{
  "prefixes": {
    "biopax": "http://www.biopax.org/release/biopax-level3.owl#id",
    "sioc": "http://rdfs.org/sioc/ns#follows",
    "npg": "http://ns.nature.com/terms/name",
    "mv": "http://schema.mobivoc.org/name",
    "hifm": "http://purl.org/net/hifm/ontology#id",
    "voag": "http://voag.linkedmodel.org/voag#id",
    "ocds": "http://purl.org/onto-ocds/ocds#id",
    "identity": "http://www.identity.org/ontologies/identity.owl#hasBirthDate",
    "dbpedia-owl": "http://dbpedia.org/ontology/handedness",
    "dbug": "http://ontologi.es/doap-bugs#id",
    "wlo": "http://purl.org/ontology/wo/name",
    "locah": "http://data.archiveshub.ac.uk/def/name",
    "bevon": "http://rdfs.co/bevon/name",
    "juso": "http://rdfs.co/juso/name",
    "doap": "http://usefulinc.com/ns/doap#tester",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#label",
    "gov": "http://gov.genealogy.net/ontology.owl#hasName",
    "whisky": "http://vocab.org/whisky/terms/age",
    "nco": "http://www.semanticdesktop.org/ontologies/2007/03/22/nco#age",
    "sdmx-dimension": "http://purl.org/linked-data/sdmx/2009/dimension#age",
    "foaf": "http://xmlns.com/foaf/0.1/depiction",
    "ebucore": "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasStaff",
    "dcterms": "http://purl.org/dc/terms/language",
    "con": "http://www.w3.org/2000/10/swap/pim/contact#nearestAirport",
    "pext": "http://www.ontotext.com/proton/protonext#birthDate",
    "whois": "http://www.kanzaki.com/ns/whois#born",
    "mil": "http://rdf.muninn-project.org/ontologies/military#deathDay",
    "lingvo": "http://www.lingvoj.org/ontology#workingLanguage",
    "cgov": "http://reference.data.gov.uk/def/central-government/timePeriod",
    "s4ee": "https://w3id.org/saref4ee#workingModeId",
    "datex": "http://vocab.datex.org/terms#vmsWorking",
    "schema": "http://schema.org/followee",
    "earl": "http://www.w3.org/ns/earl#test",
    "transit": "http://vocab.org/transit/terms/routeStop",
    "lsc": "http://linkedscience.org/lsc/ns#tests",
    "deps": "http://ontologi.es/doap-deps#test-requirement",
    "test": "http://www.w3.org/2006/03/test-description#informationResourceResults",
    "oc": "http://contextus.net/ontology/ontomedia/core/expression#follows",
    "gold": "http://purl.org/linguistics/gold/follows",
    "seq": "http://www.ontologydesignpatterns.org/cp/owl/sequence.owl#follows",
    "dul": "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#follows",
    "saws": "http://purl.org/saws/ontology#follows",
    "xkos": "http://rdf-vocabulary.ddialliance.org/xkos#follows",
    "nsl": "http://purl.org/ontology/storyline/follows",
    "coll": "http://purl.org/co/followedBy",
    "gvp": "http://vocab.getty.edu/ontology#aat2879_followed-developed_from",
    "cwmo": "http://purl.org/cwmo/#isFollowedBy",
    "atm": "https://data.nasa.gov/ontologies/atmonto/ATM#departureTaxiPath",
    "demlab": "http://www.demcare.eu/ontologies/demlab.owl#compliantInstructionsOrder",
    "lv": "http://purl.org/lobid/lv#subjectChain",
    "osspr": "http://data.ordnancesurvey.co.uk/ontology/spatialrelations/northing",
    "pni": "http://data.press.net/ontology/identifier/hasIdentifier",
    "bbccms": "http://www.bbc.co.uk/ontologies/cms/managedThing",
    "dicom": "http://purl.org/healthcarevocab/v1#SmoothingType",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    "mrel": "http://id.loc.gov/vocabulary/relators/csp",
    "crm": "http://www.cidoc-crm.org/cidoc-crm/P84i_was_maximum_duration_of"
  },
  "struct": {
    "$": {
      "node_type": "array"
    },
    "$[*].id": {
      "node_type": "value",
      "attribute": "id",
      "suggested_predicates": [
        {
          "prefix_name": "biopax",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "sioc",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "npg",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "mv",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "hifm",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "voag",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "ocds",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "identity",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "dbug",
          "predicate": "id",
          "score": 1.5757043
        }
      ],
      "data_types": [
        "xsd:decimal"
      ]
    },
    "$[*].name": {
      "node_type": "value",
      "attribute": "name",
      "suggested_predicates": [
        {
          "prefix_name": "wlo",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "npg",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "locah",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "bevon",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "juso",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "doap",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "mv",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "rdfs",
          "predicate": "label",
          "score": 0.495827
        },
        {
          "prefix_name": "gov",
          "predicate": "hasName",
          "score": 0.44501683
        }
      ],
      "data_types": [
        "xsd:string"
      ]
    },
    "$[*].age": {
      "node_type": "value",
      "attribute": "age",
      "suggested_predicates": [
        {
          "prefix_name": "whisky",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "identity",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "nco",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "sdmx-dimension",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "foaf",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "foaf",
          "predicate": "homepage",
          "score": 0.5632362
        },
        {
          "prefix_name": "ebucore",
          "predicate": "agentAge",
          "score": 0.5092058
        },
        {
          "prefix_name": "dcterms",
          "predicate": "language",
          "score": 0.48597953
        },
        {
          "prefix_name": "foaf",
          "predicate": "page",
          "score": 0.48328853
        }
      ],
      "data_types": [
        "xsd:decimal"
      ]
    },
    "$[*].birthday": {
      "node_type": "value",
      "attribute": "birthday",
      "suggested_predicates": [
        {
          "prefix_name": "foaf",
          "predicate": "birthday",
          "score": 2
        },
        {
          "prefix_name": "con",
          "predicate": "birthday",
          "score": 2
        },
        {
          "prefix_name": "pext",
          "predicate": "birthDate",
          "score": 0.5187681
        },
        {
          "prefix_name": "identity",
          "predicate": "hasBirthDate",
          "score": 0.14919257
        },
        {
          "prefix_name": "whois",
          "predicate": "born",
          "score": 0.05679674
        },
        {
          "prefix_name": "mil",
          "predicate": "deathDay",
          "score": 0.043273706
        }
      ],
      "data_types": [
        "xsd:date"
      ]
    },
    "$[*].working": {
      "node_type": "value",
      "attribute": "working",
      "suggested_predicates": [
        {
          "prefix_name": "lingvo",
          "predicate": "workingLanguage",
          "score": 0.5555556
        },
        {
          "prefix_name": "cgov",
          "predicate": "workingTime",
          "score": 0.5468703
        },
        {
          "prefix_name": "ebucore",
          "predicate": "workingTitle",
          "score": 0.5468703
        },
        {
          "prefix_name": "s4ee",
          "predicate": "workingModeId",
          "score": 0.5069202
        },
        {
          "prefix_name": "con",
          "predicate": "nearestAirport",
          "score": 0.5027542
        },
        {
          "prefix_name": "datex",
          "predicate": "vmsWorking",
          "score": 0.39925477
        },
        {
          "prefix_name": "schema",
          "predicate": "employees",
          "score": 0.16326733
        },
        {
          "prefix_name": "schema",
          "predicate": "employee",
          "score": 0.16079454
        },
        {
          "prefix_name": "cgov",
          "predicate": "timePeriod",
          "score": 0.13352814
        },
        {
          "prefix_name": "ebucore",
          "predicate": "hasStaff",
          "score": 0.13352814
        }
      ],
      "data_types": [
        "xsd:boolean"
      ]
    },
    "$[*].test": {
      "node_type": "object",
      "attribute": "test",
      "suggested_predicates": [
        {
          "prefix_name": "earl",
          "predicate": "test",
          "score": 1.6638815
        },
        {
          "prefix_name": "transit",
          "predicate": "routeStop",
          "score": 0.6638815
        },
        {
          "prefix_name": "lsc",
          "predicate": "tests",
          "score": 0.44514993
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "latestReleaseVersion",
          "score": 0.3681495
        },
        {
          "prefix_name": "doap",
          "predicate": "tester",
          "score": 0.35109925
        },
        {
          "prefix_name": "deps",
          "predicate": "test-recommendation",
          "score": 0.30226624
        },
        {
          "prefix_name": "deps",
          "predicate": "test-requirement",
          "score": 0.30226624
        },
        {
          "prefix_name": "test",
          "predicate": "expectedResults",
          "score": 0.28101942
        },
        {
          "prefix_name": "test",
          "predicate": "informationResourceInput",
          "score": 0.28101942
        },
        {
          "prefix_name": "test",
          "predicate": "informationResourceResults",
          "score": 0.28101942
        }
      ]
    },
    "$[*].test.id": {
      "node_type": "value",
      "attribute": "id",
      "suggested_predicates": [
        {
          "prefix_name": "biopax",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "sioc",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "npg",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "mv",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "hifm",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "voag",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "ocds",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "identity",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "dbug",
          "predicate": "id",
          "score": 1.5757043
        }
      ],
      "data_types": [
        "xsd:decimal"
      ]
    },
    "$[*].test.name": {
      "node_type": "value",
      "attribute": "name",
      "suggested_predicates": [
        {
          "prefix_name": "wlo",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "npg",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "locah",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "bevon",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "juso",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "doap",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "mv",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "rdfs",
          "predicate": "label",
          "score": 0.495827
        },
        {
          "prefix_name": "gov",
          "predicate": "hasName",
          "score": 0.44501683
        }
      ],
      "data_types": [
        "xsd:string"
      ]
    },
    "$[*].test.age": {
      "node_type": "value",
      "attribute": "age",
      "suggested_predicates": [
        {
          "prefix_name": "whisky",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "identity",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "nco",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "sdmx-dimension",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "foaf",
          "predicate": "age",
          "score": 1.5632362
        },
        {
          "prefix_name": "foaf",
          "predicate": "homepage",
          "score": 0.5632362
        },
        {
          "prefix_name": "ebucore",
          "predicate": "agentAge",
          "score": 0.5092058
        },
        {
          "prefix_name": "dcterms",
          "predicate": "language",
          "score": 0.48597953
        },
        {
          "prefix_name": "foaf",
          "predicate": "page",
          "score": 0.48328853
        }
      ],
      "data_types": [
        "xsd:decimal"
      ]
    },
    "$[*].followers": {
      "node_type": "array",
      "attribute": "followers",
      "suggested_predicates": [
        {
          "prefix_name": "oc",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "gold",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "sioc",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "schema",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "seq",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "dul",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "saws",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "xkos",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "nsl",
          "predicate": "follows",
          "score": 3.795673
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "followedBy",
          "score": 1.5254867
        },
        {
          "prefix_name": "coll",
          "predicate": "followedBy",
          "score": 1.2183694
        },
        {
          "prefix_name": "gvp",
          "predicate": "aat2812_followed",
          "score": 1.1685475
        },
        {
          "prefix_name": "gvp",
          "predicate": "aat2879_followed-developed_from",
          "score": 1.1685475
        },
        {
          "prefix_name": "cwmo",
          "predicate": "isFollowedBy",
          "score": 1.065873
        },
        {
          "prefix_name": "schema",
          "predicate": "followee",
          "score": 0.26331353
        },
        {
          "prefix_name": "atm",
          "predicate": "arrivalTaxiPath",
          "score": 0.24564157
        },
        {
          "prefix_name": "atm",
          "predicate": "departureTaxiPath",
          "score": 0.24564157
        },
        {
          "prefix_name": "demlab",
          "predicate": "compliantInstructionsOrder",
          "score": 0.23974228
        },
        {
          "prefix_name": "lv",
          "predicate": "subjectChain",
          "score": 0.2097745
        }
      ]
    },
    "$[*].followers[*].name": {
      "node_type": "value",
      "attribute": "name",
      "suggested_predicates": [
        {
          "prefix_name": "wlo",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "npg",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "locah",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "bevon",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "juso",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "doap",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "mv",
          "predicate": "name",
          "score": 1.5555556
        },
        {
          "prefix_name": "rdfs",
          "predicate": "label",
          "score": 0.495827
        },
        {
          "prefix_name": "gov",
          "predicate": "hasName",
          "score": 0.44501683
        }
      ],
      "data_types": [
        "xsd:string"
      ]
    },
    "$[*].followers[*].id": {
      "node_type": "value",
      "attribute": "id",
      "suggested_predicates": [
        {
          "prefix_name": "biopax",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "sioc",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "npg",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "mv",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "hifm",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "voag",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "ocds",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "identity",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "id",
          "score": 1.5757043
        },
        {
          "prefix_name": "dbug",
          "predicate": "id",
          "score": 1.5757043
        }
      ],
      "data_types": [
        "xsd:decimal",
        "xsd:string",
        "xsd:date"
      ]
    },
    "$[*].followers[*].thing": {
      "node_type": "object",
      "attribute": "thing",
      "suggested_predicates": [
        {
          "prefix_name": "osspr",
          "predicate": "northing",
          "score": 0.63207644
        },
        {
          "prefix_name": "foaf",
          "predicate": "homepage",
          "score": 0.57155246
        },
        {
          "prefix_name": "foaf",
          "predicate": "name",
          "score": 0.5570085
        },
        {
          "prefix_name": "foaf",
          "predicate": "isPrimaryTopicOf",
          "score": 0.49372587
        },
        {
          "prefix_name": "pni",
          "predicate": "hasIdentifier",
          "score": 0.4553978
        },
        {
          "prefix_name": "foaf",
          "predicate": "page",
          "score": 0.38881755
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "asWikiText",
          "score": 0.3855774
        },
        {
          "prefix_name": "foaf",
          "predicate": "depiction",
          "score": 0.37033853
        },
        {
          "prefix_name": "bbccms",
          "predicate": "managedThing",
          "score": 0.3315633
        },
        {
          "prefix_name": "dicom",
          "predicate": "SmoothingType",
          "score": 0.3237738
        }
      ]
    },
    "$[*].followers[*].thing.a": {
      "node_type": "value",
      "attribute": "a",
      "suggested_predicates": [
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "foundedBy",
          "score": 0.5555556
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "aSide",
          "score": 0.55542153
        },
        {
          "prefix_name": "rdf",
          "predicate": "type",
          "score": 0.46075818
        },
        {
          "prefix_name": "mrel",
          "predicate": "csp",
          "score": 0.44444445
        },
        {
          "prefix_name": "rdfs",
          "predicate": "label",
          "score": 0.414251
        },
        {
          "prefix_name": "dbpedia-owl",
          "predicate": "handedness",
          "score": 0.3835342
        },
        {
          "prefix_name": "crm",
          "predicate": "P100_was_death_of",
          "score": 0.36435974
        },
        {
          "prefix_name": "crm",
          "predicate": "P38_deassigned",
          "score": 0.36435974
        },
        {
          "prefix_name": "crm",
          "predicate": "P19_was_intended_use_of",
          "score": 0.357534
        },
        {
          "prefix_name": "crm",
          "predicate": "P84i_was_maximum_duration_of",
          "score": 0.357534
        }
      ],
      "data_types": [
        "xsd:string"
      ]
    }
  },
  "entities": {
    "$[*].test": {
      "jsonpath": "$[*].test",
      "include": [
        "*"
      ],
      "type": "http://schema.org/Person",
      "iri_template": "https://example.com/{age}"
    },
    "$[*].followers[*]": {
      "jsonpath": "$[*].followers[*]",
      "include": [
        "*"
      ],
      "type": "http://schema.org/Thing",
      "iri_template": "https://example.com/{id}"
    },
    "$[*]": {
      "jsonpath": "$[*]",
      "include": [
        "*"
      ],
      "type": "http://schema.org/Person",
      "iri_template": "https://example.com/{age}"
    }
  }
}
`);

const FAKE_OUT = `
@prefix ex: <https://example.com/>.
@prefix schem: <http://schema.org/>.
@prefix n: <http://purl.org/ontology/wo/name#>.
@prefix nor: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/northing#>.
@prefix n0: <http://vocab.org/whisky/terms/age#>.
@prefix dep: <http://xmlns.com/foaf/0.1/depiction#>.
@prefix XML: <http://www.w3.org/2001/XMLSchema#>.

ex:
    a schem:Person;
    n:name "Naheel";
    <http://www.biopax.org/release/biopax-level3.owl#id#id> 1.0.
ex:1
    a schem:Thing;
    nor:northing "nothing";
    n:name "aaa";
    <http://www.biopax.org/release/biopax-level3.owl#id#id> 1.0.
ex:2
    a schem:Thing;
    n:name "bbb";
    <http://www.biopax.org/release/biopax-level3.owl#id#id> 2.0.
ex:2018-07-18
    a schem:Thing;
    n:name "eee";
    <http://www.biopax.org/release/biopax-level3.owl#id#id> 2018-07-18.0.
ex:21
    a schem:Person;
    <http://contextus.net/ontology/ontomedia/core/expression#follows#follows>
    ( );
    n:name "Mariam";
    n0:age 21.0;
    <http://www.biopax.org/release/biopax-level3.owl#id#id> 0.0;
    <http://www.lingvoj.org/ontology#workingLanguage#workingLanguage> false;
    <http://www.w3.org/ns/earl#test#test> ex:91;
    dep:birthday "1997-03-28"^^XML:date.
ex:3
    a schem:Thing;
    nor:northing "nothing";
    n:name "ccc";
    <http://www.biopax.org/release/biopax-level3.owl#id#id> 3.0.
ex:91
    a schem:Person;
    n:name "nnnnnn";
    n0:age 91.0;
    <http://www.biopax.org/release/biopax-level3.owl#id#id> 3.0.
ex:a
    a schem:Thing;
    n:name "ddd";
    <http://www.biopax.org/release/biopax-level3.owl#id#id> a.0.
`;

const FAKE_OUT_XML = `
<rdf:RDF
 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
 xmlns:ex="https://example.com#">
    <rdf:Description rdf:about="https://example.com/91">
        <rdf:type rdf:resource="http://schema.org/Person"/>
        <ex:age rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">91</ex:age>
        <ex:id rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">3</ex:id>
        <ex:name>nnnnnn</ex:name>
    </rdf:Description>
    <rdf:Description rdf:about="https://example.com/1">
        <rdf:type rdf:resource="http://schema.org/Thing"/>
        <ex:id rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">1</ex:id>
        <ex:name>aaa</ex:name>
        <ex:thing>nothing</ex:thing>
    </rdf:Description>
    <rdf:Description rdf:about="https://example.com/2">
        <rdf:type rdf:resource="http://schema.org/Thing"/>
        <ex:id rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">2</ex:id>
        <ex:name>bbb</ex:name>
    </rdf:Description>
    <rdf:Description rdf:about="https://example.com/3">
        <rdf:type rdf:resource="http://schema.org/Thing"/>
        <ex:id rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">3</ex:id>
        <ex:name>ccc</ex:name>
        <ex:thing>nothing</ex:thing>
    </rdf:Description>
    <rdf:Description rdf:about="https://example.com/a">
        <rdf:type rdf:resource="http://schema.org/Thing"/>
        <ex:id rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">a</ex:id>
        <ex:name>ddd</ex:name>
    </rdf:Description>
    <rdf:Description rdf:about="https://example.com/2018-07-18">
        <rdf:type rdf:resource="http://schema.org/Thing"/>
        <ex:id rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">2018-07-18</ex:id>
        <ex:name>eee</ex:name>
    </rdf:Description>
    <rdf:Description rdf:about="https://example.com/21">
        <rdf:type rdf:resource="http://schema.org/Person"/>
        <ex:age rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">21</ex:age>
        <ex:birthday rdf:datatype="http://www.w3.org/2001/XMLSchema#date">1997-03-28</ex:birthday>
        <ex:followers rdf:parseType="Collection">
            </ex:followers>
        <ex:id rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">0</ex:id>
        <ex:name>naheel</ex:name>
        <ex:test rdf:resource="https://example.com/91"/>
        <ex:ttt>nothing</ex:ttt>
        <ex:working rdf:datatype="http://www.w3.org/2001/XMLSchema#boolean">true</ex:working>
    </rdf:Description>
</rdf:RDF>
`;

/** TODO: implement getDescriptor
 * Gives the full descriptor based on the descriptor modified by the user
 * @param {Object} baseDescriptor - the descriptor modified by the user
 * @param {Object} jsonElement - One element from the entire data
 * @returns {Promise<Object>} - The complete descriptor
 */
async function getDescriptor(jsonElement, baseDescriptor) {
    return baseDescriptor || FAKE_DES;
}

/** TODO: implement getOutput
 * Generates the final output!
 * @param {string} type - The type of the output (ttl or xml)
 * @returns {Promise<string>} - The output!
 */
async function getOutput(type) {
    return type === "ttl" ? FAKE_OUT : FAKE_OUT_XML;
}
