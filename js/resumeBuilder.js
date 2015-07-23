var bio = {
	"name" : "Sameer Kanikdale",
	"role" : "Senior Technical Lead",
	"contacts" : {
		"mobile" : "+91-9922428972",
		"email" : "skanikdale@gmail.com",
		"github" : "https://github.com/skanikdale",
		"location" : "Pune, India"
	},

	"skills" : ["C++" , "OOD", "CAD", "PDM"],

	"welcomeMessage" : "Welcome !!!",
	"bioPic" : "images/my4.jpg"
};

var work = {
   
   "jobs" : [ 
     {
	   	"employer" : "PTC",
	   	"JobTitile" : "Senior Technical Lead",
	   	"yearsWorked" : "September 2011 - Present",
	   	"description" : "Worked on Creo drawing.",
	   	"location" : "Pune"
	 },
	 {
	   	"employer" : "Altair",
	   	"JobTitile" : "Senior Software Engineer",
	   	"yearsWorked" : "August 2010 - September 2011",
	   	"description" : "Worked on HWE product.",
	   	"location" : "Pune"
	 },
	 {
	   	"employer" : "Siemens",
	   	"JobTitile" : "Sofware Engineer",
	   	"yearsWorked" : "July 2007 - August 2010",
	   	"description" : "Worked on Solid Edge simulation.",
	   	"location" : "Pune"
	 },
	 {
	   	"employer" : "M&M",
	   	"JobTitile" : "Assistant Manager",
	   	"yearsWorked" : "August 2005 - June 2007",
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

var education = {
	"schools" : [
	{
		"name" : "YCCE, Nagpur",
		"location" : "Nagpur",
		"degree" : "Bachelor's", 
		"majors" : "Mechanical Engineering",
		"dates" : "2001 - 2005",
		"url" : "ycce.edu"
	},
	{
		"name" : "SCMHRD",
		"location" : "Pune",
		"degree" : "Executive MBA", 
		"majors" : "Operations & Finance",
		"dates" : "2010 - 2013",
		"url" : "scmhrd.edu"
	}],

	    "onlineCourses":[
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates_attended":"June 2015",
            "url":"https://www.udacity.com/course/javascript-basics--ud804"
        }]
};

bio.display = function() {

	var profileImage = HTMLbioPic.replace("%data%", "images/my4.jpg");
    $("#header").append(profileImage);

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);


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
    }
}

bio.display();



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

// function internationalizeName(name){

// 	var nameArray = name.trim().split(" ");

//     var newName = nameArray[0] + " " + nameArray[1].toUpperCase;

//     return newName;
// }

// 	$("#main").append(internationalizeButton);

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


education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

	if (education.onlineCourses.length > 0) {
		 $(".education-entry:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }

           
};

education.display();
  