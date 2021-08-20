var i = 0; // json array movement variable
var correctcount = 0;
var incorrectcount = 0;
generate(0); //initialise the first question
// generate from json data with index
function generate(index) {
    let questionItem = jsonData[index];
    let optionsContainer = document.querySelector('.options');
    let htmlString = '';

    document.getElementById("question").textContent = questionItem.question;

    questionItem.options.forEach((option, index) => {
        htmlString += '<div class="options">';
        htmlString += '<input type="radio" name="options" value="' + index + ' "/>';
        htmlString += '<label>' + option + '</label>';
        htmlString += '</div>';
    })

    optionsContainer.innerHTML = htmlString;

}

function checkAnswer() {
    
    let correctflag = false;
    let userIndex = -1;

    if(!document.querySelector('input[name=options]:checked'))
    {
          alert("Please make a choice.");  
        
    }
    else{
        userIndex = document.querySelector('input[name=options]:checked').value;
        if (userIndex == jsonData[i].answerIndex) {
        correctflag = true;
    }

    if (correctflag === true) {
        correctcount++;
    } else {
        incorrectcount++;
    }

    //increment i for next question
    i++;
    if (jsonData.length - 1 < i) {
        document.write("<body style='background-color:#3f51b5;'>");
        document.write("<p style='color:#ffffff;font-size:18pt;'>****Your score is: " + correctcount + " out of " + i + "****</p>");
        document.write('<button><a href="index.html">Home</a></button>');
        
        //        document.write("your incorrect count is: " +incorrectcount);
        document.write("</body>");
    }
    generate(i);
        
    }

    
}
