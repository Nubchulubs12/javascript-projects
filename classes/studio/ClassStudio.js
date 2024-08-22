//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores.
//Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    };
    addScore(score){
    this.scores.push(score);
    };

    average(){
    let total =0;
    for (let i = 0; i < this.scores.length; i++) {
        total += this.scores[i];
    }
    return Math.round(total / this.scores.length*10)/10;
    };

    status() {
    if (this.average() >= 90) {
    console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of Accepted!`);
    } else if (this.average() >= 80) {
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of Reserve!`);
    } else if (this.average() >= 70) {
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of Probationary.`);
    } else if (this.average() < 70) {
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of rejection.`);
    } else if (this.average() > 100) {
        console.log("this score isn't valid its greater than 100%!!");
    };
    };

    scoresNeededForStatus(targetAverage) {
        let currentScore = this.scores.reduce((acc, score) => acc + score, 0);;
        let currentCount = this.scores.length;
        let additionalScores = 0;

        while((currentScore + 100* additionalScores) / (currentCount + additionalScores) < targetAverage) {
            additionalScores++;
        }
        return additionalScores;
    }
}

let candidate1 = new CrewCandidate("Bubba Bea", 135, [88, 85, 90]);

let candidate2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);

let candidate3 = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

candidate2.status();


console.log(`Scores needed to reach Reserve status: ${candidate3.scoresNeededForStatus(80)}`);
console.log(`Scores needed to reach Accepted status: ${candidate3.scoresNeededForStatus(90)}`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher.
//How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.