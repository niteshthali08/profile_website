var experience = {
	company : [
		{
			id : 'sols', // this should refer to variable name containing details about this experience, see below
			designation:'Software Developer',
			company_name: 'School of Life Sciences, ASU',
			date:'Jan 2016 - Present',
			company_logo:'images/sols_logo.jpg'
		},
		{
			id : 'akamai', // this should refer to variable name containing details about this experience, see below
			designation:'Software Development Engineer in Test II',
			company_name: 'Akamai Technologies India',
			date: 'Sept 2012 - July 2015',
			company_logo:'images/akamai_logo.jpg'
		},
		{
			
			id:'psl', // this should refer to variable name containing details about this experience, see below
			designation:'Project Intern',
			company_name:'Persistent Systems Limited, India',
			date: 'Sept 2011 - April 2012',
			company_logo:'images/psl_logo.png'
		}

	]
}

var akamai = {
	designation: 'Software Development Engineer in Test II - Akamai Technologies(Sept 2012 - July 2015)',
	img_url : 'images/akamai_img.jpg',
	description : '<ol> <li>Media Analytics Team:</li>' + 
	'<ul> <li>I Joined this team as a fresher and I worked on enhancing the quality of the following Media Analytics Plug-ins:</li>'+ 
        '<ul> <li>HTML5 JS Plug-in </li>' +
        '<li>Silverlight Plug-in </li>' +
        '<li>Android Plug-in </li>' +  
        '<li>Silverlight plug-in for XBOX </li> </ul>' +
	'<li>Developed a Media Analytics Plug-in for NetGem set top boxes by writing a wrapper over native JavaScript plug-in. The plug-in would capture the behavior of an end user and report the logs to the server for analytical purpose.</li>' + 
	'<li>Developed a simulated video player in JavaScript that simulated the events as those generated by actual video player for automating plug-in testing, thereby calculating complex metrics for verification with those reported by the actual plug-in.</li>' + 
'</ul> <li> Media Transcoding Team & NetStorage Team </li>' + 
	'<ul><li> As part of this team, I was responsible for ensuring that VOD transcoding process works end to end from portal to back end and results of the transcoding are correctly displayed on the UI.</li>' +
	'<li> Developed a automation framework in Java and Selenium provided functionality like Google XSLT for reporting, logger for logging each step and ANT support for command line execution.</li>' +
	'<li>Developed a framework for testing Transcoding REST APIs using Python and Mongo db.</li></ul> </ol>'
}
var sols = { 
	designation: 'Software Developer - SOLS, ASU(Jan 2016 - Present)',
	img_url : 'images/sols_img.jpg',
	description : '<b>Technologies:</b> <i> Java, EMF, Maven, OSGi, React JS, Backbone JS, WebSockets, Travis, git, git-lfs </i>' +
	'<p>Github: <a target ="_blank" href ="https://github.com/openworm">https://github.com/openworm</a>'+
	'<p>Currently working on enhancing open source project Geppetto - a web-based multi-algorithm, multi-scale simulation platform engineered to support the simulation of complex biological systems and their ' +
	'surrounding environment.</p>' +
	'<p>Developed a Java module to provide support for Neurodata Without Borders (NWB) inside Geppetto. NWB is a written in Heirarchical Data File Format (HDF5) file format. ' +
	'The module involved parsing NWB file to extract experimental data from this file format and plotting it on the UI. ' +  
	'The experimental data in this file is huge and loading entire file at once is not desirable. So lazy loading functionality was provided ' +
	'in which I presented user with the preview of what contains in the file and loaded the particular content as and when requrired by the user' +
	'</p>'
}
var psl = {
	designation: 'Project Intern - Persistent Systems(Sept 2011 - April 2012)',
	img_url: 'images/psl_img.jpg',
	description : '<b>Project:</b> <i>To build a software controlled laptop cooling pad. </i>' +
'<p>Idea was based on an article from a ‘CHIP’ magazine where in they had demonstrated a way to build a laptop-cooling pad. We came up with a tweak to make these laptop-cooling pads energy efficient by varying the speed of the fans based on the operating temperature of the CPU cores.' +
'The entire project was divided into 3 parts:' +
'<ol><li> Developing the software - used Java and Java Swings to create a desktop application.</li>' +	
'<li> Designing & constructing hardware and PCB using soldering.</li>' +
'<li>Interfacing the hardware with software. </li> </ol></p>' + 
'<p>I developed a multi threaded code in Java to continuously monitor the temperature of CPU, change the speed of the fans '+
'on laptop cooling pad and simultaneously update the application UI. Interfacing between hardware and software for the project was written using C ' + 
'and the GUI was developed using Java Swings. </p>'
}
var skills = {
	skill:[
		{
			name : 'C++',
			percent: .8
		},
		{
			name : 'C',
			percent: .75
		},
		{
			name : 'Java',
			percent: .75
		},
		{
			name : 'Python',
			percent: .7
		},
		{
			name : 'JavaScript',
			percent: .6
		},
		{
			name : 'SQL',
			percent: .6
		},
		{
			name : 'Machine Learning',
			percent: 0.6
		},
		{
			name : 'Web Technologies',
			percent: .5
		},
		{
			name : 'Mongo db',
			percent: .5
		},
		
		{
			name : 'Matlab',
			percent: .45
		}
	]
}
var projects = {

	project:[
		{
			title: 'Generating News articles from micro blogging sites',
			img: 'images/projects/news.png',
			description: '',
			id: 'project1'

		},
		{
			title: 'Sentiment Analysis for Popularity Prediction',
			img: 'images/projects/sentiment_analysis.png',
			description: '',
			id : 'project2'
		},
		{
			title:'Machine Learning Algorithms',
			img: 'images/projects/machine_learning.jpg',
			description: '',
			id : 'project3'

		},
		{
			title:'DMNS - a new programming language!',
			img: 'images/projects/dmns.jpg',
			description: '',
			id : 'project4'

		},
		{
			title:'MeetMe - An Intelligent Meeting scheduler',
			img: 'images/projects/meet_me.jpeg',
			description:'',
			id: 'project5'

		}
		// {
		// 	title:'Software Controlled Laptop Cooling Pad',
		// 	img: 'images/projects/pad.jpg',
		// 	description: '',
		// 	id: 'project6'

		// }

	]

}


var project1 = {
			
			title: 'Generating News articles from micro blogging sites.',
			date: 'Jan 2016 - July 2016',
			description: '<b>Technologies</b>: <i>Python, Mongo db, RDF, SPARQL </i> <br>' + 
			'<b>Github:</b><a href="https://github.com/niteshthali08/Disaster-Notofication" target = "_blank" > https://github.com/niteshthali08/Disaster-Notofication </a>' +
			'<p>' + 
			'For my Applied Project, I worked on this idea of generating news articles from tweets. I used Tweeter to obtain disaster related tweets and enriched them with the information present in the Semantic Cloud Graph. The entire project was divided into 2 Phases:' + 
			'<ul> <li>To automatically classify the disaster related tweets into either Informative or non-informative. This was the major step as the success of news generation totally dependent on the way in which the tweet is written. Informative tweet is the one which provides enough information about the particular disaster/event and provide answers to the questions like  where, when, who and what. I implemented and studied two of the most popular classification algorithms SVM and Naive Bayes Classification Algorithm. For my application, both of these algorithms provided similar performances while NB classifier beating SVM by slight margins.</li>' +
			'<li>The second phase involved enriching these Informative tweets with knowledge obtain from the Linked Open Data Cloud. In this project I used DBPedia which a semantic knowledge graph containing all the information from the Wikipedia. From the tweets, I identified the named entities and using these entities I queried wikipedia for wiki URL for the entity. I mapped these wiki urls to DBPedia Urls as there is one to one mapping between these two. Using DBPedia, I identified whether this entity represents a Person, Place, Organization, or just a concept. Along with this I also extracted some more information regarding this entities from DBPedia like abstract, geo co-ordinates, wikipedia url for person etc. Finally I generated the news articles in the form RDF triples using the rNews ontology facilitating news generation and retrieval.</li></ul>' +
			'</p>'
}
var project2 = {
			
			title: 'Sentiment Analysis for Popularity Prediction.',
			date: 'Aug 2015 - Dec 2015',
			description: '<b>Technologies:</b> <i>Python, Java, Mongo db </i> <br>' + 
			'<p>' +
			'The goal of the project is to forecast the popularity using sentiments extracted from the user comments. We chose YouTube as our domain to predict popularity of the music albums based on the sentiments expressed by users in the form of comments on those videos.' +
			'The entire project was divided into four phases:' + '<ul>' + 
			'<li> Scraping user comments from YouTube from randomly generated URLs. </li>' + 
			'<li>Data Cleaning and Spam removal. </li>' +
			'<li>S-PLSA (Sentiment Probabilistic Latent Semantic Analysis) algorithm to classify the sentiments into hidden topics based on the appraisal words present in the comments.</li>' +
			'<li>Popularity Prediction of the music albums using Multinomial Logistic Regression.</li> </ul>' +
			'<p>I developed a scraper which generated URLs at random for the music albums and mined the thousands of the comments. Developed scripts in Python to clean and preprocess this data. Implemented tasks such as spelling correction, removing hyperlinks, foreign language comments and spam. For Spam removal, I implemented "Naive Bayes Classification" algorithm which identified and removed the spam comments from the data to provide data in the cleanest form for sentiment analysis.' +
			' I also implemented the Logistic Regression Model for predicting popularity of video into three categories namely high, medium and low'+ 
			'</p>'  
			
}
var project3 = {
			
			title: 'Machine Learning Algorithms',
			date: 'May 2016 - July 2016',
			description: '<b>Technologies:</b> <i>Matlab</i> <br>' + 
			'<b>Github:</b><a href="https://github.com/niteshthali08/ML-Coursera" target = "_blank" > https://github.com/niteshthali08/ML-Coursera </a>' +
			'<p>' +  
			'Took this online Coursera <a href="//www.coursera.org/learn/machine-learning/home/welcome" target = "_blank">Machine Learning Course </a> by Prof. Andrew Ng.' +
			' As part of this course, implemented various machine learning algorithms which are provided below. The assignments involved coding for some of the state of the art machine laerning applications and provided insights into the various Machine Learning Techniques.' +
			' Finally, successfully completed this comprehensive course and received my <a target = "_blank" href= "https://www.coursera.org/account/accomplishments/certificate/TFC42A24XHG8"> certificate </a> for the same.' +
			' Following algorithms were implemented and coded in MATLAB.</p>' + '<ul>' + 
			'<li>Linear regression to predict selling price of the house given features of the house</li>' +
			'<li> Logistic regression model to predict whether a student gets admitted into a university.</li>' +
			'<li> Regularized logistic regression to predict whether microchips from a fabrication plant passes quality assurance.</li>' +
			'<li> One-vs-all logistic regression to recognize hand-written digits (Multi-class Classification).</li>' +
			'<li> Neural network to recognize hand-written digits (Feedforward Propagation).</li>' +
			'<li> Backpropagation algorithm for neural networks to recognize hand-written digit recognition. (Regularized Neural Networks)</li>' +
			'<li> Regularized linear regression to predict the amount of water flowing out of a dam using the change of water level in a reservoir. (the effects of bias v.s. variance) </li>' +
			'<li> Support vector machines (SVMs) with Gaussian Kernels to build an Email spam classifier.</li>' +
			'<li> K-means clustering algorithm to compress an image.</li>' +
			'<li> Principal component analysis to find a low-dimensional representation of face images.</li>' +
			'<li> Anomaly detection algorithm to detect failing servers on a network.</li>' +
			'<li> Collaborative filtering to build a recommender system for movies.</li>' +
			'</ul>'


}
var project4 = {
			
			title: 'DMNS - A new programming language',
			date: 'Jan 2016 - May 2016',
			description: '<b>Technologies:</b> <i> Python, Java, Antlr</i> <br>' + 
			'<b>Github:</b><a href="https://github.com/niteshthali08/DMNS" target = "_blank" > https://github.com/niteshthali08/DMNS </a>' +
			'<p>' +  
			'In this project we developed a new programming language called \'DMNS\'.' +
			' DMNS derives its syntax from C++ and also has some flavours of Python.' +
			' As part of this project: </p>' +
			'<ul> <li>Developed a compiler by writting BNF grammar and parsing it in Bottom-Up fashion.</li>' +
			'<li>Developed a Run time interpreter for assembly code generated by compiler.</li>' +
			'<li> DMNS provided some of the following functionalities to its user. </li>' +
			'<ul><li>Two levels of scoping (globlal and function level)</li>' +
			'<li> Run time type checking </li>' +
			'<li> Support for functions </li>' +
			'<li>Powerful enough to handle recursive function calls</i>' + 
			'<li>user defined stack </li>' + 
			'<li>Conditional  Structures</li>' +
			 '<li>Iterative structures for looping </li>' +
			'</ul> </ul>'
}
var project5 = {
			
			title: 'MeetMe - An Intelligent Meeting Scheduler',
			date: 'Aug 2015 - Dec 2015',
			description:'<p>' +
			'<b>Technologies:</b> <i> Meteor, Javascript, Mongo db </i> <br>' + 
			'<b>Github:</b><a href="https://github.com/niteshthali08/MeetMe-Segfault" target = "_blank" > https://github.com/niteshthali08/MeetMe-Segfault </a>' +
			'</p>' +
			'<p>Developed a Web application using JavaScript Framework ‘Meteor’ which facilitate users to schedule meetings online in an efficient and a better way. </li>' +  
			'Application was integrated with user\'s google calendar and slots for meeting were recommended based on the availbaility.' +
			' Users were allowed to select multiple meeting days as well as mulitple time slots on particular day. Finally, a poll is conducted to record the participants choice for the meeting slot and whichever slot gets maximum votes was selected as the prefered slot for the meeting. ' + 
			' At every stage of the process, users were kept informed by sending an email to the registered email ID. Also multiple crons were writeen to do the various tasks such as sending meeting remider just a day before the metting, voting closes deadline email etc' +
			'<ul> <li>Mongo db was used as a data store. </li>' + 
			'<li>The project was developed by following Agile Scrum Methodology guidelines. </i>' +
			'<li>GitHub being used as a code repository while Taiga is used as collaboration tool for tracking sprints and maintaining product backlog.</li></ul>' + 
			'</p>' + 
			'<p>Meteor framework comes with the library using which you can convert your Web app directly into Mobile App just by running one command. So at the end of the project, we had out Android App and iOS app running for the project. The project was voted as the best from the respective category in the class by the students and Professor.' +
			'</p>'
			
}
// var project6 = {
			
// 			title: 'Generating News articles from micro blogging sites',
// 			date: 'Jan 2016 - July 2016',
// 			description: 'Technologies: <i>Python, Mongo db </i> <br>' + 
// 			'Github:<a href="https://github.com/niteshthali08/Disaster-Notofication" target = "_blank" > https://github.com/niteshthali08/Disaster-Notofication </a>' +
// 			'<p>' +  


// 			'</p>'
// 		}
//}