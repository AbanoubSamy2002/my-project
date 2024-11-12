    var array= [
    {
      name: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken."
    },
    {
      name: "Marilyn Monroe",
      quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
      name: "Frank Zappa",
      quote: "So many books, so little time."
    },
    {
      name: "Albert Einstein",
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
      name: " Marcus Tullius Cicero",
      quote: "A room without books is like a body without a soul."
    },
    {
      name: "Bernard M. Baruch",
      quote: "If you tell the truth, you don't have to remember anything.Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    }
    ,
    {
      name: "Dr. Seuss",
      quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    }
    ,
    {
        name: "Mae West",
        quote: "You only live once, but if you do it right, once is enough."
      }
      ,
      
      {
        name: "J.K. Rowling, Harry Potter and the Goblet of Fire",
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
      }
  ]
  
var outputNumber = 0;
function randomNumber() {
  number = parseInt(Math.random()*array.length);
  if (number === outputNumber) {
  var isEqualNumber = number >= array.length - 1 ? number - 1 : number + 1;
    outputNumber = isEqualNumber;
    return outputNumber;
  }else{
    outputNumber = number;
    return outputNumber;
  }
}

function displayQuote() {
  var index = randomNumber()
  document.getElementById("Quote").innerHTML= `"${array[index].quote}"`
  document.getElementById("Name").innerHTML= `--${array[index].name}`
}




































