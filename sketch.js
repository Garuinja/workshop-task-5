let table;
let coordinates = [];
function setup() {
  createCanvas(500, 500);
}

function preload(){
  table = loadTable('gummies.csv', 'csv', 'header');
}

function dayLabels(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let day = row.get('Day');
    text(day, 10 + x * 65, 460);
  }
}

function amountLabels(){
  for (a = 0; a < 3; a++){
    let amount = a.toString();
    text(amount, 460, 420 - a * 200);
  }
}

function redAmount(){
  stroke(255, 0, 0)
  fill(255, 0, 0)
  for (r = 0; r < table.getRowCount(); r++){
    let row = table.getRow(r);
    let day = row.get('Red');
    let xcoord = 10+r*65;
    coordinates.push(xcoord);
    // text(day, 15 + r * 60, 320);
    if (day == '0'){
      let ycoord = 420;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '1'){
      let ycoord = 220;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '2'){
      let ycoord = 20;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }
  }
  makeLine();
}

function yellowAmount(){
  stroke(240, 247, 2);
  fill(240, 247, 2);
  for (r = 0; r < table.getRowCount(); r++){
    let row = table.getRow(r);
    let day = row.get('Yellow');
    let xcoord = 10+r*65;
    coordinates.push(xcoord);
    // text(day, 15 + r * 60, 320);
    if (day == '0'){
      let ycoord = 420;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '1'){
      let ycoord = 220;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '2'){
      let ycoord = 20;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }
  }
  makeLine();
}

function greenAmount(){
  stroke(0, 255, 0);
  fill(0, 255, 0);
  for (r = 0; r < table.getRowCount(); r++){
    let row = table.getRow(r);
    let day = row.get('Green');
    let xcoord = 10+r*65;
    coordinates.push(xcoord);
    // text(day, 15 + r * 60, 320);
    if (day == '0'){
      let ycoord = 420;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '1'){
      let ycoord = 220;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '2'){
      let ycoord = 20;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }
  }
  makeLine();
}

function orangeAmount(){
  stroke(247, 137, 2);
  fill(247, 137, 2);
  for (r = 0; r < table.getRowCount(); r++){
    let row = table.getRow(r);
    let day = row.get('Orange');
    let xcoord = 10+r*65;
    coordinates.push(xcoord);
    // text(day, 15 + r * 60, 320);
    if (day == '0'){
      let ycoord = 420;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '1'){
      let ycoord = 220;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }else if(day == '2'){
      let ycoord = 20;
      circle(xcoord, ycoord, 10);
      coordinates.push(ycoord);
    }
  }
  makeLine();
}

function makeLine(){
  for(l = 0; l < 7; l++){
    line(coordinates[0],coordinates[1],coordinates[2],coordinates[3]);
    coordinates.splice(0,2);
  }
}

function draw() {
  background(220);
  strokeWeight(4);
  redAmount();
  yellowAmount();
  greenAmount();
  orangeAmount();
  fill(0);
  strokeWeight(0);
  dayLabels();
  amountLabels();
}
