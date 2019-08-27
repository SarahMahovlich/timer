// b = beep
// 1-9 = output "setting time for x seconds.." and beep after those seconds have passed
// exit with ctrl c
// print message

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (Number(key) && key <= 9 && key >= 1) {
    console.log(`setting timer for ${key} second${(key === "1") ? "" : "s"}`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }

  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});


