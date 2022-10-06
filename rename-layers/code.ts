const states = [
  { abbr: 'AK', name: 'Alaska' },
  { abbr: 'TX', name: 'Texas' },
  { abbr: 'AL', name: 'Alabama' },
  { abbr: 'AR', name: 'Arkansas' },
  { abbr: 'AZ', name: 'Arizona' },
  { abbr: 'CA', name: 'California' },
  { abbr: 'CO', name: 'Colorado' },
  { abbr: 'CT', name: 'Connecticut' },
  { abbr: 'DC', name: 'DistrictofColumbia' },
  { abbr: 'DE', name: 'Delaware' },
  { abbr: 'FL', name: 'Florida' },
  { abbr: 'GA', name: 'Georgia' },
  { abbr: 'HI', name: 'Hawaii' },
  { abbr: 'IA', name: 'Iowa' },
  { abbr: 'ID', name: 'Idaho' },
  { abbr: 'IL', name: 'Illinois' },
  { abbr: 'IN', name: 'Indiana' },
  { abbr: 'KS', name: 'Kansas' },
  { abbr: 'KY', name: 'Kentucky' },
  { abbr: 'LA', name: 'Louisiana' },
  { abbr: 'MA', name: 'Massachusetts' },
  { abbr: 'MD', name: 'Maryland' },
  { abbr: 'ME', name: 'Maine' },
  { abbr: 'MI', name: 'Michigan' },
  { abbr: 'MN', name: 'Minnesota' },
  { abbr: 'MO', name: 'Missouri' },
  { abbr: 'MS', name: 'Mississippi' },
  { abbr: 'MT', name: 'Montana' },
  { abbr: 'NC', name: 'NorthCarolina' },
  { abbr: 'ND', name: 'NorthDakota' },
  { abbr: 'NE', name: 'Nebraska' },
  { abbr: 'NH', name: 'NewHampshire' },
  { abbr: 'NJ', name: 'NewJersey' },
  { abbr: 'NM', name: 'NewMexico' },
  { abbr: 'NV', name: 'Nevada' },
  { abbr: 'NY', name: 'NewYork' },
  { abbr: 'OH', name: 'Ohio' },
  { abbr: 'OK', name: 'Oklahoma' },
  { abbr: 'OR', name: 'Oregon' },
  { abbr: 'PA', name: 'Pennsylvania' },
  { abbr: 'RI', name: 'RhodeIsland' },
  { abbr: 'SC', name: 'SouthCarolina' },
  { abbr: 'SD', name: 'SouthDakota' },
  { abbr: 'TN', name: 'Tennessee' },
  { abbr: 'TX', name: 'Texas' },
  { abbr: 'UT', name: 'Utah' },
  { abbr: 'VA', name: 'Virginia' },
  { abbr: 'VT', name: 'Vermont' },
  { abbr: 'WA', name: 'Washington' },
  { abbr: 'WI', name: 'Wisconsin' },
  { abbr: 'WV', name: 'WestVirginia' },
  { abbr: 'WY', name: 'Wyoming' }
];

const currentPage = figma.currentPage;

const currentPageNodes = currentPage.findChildren(node => node.type === "FRAME");

//const transformed = currentPageNodes.map(({ id: label, name: abbr }) => ({ label, abbr }));
//console.log(transformed)

for (let i of states) {
  for (let j of currentPageNodes) {
    console.log(j.name, i.abbr)
    j.name = i.abbr
  }
}

figma.notify(`Renamed slides: ` + currentPageNodes.length);

figma.closePlugin();