function takeANumber(katzDeli, name) {
    katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ` + [katzDeli.length] + ` in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      return 'Currently serving ' + katzDeliLine.shift() + '.';  
  }
  else 
  return 'There is nobody waiting to be served!'
}

<<<<<<< HEAD
function currentLine(line) {
  var i = 0;
  var str = 'The line is currently: '
  if (line.length > 0) {
    do {
      str += [i + 1] + '. ' + line[i] + ', ';
      i++;
      } while (i < line.length - 1);
    str += line.length + '. ' + 
    line.slice(-1);
=======
function currentLine(katzDeliline) {
  var i = 0;
  var str = 'The line is currently: '
  if (katzDeliLine.length > 0) {
    do {
      str += [i + 1] + '. ' + katzDeliLine[i] + ', ';
      i++;
      } while (i < katzDeliLine.length - 1);
    str += katzDeliLine.length + '. ' + 
    katzDeliLine.slice(-1);
>>>>>>> c48a24b1cbc401fe7136563a25f5ea6e0bf4b9de
    return str
  }
  else
  return 'The line is currently empty.'
}