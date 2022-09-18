function setTitle(titleSelect){
    var val;
    setDescription(titleSelect);
    switch(titleSelect.options[titleSelect.selectedIndex].value) {
        case 'strong-brute': val = "STRONG | BRUTE"; break;
        case 'tough-commando': val = "TOUGH | COMMANDO"; break;
        case 'smart-mastermind': val = "SMART | MASTERMIND"; break;
        case 'wise-sleuth': val = "WISE | SLEUTH"; break;
    }
    document.getElementById('class-title').innerHTML = val;
    console.log("I am being reached");
}

function setDescription(description){
    var val;
    switch(description.options[description.selectedIndex].value) {
        case 'strong-brute': val = "You read a lot of comics as a kid, and it shows in your approach to a fight. With fists like hammers and the ability to turn nearlyanything into a deadly weapon, you arethe definition of dangerous. “If brute forceain’t workin, yer not using enough!”The brute charges into melee combat, hitting hard and destroying everythingin their path. They hit harder using improvised weapons but fighting unarmedgives them more opportunities to land a devastating blow by using the off-hand bonus attack option."; 
            break;
        case 'tough-commando': val = 'You are the consummate warrior; dangerous with any weapon and trained to survive every circumstance. You are ready for whatever the enemy has to throw at you. The only thing you might be unprepared for is peace. “I have come here to chewbubblegum and kick ass. And I’m all out of bubblegum.” The Commando is an all-around combat hero that offers a great blend of defense and offense. Unlike the other tough heroes, they can’t protect their allies, but they are very versatile and can use nearly any weapon. You might consider specializing in Dexterity if you want to lean into offensive strategies.'; 
            break;
        case 'smart-mastermind': val = 'You are always at least one step ahead of your enemies, plotting, scheming, and planning your next masterstroke. Your allies  also benefit from your genius as well. If only you could find someone to truly challenge you. “All according to plan…” Mastermind’s plans typically involve plans that were in theory enacted in the past but are only revealed in the present moment. The mastermind is very powerful outside of combat with the ability to short cut very difficult challenges. In combat however, they are rather weak and vulnerable.'; 
            break;
        case 'wise-sleuth': val = 'Evil never sleeps, so neither do you. Your keen perception pierces the veils of thedevious. Your own inner darkness givesinsight into the worst villains humanity has to offer. It’s a dirty job, but someone’s gottado it. “Looks like we’ve got another mysteryon our hands.”The Sleuth has the skills necessary to solvemysteries and avoid dangers. They are themost defensive of the Wise heroes withmany abilities to help them stay alive. At higher levels they gain enough offense to make them dangerous to unwary enemies.'; 
            break;
    }
    document.getElementById('class-descrption').innerHTML = val;
    console.log("I am being reached");
}
