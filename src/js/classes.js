class Segment {
  constructor({ position, label }) {
    this.position = position;
    this.label = label;
  }

  draw() {
    c.beginPath();
    c.fillStyle ="black";
    c.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.fillStyle = "white";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.font = "bold 14px Arial";
    c.fillText(this.label, this.position.x, this.position.y);
  }
}
