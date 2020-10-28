const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-shot');
const $logs = document.querySelector('#logs');
const character = {
    name: 'Pikachu',
    type: 'electric',
    weakness: ['fighting','water','some'],
    resistance: ['steel'],
    defaultHP:100,
    damageHP:100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP: function(count){
    
        if(this.damageHP<count){
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой');
            $btn.disabled = true;
        } else {
            this.damageHP -= count;
        }
        
        const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        
        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p, $logs.children[0]);
        console.log(log);
    
        this.renderHP();
    },
    renderHP: function(){
        this.renderHPLife();
        this.renderProgressbarHP();
        if(this.name === character.name){
            const { weakness, name, type = 'type isn\'t defined', defaultHP, damageHP} = character;
            console.log(name, type, weakness, damageHP, defaultHP);
        }
        else if(this.name === enemy.name){
            const { weakness:wEn, name:nEn, type:tEn = 'type isn\'t defined', defaultHP:dHP, damageHP:daHP} = enemy;
            console.log(nEn, tEn, wEn, daHP, dHP);
        }
        else{
            console.log('Кого ты вообще ударил?');
        }
    },
    renderHPLife: function (){
        this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    },
    renderProgressbarHP: function (){
        this.elProgressbar.style.width = this.damageHP + '%';
    }
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
    changeHP: function(count){
        
    
        if(this.damageHP<count){
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой');
            $btn.disabled = true;
        } else {
            this.damageHP -= count;
        }
        
        const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        
        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p, $logs.children[0]);
        console.log(log);
    
        this.renderHP();
    },
    
    renderHP(){
        this.renderHPLife();
        this.renderProgressbarHP();
        if(this.name === character.name){
            const { weakness, name, type = 'type isn\'t defined', defaultHP, damageHP} = character;
            console.log(name, type, weakness, damageHP, defaultHP);
        }
        else if(this.name === enemy.name){
            const { weakness:wEn, name:nEn, type:tEn = 'type isn\'t defined', defaultHP:dHP, damageHP:daHP} = enemy;
            console.log(nEn, tEn, wEn, daHP, dHP);
        }
        else{
            console.log('Кого ты ударил?');
        }
    },
    renderHPLife: function (){
        this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    },
    renderProgressbarHP: function (){
        this.elProgressbar.style.width = this.damageHP + '%';
    }
    
};
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
function f(){
    let click= 0;
    let num = -1;
    return function() {
        click++;
        if(num == -1){
            num = prompt("Введите  число ходов");
        }
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

const count1 = f();
const count2 = f();

$btn.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    count1();
});
$btn1.addEventListener('click', function() {
    console.log('Ulta');
    character.changeHP(random(500));
    enemy.changeHP(random(500));
    count2();
});
const init =()=> {
    console.log('Start Game!');
}
const random= (num)=>{
    return Math.ceil(Math.random()*num);
}

init();