const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.shift(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop(-1)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  const morekittens = [...kittens,name];
  return morekittens
}

function prependKitten(name){
  const morekittens= [name,...kittens];
  return morekittens
}

function removeLastKitten(){
  lesskittens= kittens.slice(0, kittens.length -1);
  return lesskittens
}
function removeFirstKitten(){
  lesskittens=kittens.slice(1);
  return lesskittens
}
