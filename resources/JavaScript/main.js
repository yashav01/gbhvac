
window.onmouseover = e => {
    let btnID = e.target.id
    if (btnID === 'btnServices' || btnID === 'btnAbout' || btnID === 'btnContact') {
        e.target.style.boxShadow = '0 10px 15px blue';
        e.target.style.transition = 'all 1s';
    };
};

window.onmouseout = e => {
    let btnID = e.target.id
    if (btnID === 'btnServices' || btnID === 'btnAbout' || btnID === 'btnContact') {
        e.target.style.boxShadow = '';
        e.target.style.transition = 'all 1s';
    };
};

window.onmousedown = e => {
    let btnID = e.target.id
    if (btnID === 'btnServices' || btnID === 'btnAbout' || btnID === 'btnContact') {
        e.target.style.boxShadow = '0 10px 15px red';
        e.target.style.transition = 'all 0.1s';
    };
};

window.onmouseup = e => {
    let btnID = e.target.id
    if (btnID === 'btnServices' || btnID === 'btnAbout' || btnID === 'btnContact') {
        e.target.style.boxShadow = '0 10px 15px blue';
        e.target.style.transition = 'all 0.75s';
    };
};

