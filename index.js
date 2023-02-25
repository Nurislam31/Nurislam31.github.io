const wts = [
	{
	  title: "Opportunity",
	  author: "Sakan Begalinov",
	  image: "OP.jpeg",
	  price: 4600,
	},
	{
	  title: "InterExchange",
	  author: "Amangeldiyev Nurislam",
	  image: "IE.jpeg",
	  price: 6600,
	},
	{
	  title: "Columbus",
	  author: "Nurzhan Buketov",
	  image: "COL.jpeg",
	  price: 5000,
	},
	{
	  title: "Kcet",
	  author: "Alisher Nasyradin",
	  image: "Kcet.jpeg",
	  price: 5300,
	},
	{
	  title: "Workandtravelgermany",
	  author: "Sayat Nurkenuly",
	  image: "GER.jpeg",
	  price: 4200,
	},
  ];

  function WandTObject(title, author, image, price) {
	const object = {
		title: title,
		author: author,
		image: image,
		price: price
	}

	return object
  }

   const temp1 = WandTObject("Opportunity","Sakan Begalinov","OP.jpeg", 4600)
   console.log(temp1);
  
  function avg(wts){ 
    let sum = 0; 
    for (let i = 0; i < wts.length; i++) { 
       sum += wts[i]['price']; 
    } 
    return sum / wts.length; 
} 
	

  const wtList = document.getElementById("wt-list");
  
  for (let i = 0; i < wts.length; i++) {
	const wtDiv = document.createElement("div");
	wtDiv.classList.add("wt");
  
	const wtTitle = document.createElement("h2");
	wtTitle.textContent = wts[i].title;
  
	const wtImage = document.createElement("img");
	wtImage.src = wts[i].image;
	wtImage.alt = wts[i].title;
  
	const wtAuthor = document.createElement("p");
	wtAuthor.textContent = wts[i].author;

	const wtPrice = document.createElement("h5");
	wtPrice.textContent = wts[i].price;
  
	wtDiv.appendChild(wtTitle);
	wtDiv.appendChild(wtImage);
	wtDiv.appendChild(wtAuthor);
	wtDiv.appendChild(wtPrice);
	wtList.appendChild(wtDiv);
  }
  document.write("<h5>Average Price Work&Travel: " + avg(wts) + "<h5>");
  
