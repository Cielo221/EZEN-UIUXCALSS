const path = anime.path(".svg.path");

anime({
  target: ".circle",
  trnaslateX: path("x"),
  trnaslateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 10000,
  loop: true,
});
