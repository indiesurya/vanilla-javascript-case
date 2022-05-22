const p3 = document.getElementsByClassName('p3')[0];

function ubahWarna(){
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.addEventListener('click', function(){
    p2.style.backgroundColor = 'lightgreen';
});

const p4 = document.querySelector('section#b p');
const ul= document.querySelector('section#b ul');
p4.addEventListener('click', function(){
    const li = document.createElement('li');
    const textBaru = document.createTextNode('Teks Baru');
    li.appendChild(textBaru);
    ul.appendChild(li);
    li.style.backgroundColor = 'lightblue';
});


