$ = (queryString) => document.querySelector(queryString);

const shiftHue = (hue) => (hue + 1) % 360;

let hue = 0;

const loop = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue} , 100%, 50%)`;
    $('a-sphere').setAttribute("color", color);
    requestAnimationFrame(loop);
};

requestAnimationFrame(loop);