function setTitle(titleSelect){
    var val;
    switch(titleSelect.options[titleSelect.selectedIndex].value) {
        case 'strong-brute': val = "STRONG | BRUTE"; break;
        case 'tough-commando': val = "TOUGH | COMMANDO"; break;
        case 'smart-mastermind': val = "SMART | MASTERMIND"; break;
        case 'wise-sleuth': val = "WISE | SLEUTH"; break;
    }
    document.getElementById('class-title').value = val;
    console.log("I am being reached");
}
