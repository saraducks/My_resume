/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("saravijay");*/

 var formattedname = HTMLheaderName.replace("%data%","saravijay");
 var formattedheaderrole= HTMLheaderRole.replace("%data%","Web developer");
 $("#header").prepend(formattedheaderrole);
 $("#header").prepend(formattedname);
 
 var formattedskills=["C++,","Python,","Java,","SQL"];
 $("#main").append(formattedskills);

 var bio = {
 	"name": "saravijay",
 	"role": "web developer",
 	"contactinfo": {
 		"Mobile number":"1234457890",
 		"email":"abcd@gmail.com",
 		"github":"saraducks",
 		"location":"san francisco"
 	},
 	"Picture": "images/fry.jpg",
 	"welcome_message":"Hi,I am sara",
 	"skills":["C++,","Python,","Java,","SQL"]
 }

 $("#main").append("\t"+bio.contactinfo.github);
 $("#main").append("\t"+bio.contactinfo.email);
 $("#main").append("\t"+bio.welcome_message);
 $("#main").append("\t"+bio.Picture);

 var work={"currentjob":"student","employer":"cts","years_worked":"1",
 "city":"chennai,India"}
 $("#main").append("\t"+work.employer);
  var education={"school_name":"panimalar","years_attended":"4",
  "city":"chennai"}
 $("#main").append("\t"+education["city"]);

 var education = {
 	"schools":[
 	{
 		"name":"Lions",
 	    "years":4,
 	    "country":"India"
 	},
 	{
 		"name":"panimalar",
 	    "years":4,
 	    "country":"India"
 	}
 	]
 }
