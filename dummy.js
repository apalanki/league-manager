var playerList = [{name: "Xiaoming Zhang", score: {prev: 346, current: 346}, feePaid: 12, playNextLeague: true},
    {name: "Xiao Wu", score: {prev: 336, current: 336}, feePaid: 12, playNextLeague: true},
    {
        "name" : "Siyuan An",
        "score" : {
            "prev" : 365,
            "current" : 365
        },
        "feePaid" : 12,
        "playNextLeague" : true
    },
    {
        "name" : "Xx",
        "score" : {
            "prev" : 365,
            "current" : 365
        },
        "feePaid" : 12,
        "playNextLeague" : true
    },{
        "name" : "Yy",
        "score" : {
            "prev" : 365,
            "current" : 365
        },
        "feePaid" : 12,
        "playNextLeague" : true
    },{
        "name" : "Zz",
        "score" : {
            "prev" : 365,
            "current" : 365
        },
        "feePaid" : 12,
        "playNextLeague" : true
    }];

var GroupCourtTime =
{
    A: {
        court: 6,
        time: "7:30"
    },
    B: {
        court: 6,
        time: "8:15"
    },
    C: {
        court: 5,
        time: "7:30"
    },
    D: {
        court: 5,
        time: "8:15"
    },
    E: {
        court: 4,
        time: "7:30"
    },
    F: {
        court: 4,
        time: "8:15"
    },
    G: {
        court: 3,
        time: "7:30"
    },
    H: {
        court: 3,
        time: "8:15"
    }
};

function addGroupCourtAndTime(playersList) {
    var groupsSize = Math.round(playersList.length/4);
    for(var i =0; i<groupsSize;i++){
        for(var j = 4*i; j<4*(i+1); j++) {
            if(j<playersList.length){
                playersList[j].group = String.fromCharCode(i+65);
                var courtTime = GroupCourtTime[String.fromCharCode(i+65)];
                playersList[j].court = courtTime.court;
                playersList[j].time = courtTime.time;
            } else {
                playersList.push({name: 'Dummy', group: String.fromCharCode(i+65)})
            }
        }
    }
    console.log(playersList);
    return playersList;
}
addGroupCourtAndTime(playerList);
