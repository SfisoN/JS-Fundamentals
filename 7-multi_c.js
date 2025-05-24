const x = parseInt(process.argv[2]);

for(let j=0; j < x; j++) {
    if(isNaN(x)){
        console.log("Missing number of occurrences");
    }else{
        let i = 0;
        while (i < x) {
            console.log("C is fun");
            i++;
        }
    }
}