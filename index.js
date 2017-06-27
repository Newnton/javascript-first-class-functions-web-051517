function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function corn() {
    console.log(`Corn is good.`);
  }
}

function returnsAnAnonymousFunction(){
  return () => {console.log('I am very sneaky and anonymous')}
}
