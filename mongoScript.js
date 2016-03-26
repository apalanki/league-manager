db = db.getSiblingDB('meteor');
players = db.getCollection("players");

players.insert([
    {name: "Xiaoming Zhang", score: {prev: 346, current: 346}, feePaid: 12, playNextLeague: true},
    {name: "Xiao Wu", score: {prev: 336, current: 336}, feePaid: 12, playNextLeague: true},
    {name: "Siyuan An", score: {prev: 365, current: 365}, feePaid: 12, playNextLeague: true},
    {name: "Chris Lee", score: {prev: 334, current: 334}, feePaid: 8, playNextLeague: true},
    {name: "Anudeep Palanki", score: {prev: 332, current: 332}, feePaid: 10, playNextLeague: true},
    {name: "Ekk", score: {prev: 332, current: 332}, feePaid: 0, playNextLeague: true},
    {name: "Wei Huang", score: {prev: 315, current: 315}, feePaid: 12, playNextLeague: true},
    {name: "Bunty", score: {prev: 315, current: 315}, feePaid: 12, playNextLeague: true}
]);

