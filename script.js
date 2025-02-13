let change_color = document.querySelector('.Change_Color');
let section = document.querySelector('section');
let color_val = document.querySelector('.Color_Val');
let view_button = document.querySelectorAll('li');
let colors = ['red', 'Green', '#F15025', 'rgba(133,122,200,1)'];
let HexColor = [];

change_color.addEventListener('click', () => {
    let index = Math.floor(Math.random() * colors.length);
    section.style.backgroundColor = colors[index];
    color_val.innerHTML = colors[index];
});

for(let i=0 ; i<view_button.length; i++){
    view_button[i].addEventListener('click',(e)=>{
        
        if(e.target.getAttribute('value') == 'Hex'){
            //remove & add active class
            view_button[0].classList.remove('active');
            e.target.classList.add('active');

            //convert color to hex
            colors.filter(color =>{
                const blueRGB = color
                let chromaColor = chroma(blueRGB);
                HexColor.push(chromaColor.hex());
           

            section.style.backgroundColor = '#F1f5f8';
            color_val.innerHTML = '#F1f5f8';

            change_color.addEventListener('click', () => {
                let index = Math.floor(Math.random() * HexColor.length);
                section.style.backgroundColor = HexColor[index];
                color_val.innerHTML = HexColor[index];
            });

            })

        }else{
            //remove & add active class
            view_button[1].classList.remove('active');
            e.target.classList.add('active');

            section.style.backgroundColor = '#F1f5f8';
            color_val.innerHTML = '#F1f5f8';

            change_color.addEventListener('click', () => {
                let index = Math.floor(Math.random() * colors.length);
                section.style.backgroundColor = colors[index];
                color_val.innerHTML = colors[index];
            });
        }
    })
}


