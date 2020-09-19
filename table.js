
var infoPromise=d3.json("employee.json")
console.log(infoPromise)

var succFCN=function(employees)
{
    console.log("getData",employees);
    drawTable(employees)
}

var failFCN=function(err)
{
    console.log("did not find the info",err);
}
infoPromise.then(succFCN,failFCN);

var drawTable=function(employees)
{
    var rows=d3.select("#information tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")
    
    
    rows.append("td")
    .text(function(employee)
 {
  return employee.firstName;      
});

rows.append("td")
    .text(function(employee)
 {
  return employee.lastName;      
});

rows.append("td")
    .append("img")
    .attr("src",function(employee)
          {
    return employee.photo;
})
          
rows.append("td")
    .text(function(employee)
 {
  return employee.title;      
});    

rows.append("td")
    .text(function(employee)
 {
  return employee.unit;      
});

rows.append("td")
    .text(function(employee)
 {
  return employee.email;      
});

rows.append("td")
    .text(function(employee)
 {
  return employee.bio;      
});

rows.append("td")
    .text(function(employee)
 {
  return employee.phone;      
});

}

