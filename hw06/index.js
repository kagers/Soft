var states = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "American Samoa", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi", "N. Marianas", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon", "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota", "District of Columbia"];

var data = [
    {"state":"Alabama","rd":50,"rp":true,"dd":60,"dp":true}, 
    {"state":"Alaska","rd":28,"rp":true,"dd":20,"dp":false}, 
    {"state":"American Samoa","rd":,"rp":false,"dd":,"dp":}, 
    {"state":"Arizona","rd":,"rp":false,"dd":,"dp":}, 
    {"state":"Arkansas","rd":,"rp":true,"dd":,"dp":true}, 
    {"state":"California","rd":,"rp":,"dd":,"dp":},
    {"state":"Colorado","rd":,"rp":,"dd":,"dp":},
    {"state":"Connecticut","rd":,"rp":,"dd":,"dp":},
    {"state":"Delaware","rd":,"rp":,"dd":,"dp":},
    {"state":"District of Columbia","rd":,"rp":,"dd":,"dp":},
    {"state":"Florida","rd":,"rp":,"dd":,"dp":},
    {"state":"Georgia","rd":,"rp":,"dd":,"dp":},
    {"state":"Guam","rd":,"rp":,"dd":,"dp":},
    {"state":"Hawaii","rd":,"rp":,"dd":,"dp":},
    {"state":"Idaho","rd":,"rp":,"dd":,"dp":},
    {"state":"Illinois","rd":,"rp":,"dd":,"dp":},
    {"state":"Indiana","rd":,"rp":,"dd":,"dp":},
    {"state":"Iowa","rd":,"rp":,"dd":,"dp":},
    {"state":"Kansas","rd":,"rp":,"dd":,"dp":},
    {"state":"Kentucky","rd":,"rp":,"dd":,"dp":},
    {"state":"Louisiana","rd":,"rp":,"dd":,"dp":},
    {"state":"Maine","rd":,"rp":,"dd":,"dp":},
    {"state":"Maryland","rd":,"rp":,"dd":,"dp":},
    {"state":"Massachusetts","rd":,"rp":,"dd":,"dp":},
    {"state":"Michigan","rd":,"rp":,"dd":,"dp":},
    {"state":"Minnesota","rd":,"rp":,"dd":,"dp":},
    {"state":"Mississippi","rd":,"rp":,"dd":,"dp":},
    {"state":"Missouri","rd":,"rp":,"dd":,"dp":},
    {"state":"Montana","rd":,"rp":,"dd":,"dp":},
    {"state":"N. Marianas","rd":,"rp":,"dd":,"dp":},
    {"state":"Nebraska","rd":,"rp":,"dd":,"dp":},
    {"state":"Nevada","rd":,"rp":,"dd":,"dp":},
    {"state":"New Hampshire","rd":,"rp":,"dd":,"dp":},
    {"state":"New Jersey","rd":,"rp":,"dd":,"dp":},
    {"state":"New Mexico","rd":,"rp":,"dd":,"dp":},
    {"state":"New York","rd":,"rp":,"dd":,"dp":},
    {"state":"North Carolina","rd":,"rp":,"dd":,"dp":},
    {"state":"North Dakota","rd":,"rp":,"dd":,"dp":},
    {"state":"Ohio","rd":,"rp":,"dd":,"dp":},
    {"state":"Oklahoma","rd":,"rp":,"dd":,"dp":},
    {"state":"Oregon","rd":,"rp":,"dd":,"dp":},
    {"state":"Pennsylvania","rd":,"rp":,"dd":,"dp":},
    {"state":"Puerto Rico","rd":,"rp":,"dd":,"dp":},
    {"state":"Rhode Island","rd":,"rp":,"dd":,"dp":},
    {"state":"South Carolina","rd":,"rp":,"dd":,"dp":},
    {"state":"South Dakota","rd":,"rp":,"dd":,"dp":},
    {"state":"Tennessee","rd":,"rp":,"dd":,"dp":},
    {"state":"Texas","rd":,"rp":,"dd":,"dp":},
    {"state":"Utah","rd":,"rp":,"dd":,"dp":},
    {"state":"Vermont","rd":,"rp":,"dd":,"dp":},
    {"state":"Virgin Islands","rd":,"rp":,"dd":,"dp":},
    {"state":"Virginia","rd":,"rp":,"dd":,"dp":},
    {"state":"Washington","rd":,"rp":,"dd":,"dp":},
    {"state":"West Virginia","rd":,"rp":,"dd":,"dp":},
    {"state":"Wisconsin","rd":,"rp":,"dd":,"dp":},
    {"state":"Wyoming","rd":,"rp":,"dd":,"dp":}]

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
