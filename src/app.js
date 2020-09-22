//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  if (formation.length == 0)
    return null;
    let obj = {
      "defender": formation[0],
      "midfield": formation[1],
      "forward": formation[2]
    };
    return obj;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let playersList = [];
  for(let player of players){
    if(player.debut == year){ 
      playersList[playersList.length] = player;
    }
  }
return playersList; 
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  var player_pos = [];
  for (var i=0; i<players.length; i++)
  {
    if (players[i].position == "")
      return [];
    else if (players[i].position == position)
    {
      player_pos.push(players[i]); 
    }
  }
  return player_pos;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  var player_award = [];
    for(var i=0; i<players.length; i++)
    {
       for(var j=0; j< players[i].awards.length; j++)
       {
        if(players[i].awards[j].name == awardName)
        {
          player_award.push(players[i]); 
        }  
        
      }
    }
    return player_award;
}


//Progression 6 - Filter players that won ______ award ____ times

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country)
{
  var player_country = [];
  

  for(var i=0; i<players.length; i++)
  {
    for(var j=0; j< players[i].awards.length; j++)
    {
      if(players[i].awards[j].name == awardName && players[i].country == country)
      {
          player_country.push(players[i]);
      }
    }
  }
  return player_country;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age
function SortByAge()
{
    for(var i=0; i<players.length; i++)
    {
      for(var j=0; j<players.length; j++)
      {
        if(players[j].age < players[j+1].age)
        {
          var temp = players[j];
          players[j] = players[j+1]; 
          players[j+1] = temp;
        }
      }
    }
    return players;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
