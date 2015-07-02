
var formattedname = HTMLheaderName.replace("%data%", "Sameer Kanikdale");
var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");

$("#header").append(formattedname);
$("#header").append(formattedRole);

var bio = {
	"name" : "Sameer",
	"role" : "Web developer",
	"contacts" : {
		"mobile" : 9922428972,
		"email" : "skanikdale@gmail.com",
		"github" : "skanikdale",
		"location" : "Pune, India"
	},

	"skills" : ["awesomeness" , "delivering things", "performer", "skill4"],

	"welcomeMessage" : "Welcome !!!",
	"bioPic" : "images/my.jpg"
};

var work = {
   
   "jobs" : [ 
     {
	   	"employer" : "PTC",
	   	"JobTitile" : "Senior Technical Lead",
	   	"yearsWorked" : "4 years",
	   	"description" : "Worked on Creo drawing.",
	   	"location" : "Pune"
	 },
	 {
	   	"employer" : "Altair",
	   	"JobTitile" : "Senior Software Engineer",
	   	"yearsWorked" : "1 year",
	   	"description" : "Worked on HWE product.",
	   	"location" : "Pune"
	 },
	 {
	   	"employer" : "Siemens",
	   	"JobTitile" : "Sofware Engineer",
	   	"yearsWorked" : "3 years",
	   	"description" : "Worked on Solid Edge simulation.",
	   	"location" : "Pune"
	 },
	 {
	   	"employer" : "M&M",
	   	"JobTitile" : "Assistant Manager",
	   	"yearsWorked" : "2 years",
	   	"description" : "Worked in Logan body shop.",
	   	"location" : "Nashik"
	 }
   ]
};

var projects = {

   "projects" : [
     {
     	"title" : "MBD",
     	"date" : "2014-2015",
     	"description" : "Model based design in Creo"
     },
     {
     	"title" : "CE Import",
     	"date" : "2013-2014",
     	"description" : "Layout import stuff"
     },
     {
     	"title" : "Analysis",
     	"date" : "2011-2013",
     	"description" : "Analysis in Creo"
     }
   ]
};

var education ={
    "schools": [
        {
            "name": "Mechanical Engineering",
            "school": "YCCE",
            "years": 4,
            "location": "Nagpur"
        },
        {
            "name": "MBA",
            "school": "SCMHRD",
            "years": 2,
            "location": "Pune"
        }
    ],
    "onlinecourse": {
        "title": "JavaScript",
        "school": "Udalocation",
        "dates": 2014,
        "url": "www.Udalocation.com"
    }
};

if (bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);

  var formattedskill = HTMLskills.replace("%data%", bio.skills[0]);	

    $("#skills").append(formattedskill);

    formattedskill = HTMLskills.replace("%data%", bio.skills[1]);	
    $("#skills").append(formattedskill);

    formattedskill = HTMLskills.replace("%data%", bio.skills[2]);	
    $("#skills").append(formattedskill);

    formattedskill = HTMLskills.replace("%data%", bio.skills[3]);	
    $("#skills").append(formattedskill);
};


function displayWork() {

	for(job in work.jobs) {

	  $("#workExperience").append(HTMLworkStart);

	  var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);	
	  var formattedTitile = HTMLworkTitle.replace("%data%", work.jobs[job].JobTitile);	
	  var formattedEmployerTitle = formattedemployer + formattedTitile;

	  $(".work-entry:last").append(formattedEmployerTitle);

	  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);	

	  $(".work-entry:last").append(formattedDates);

	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last").append(formattedDescription);
	}
};

displayWork();

function locationizer(work_obj) {

	var locations = [];

	for ( job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locations.push(newLocation);
	}

	return locations;
}

// console.log(locationizer(work));

function internationalizeName(name){

	var nameArray = name.trim().split(" ");

    var newName = nameArray[0] + " " + nameArray[1].toUpperCase;

    return newName;
}

$("#main").append(internationalizeButton);

projects.display = function() {

 for(project in projects.projects) {
 	$("#projects").append(HTMLprojectStart);

 	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 	$(".project-entry:last").append(formattedTitle);

 	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
 	$(".project-entry:last").append(formattedDates);

 	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 	$(".project-entry:last").append(formattedDescription);
 }
}

projects.display();

$("#mapDiv").append(googleMap);



  