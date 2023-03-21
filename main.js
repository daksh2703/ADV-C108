function check() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/X2Pqhb9ut/model.json', modelReady);
    classifier.classify(gotResults);
}

function modelReady() {
   console.log("Model is ready");
}

dog = 0;
cat = 0;
cow = 0,
elephant = 0;

function gotResults(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);

        random_no_r = Math.floor(Math.random() * 255) + 1;
        random_no_g = Math.floor(Math.random() * 255) + 1;
        random_no_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById('accuracy1').innerHTML = (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById('animal1').innerHTML = result[0].label;
        document.getElementById('animal').style.color = "rgb(" + random_no_r + ", " + random_no_g + ", " + random_no_b + ")";
        document.getElementById('accuracy').style.color = "rgb(" + random_no_r + ", " + random_no_g + ", " + random_no_b + ")";

        img = document.getElementById('img1');

        if (result[0].label == "Cat") {
            img.src = "cat.jpg";
        }
        else if (result[0].label == "Cow") {
            img.src = "cow.jpg";
        }
        else if (result[0].label == "Dog") {
            img.src = "dog.jpg";
        }
        else if (result[0].label == "Elephant") {
            img.src = "elephant.jpg";
        }
        else {
            img.src = "18722294_v878-mind-64-removebg-preview.png";

        }

    }
}
