var states = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "American Samoa", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi", "N. Marianas", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon", "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota", "District of Columbia"];

var pledged = [54,24,43,59,60,11,37,78,117,116,93,42,75,251,26,109,37,59,30,30,147,41,11,246,182,84,121,11];
var unpledged = [85,27,37,20,34,118,96,18,291,70,31,118,210,33,92,12,37,61,74,12,67,546,27,142,43,23,25,45];

var i = 0;

d3.select(".pledged")
  .selectAll("div")
    .data(pledged)
  .enter().append("div")
    .style("width",function(d) { return d*2.5+"px"; })
    .text(function(d) { i++; return states[i-1]+" "+d; });

d3.selectAll(".unpledged")
  .selectAll("div")
    .data(unpledged)
  .enter().append("div")
    .style("width",function(d) { return d*2.5+"px"; })
    .text(function(d) { i++; return states[i-1]+" "+d; }); 
