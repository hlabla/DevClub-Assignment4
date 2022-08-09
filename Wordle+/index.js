const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);
	const GUESS = req.url; // Write logic to parse the word which the user guessed from the URL string
	const G = GUESS.split("=")[1];
	let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	const secret = SECRET.split();
	const guess = String(G).split();
	let a = -1;
	for(let i=4 ; i>=0 ; i--){
		a = -1;
		for(let j=4 ; j>=0 ; j--){
			if (guess[i]==secret[j]){
				a = j;
			}
		}
		if(a==-1){
			feedback+="b";
		}
		else if(i==a){
			feedback+="g";
		}
		else{
			feedback+="y";
		}
	}
	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
