const typewriter = function(str) {

  let delay = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  
};

typewriter("hello there from lighthouse labs");
