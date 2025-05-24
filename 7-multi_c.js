const count = parseInt(process.argv[2]);


for (let check = 0; check < 1; check++) {
  if (isNaN(count)) {
    console.log("Missing number of occurrences");
  } else {
    let i = 0;
    while (i < count) { 
      console.log("C is fun");
      i++;
    }
  }
}
