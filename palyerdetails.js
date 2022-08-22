let urlData = location.href;
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("name");
console.log(playerUrl)


// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));

let playerData=document.getElementById("player-details-con")
for(var i=0;i<playersDetails.length;i++)
{
    if(playersDetails[i].playerName==playerUrl)
    {
        var playingOrN=""
        if(playersDetails[i].isPlaying==true){
            playingOrN="Playing"
        }
        else{
            playingOrN="On Bench"
        }
        var div=document.createElement('div')
        var img =document.createElement('img')
        img.src=playersDetails[i].playerImg
        img.classList.add('playrerimag')
        div.appendChild(img)
        playerData.appendChild(div)
         
        var table=document.createElement('table')
        var tr=document.createElement('tr')
        var td1=document.createElement('td')
        var td=document.createElement('td')
        td1.innerText="Player Team"
        tr.appendChild(td1)
        table.appendChild(tr)
        td.innerText=playersDetails[i].playerTeam
        tr.appendChild(td)
        table.appendChild(tr)
        playerData.appendChild(table)
        
        var table=document.createElement('table')
        var tr=document.createElement('tr')
        var td1=document.createElement('td')
        var td=document.createElement('td')
        td1.innerText="Team CODE"
        tr.appendChild(td1)
        table.appendChild(tr)
        td.innerText=playersDetails[i].from
        tr.appendChild(td)
        table.appendChild(tr)
        playerData.appendChild(table)
        
        var table=document.createElement('table')
        var tr=document.createElement('tr')
        var td1=document.createElement('td')
        var td=document.createElement('td')
        td1.innerText="Worth"
        tr.appendChild(td1)
        table.appendChild(tr)
        td.innerText=playersDetails[i].price
        tr.appendChild(td)
        table.appendChild(tr)
        playerData.appendChild(table)


        
        var table=document.createElement('table')
        var tr=document.createElement('tr')
        var td=document.createElement('td')
        var td1=document.createElement('td')
        td1.innerText="Is Playing"
        tr.appendChild(td1)
        table.appendChild(tr)
        td.innerText=playingOrN
        tr.appendChild(td)
        table.appendChild(tr)
        playerData.appendChild(table)




       /* playerData.innerHTML+=`

        <div id="player_detail-img">
        <img src="${playersDetails[i].playerImg}" alt="">
    </div>
        <div id="new-player-det">
        <table>
        <tr>
            <td>Player Name  </td>
            <td>${playersDetails[i].playerName}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Name </td>
            <td> ${playersDetails[i].playerTeam}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Code </td>
            <td>${playersDetails[i].from}   </td>
        </tr>
    <table>
        <tr>
            <td> Worth </td>
            <td>${playersDetails[i].price}  </td>
        </tr>
    <table>
        <tr>
            <td> Is playing </td>
            <td> ${playingOrN} </td>
        </tr>
    </table>
    </div>
    
        `*/
    }
}

/*// {
//   "id": 0,
//   "playerName": "Hardik Pandya",
//   "from": "GT",
//   "price": "12.50 Cr",
//   "isPlaying": true,
//   "description": "All-rounder",
//   "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png',
//   "playerTeam": "Gujarat Titans"
// }*/