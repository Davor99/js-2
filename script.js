function centimeterToMeter(cm) {
    console.log((cm / 100))
}

centimeterToMeter(50)

function meterToCentimeter(m) {

    console.log((m * 100))
}

meterToCentimeter(1)


function gramToPounds(g) {
    console.log((g / 453.6))


}

gramToPounds(1500)


const car = {
    carName: {
        name: "Volvo",
        capitalized: {
            price: "Price $51,495",
            model: "V60",
            color: "white",
            print: function () {
                console.log(`Name: ${this.carName}, price: ${this.price}, Model: ${this.model}, Color: ${this.color}`)
            }
        }
    }

}
console.log(car)
console.log(car.carName.capitalized)


const mkd = {
    countryName: {
        name: "Macedonia",
        capitalized: {
            capital: "Skopje",
            demonyms: "Macedonian",
            area: "25,436",
            water: "1.1%",
            population: "1,836,713",
            print: function(){
                console.log(`name: ${this.countryName}, capital: ${this.capital}, demonyms: ${this.demonyms}, area: ${this.area}, water: ${this.water}, population: ${this.population}`)
}


        }
    
    }

}

console.log (mkd.countryName.capitalized)

const laptop = {
    laptopName: {
        name: "ASUS Vivobook Go 15 E1504FA-BQ321",
        capitalized: {
            discount: "-33%",
            happy: "15.399",
            oprice: "22.999",
            print: function() {
                console.log (`name: ${this.laptopName}, discount: ${this.discount}, happy: ${this.happy}, oprice: ${this.oprice}`)
            }
        }
    }
}

console.log (laptop.laptopName.capitalized)