const canvas = document.getElementById("canvas");

const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

c.fillRect(0, 0, canvas.width, canvas.height);

const A = new Segment({
  position: {
    x: 100,
    y: 100,
  },
  label: 1,
});

const B = new Segment({
  position: {
    x: 280,
    y: 250,
  },
  label: 2,
});

const C = new Segment({
  position: {
    x: 140,
    y: 80,
  },
  label: 3,
});

const D = new Segment({
  position: {
    x: 200,
    y: 250,
  },
  label: 4,
});

const M = new Segment({
    position:{
        x:lerp(A.position.x,B.position.x,0.5),
        y:lerp(A.position.y,B.position.y,0.5)
    },
    label: 5
})

const N = new Segment({
    position:{
        x:lerp(C.position.x,D.position.x,0.7),
        y:lerp(C.position.y,D.position.y,0.7)
    },
    label: 6
})

function animate() {
  c.fillRect(0, 0, canvas.width, canvas.height);
  window.requestAnimationFrame(animate);
  c.lineWidth = 5;
  c.strokeStyle = "yellow";
  c.beginPath();
  c.moveTo(A.position.x, A.position.y);
  c.lineTo(B.position.x, B.position.y);
  c.moveTo(C.position.x, C.position.y);
  c.lineTo(D.position.x, D.position.y);
  c.stroke();
  A.draw();
  B.draw();
  C.draw();
  D.draw();
  M.draw();
  N.draw();
  const I = getIntersection(A,B,C,D)
  //console.log(I)
  drawLabel(I,'I')
}

animate();
