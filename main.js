const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-shot');
const $logs = document.querySelector('#logs');
const generateLog=(firstPerson, secondPerson, dmg)=>{
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ,[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name}  пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.${firstPerson.damageHP},[${firstPerson.defaultHP-firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length) - 1]
}
const character = {
    name: 'Pikachu',
    type: 'electric',
    weakness: ['fighting','water','some'],
    resistance: ['steel'],
    defaultHP:100,
    damageHP:100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP
};
const enemy = {
    name: 'Charmander',
    type: 'fighting',
    weakness: ['steel'],
    resistance: ['fighting','water','some'],
    defaultHP:100,
    damageHP:100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP
};
function changeHP(count){

    const renderHP = () => {
        const renderHPLife = () => {
            this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
        }
        const renderProgressbarHP = () => {
            this.elProgressbar.style.width = this.damageHP + '%';
        }
        renderHPLife();
        renderProgressbarHP();
        if(this.name === character.name){
            const { weakness, name, type = 'type isn\'t defined', defaultHP, damageHP} = character;
            console.log(name, type, weakness, damageHP, defaultHP);
        }
        else if(this.name === enemy.name){
            const { weakness:wEn, name:nEn, type:tEn = 'type isn\'t defined', defaultHP:dHP, damageHP:daHP} = enemy;
            console.log(nEn, tEn, wEn, daHP, dHP);
        }
        else{
            console.log('Кого ты  ударил?');
        }
    }

    if(this.damageHP<count){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
        $btn1.disabled = true;
    } else {
        this.damageHP -= count;
    }
    
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
    console.log(log);

    const rend = renderHP.bind(this);
    rend();
}
function f(){
    let click= 0;
    let num = -1;
    return function(num) {
        click++;
        
    
        if(click <= num - 1) {
            console.log(" Кол-во кликов ", click);
            console.log("Кликов осталось ", (num - click));
        }
        else{
            $btn.disabled = true;
            $btn1.disabled = true;
            console.log("Клики закончились ", click);
           
        }
    }
    
}
function init() {
    console.log('Start Game!');
    num1 = null;
    num2 = null;
}
function random(num){
    return Math.ceil(Math.random()*num);
}

const count1 = f();
const count2 = f();
$btn.addEventListener('click', function() {
    if(num1 === null){
        num1 = prompt("Введите максимальное число обычных ударов", "2")
    }
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    count1(num1);
});
$btn1.addEventListener('click', function() {
    if(num2 === null){
        num2 = prompt("Введите максимальное число ультимативных ударов", "1")
    }
    console.log('Ulta');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    count2(num2);
});

init();
