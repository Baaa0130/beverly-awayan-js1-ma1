const cats = [
{
name: "Blob",
age: 10
},
{
name: "Harold",
},
{
name: "Blurt",
age: 21
}
];

//Question 1 
var complain = function () {
    console.log("Meow!");
    };
    var cat = { complain: complain() };
    
    cat.complain;

//Question 2
var heading = document.querySelector("h3");
heading.innerHTML = 'Updated heading';

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
var paragraphs = document.querySelectorAll("p")
for (var i = 0; i < paragraphs.length; i++) {
paragraphs[i].style.color = 'red'
}

//Question 6
var resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New paragraph</p>"
resultsContainer.style.backgroundColor = "yellow"

//Question 7
var list = function (list){
    for (var i = 0; i < list.length; i++) {
    console.log(list[i].name)
    }
    }
    list(cats)


//Question 8
var createCats = function (cats) {
    for (var i = 0; i < cats.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "<h5>" + cats[i].name + "</h5>";
    if (cats[i].age) {
    div.innerHTML = div.innerHTML + "<p>" + cats[i].age + "</p>";
    }
    document.querySelector(".cat-container").appendChild(div);
    }
    };
    createCats(cats)