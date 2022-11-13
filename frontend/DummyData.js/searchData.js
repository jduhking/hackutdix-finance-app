const dropdownData = [
    {id: '1', ticker: 'APPL',stock: 'Apple inc'},
    {id: '2', ticker: 'PG', stock: 'Proctor and Gamble'},
    {id: '3', ticker: 'ALPHA', stock: 'Google'},
    {id: '4', ticker: 'META', stock: 'Facebok'},
    {id: '5', ticker: 'SNAP', stock:'Snapchat'},
    {id: '6', ticker: 'GPRO', stock:'Go Pro'},
    {id: '7', tickr: 'LCID', stock:'Lucid Motors'},
    {id: '8', tickr: 'ALBA', stock:'Alibaba'},
    {id: '9', tickr: 'TWTR',stock:'Twitter'},
    {id: '10', tickr: 'AMZN', stock:'Amazon'},
];

const topMovers = [
    {id: '1', _source: {ticker: 'AAPL',name: 'Apple inc'}, direction:'down', priceChange: '30'},
    {id: '2', _source: {ticker: 'PG', name: 'Proctor and Gamble'}, direction:'up', priceChange:'21'},
    {id: '3', _source: {ticker: 'GOOGL', name: 'Google', direction:'up'}, priceChange:'24'},
    {id: '4', _source: {ticker: 'META', name: 'Facebok', direection:'up'}, priceChange:'56'},
    {id: '5', _source: {ticker: 'SNAP', name:'Snapchat', direction:'up'}, priceChange: '54'}
]

export {dropdownData, topMovers}