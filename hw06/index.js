var states = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "American Samoa", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi", "N. Marianas", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon", "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota", "District of Columbia"];

var data = [
    {"state":"Alabama","rd":50,"rp":true,"dd":60,"dp":true}, 
    {"state":"Alaska","rd":28,"rp":true,"dd":20,"dp":false}, 
    {"state":"American Samoa","rd":9,"rp":false,"dd":11,"dp":true}, 
    {"state":"Arizona","rd":58,"rp":false,"dd":85,"dp":false}, 
    {"state":"Arkansas","rd":40,"rp":true,"dd":37,"dp":true}, 
    {"state":"California","rd":172,"rp":false,"dd":548,"dp":false},
    {"state":"Colorado","rd":37,"rp":false,"dd":78,"dp":true},
    {"state":"Connecticut","rd":28,"rp":false,"dd":71,"dp":false},
    {"state":"Delaware","rd":16,"rp":false,"dd":31,"dp":false},
    {"state":"District of Columbia","rd":19,"rp":true,"dd":46,"dp":false},
    {"state":"Florida","rd":99,"rp":true,"dd":246,"dp":true},
    {"state":"Georgia","rd":76,"rp":true,"dd":117,"dp":true},
    {"state":"Guam","rd":9,"rp":true,"dd":12,"dp":false},
    {"state":"Hawaii","rd":19,"rp":true,"dd":35,"dp":false},
    {"state":"Idaho","rd":32,"rp":true,"dd":27,"dp":false},
    {"state":"Illinois","rd":69,"rp":true,"dd":182,"dp":true},
    {"state":"Indiana","rd":57,"rp":false,"dd":92,"dp":false},
    {"state":"Iowa","rd":30,"rp":true,"dd":52,"dp":true},
    {"state":"Kansas","rd":40,"rp":true,"dd":37,"dp":true},
    {"state":"Kentucky","rd":46,"rp":true,"dd":60,"dp":false},
    {"state":"Louisiana","rd":46,"rp":true,"dd":59,"dp":true},
    {"state":"Maine","rd":23,"rp":true,"dd":30,"dp":true},
    {"state":"Maryland","rd":36,"rp":false,"dd":118,"dp":false},
    {"state":"Massachusetts","rd":42,"rp":true,"dd":116,"dp":true},
    {"state":"Michigan","rd":59,"rp":true,"dd":147,"dp":true},
    {"state":"Minnesota","rd":38,"rp":true,"dd":93,"dp":true},
    {"state":"Mississippi","rd":40,"rp":true,"dd":41,"dp":true},
    {"state":"Missouri","rd":52,"rp":true,"dd":84,"dp":true},
    {"state":"Montana","rd":27,"rp":false,"dd":27,"dp":false},
    {"state":"N. Marianas","rd":9,"rp":true,"dd":11,"dp":true},
    {"state":"Nebraska","rd":36,"rp":false,"dd":30,"dp":true},
    {"state":"Nevada","rd":30,"rp":true,"dd":43,"dp":true},
    {"state":"New Hampshire","rd":23,"rp":true,"dd":32,"dp":true},
    {"state":"New Jersey","rd":51,"rp":false,"dd":142,"dp":false},
    {"state":"New Mexico","rd":24,"rp":false,"dd":43,"dp":false},
    {"state":"New York","rd":95,"rp":false,"dd":291,"dp":false},
    {"state":"North Carolina","rd":72,"rp":true,"dd":121,"dp":true},
    {"state":"North Dakota","rd":28,"rp":false,"dd":23,"dp":false},
    {"state":"Ohio","rd":66,"rp":true,"dd":160,"dp":true},
    {"state":"Oklahoma","rd":43,"rp":true,"dd":42,"dp":true},
    {"state":"Oregon","rd":28,"rp":false,"dd":74,"dp":false},
    {"state":"Pennsylvania","rd":71,"rp":false,"dd":210,"dp":false},
    {"state":"Puerto Rico","rd":23,"rp":true,"dd":67,"dp":false},
    {"state":"Rhode Island","rd":19,"rp":false,"dd":33,"dp":false},
    {"state":"South Carolina","rd":50,"rp":true,"dd":59,"dp":true},
    {"state":"South Dakota","rd":29,"rp":false,"dd":25,"dp":false},
    {"state":"Tennessee","rd":58,"rp":true,"dd":75,"dp":true},
    {"state":"Texas","rd":155,"rp":true,"dd":251,"dp":true},
    {"state":"Utah","rd":40,"rp":false,"dd":37,"dp":false},
    {"state":"Vermont","rd":16,"rp":true,"dd":26,"dp":true},
    {"state":"Virgin Islands","rd":9,"rp":true,"dd":12,"dp":false},
    {"state":"Virginia","rd":49,"rp":true,"dd":109,"dp":true},
    {"state":"Washington","rd":44,"rp":false,"dd":118,"dp":false},
    {"state":"West Virginia","rd":34,"rp":false,"dd":37,"dp":false},
    {"state":"Wisconsin","rd":42,"rp":false,"dd":96,"dp":false},
    {"state":"Wyoming","rd":29,"rp":true,"dd":18,"dp":false}]

var pledged = [54,24,43,59,60,11,37,78,117,116,93,42,75,251,26,109,37,59,30,30,147,41,11,246,182,84,121,11];
var unpledged = [85,27,37,20,34,118,96,18,291,70,31,118,210,33,92,12,37,61,74,12,67,546,27,142,43,23,25,45];

var dem = true;
i = 0;

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width",function(d) {
	if (dem) {
	    return d["dd"]*2.5+"px";
	} else {
	    return d["rd"]*2.5+"px"; 
	}
    })
    .style("background-color",function(d) { 
	if (dem) {
	    if (d["dp"]) {
	        return "blue";
	    } else {
		return "gray";
	    }
	} else {
	    if (d["rp"]) {
	        return "red";
	    } else {
		return "gray";
	    }
	}
    })
    .text(function(d) { 
	if (dem) {
	    return d["state"]+" "+d["dd"];
	} else {
	    return d["state"]+" "+d["rd"]; 
	} 
    });

document.getElementsByClassName("chart").on("click", function() {
    //chart.transition().();
});
