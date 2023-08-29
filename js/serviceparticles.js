jQuery(document).ready(function($) {
    $(".particle-class").each(function() {
        particlesJS($(this).attr('id'), {
            particles: {
                number: { value: 400, density: { enable: true, value_area: 2000 } },
                color: { value: "#e38724" },
                shape: { type: "edge", stroke: { width: 1, color: "#000000" }, polygon: { nb_sides: 8 }, image: { src: "img/github.svg", width: 60, height: 60 } },
                opacity: { value: 0.01, random: false, anim: { enable: false, speed: 1, opacity_min: 0.01, sync: false } },
                size: { value: 2, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 150, color: "#e38724", opacity: 0.578081357127969, width: 0.8 },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "bounce", // Change from "out" to "bounce"
                    bounce: true, // Add this line
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: false, mode: "push" }, resize: true },
                modes: {
                    grab: { distance: 100, line_linked: { opacity: 0.5 } },
                    bubble: { distance: 389.7970619046457, size: 73.08694910712106, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 349.1932012895784, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                },
            },
            retina_detect: false,
            // ... other settings ...
        });
    });

    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    stats.domElement.style.display = "none";
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    function myFunction(x) {
        x.classList.toggle("bi-x-lg");
    }
});
