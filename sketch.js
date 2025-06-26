let mic;
let v = 0;
let currentMask = 1;
let p5Instance;

function setup() {
  // Crea il canvas dentro il container specifico
  let canvas = createCanvas(600, 600);
  canvas.parent('sketchContainer');
  
  mic = new p5.AudioIn();
  mic.start();
  pixelDensity(2);
  angleMode(DEGREES);
  
  // Crea il menu a tendina
  let faceSelect = createSelect();
  faceSelect.parent('faceSelectContainer');
  faceSelect.option('Maschera 1', 1);
  faceSelect.option('Maschera 2', 2);
  faceSelect.option('Maschera 3', 3);
  faceSelect.changed(() => {
    currentMask = int(faceSelect.value());
  });
  
  // Crea il bottone salva
  let saveButton = createButton('Salva Immagine');
  saveButton.parent('saveButtonContainer');
  saveButton.mousePressed(saveImage);
}

function draw() {
  // Disegna la maschera selezionata
  switch(currentMask) {
    case 1:
      drawMask1();
      break;
    case 2:
      drawMask2();
      break;
    case 3:
      drawMask3();
      break;
  }
}

function drawMask1() {
  vol();
  background(255);
  //ellipse(width / 2, height / 2, 400, 400);
  translate(width / 2, height / 2);
  strokeWeight(1)

  let eyeDim = map(v, 0, 1, 50, 85);
  let pupilleDim = map(v, 0, 1, 40, 20);
  let noseDim = map(v, 0, 1, 10, 30);

  ellipse(-100, -80, 1.2 * eyeDim, 1.2 * eyeDim);
  ellipse(100, -80, 1.2 * eyeDim, 1.2 * eyeDim);
  push();
  ellipseMode(CENTER);
  fill(0);
  ellipse(100, -80, pupilleDim, pupilleDim);
  ellipse(-100, -80, pupilleDim, pupilleDim);
  pop();

  push();
  fill(0);
  rotate(10 * v);
  ellipse(-30, 0, noseDim, noseDim / 1.5);
  pop();
  push();
  fill(0);
  rotate(-10 * v);
  ellipse(30, 0, noseDim, noseDim / 1.5);
  pop();
  push();
  noFill();
  arc(-30 - v * 5, (-25 * v) / 2, 45, 40, 180, 300);
  arc(30 + v * 5, (-25 * v) / 2, 45, 40, 240, 0);
  line(-20 - v * 5, -20 - v * 10, -20, -120);
  line(20 + v * 5, -20 - v * 10, 20, -120);
  let a = (-400, 400);
  pop();

  push();
  fill(0);
  ellipseMode(CORNER);
  ellipse(-30 - v * 30, 30, 20 + v * 150, 5 + v * 150);
  pop();
  
  // Orecchio sinistro
  arc(-200, -45, 100, 120, 72, 270);
  // Orecchio destro
  arc(200, -45, 100, 120, -90, 108);
 

  push();
  fill(0);
  noStroke();
  arc(0, -105, 480, 250, 180, 0);
  pop();

  // Nuovi triangoli rettangoli capovolti ai lati dell'arco
  push();
  fill(0);
  noStroke();
  rotate(180)
  // Triangolo sinistro (angolo retto in basso a sinistra)
  triangle(-180, -20,  // Punto superiore interno (vicino all'ellisse del viso)
           -215, 120,   // Punto inferiore esterno (formando la base della mascella)
           -180, 120);   // Punto inferiore interno (crea l'angolo retto con il primo punto e il terzo)

  // Triangolo destro (angolo retto in basso a destra)
  triangle(180, -20,   // Punto superiore interno
           215, 120,    // Punto inferiore esterno
           180, 120);    // Punto inferiore interno
  pop();

  // Nuovi archi come orecchie, riempiti di bianco
  
  fill(255);
}

function drawMask2() {
  let backCol = 255;
  background(backCol);
  vol();
     
  let p1 = (mouseX)
  let p2 = (mouseY);
     
  // CORREZIONE: mappa v correttamente per il rettangolo
  let CAPELLI = map(v, 0, 1, 40, 0); // Valori più ragionevoli per la posizione 
  let frang= map(v, 0, 1, 20, 40); // Valori più ragionevoli per la posizione 
  let occhiale2 = map(v, 0, 1, 100, 200); // Valori più ragionevoli per la posizione 
  let nose = map(v, 0, 1, 700, 120); // Valori più ragionevoli per la posizione 
  let nose2 = map(v, 0, 1, 120, 300); // Valori più ragionevoli per la posizione 
  let occhiale = map(v, 0, 1, 20 , 200); // Valori più ragionevoli per la posizione 
  let narice = map(v, 0, 1, 90, 10); // Valori più ragionevoli per la posizione
  let naricePos = map(v, 0, 1, 400, 250); // Valori più ragionevoli per la posizione
  let naricOscur = map(v,0,1,150,100)
  let stanga = map(v,0,1,300,40)
  let stanga2 = map(v,0,1,100,10)
  let bocca = map (v,0,1, 10,50)
  let boccaW = map (v,0,1, 40,200)

  noFill();
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  stroke(0);
  strokeWeight(1);
  //OCCHIALI
  push();
  noFill();
  strokeWeight(10);
  rect(165+occhiale2, 220, occhiale-35, 100);
  pop();
  //NASO
  push()
  fill(backCol);
  triangoloStond(250, height/2-100, nose, 300, 50);
  pop()
  push()
  noStroke()
  fill(backCol)
  rectMode(CORNER);
  rect(0, 50, 260, 400);
  rect(50+naricOscur, 320, naricOscur, 50);

  pop()
  
  fill(0)
  //FRANGETTA
  rect(0+frang*3, 50, 650, 200,0,/*angFrang*/100,0,0);
  //CAPELLO
  rect(-100+CAPELLI*3, 300, 250, 500 );

  //OCCHIALI
  push();
  noFill();
  rectMode(CENTER);
  strokeWeight(10);
  rect(100+nose*0.3, 220, occhiale, 100);
  
  line(stanga2, 220, stanga-5, 220)
  pop();
  
  //NARICE
  push();
  rectMode(CENTER);
  fill(0);
  rect(naricePos, 335, narice, 10,80,80,80,80);
  
  //BOCCA
  rect(320-bocca*1.5, 500, boccaW, 0.001)
}

function drawMask3() {
  background(255);
  vol();
     
  let p1 = (mouseX)
  let p2 = (mouseY);
     
  // CORREZIONE: mappa v correttamente per il rettangolo
  let SOPRACCIGLIO = map(v, 0, 1, 145, 70); // Valori più ragionevoli per la posizione 
  let OCCHI = map(v, 0, 1, 70, 120); // Valori più ragionevoli per la posizione 
  let pupille = map(v, 0, 1, 67.5 , 30); // Valori più ragionevoli per la posizione 
  let Bocca = map(v, 0, 1, 20, 50); // Valori più ragionevoli per la posizione 
   
  fill(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  stroke(0);
  strokeWeight(1);
  
  //OCCHI
  push();
  noFill()
  ellipse(width/2-115, height/2-85, OCCHI, OCCHI);
  ellipse(width/2+115, height/2-85, OCCHI, OCCHI);
  pop()
  ellipse(width/2-115, height/2-85, pupille, pupille);
  ellipse(width/2+115, height/2-85, pupille, pupille);
  //baffo
  push();
  fill(0);
  rect(width/2, height/2+85, 325+OCCHI*0.4, 115,50,50, 0, 0);
  pop()
  //NASO
  push()
  fill(255);
  triangoloStond(width/2, height/2-30, 250+Bocca*0.8, 175, 50);
  pop()
  //SOPRACCIGLIO
  rect(width/2, SOPRACCIGLIO*1.5, 330, 75);
  //BOCCA
  push();
  noFill();
  rect(width/2, height/2-SOPRACCIGLIO+250, 300, Bocca*2.5,0,0, 50, 50);
  pop()
  //CAPELLI
  push();
  fill(0);
  rect(width/2-215, height/2-20, 50, 200,80,0, 0, 0);
  rect(width/2+215, height/2-20, 50, 200,0,80, 0, 0);
  rect(width/2-205, height/2, 30, 215,80,80, 0, 80);
  rect(width/2+205, height/2, 30, 215,80,80, 80, 0);
  pop()
  //ORECCHIE
  push();
  fill(255);
  arc(width/2-220, height/2+70,120+OCCHI*0.2 ,120+OCCHI*0.2, 90, 270)
  arc(width/2+220, height/2+70,120+OCCHI*0.2 ,120+OCCHI*0.2, 270, 90)
  //Capello
  push();
  noFill();
  translate(-10,0)
  bezier(width/2, 100, width/2, 50, 230, 70, 180, 100);
  pop();
  push();
  noFill();
  translate(40,0)
  bezier(width/2, 100, width/2, 50, 230, 70, 180, 100);
  pop();
  push();
  noFill();
  translate(85,0)
  bezier(width/2, 100, width/2, 50, 230, 70, 180, 100);
  pop();
}

function vol() {
  if (mouseIsPressed) {
    v = map(mouseX, 0, width, 0, 1, true);
  } else {
    let easing = 0.2;
    let targetV = mic.getLevel();
    let amplified = targetV * 3; // Amplifica il volume per una risposta più sensibile
    targetV = map(amplified, 0, 0.4, 0, 1, true);
    let dv = targetV - v;
    v += dv * easing;
    print(v);
  }
}

function touchStarted() {
  getAudioContext().resume();
}

function triangoloStond(posX, posY, w, h, stond) {
  // Calcola i tre vertici del triangolo
  const top = { x: posX, y: posY - h/2 };
  const bottomLeft = { x: posX - w/2, y: posY + h/2 };
  const bottomRight = { x: posX + w/2, y: posY + h/2 };
  
  // Inizia il path
  beginShape();
  
  // Funzione per calcolare il punto su una linea a distanza specifica da un vertice
  function getPointOnLine(from, to, distance) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (length === 0) return from;
    const ratio = Math.min(distance / length, 0.5); // Limita il ratio per evitare sovrapposizioni
    return {
      x: from.x + dx * ratio,
      y: from.y + dy * ratio
    };
  }
  
  // Calcola i punti di inizio e fine per ogni lato
  const topToRight = getPointOnLine(top, bottomRight, stond);
  const rightToTop = getPointOnLine(bottomRight, top, stond);
  const rightToLeft = getPointOnLine(bottomRight, bottomLeft, stond);
  const leftToRight = getPointOnLine(bottomLeft, bottomRight, stond);
  const leftToTop = getPointOnLine(bottomLeft, top, stond);
  const topToLeft = getPointOnLine(top, bottomLeft, stond);
  
  // p5.js usa vertex invece di lineTo
  vertex(topToRight.x, topToRight.y);
  
  // Lato destro
  vertex(rightToTop.x, rightToTop.y);
  
  // Arrotondamento vertice in basso a destra usando quadraticVertex
  quadraticVertex(bottomRight.x, bottomRight.y, rightToLeft.x, rightToLeft.y);
  
  // Lato inferiore
  vertex(leftToRight.x, leftToRight.y);
  
  // Arrotondamento vertice in basso a sinistra
  quadraticVertex(bottomLeft.x, bottomLeft.y, leftToTop.x, leftToTop.y);
  
  // Lato sinistro
  vertex(topToLeft.x, topToLeft.y);
  
  // Arrotondamento vertice in alto
  quadraticVertex(top.x, top.y, topToRight.x, topToRight.y);
  
  endShape(CLOSE);
}

function saveImage() {
  save('audio-reactive-face-' + currentMask + '.png');
}