'use strict';



const game = {
 team1: 'Bayern Munich',
 team2: 'Borrussia Dortmund',
 players: [
 [
 'Neuer',
 'Pavard',
 'Martinez',
 'Alaba',
 'Davies',
 'Kimmich',
 'Goretzka',
 'Coman',
 'Muller',
 'Gnarby',
 'Lewandowski',
 ],
 [
 'Burki',
 'Schulz',
 'Hummels',
 'Akanji',
 'Hakimi',
 'Weigl',
 'Witsel',
 'Hazard',
 'Brandt',
 'Sancho',
 'Gotze',
 ],
 ],
 score: '4:0',
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,
 },
 };

 const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
]);

const events = new Set([...gameEvents.values()]);
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const minutes = [gameEvents.keys()];
console.log(minutes)

for(const [min ,inter] of [...gameEvents]){
	// console.log(min)
	if(min <= 45){
		console.log(`[FIRST HALF] ${min}: ${inter}`)
	} else{
		console.log(`[SECOND HALF] ${min}: ${inter}`)
	}
}

console.log(gameEvents.size)

const avrage = 90 / gameEvents.size

console.log(`An event happened, on 
average, every ${avrage} minutes`)