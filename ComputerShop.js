function Computer(_code, _company, _modul, _basicPrice, _yearProduce, _type, _picturePath) {
    this.code = _code;
    this.company = _company;
    this.modul = _modul;
    this.basicPrice = _basicPrice;
    this.yearProduce = _yearProduce;
    this.type = _type;
    this.picturePath = _picturePath;
    this.getFainallPrice = function (sale) {
        console.log("the finall price: " + this.basicPrice * (sale / 100));
    }
    this.getComputerDetailes = function () {
        console.log(this.code + " " + this.company + " " + this.modul + " " + this.basicPrice + " " + this.yearProduce + " " + this.type + " " + this.picturePath);
    }
}
var stock = [];
var bascket = [];
var index = 0;
stock[0] = new Computer(23432, "A", "asd232", 5000, 2019, "נייד","birds/boris-smokrovic-DPXytK8Z59Y-unsplash.jpg");
stock[1] = new Computer(44532, "B", "ft65yy", 2900, 2010, "נייד", "birds/joshua-sortino-XMcoTHgNcQA-unsplash.jpg");
stock[2] = new Computer(88875, "A", "9oi8yu", 4900, 2013, "נייח", "birds/boris-smokrovic-RLLR0oRz16Y-unsplash.jpg");
stock[3] = new Computer(90875, "D", "ppsd0g", 1780, 2020, "נייד", "birds/elizabeth-gottwald-IpbnuyBWQqY-unsplash.jpg");
stock[4] = new Computer(73425, "Z", "33tyhg", 3008, 2021, "נייח", "birds/frank-mckenna-4V8JxijgZ_c-unsplash.jpg");
stock[5] = new Computer(11132, "W", "uhh65n", 999, 2011, "נייח", "birds/holly-mandarich-kCpCd6oQTCw-unsplash.jpg");

function computers() {
    for (var i = 0; i < stock.length; i++) {
        var comupterDiv = document.createElement("div");
        comupterDiv.style.width = "500px";
        comupterDiv.style.height = "500px";
        comupterDiv.style.background = "#D8BFD8";
        comupterDiv.innerHTML = "code: " + stock[i].code + "</br>";
        comupterDiv.innerHTML += "company: " + stock[i].company + "</br>";
        comupterDiv.innerHTML += "module: " + stock[i].modul + "</br>";
        comupterDiv.id = stock[i].code;
        comupterDiv.style.fontSize = "50px";
        comupterDiv.style.textAlign = "center";
        comupterDiv.style.color = "	#8B008B";
        comupterDiv.style.display = "inline-block"
        comupterDiv.style.marginRight = "10px";
        comupterDiv.style.marginBottom = "10px";
        comupterDiv.style.border = "thin solid #8B008B";
        comupterDiv.style.float = "right";
        var addToBascketButton = document.createElement("button");
        addToBascketButton.innerHTML = "Add to bascket";
        addToBascketButton.style.width = "200px";
        addToBascketButton.style.height = "70px";
        addToBascketButton.style.background = "#D8BFD8";
        addToBascketButton.id = stock[i].code;
        addToBascketButton.addEventListener("click", function () {
            for (let i = 0; i < stock.length; i++) {
                console.log(this.id);
                if (stock[i].code == this.id) {
                    bascket[index] = stock[i];
                    console.log(bascket[index].getComputerDetailes());
                    index++;
                    break;
                }
            }
        })
        var img = document.createElement("img");
        img.setAttribute("src", stock[i].picturePath);
        img.setAttribute("height", "168");
        img.setAttribute("width", "224");
        img.setAttribute("alt", "bird");
        img.style.marginLeft = "120px";
        img.style.marginBottom = "50px";
        img.style.display = "block"
        comupterDiv.appendChild(img);
        comupterDiv.appendChild(addToBascketButton);
        document.body.appendChild(comupterDiv);
        comupterDiv.onclick = detailes;
    }
    function detailes() {
        var details = document.getElementById("details");
        details.style.width = "250px";
        details.style.height = "500px";
        details.style.background = "#D8BFD8";
        // console.log(this.id);
        for (let index = 0; index < stock.length; index++) {
            if (this.id == stock[index].code) {
                details.innerHTML = "code: " + stock[index].code + "</br>";
                details.innerHTML += "company: " + stock[index].company + "</br>";
                details.innerHTML += "module: " + stock[index].modul + "</br>";
                details.innerHTML += "price: " + stock[index].basicPrice + "</br>";
                details.innerHTML += "year: " + stock[index].yearProduce + "</br>";
                details.innerHTML += "type: " + stock[index].type + "</br>";
            }
        }
        // details.innerHTML += "Detailes: " + stock[i].getComputerDetailes + "</br>";
        details.style.fontSize = "50px";
        details.style.textAlign = "center";
        details.style.color = "	#8B008B";
        details.style.display = "inline-block"
        details.style.border = "thin solid #8B008B";
    };
}

function viewShoppingBag() {
    // document.body.style.textAlign = "center";
    // document.body.style.fontSize = "20px";
    for (var i = 0; i < bascket.length; i++) {
        var comupterDiv = document.createElement("div");
        comupterDiv.style.width = "500px";
        comupterDiv.style.height = "500px";
        comupterDiv.style.background = "#ADD8E6";
        comupterDiv.innerHTML = "code: " + bascket[i].code + "</br>";
        comupterDiv.innerHTML += "company: " + bascket[i].company + "</br>";
        comupterDiv.innerHTML += "module: " + bascket[i].modul + "</br>";
        // comupterDiv.className = bascket[i].code+""+(i+1);
        // console.log(comupterDiv.className);
        comupterDiv.style.fontSize = "50px";
        comupterDiv.style.textAlign = "center";
        comupterDiv.style.color = "	#4682B4";
        comupterDiv.style.display = "inline-block"
        comupterDiv.style.marginRight = "10px";
        comupterDiv.style.marginBottom = "10px";
        comupterDiv.style.border = "thin solid #4682B4";
        comupterDiv.style.float = "right";
        var removeFromBascketButton = document.createElement("button");
        removeFromBascketButton.innerHTML = "remove from bascket";
        removeFromBascketButton.style.width = "200px";
        removeFromBascketButton.style.height = "70px";
        removeFromBascketButton.style.background = "#ADD8E6";
        removeFromBascketButton.id = bascket[i].code;
        removeFromBascketButton.addEventListener("click", function () {
            this.parentElement.remove();
            for (let i = 0; i < bascket.length; i++) {
                if (bascket[i].code == this.id) {
                    delete bascket[i];
                    for (let index2 = i; index2 < bascket.length - 1; index2++) {
                        bascket[index2] = bascket[index2 + 1];
                    }
                    bascket.length -= 1;
                    index--;
                    break;
                }
            }
        })
        var img = document.createElement("img");
        img.setAttribute("src", bascket[i].picturePath);
        img.setAttribute("height", "168");
        img.setAttribute("width", "224");
        img.setAttribute("alt", "bird");
        img.style.marginLeft = "120px";
        img.style.marginBottom = "50px";
        img.style.display = "block"
        comupterDiv.appendChild(img);
        comupterDiv.appendChild(removeFromBascketButton);
        document.body.appendChild(comupterDiv);
    }
}