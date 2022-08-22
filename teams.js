let url = location.href;
let newUrl = new URL(url);
let completeteam= newUrl.searchParams.get("name");



teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox=document.getElementById("teamlist")
var tableTeam=document.getElementById("table-team")

var cnt=0;



    

for(var i=0;i<playersDetails.length;i++){
if(completeteam==playersDetails[i].from){
  var isPlay=""
  if(playersDetails[i].isPlaying==true){
    isPlay="Playing"
  }
  else{
    isPlay="On Bench"
  }
var currentP=playersDetails[i].playerName
cnt++
teamMainBox.innerHTML+=`
<div    onclick="makethisinclick('${currentP}')"    class="minibox mn2">

<img src="${playersDetails[i].playerImg}" class="mainimage" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${playersDetails[i].playerName}   </p>
  <p class="text2"> Worth : ${playersDetails[i].price} </p>
  <p class="text2"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersDetails[i].description} </p>
 
</div>

</div>

`}
function makethisinclick(res){
  window.open(`./playerDetails.html?name=${res}`,"_self")
}

}
// search for top batsman
var topBatsman=""
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Batsman"&&playersDetails[j].from==completeteam){
   topBatsman=playersDetails[j].playerName

   break
  }
  else{
   topBatsman="No Player"
  }
}
// search for top bowler
var topBowler=""
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Bowler"&&playersDetails[j].from==completeteam){
   topBowler=playersDetails[j].playerName

   break
  }
  else{
   topBowler="No Player"
  }
}



teamsDetails.map((item)=>{
  if(completeteam==item.sName){

    var table=document.createElement('table')
    var td1=document.createElement('td')
    var td2=document.createElement('td')
   var img=document.createElement('img')
   var tr1 =document.createElement('tr')
   td1.innerHTML="Team Name"
   tr1.appendChild(td1)
   td2.innerText=item.teamFullName
   tr1.append(td2)
   table.append(tr1)
   tableTeam.appendChild(table)
   console.log(table)
   var td1=document.createElement('td')
   var td2=document.createElement('td')
   var img=document.createElement('img')
   var tr1 =document.createElement('tr')
   td1.innerText="Team icon"
    tr1.appendChild(td1)
    img.src=item.teamIcon
    img.classList.add('team-page-icon')
    td2.append(img)
    tr1.append(td2)
    table.append(tr1)
    //console.log(table)
    tableTeam.appendChild(table)
    var td1=document.createElement('td')
    var td2=document.createElement('td')
   var img=document.createElement('img')
   var tr1 =document.createElement('tr')
   td1.innerHTML="Count Of PLayers"
   tr1.appendChild(td1)
   td2.innerText=cnt
   tr1.append(td2)
   table.append(tr1)
   tableTeam.appendChild(table)
   var td1=document.createElement('td')
    var td2=document.createElement('td')
   var img=document.createElement('img')
   var tr1 =document.createElement('tr')
   td1.innerHTML="Top Bowler"
   tr1.appendChild(td1)
   td2.innerText=topBowler
   tr1.append(td2)
   table.append(tr1)
   tableTeam.appendChild(table)
   var td1=document.createElement('td')
    var td2=document.createElement('td')
   var img=document.createElement('img')
   var tr1 =document.createElement('tr')
   td1.innerHTML="Team woncount"
   tr1.appendChild(td1)
   td2.innerText=item.WonCount
   tr1.append(td2)
   table.append(tr1)
   tableTeam.appendChild(table)
}

})

