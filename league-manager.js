Players = new Mongo.Collection("players");

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

function getNetPoints(player){
    var netPoints = 0;
    var maxGamePoints = 21;
    if(player.game1){netPoints = player.game1 - maxGamePoints;}
    if(player.game2){netPoints = player.game2 - maxGamePoints;}
    if(player.game3){netPoints = player.game3 - maxGamePoints;}
    return netPoints;
}

function addGroupCourtAndTime(playersList) {
    var groupsSize = Math.round(playersList.length/4);
    for(var i =0; i<groupsSize;i++){
        for(var j = 4*i; j<4*(i+1); j++) {
            if(j<playersList.length){
                playersList[j].group = String.fromCharCode(i+65);
                var courtTime = GroupCourtTime[String.fromCharCode(i+65)];
                playersList[j].court = courtTime.court;
                playersList[j].time = courtTime.time;
                playersList[j].netPoints = getNetPoints(playersList[j]);
            } else {
                playersList.push({name: 'Dummy', group: String.fromCharCode(i+65)})
            }
        }
    }
    return playersList;
}

if (Meteor.isClient) {
    Template.body.helpers({
        players: function () {
            var playersList = [];
            if(Session.get("viewAllPlayers")){
                return Players.find({},{sort: {"score.current":-1}}).fetch();
            } else{
                playersList = Players.find({playNextLeague:{$ne:false}},{sort: {"score.current":-1}}).fetch();
                return addGroupCourtAndTime(playersList);
            }

        },
        viewAllPlayers: function(){
            return Session.get("viewAllPlayers");
        }
    });

    Template.body.events({
        "change .view-all-players input": function(event){
            Session.set("viewAllPlayers", event.target.checked);
        }
    });

    Template.player.events({
        "click .toggle-checked" : function(){
            Meteor.call("togglePlayNextLeague", this._id, !this.playNextLeague);
        },
        "submit .game-1": function(event){
            event.preventDefault();
            Meteor.call("updateGame1Score", this._id, this.score, event.target.text.value);
        },
        "submit .game-2": function(event){
            event.preventDefault();
            Meteor.call("updateGame2Score", this._id, this.score, event.target.text.value);
        },
        "submit .game-3": function(event){
            event.preventDefault();
            Meteor.call("updateGame3Score", this._id, this.score, event.target.text.value);
        }
    });
    
    Template.player.helpers({
        isDummy: function(name) {
            return !(name==='Dummy');
        }
    });
}

Meteor.methods({
    togglePlayNextLeague: function(playerId, nextLeague){
        Players.update(playerId, {$set: {playNextLeague: nextLeague}})
    },
    updateGame1Score: function(playerId, score, game1Score){
        Players.update(playerId, {$set: {game1: game1Score, "score.previous": score.current, "score.current": score.current - (21-game1Score)}});
    },
    updateGame2Score: function(playerId, score, game2Score){
        Players.update(playerId, {$set: {game2: game2Score, "score.current": score.current - (21-game2Score)}});
    },
    updateGame3Score: function(playerId, score, game3Score){
        Players.update(playerId, {$set: {game3: game3Score, "score.current": score.current - (21-game3Score)}});
    }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}