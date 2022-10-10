function lerp(A,B,t){
    return A + (B - A) * t;
}

/**
 * 
 * @param {A.position.x,A.position.y} A //wall(x1=A.p.x,y1=A.p.y)
 * @param {B.position.x,B.position.y} B //wall(x2=B.p.x,y2=B.p.y)
 * @param {C.position.x,C.position.y} C //ray(x3=C.p.x,y3=C.p.y)
 * @param {D.position.x,A.position.y} D //ray(x4=D.p.x,y4=D.p.y)
 */

function getIntersection(A,B,C,D){
    //den = (x1-x2)*(y3-y4)-(y1-y2)*(x3-x4)
    //we first get the denominator which shdnt be ZERO(if zero it means lines dnt intersect)
    const den = (A.position.x - B.position.x) * (C.position.y - D.position.y) - (A.position.y -B.position.y) * (C.position.x - D.position.x);
    if(den == 0){
        return "No"
    }
    //t =((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/ den
    //t shd be btw 0 & 1
    const t = ((A.position.x -C.position.x) * (C.position.y - D.position.y) - (A.position.y - C.position.y) * (C.position.x-D.position.x))/ den
    //u = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den
    //u shd be greater than 0
    const u = -((A.position.x - B.position.x) * (A.position.y - C.position.y) - (A.position.y -B.position.y) * (A.position.x -C.position.x)) /den
    //console.log(den)
    //console.log(t)
    //console.log(u)
    if(t >= 0 && t <= 1){
        return {
            x: lerp(A.position.x, B.position.x, t),
            y: lerp(A.position.y, B.position.y, t),
        };
    }
    /*if(t >= 0 && t <= 1){
        use u for c and d points
        return {
            x: lerp(C.position.x, D.position.x, u),
            y: lerp(C.position.y, D.position.y, u),
        };
    }*/
    
}

function drawLabel(point, label) {
    c.beginPath();
    c.fillStyle ="black";
    c.arc(point.x, point.y, 10, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.fillStyle = "white";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.font = "bold 14px Arial";
    c.fillText(label, point.x, point.y);
  }