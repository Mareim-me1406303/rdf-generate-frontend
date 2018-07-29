let Repository = require('./Repository.js')



// data={'$':
//         { json_path: '$',
//             include: [Array],
//             type: 'http://schema.org/Person',
//             iri_template: 'https://example.com/{age}' } }

entity=
{ json_path: '$$',
    include: [ '$$' ],
    type: 'http://schema.org/Mariam',
    iri_template: 'https://example.com/{age}' }
Repository.getEntity('$').then(()=>console.log("done"))

