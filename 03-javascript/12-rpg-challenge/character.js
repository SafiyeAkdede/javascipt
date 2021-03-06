    import {
        fighter1
    } from './gamelogic.js';
    import {
        fighter2
    } from './gamelogic.js';

    let healthPercentage1;
    let healthPercentage2;
    let fighter1Hit = document.getElementById("fighter01-hit");
    let fighter1Heal = document.getElementById("fighter01-heal");
    let fighter1Yield = document.getElementById("fighter01-yield");
    let fighter2Hit = document.getElementById("fighter02-hit");
    let fighter2Heal = document.getElementById("fighter02-heal");
    let fighter2Yield = document.getElementById("fighter02-yield");
    let personnage;
    let action;
    let result;
    const movesLog = document.getElementById("moves-log");
    let i = 1;


    //Use this script to generate your character
    export default function Person(race, item) {
        this.race = race;
        this.item = item;
        this.currenthealth = 100;
        this.maxHealth = 100;

        this.min = 3;
        this.maxDamage = 20;
        this.maxHealing = 30;

        let fighter1Name = document.getElementById("name-rpg1").value;
        let fighter2Name = document.getElementById("name-rpg2").value;

        //healing function
        this.heal = function() {
            if (event.target == document.getElementById("fighter01-heal")) {
                let randomHealValue = Math.floor(Math.random() * (fighter1.maxHealing - fighter1.min + 1) + fighter1.min);
                //staff bonus
                let healingValue;
                if (item == "Staff") {
                    healingValue = randomHealValue + Math.ceil(((randomHealValue * 20) / 100));

                } else {
                    healingValue = randomHealValue;
                }
                fighter1.currenthealth += healingValue;
                healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth);

                //ne pas depasser la vie maximum
                if (fighter1.currenthealth > fighter1.maxHealth) {
                    fighter1.currenthealth = fighter1.maxHealth;
                    healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth);
                }
                document.getElementById("healthbar1").innerHTML = fighter1.currenthealth;
                document.getElementById("healthbar1").style.width = healthPercentage1 + "%";

                afficherAction(fighter1Name, "is healing", healingValue);

                fighter2Play();

            } else {
                let randomHealValue = Math.floor(Math.random() * (fighter2.maxHealing - fighter2.min + 1) + fighter2.min);
                //staff bonus
                let healingValue;
                if (item == "Staff") {
                    healingValue = randomHealValue + Math.ceil(((randomHealValue * 20) / 100));
                } else {
                    healingValue = randomHealValue;
                }
                fighter2.currenthealth += healingValue;
                healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth);
                // - que le maximum de vie
                if (fighter2.currenthealth > fighter2.maxHealth) {
                    fighter2.currenthealth = fighter2.maxHealth;
                    healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth);
                }

                document.getElementById("healthbar2").innerHTML = fighter2.currenthealth;
                document.getElementById("healthbar2").style.width = healthPercentage2 + "%";

                afficherAction(fighter2Name, "is healing", healingValue);

                fighter1Play();
            }

        };

        this.damage = function() {
            //nombre alea de degats
            let chance = Math.random();

            if (event.target == document.getElementById("fighter01-hit")) {

                if (fighter1.race == "Vampires") {
                    fighter1.currenthealth = fighter1.currenthealth + Math.floor(fighter2.currenthealth * 0.1);
                    fighter2.currenthealth = fighter2.currenthealth - Math.floor(fighter2.currenthealth * 0.1);
                    healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth);

                    if (fighter1.currenthealth > fighter1.maxHealth) {
                        fighter1.currenthealth = fighter1.maxHealth;
                        healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth);
                    };

                    document.getElementById("healthbar1").innerHTML = fighter1.currenthealth;
                    document.getElementById("healthbar1").style.width = healthPercentage1 + "%";
                }

                let randomDamage = Math.floor(Math.random() * (fighter1.maxDamage - fighter1.min + 1) + fighter1.min);


                switch (fighter1.item) {
                    //sword bonus
                    case "Sword":
                        randomDamage += Math.ceil(randomDamage * 0.3);
                        break;

                    case "Bow":
                        //bow bonus
                        if (chance < 0.3) {
                            let i = 0;
                            while (i < 1) {

                                fighter2.currenthealth -= randomDamage;
                                healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth);

                                document.getElementById("healthbar2").innerHTML = fighter2.currenthealth;
                                document.getElementById("healthbar2").style.width = healthPercentage2 + "%";

                                i++;

                                randomDamage = Math.floor(Math.random() * (fighter1.maxDamage - fighter1.min + 1) + fighter1.min);
                            }
                        }
                        break;
                    case "Boots":
                        if (chance < 0.3) {
                            randomDamage = 0;
                        }
                        break;
                }

                if (fighter2.race == "Humans") {
                    randomDamage -= Math.ceil(randomDamage * 0.2);
                    fighter2.currenthealth -= randomDamage;
                    healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth)
                } else if (fighter2.race != "Elves") {
                    fighter2.currenthealth -= randomDamage;
                    healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth);
                }

                //elf bonus
                if (fighter2.race == "Elves") {
                    if (chance < 0.3) {
                        randomDamage = Math.ceil(randomDamage * 0.5);
                        fighter1.currenthealth -= randomDamage;
                        healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth)
                        document.getElementById("healthbar1").innerHTML = fighter1.currenthealth;
                        document.getElementById("healthbar1").style.width = healthPercentage1 + "%";

                    } else {
                        fighter2.currenthealth -= randomDamage;
                        healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth);
                        document.getElementById("healthbar2").innerHTML = fighter2.currenthealth;
                        document.getElementById("healthbar2").style.width = healthPercentage2 + "%";
                    }
                }

                document.getElementById("healthbar2").innerHTML = fighter2.currenthealth;
                document.getElementById("healthbar2").style.width = healthPercentage2 + "%";

                afficherAction(fighter1Name, "is attacking", randomDamage);

                if (fighter2.currenthealth <= 0) {
                    document.getElementById("healthbar2").innerHTML = "0";
                    document.getElementById("healthbar2").style.width = "0%";

                    alert(fighter2Name + " is dead !" + fighter1Name + " wins this battle !");
                    location.reload();
                }

                fighter2Play();

            } else if (event.target == document.getElementById("fighter02-hit")) {
                let randomDamage = Math.floor(Math.random() * (fighter2.maxDamage - fighter2.min + 1) + fighter2.min);

                if (fighter2.race == "Vampires") {
                    fighter2.currenthealth = fighter2.currenthealth + Math.floor(fighter1.currenthealth * 0.1);
                    fighter1.currenthealth = fighter1.currenthealth - Math.floor(fighter1.currenthealth * 0.1);
                    healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth);

                    if (fighter2.currenthealth > fighter2.maxHealth) {
                        fighter2.currenthealth = fighter2.maxHealth;
                        healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth);

                    };
                    document.getElementById("healthbar2").innerHTML = fighter2.currenthealth;
                    document.getElementById("healthbar2").style.width = healthPercentage2 + "%";
                }

                switch (fighter2.item) {
                    //sword bonus
                    case "Sword":
                        randomDamage += Math.ceil(randomDamage * 0.3);
                        break;

                        //bow bonus
                    case "Bow":
                        if (chance < 0.3) {
                            let i = 0;
                            while (i < 1) {

                                fighter1.currenthealth -= randomDamage;
                                healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth);

                                document.getElementById("healthbar1").innerHTML = fighter1.currenthealth;
                                document.getElementById("healthbar1").style.width = healthPercentage1 + "%";

                                i++;

                                randomDamage = Math.floor(Math.random() * (fighter2.maxDamage - fighter2.min + 1) + fighter2.min);
                            }
                        }
                        break;
                //boots bonus
                    case "Boots":
                        if (chance < 0.3) {
                            randomDamage = 0;

                        }
                        break;
                }
                if (fighter1.race == "Humans") {
                    randomDamage -= Math.ceil(randomDamage * 0.2);
                    fighter1.currenthealth -= randomDamage;
                    healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth)
                } else if (fighter1.race != "Elves") {
                    fighter1.currenthealth -= randomDamage;
                    healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth);
                }
                if (fighter1.race == "Elves") {
                    if (chance < 0.3) {
                        randomDamage = Math.ceil(randomDamage * 0.5);
                        fighter2.currenthealth -= randomDamage;
                        healthPercentage2 = fighter2.currenthealth * (100 / fighter2.maxHealth)
                        document.getElementById("healthbar2").innerHTML = fighter2.currenthealth;
                        document.getElementById("healthbar2").style.width = healthPercentage2 + "%";
                    } else {
                        fighter1.currenthealth -= randomDamage;
                        healthPercentage1 = fighter1.currenthealth * (100 / fighter1.maxHealth);
                        document.getElementById("healthbar1").innerHTML = fighter1.currenthealth;
                        document.getElementById("healthbar1").style.width = healthPercentage1 + "%";
                    }
                }
                document.getElementById("healthbar1").innerHTML = fighter1.currenthealth;
                document.getElementById("healthbar1").style.width = healthPercentage1 + "%";
                afficherAction(fighter2Name, "is attacking", randomDamage);
                if (fighter1.currenthealth <= 0) {
                    document.getElementById("healthbar1").innerHTML = "0";
                    document.getElementById("healthbar1").style.width = "0%";
                    alert(fighter1Name + " is dead !" + fighter2Name + " wins this battle !");
                    location.reload();
                }
                fighter1Play();
            }
        }

        function fighter2Play() {
            fighter1Hit.disabled = true;
            fighter1Heal.disabled = true;
            if(fighter1Yield){
                fighter1Yield.disabled = true;
            }
            fighter2Hit.disabled = false;
            fighter2Heal.disabled = false;
            if(fighter2Yield){
                fighter2Yield.disabled = false;
            }
        }

        function fighter1Play() {
            fighter2Hit.disabled = true;
            fighter2Heal.disabled = true;
            if(fighter2Yield){
                fighter2Yield.disabled = true;
            }
            fighter1Hit.disabled = false;
            fighter1Heal.disabled = false;
            if(fighter1Yield){
                fighter1Yield.disabled = false;
            }
        }

        function afficherAction(personnage, action, result) {
            if (action == "is healing") {
                movesLog.innerHTML += `${i}. action of the battle, ${personnage} ${action} ${result} life points.<br>`;
            } else if (action == "is attacking") {
                movesLog.innerHTML += `${i}. action of the battle, ${personnage} ${action} ${result} damage.<br>`;
                if (personnage == fighter1Name) {
                    personnage = fighter2Name;
                    if (result === 0) {
                        movesLog.innerHTML += `${personnage} dodged the attack of ${fighter1Name}.<br>`;
                    } else if (fighter1.race != "Vampires") {
                        movesLog.innerHTML += `${personnage} took -${result} damage.<br>`;
                    } else if (fighter1.race == "Vampires") {
                        movesLog.innerHTML += `${personnage} took -${result} damage + lost extra 10 life points.<br>`;
                    }

                } else if (personnage == fighter2Name) {
                    personnage = fighter1Name;
                    if (result === 0) {
                        movesLog.innerHTML += `${personnage} dodged the attack of ${fighter2Name}.<br>`;
                    } else if (fighter2.race != "Vampires") {
                        movesLog.innerHTML += `${personnage} took -${result} damage.<br>`;
                    } else if (fighter2.race == "Vampires") {
                        movesLog.innerHTML += `${personnage} took -${result} damage + lost extra 10 life points.<br>`;
                    }
                }
            }
            i++;
        }
        this.totalDamage = this.damage();
    }
