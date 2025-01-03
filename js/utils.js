import parseColor from 'parse-color';

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16) / 255)

const rgbaToArray = string => string.replace(/[^\d,]/g, '').split(',').map((x, i) => i < 3 ? parseInt(x) / 255 : parseInt(x))

const normX = (x) =>{
    return (x / window.innerWidth) * 2 - 1
}

function easeInExpo(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    }

function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

const lerpRgba =  (col1, col2, factor = 0.5) => col1.map( (x, i) => x + factor*(col2[i]-x) )

const normY = (y) =>{
    return -(y/ window.innerHeight) * 2 + 1
}

const normCoord = (x, y) => {
    nx = normX(x)
    ny = normY(y)
    return { x: nx, y: ny}
}

const getDistanceFromTop = (el) => {
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop + rect.height / 2 - window.innerHeight / 2;
};

const getCoord = (el) => {
    if(!el) return false
    const scrollDom = document.documentElement;
    // let scrollDom = document.querySelector('.scrolldom')
    let rect = el.getBoundingClientRect()
    let keyframe = getDistanceFromTop(el)
    keyframe = keyframe < 0 ? 0 : keyframe
    let attributes = {};
    for (let attr of el.attributes) {
        if (attr.name !== 'class' && attr.name !== 'id') {
            attributes[attr.name] = attr.value;
        }
    }
    Object.keys(attributes).forEach(key => {
        if (attributes[key].match(/^#[0-9A-F]{6}$/i)) {
            attributes[key] = parseColor(attributes[key]).hex;
        } else if (!isNaN(attributes[key])) {
            attributes[key] = parseFloat(attributes[key]);
        }
    })

    let scale = el.getAttribute('scale') ? el.getAttribute('scale') : 1
   attributes.easing = el.getAttribute('easing') ? el.getAttribute('easing') : 'easeInOutQuart'
    attributes.scale = scale
    return {
        x: normX(rect.x + rect.width / 2) - scrollDom.scrollLeft,
        y: el.getAttribute('yoffset') ? el.getAttribute('yoffset') === 'bottom' ? normY((rect.top + scrollDom.scrollTop + rect.height/2) - (scrollDom.scrollHeight - window.innerHeight) ) : normY(rect.top + rect.height/2 - keyframe) : 0,
        size: rect.width > rect.height ? rect.height * scale: rect.width * scale,
        h: rect.height,
        w: rect.width,
        keyframe: keyframe,
        ...attributes
        //keyframed when the element y center is half way down the screen
    }
}

const mapRange = (value, low1, high1, low2, high2) => {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const mapClamp = (value, low1, high1, low2, high2) =>  clamp(mapRange(value, low1, high1, low2, high2), low2, high2)

const decodeHtml = str => 
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) => 
    String.fromCharCode(charCode));

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


export {getRandomNumber, mapRange, hexToRgb, lerpRgba, rgbaToArray, normCoord,normX, normY, getCoord, mapClamp, easeInExpo, easeOutExpo, decodeHtml, clamp}