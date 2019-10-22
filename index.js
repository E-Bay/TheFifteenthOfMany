var deleteButton = function() {d3.select("tbody").remove("tr")} //deletes table data
var getGrade = function(quiz) {return quiz.grade} //gets grade
var penguinPromise = d3.json("classData.json") //calls functions with the Data
penguinPromise.then(function(classData)
{
    console.log(classData)
    makeTable(classData)
    getQuiz(classData)
    getHomework(classData)
    getTest(classData)
    getFinal(classData)
},
function(err)
{
    return console.log(err, "Error Found");
})
var makeTable = function(penguin)
{
    return d3.select("tbody")
      .selectAll("tr")
      .data(penguin)
      .enter()
      .append("tr")
      .append("td")
      .append("img")
      .attr("src", function(d){return d.picture})
}
var getQuiz = function(penguin)
{
    
}
var getHomework = function(penguin)
{
    
}
var getTest = function(penguin)
{
    
}
var getFinal = function(penguin)
{
    
}