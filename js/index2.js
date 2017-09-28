/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": { "number": { "value": 400,/*puntos*/
      "density": {  "enable": true, "value_area": 1200/**/}},
    "color": { "value": "random"},
    "shape": { "type": "circle",
      "stroke": { "width": 0.3,/* 0 ancho de los puntos figura luz*/ "color": "random" },
      "polygon": {"nb_sides": 30 },
      "image": {"src": "img/github.svg", "width": 200, "height": 200 }},
    "opacity": { "value": 1,/*0.5 para la linuminocidad de los puntos*/ "random": true,/*false*/
      "anim": {"enable": true,/*false*/  "speed": 1, "opacity_min": 0.5,/*0.1*/ "sync": false }},
    "size": {"value": 2.5, "random": true,
      "anim": {"enable": false,/*true para que los puntos se hagan grandes y pequeños*/ "speed": 40, "size_min": 0.8,/*0.1*/"sync": false}},
    "line_linked": { "enable": false, "distance": 800, "color": "#FF0000", "opacity": 1, "width": 1 /*1s*/ },
    "move": { "enable": true, "speed": 6,"direction": "none", "random": false, "straight": false, "out_mode": "out",
      "bounce": false, "attract": {     "enable": false, "rotateX": 600, "rotateY": 1200}}},
  "interactivity": { "detect_on": "canvas",
    "events": { "onhover": { "enable": true,/*false para quitar la luz del mouse*/ "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }, "resize": true},
    "modes": {   "grab": { "distance": 400,
        "line_linked": {"opacity": 0.1 } },
      "bubble": { "distance": 400, "size": 400,"duration": 2,"opacity": 1, "speed": 3 },
      "repulse": {"distance": 200, "duration": 0.4 },
      "push": { "particles_nb": 15/* 6para el numero de particuas a la hora de dar click*/ },
      "remove": {"particles_nb": 2 /*2*/ }}},
  "retina_detect": false});


/* ---- stats.js config ---- */

