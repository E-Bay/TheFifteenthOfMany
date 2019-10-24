var getGrade = function(quiz) {return quiz.grade} //gets grade
var penguinPromise = d3.json("classData.json") //calls functions with the Data
penguinPromise.then(function(classData)
{
    console.log(classData)
    makeTable(classData)
},
function(err)
{
    return console.log(err, "Error Found");
})
var makeTable = function(penguin)
{
    var row = d3.select("tbody").append("tr")
      .selectAll("tr")
      .data(penguin)
      .enter()
      .append("tr")
      row.append("img")
      .attr("src", function(d){return d.picture})
      row.append("td")
      .text(function(d)
      {return getQuiz(d.quizes)})
      row.append("td")
      .text(function(d)
      {return getHomework(d.homework)})
      row.append("td")
      .text(function(d)
      {return getTest(d.test)})
      row.append("td")
      .text(function(d)
      {return getFinal(d)})
}
var getQuiz = function(penguin)
{
    return d3.mean(penguin.map(getGrade))
}
var getHomework = function(penguin)
{
    return d3.mean(penguin.map(getGrade))
}
var getTest = function(penguin)
{
    return d3.mean(penguin.map(getGrade))
}
var getFinal = function(penguin)
{
    var FinalGrade = penguin.final[0].grade
    return FinalGrade
}