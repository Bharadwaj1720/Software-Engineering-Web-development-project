
function random(p1, p2) {
    return p1 + (Math.floor(Math.random()*10000) % (p2-p1));   // The function returns a random number between p1 and p2
}

function random_name(length)
{
    const vowels = "aeiou".repeat(40).concat("óòöœōøôőàáæāăąäåėęěĕəèéêëēįīïîíìüûúùųűůū");
    const consonants = "bcdfghjklmnpqrstvwxyz".repeat(10).concat("ŕřţþýß§šşđğģķłľžźżćçčñňńņ");
    var start = random(0,100);
    var name = "";
    for(var i = 0;i < length; i++)
    {
        const s = (i+start)%2==0?vowels.charAt(random(0,vowels.length)):consonants.charAt(random(0,consonants.length));
        name = name.concat(s);
    }
    name = name.charAt(0).toLocaleUpperCase().concat(name.substring(1))
    return name
}

function random_roll_number()
{
    const branches = ["CS","ME","EE","CH","CE","MA","PH","CY","HS"]
    const study = ["B","M","D"]
    const years = ["18","19","20","21","22"]
    var num = "".concat(random(0,10)).concat(random(0,10)).concat(random(0,10))
    return branches[random(0,9)].concat(years[random(0,5)]).concat(study[random(0,3)]).concat(num)
}

module.exports = {
    random,random_name,random_roll_number
};
