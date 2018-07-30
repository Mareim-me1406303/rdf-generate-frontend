const FAKE_DES = JSON.parse(`
  {
    "prefixes": {
      "p0": "http://www.atelier12.it/ontoatelier12.owl",
      "p1": "http://www.w3.org/2002/07/owl",
      "p2": "http://www.w3.org/2003/01/geo/wgs84_pos",
      "p3": "http://swint.mindswap.org/ont/base",
      "p4": "http://www.ieeeltsc.org/wg11CMI/ramlet/Pub/RAMLET-OWL-CORE.owl",
      "p5": "http://www.svgopen.org/2002/papers/herman_dardailler__svg_linearization_and_accessibility/axsvg-schema.rdf",
      "p6": "http://www.daml.org/2001/03/daml+oil",
      "p7": "http://www.w3.org/Consortium/Offices/Presentations/SemanticWeb/rdfs/axsvg-schema.rdf",
      "p8": "http://www.w3.org/ns/earl",
      "p9": "http://www.geonames.org/ontology"
    },
    "struct": {
      "$": {
        "node_type": "object"
      },
      "$.id": {
        "node_type": "value",
        "attribute": "id",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "id",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "ID",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:decimal"
        ]
      },
      "$.name": {
        "node_type": "value",
        "attribute": "name",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "NAME",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p8",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "Name",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:string"
        ]
      },
      "$.age": {
        "node_type": "value",
        "attribute": "age",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "Age",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p8",
            "predicate": "Age",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "age",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:decimal"
        ]
      },
      "$.birthday": {
        "node_type": "value",
        "attribute": "birthday",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "birthday",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "birthday",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "birthday",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "birthday",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "birthDay",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "birthday",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "Birthday",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "BIRTHDAY",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:date"
        ]
      },
      "$.working": {
        "node_type": "value",
        "attribute": "working",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Working",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "Working",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Working",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Working",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "Working",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:boolean"
        ]
      },
      "$.test": {
        "node_type": "object",
        "attribute": "test",
        "suggested_predicates": [
          {
            "prefix_name": "p2",
            "predicate": "test",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p8",
            "predicate": "Test",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "Test",
            "score": 0
          }
        ]
      },
      "$.test.id": {
        "node_type": "value",
        "attribute": "id",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "id",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "ID",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:decimal"
        ]
      },
      "$.test.name": {
        "node_type": "value",
        "attribute": "name",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "NAME",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p8",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "Name",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:string"
        ]
      },
      "$.test.age": {
        "node_type": "value",
        "attribute": "age",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "Age",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "age",
            "score": 0
          },
          {
            "prefix_name": "p8",
            "predicate": "Age",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "age",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:decimal"
        ]
      },
      "$.ttt": {
        "node_type": "object",
        "attribute": "ttt",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Ttt",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "Ttt",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Ttt",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Ttt",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "ttt",
            "score": 0
          }
        ]
      },
      "$.ttt.def": {
        "node_type": "value",
        "attribute": "def",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Def",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "Def",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "def",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Def",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "Def",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "Def",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "Def",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "Def",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:decimal"
        ]
      },
      "$.ttt.ghi": {
        "node_type": "value",
        "attribute": "ghi",
        "suggested_predicates": [],
        "data_types": [
          "xsd:decimal"
        ]
      },
      "$.followers": {
        "node_type": "array",
        "attribute": "followers",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Followers",
            "score": 0
          }
        ]
      },
      "$.followers[*].name": {
        "node_type": "value",
        "attribute": "name",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "NAME",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "name",
            "score": 0
          },
          {
            "prefix_name": "p8",
            "predicate": "Name",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "Name",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:string"
        ]
      },
      "$.followers[*].id": {
        "node_type": "value",
        "attribute": "id",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "id",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p4",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "ID",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "ID",
            "score": 0
          }
        ],
        "data_types": [
          "xsd:decimal",
          "xsd:string",
          "xsd:date"
        ]
      },
      "$.followers[*].thing": {
        "node_type": "object",
        "attribute": "thing",
        "suggested_predicates": [
          {
            "prefix_name": "p0",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p2",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p3",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p7",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p6",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p1",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p5",
            "predicate": "Thing",
            "score": 0
          },
          {
            "prefix_name": "p9",
            "predicate": "Thing",
            "score": 0
          }
        ]
      },
      "$.followers[*].thing.a": {
        "node_type": "value",
        "attribute": "a",
        "suggested_predicates": [],
        "data_types": [
          "xsd:string"
        ]
      }
    },
    "entities": {
      "$.test": {
        "json_path": "$.test",
        "include": [
          "$.test",
          "$.test"
        ],
        "type": "http://schema.org/Person",
        "iri_template": "https://example.com/{age}"
      },
      "$.followers[*]": {
        "json_path": "$.followers[*]",
        "include": [
          "$.followers[*]"
        ],
        "type": "http://schema.org/Thing",
        "iri_template": "https://example.com/{id}"
      },
      "$": {
        "json_path": "$",
        "include": [
          "$"
        ],
        "type": "http://schema.org/Person",
        "iri_template": "https://example.com/{age}"
      },
      "$.Screenname": {
        "json_path": "$.Screenname",
        "include": [
          "sd"
        ],
        "type": "ee2",
        "iri_template": "https://example.com/{age}"
      }
    }
  }
`);

const FAKE_OUT = `
@prefix ex: <https://example.com/>.
@prefix schem: <http://schema.org/>.
@prefix e: <https://example.com#>.
@prefix XML: <http://www.w3.org/2001/XMLSchema#>.

ex:1 a schem:Thing; e:id 1.0; e:name "aaa"; e:thing "nothing".

ex:2 a schem:Thing; e:id 2.0; e:name "bbb".

ex:2018-07-18 a schem:Thing; e:id 2018-07-18.0; e:name "eee".

ex:21
    a schem:Person;
    e:age 21.0;
    e:birthday "1997-03-28"^^XML:date;
    e:followers ( );
    e:id 0.0;
    e:name "naheel";
    e:test ex:91;
    e:ttt "nothing";
    e:working false.
ex:3 a schem:Thing; e:id 3.0; e:name "ccc"; e:thing "nothing".

ex:91 a schem:Person; e:age 91.0; e:id 3.0; e:name "nnnnnn".

ex:a a schem:Thing; e:id a.0; e:name "ddd".
`;

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
    "ttt": {
      "def": 123,
      "ghi": 456
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

/**
 * Gives the full descriptor based on the descriptor modified by the user
 * @param {Object} baseDescriptor - the descriptor modified by the user
 * @param {Object} jsonElement - One element from the entire data
 * @returns {Promise<Object>} - The complete descriptor
 */
async function getDescriptor(jsonElement, baseDescriptor) {
    return FAKE_DES;
}

/**
 * Generates the final output!
 * @param {string} type - The type of the output (ttl or xml)
 * @param {Object} fullJson - The entire json file. If undefined, then it will only output the result based on the given item from getDescriptorNoPredicates() function.
 * @returns {Promise<string>} - The output!
 */
async function getOutput(type, fullJson) {
    return FAKE_OUT;
}
