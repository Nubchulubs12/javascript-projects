// Code your orbitCircumference function here:
function orbitCircumference(radius) {

circumference = Math.round(2*Math.PI*radius);
  return circumference
};

// Code your missionDuration function here:
function missionDuration(numOrbits = 3, OrbitRadi = 2000, OrbitSpeed = 28000) {


  return duration = Math.round(orbitCircumference(OrbitRadi)/(OrbitSpeed)*(numOrbits)*100)/100;;
};

// Copy/paste your selectRandomEntry function here:
function selectRandom(idCanNum) {

  return idCanNum[Math.floor(Math.random()*idCanNum.length)]

}


// Code your oxygenExpended function here
function oxygenExpended(candidate, numOrbits,OrbitRadi,OrbitSpeed) {
let usedO2 = Math.round(candidate.o2Used(missionDuration(numOrbits,OrbitRadi,OrbitSpeed))*1000)/1000;

  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${usedO2}kg of oxygen.`;
};

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
//  console.log(selectRandom(crew));
//  orbitCircumference(2000);
 missionDuration(2,5000,78);
 
//  console.log(`The mission will travel ${circumference} km aound the planet, and it will take ${duration} hours to complete.`)
// selectRandom(crew);
console.log(oxygenExpended(selectRandom(crew), 5, 2000, 28000));
