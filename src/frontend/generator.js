
function random(p1, p2) {
    if(p1===p2)return p1;
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
function random_personal_name()
{
    return random_name(random(5,10)).concat(" ").concat(random_name(random(5,10)));
}
function random_roll_number()
{
    const branches = ["CS","ME","EE","CH","CE","MA","PH","CY","HS"]
    const study = ["B","M","D"]
    const years = ["18","19","20","21","22"]
    var num = "".concat(random(0,10)).concat(random(0,10)).concat(random(0,10))
    return branches[random(0,9)].concat(years[random(0,5)]).concat(study[random(0,3)]).concat(num)
}

function random_book_name()
{
    const starts = ["Beginners guide to","The Art of","Modern theory of","Principles of","Introduction to","Design and Analysis of"]
    const endings = ["- a Complete Guide", "for Dummies","- a Comprehensive Approach","- a Modern Approach"," Simplified"]
    var name = random_name(random(4,12));
    if(random(0,10)%2==0)name = name.concat(" ").concat(endings[random(0,endings.length)]);
    else name = starts[random(0,starts.length)].concat(" ").concat(name);
    return name;
}

function random_ISBN_number()
{
    var number = "";
    var sum=0;
    for(var i=0;i<9;i++)
    {
        var num = random(0,10);
        number=number.concat(num);
        sum+=(i+1)*num;
    }
    sum = (11-sum%11)%11;
    if(sum===10)
    {
        const prev_num = number.charAt(number.length-1)-'0';
        number = number.substring(0,9);
        if(prev_num===9)
        {
            number.concat("8");
            sum = 0;
        }
        else
        {
            let s = prev_num+1
            number.concat(s);
            sum = 9;
        }
    }
    number=number.concat(sum);
    return number;
}

module.exports = 
{
    random,
    random_name,
    random_roll_number, 
    random_personal_name, 
    random_book_name, 
    random_ISBN_number
};
