// console.log("connected");
var white = document.querySelector(".white-set");
var black = document.querySelector(".black-set");

white.addEventListener('click', function(extraInfo){
    // console.log(Array.from(extraInfo.target.classList).includes('t'));
    if(Array.from(extraInfo.target.classList).includes('t')){
        const audio = document.querySelector(`audio[data-key = "${extraInfo.target.id}"]`);
        if(!audio){return;}
        audio.currentTime = 0;
        audio.play();

        document.getElementById(extraInfo.target.id).classList.remove('t-add');
        void document.getElementById(extraInfo.target.id).offsetWidth;
        document.getElementById(extraInfo.target.id).classList.add("t-add");
    }
});
black.addEventListener('click', function(extraInfo){
    if(Array.from(extraInfo.target.classList).includes('r')){
        const audio = document.querySelector(`audio[data-key = "${extraInfo.target.id}"]`);
        if(!audio){return;}
        audio.currentTime = 0;
        audio.play();
        // extraInfo.target.classList.add('r-add');
        // -> removing the class
        document.getElementById(extraInfo.target.id).classList.remove('r-add');
        // -> triggering reflow /* The actual magic */
        // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        // Oops! This won't work in strict mode. Thanks Felis Phasma!
        // element.offsetWidth = element.offsetWidth;
        // Do this instead:
        void document.getElementById(extraInfo.target.id).offsetWidth;
        // -> and re-adding the class
        document.getElementById(extraInfo.target.id).classList.add("r-add");
    }
});
black.addEventListener('click', function(extraInfo){
    if(Array.from(extraInfo.target.classList).includes('s')){
        const audio = document.querySelector(`audio[data-key = "${extraInfo.target.id}"]`);
        if(!audio){return;}
        audio.currentTime = 0;
        audio.play();
        document.getElementById(extraInfo.target.id).classList.remove('s-add');
        void document.getElementById(extraInfo.target.id).offsetWidth;
        document.getElementById(extraInfo.target.id).classList.add("s-add");
    }
});
window.addEventListener('mouseover', function(extraInfo){
    extraInfo.target.classList.remove('t-add');
    extraInfo.target.classList.remove('r-add');
    extraInfo.target.classList.remove('s-add');
});

window.addEventListener('keydown', function(extraInfo){
    if(extraInfo.keyCode === 192){
        // document.querySelector('.r1').classList.add('r-add');
        document.querySelector('.r1').classList.remove('r-add');
        void document.querySelector('.r1').offsetWidth;
        document.querySelector('.r1').classList.add("r-add");
    }
    if(extraInfo.keyCode === 49){
        document.querySelector('.r2').classList.remove('s-add');
        void document.querySelector('.r2').offsetWidth;
        document.querySelector('.r2').classList.add("s-add");
    }
    if(extraInfo.keyCode === 50){
        document.querySelector('.r3').classList.remove('r-add');
        void document.querySelector('.r3').offsetWidth;
        document.querySelector('.r3').classList.add("r-add");
    }
    if(extraInfo.keyCode === 51){
        document.querySelector('.r4').classList.remove('s-add');
        void document.querySelector('.r4').offsetWidth;
        document.querySelector('.r4').classList.add("s-add");
    }
    if(extraInfo.keyCode === 52){
        document.querySelector('.r5').classList.remove('r-add');
        void document.querySelector('.r5').offsetWidth;
        document.querySelector('.r5').classList.add("r-add");
    }
    if(extraInfo.keyCode === 53){
        document.querySelector('.r6').classList.remove('s-add');
        void document.querySelector('.r6').offsetWidth;
        document.querySelector('.r6').classList.add("s-add");
    }
    if(extraInfo.keyCode === 54){
        document.querySelector('.r7').classList.remove('r-add');
        void document.querySelector('.r7').offsetWidth;
        document.querySelector('.r7').classList.add("r-add");
    }
    if(extraInfo.keyCode === 55){
        document.querySelector('.r8').classList.remove('s-add');
        void document.querySelector('.r8').offsetWidth;
        document.querySelector('.r8').classList.add("s-add");
    }
    if(extraInfo.keyCode === 56){
        document.querySelector('.r9').classList.remove('r-add');
        void document.querySelector('.r9').offsetWidth;
        document.querySelector('.r9').classList.add("r-add");
    }
    if(extraInfo.keyCode === 57){
        document.querySelector('.r10').classList.remove('s-add');
        void document.querySelector('.r10').offsetWidth;
        document.querySelector('.r10').classList.add("s-add");
    }
    if(extraInfo.keyCode === 48){
        document.querySelector('.r11').classList.remove('r-add');
        void document.querySelector('.r11').offsetWidth;
        document.querySelector('.r11').classList.add("r-add");
    }
    if(extraInfo.keyCode === 189){
        document.querySelector('.r12').classList.remove('s-add');
        void document.querySelector('.r12').offsetWidth;
        document.querySelector('.r12').classList.add("s-add");
    }
    if(extraInfo.keyCode === 187){
        document.querySelector('.r13').classList.remove('r-add');
        void document.querySelector('.r13').offsetWidth;
        document.querySelector('.r13').classList.add("r-add");
    }
    if(extraInfo.keyCode === 81){
        document.querySelector('.t1').classList.remove('t-add');
        void document.querySelector('.t1').offsetWidth;
        document.querySelector('.t1').classList.add("t-add");
    }
    if(extraInfo.keyCode === 87){
        document.querySelector('.t2').classList.remove('t-add');
        void document.querySelector('.t2').offsetWidth;
        document.querySelector('.t2').classList.add("t-add");
    }
    if(extraInfo.keyCode === 69){
        document.querySelector('.t3').classList.remove('t-add');
        void document.querySelector('.t3').offsetWidth;
        document.querySelector('.t3').classList.add("t-add");
    }
    if(extraInfo.keyCode === 82){
        document.querySelector('.t4').classList.remove('t-add');
        void document.querySelector('.t4').offsetWidth;
        document.querySelector('.t4').classList.add("t-add");
    }
    if(extraInfo.keyCode === 84){
        document.querySelector('.t5').classList.remove('t-add');
        void document.querySelector('.t5').offsetWidth;
        document.querySelector('.t5').classList.add("t-add");
    }
    if(extraInfo.keyCode === 89){
        document.querySelector('.t6').classList.remove('t-add');
        void document.querySelector('.t6').offsetWidth;
        document.querySelector('.t6').classList.add("t-add");
    }
    if(extraInfo.keyCode === 85){
        document.querySelector('.t7').classList.remove('t-add');
        void document.querySelector('.t7').offsetWidth;
        document.querySelector('.t7').classList.add("t-add");
    }
    if(extraInfo.keyCode === 73){
        document.querySelector('.t8').classList.remove('t-add');
        void document.querySelector('.t8').offsetWidth;
        document.querySelector('.t8').classList.add("t-add");
    }
    if(extraInfo.keyCode === 79){
        document.querySelector('.t9').classList.remove('t-add');
        void document.querySelector('.t9').offsetWidth;
        document.querySelector('.t9').classList.add("t-add");
    }
    if(extraInfo.keyCode === 80){
        document.querySelector('.t10').classList.remove('t-add');
        void document.querySelector('.t10').offsetWidth;
        document.querySelector('.t10').classList.add("t-add");
    }
    if(extraInfo.keyCode === 65){
        document.querySelector('.t11').classList.remove('t-add');
        void document.querySelector('.t11').offsetWidth;
        document.querySelector('.t11').classList.add("t-add");
    }
    if(extraInfo.keyCode === 83){
        document.querySelector('.t12').classList.remove('t-add');
        void document.querySelector('.t12').offsetWidth;
        document.querySelector('.t12').classList.add("t-add");
    }
    if(extraInfo.keyCode === 68){
        document.querySelector('.t13').classList.remove('t-add');
        void document.querySelector('.t13').offsetWidth;
        document.querySelector('.t13').classList.add("t-add");
    }
    if(extraInfo.keyCode === 70){
        document.querySelector('.t14').classList.remove('t-add');
        void document.querySelector('.t14').offsetWidth;
        document.querySelector('.t14').classList.add("t-add");
    }
    if(extraInfo.keyCode === 71){
        document.querySelector('.t15').classList.remove('t-add');
        void document.querySelector('.t15').offsetWidth;
        document.querySelector('.t15').classList.add("t-add");
    }
    if(extraInfo.keyCode === 72){
        document.querySelector('.t16').classList.remove('t-add');
        void document.querySelector('.t16').offsetWidth;
        document.querySelector('.t16').classList.add("t-add");
    }
    if(extraInfo.keyCode === 74){
        document.querySelector('.t17').classList.remove('t-add');
        void document.querySelector('.t17').offsetWidth;
        document.querySelector('.t17').classList.add("t-add");
    }
    if(extraInfo.keyCode === 75){
        document.querySelector('.t18').classList.remove('t-add');
        void document.querySelector('.t18').offsetWidth;
        document.querySelector('.t18').classList.add("t-add");
    }
    if(extraInfo.keyCode === 76){
        document.querySelector('.t19').classList.remove('t-add');
        void document.querySelector('.t19').offsetWidth;
        document.querySelector('.t19').classList.add("t-add");
    }
    if(extraInfo.keyCode === 77){
        document.querySelector('.t20').classList.remove('t-add');
        void document.querySelector('.t20').offsetWidth;
        document.querySelector('.t20').classList.add("t-add");
    }
    if(extraInfo.keyCode === 78){
        document.querySelector('.t21').classList.remove('t-add');
        void document.querySelector('.t21').offsetWidth;
        document.querySelector('.t21').classList.add("t-add");
    }
    if(extraInfo.keyCode === 66){
        document.querySelector('.t22').classList.remove('t-add');
        void document.querySelector('.t22').offsetWidth;
        document.querySelector('.t22').classList.add("t-add");
    }
    if(extraInfo.keyCode === 86){
        document.querySelector('.t23').classList.remove('t-add');
        void document.querySelector('.t23').offsetWidth;
        document.querySelector('.t23').classList.add("t-add");
    }
    if(extraInfo.keyCode === 67){
        document.querySelector('.t24').classList.remove('t-add');
        void document.querySelector('.t24').offsetWidth;
        document.querySelector('.t24').classList.add("t-add");
    }
    if(extraInfo.keyCode === 88){
        document.querySelector('.t25').classList.remove('t-add');
        void document.querySelector('.t25').offsetWidth;
        document.querySelector('.t25').classList.add("t-add");
    }
    if(extraInfo.keyCode === 90){
        document.querySelector('.t26').classList.remove('t-add');
        void document.querySelector('.t26').offsetWidth;
        document.querySelector('.t26').classList.add("t-add");
    }

    const audio = document.querySelector(`audio[data-key = "${extraInfo.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
});