var work = {
	"job":[
	{"status":"student",
	"Employer":"TATA",
	"Title":"Program Executive",
	"workdate":"4/5/2000 to 4/5/2001",
	"Location":"India",
	"description":"I worked as Program executive."}]
}
var project = {
	"projects":[
    {
    	"Title":"Movie Trailer",
        "Start_date":"January 20th 2016",
        "project_description":"It's a list of favourite movies and reviewers can review them",
        "Image":"http://www.webdesignhot.com/wp-content/uploads/2011/11/Free-Website-Template-Movie-Hunter-Preview.png"},
    {
    	"Title":"WIFI detection",
    	"Start_date":"February 12th 2013",
    	"project_description":"It will inject sniffer node",
    	"Image":"images/fry.jpg"
    }]
}
var bio = {
	"Contact":"12497417491",
	"Email":"sara@gmail.com",
	"Github":"saraducks",
	"Twitter":"saravj",
	"blog":"www.saravj.com",
    "Location":"India",
    "skills":["java","C++","Python"],
    "image":"images/fry.jpg",
    "Welcome_message":"Hi i am sara"
}

var education = {
	"schools": [
	{
		"Name":"Anna university",
		"no_of_years":4,
		"Location":"India",
		"Major":["cs"]
	},
	{
        "Name":"UCSC",
        "no_of_years":1,
        "Location":"United states",
        "Major":["cs"]
	}
	],
	"Online_courses":[
    {
    	"Name":"Udacity",
    	"Major":"web development",
    	"No_of_months":3,
    	"URL":"https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19350585610923"
    }
	]
}
 $("#main").prepend(internationalizeButton);
 function mywork(){
 var formattedname = HTMLheaderName.replace("%data%","sara vijay");
 var formattedheaderrole= HTMLheaderRole.replace("%data%","Web developer");
 $("#header").prepend(formattedheaderrole);
 $("#header").prepend(formattedname);
 
 //$("#header").append(HTMLcontactGeneric);
 //var formattedcontact = HTMLmobile.replace("%contact%","Mobile:");
 //var formattedcontactnumber = HTMLmobile.replace("%data%",bio.Contact);
 //$("#name").prepend(formattedcontact);
 //$("#name").prepend(formattedcontactnumber);
}
mywork();
if(bio.skills.length > 0){
	
	$("#header").append(HTMLskillsStart);
	var formattedskills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedskills);
}
for(workno in work.job){
	$("#workExperience").append(HTMLworkStart);
	var formattedemployer = HTMLworkEmployer.replace("%data%",work.job[workno].Employer);
	var formattedtitle = HTMLworkTitle.replace("%data%",work.job[workno].Title);
    var formattedworkdate = HTMLworkDates.replace("%data%",work.job[workno].workdate);
    var formattedlocation = HTMLworkLocation.replace("%data%",work.job[workno].Location);
    var formatteworkdescription = HTMLworkDescription.replace("%data%",work.job[workno].description);
    $(".work-entry").append(formattedemployer);
    $(".work-entry").append(formattedtitle);
    $(".work-entry").append(formattedworkdate);
    $(".work-entry").append(formattedlocation);
    $(".work-entry").append(formatteworkdescription);
}
  project.display = function(){
for(no_of_projects in project.projects){
	$("#projects").append(HTMLprojectStart);
	var projecttitle = HTMLprojectTitle.replace("%data%",project.projects[no_of_projects].Title);
	var projectdate =HTMLprojectDates.replace("%data%",project.projects[no_of_projects].Start_date);
	var projectdescription = HTMLprojectDescription.replace("%data%",project.projects[no_of_projects].project_description);
	var projectimage = HTMLprojectImage.replace("%data%",project.projects[no_of_projects].Image);
	$(".project-entry").append(projecttitle);
	$(".project-entry").append(projectdate);
	$(".project-entry").append(projectdescription);
	$(".project-entry").append(projectimage);
}
}
project.display();
$("#mapDiv").append(googleMap);