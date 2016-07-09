
$(document).ready(function() {
	// navigation click actions	
	// $('.scroll-link').on('click', function(event){
	// 	event.preventDefault();
	// 	var sectionID = $(this).attr("id");
	// 	console.log(sectionID)
	// 	scrollToID('#' + sectionID, 750);

	/* Animation for landing page */
 	
	//$("#alert_box").css("visibility", 'visible');
	//$(selector).fadeTo(speed,opacity,easing,callback)
	
	// $(id = ['#intro']).click(function(){
	// 		applyAnimationToIntro(); 
	// }
	$(document).scrollTop(0);
	applyAnimationToIntro(); 

	function showTemplate(template, id, data){
		//console.log('inside show template: ' +  id);
		var html    = template(data);
		$('#' + id).html(html);
		$('.model').css('padding-right', '0px');
	}
	/* Project Template Addition*/
	function addTemplateToProject(template, id, data){
		
		showTemplate(template, id, data);
		for (var i = 0; i<projects.project.length; i++) {
			id = projects.project[i].id;
			img = projects.project[i].img;
			//console.log(id);
			//console.log(img);
			$('#' + id).addClass('project_setup');
			$('#' + id).css('background', 'url(' + img + ') no-repeat').css('background-size', 'cover');
		};	
	}

	function addTemplateToExperience(template, id, data){
		showTemplate(template, id, data);
			
	}
	/* SKILLS TEMPLATE */

	var bars = []
	function animateSkills(skills){
		for (var i = 0; i<skills.skill.length; i++) {
					// progressbar.js@1.0.0 version is used
		// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
			var id = skills.skill[i].id;
			var to = skills.skill[i].percent;
			var bar = new ProgressBar.Circle("#" + id , {
			  color: '#ff9900',
			  // This has to be the same size as the maximum width to
			  // prevent clipping
			  strokeWidth: 10,
			  trailWidth: 8,
			  easing: 'easeInOut',
			  duration: 1400,
			  text: {
			    autoStyleContainer: false
			  },
			  from: { color: '#bb33ff', width: 2 },
  			  to: { color: '#bb33ff', width: 10 },
			  // Set default step function for all animate calls
			  step: function(state, circle) {
			    circle.path.setAttribute('stroke', state.color);
			    circle.path.setAttribute('stroke-width', state.width);

			    var value = Math.round(circle.value() * 100);
			    if (value === 0) {
			      circle.setText('');
			    } else {
			      circle.setText(value);
			    }

			  }
			});
			bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
			bar.text.style.fontSize = '2rem';
			bars.push(bar);
			bar.animate(to);  // Number from 0.0 to 1.0
		};
	} // function animateSkills ends here.

	function applyAnimationOnSkills(){
		//console.log(bars);
		for(var i=0; i<bars.length; i++){
			//console.log('inside applyAnimationOnSkills' + skills.skill[i].percent);
			bars[i].animate(0);		
		}
		setTimeout(function(){
			//console.log('Adding after 3 seconds');
			for(var i=0; i<bars.length; i++)
				bars[i].animate(skills.skill[i].percent);
		}, 2000);
	}
	function addTemplateToSkills(template, id, data){
		for (var i = 0; i<skills.skill.length; i++) {
			skills.skill[i].id = 'lang_' + i;
		}
		showTemplate(template, id, skills);
		animateSkills(skills);
	}

	var source   = $("#academics_template").html();
	academic_template = Handlebars.compile(source);

	source  = $("#experience_template").html();
	experience_template = Handlebars.compile(source);

	source  = $("#projects_template").html();
	projects_template = Handlebars.compile(source);

	/*project set up below */
	source  = $("#proj_setup_template").html();
	proj_setup_template = Handlebars.compile(source);
	addTemplateToProject(proj_setup_template, "projects", projects);
	/*project set up ends here */

	/*experience set up below */
	source  = $("#experience_setup_template").html();
	experience_setup_template = Handlebars.compile(source);
	addTemplateToExperience(experience_setup_template, "experience", experience);
	/*experience set up ends here */

	source  = $("#skills_template").html();
	skills_template = Handlebars.compile(source);
	addTemplateToSkills(skills_template, "skills_container", skills);

	/* Calls to handle template data */
	$(".college").click(function(){
		id = $(this).attr('id');
		if (id == 'asu_courses'){
			//console.log('asu clicked');
			showTemplate(academic_template, "template_content", asu_courses);
		}else if (id == 'gec_courses'){
			//console.log('gec clicked');
			showTemplate(academic_template, "template_content", gec_courses);
		}
	});


	$(".company").click(function(){
		id = $(this).attr('id'); // id will be a variable name giving description about it.
		//console.log('clicked id: ' + id)
		showTemplate(experience_template, "template_content", eval(id)); //note eval function, converts string to variable. 
	});
	/* function to remove padding-right:15px which gets added automatically to the modal */
	$('#myModal').on('show.bs.modal', function (event) {
    	setTimeout(function(){ 
     		$('#myModal').attr("style", "").attr('style', 'display:block;');
    	}, 100);
    	$('body').addClass('test');
   	});

	$(".project_divs").click(function(){
		id = $(this).find(">:first-child").attr("id"); // id will be a variable name giving description about it.
		$('.model').css('padding-right', '0px');
		console.log('clicked project id: ' + id)
		showTemplate(projects_template, "template_content", eval(id)); //note eval function, converts string to variable. 
	});
	
	

	    /**** This is important the way id is selected becuase of # in it */
	function applyAnimationToIntro(){
		console.log('Inside animation for home ');
		$("#alert_box").animate(
		{ 
		'margin-top': '0%',
		'margin-right':'0%',
		}, 500, 'easeInOutExpo');

		$('#alert_box').fadeTo(1000, 1, 'easeInOutExpo');
		$("#profile_pic").animate({
 				"margin-top":"0%",
 			},500, 'easeInOutExpo', function(){
 				$('#profile_pic').fadeTo(500, 1, 'easeInOutExpo', function(){
	 				$("#intro_text").animate(
	 				{ 	
	 					'left':'0%',
				 		'right': '0%'
	 				}, 2000, 'easeInOutExpo');
	 		});		
		});
	}	

	// Click on load

	$(".scroll-link").click(function(){
		
		id = $(this).attr('id');
		console.log('scroll link clicked: ' + id)
		scrollMe(id);
		//event.preventDefault();
		console.log('Exiting scroll-link click');
	});

	$("#contact_link").click(function(event){
		console.log('click received on contact_me');
		scrollMe('#contact_me');
		event.preventDefault();
	})

	function scrollMe(e_id){
        console.log('Inside scroll function id: ' + e_id)
        $('html, body').stop().animate({
            scrollTop: $(e_id).position().top -40
        }, 1400, 'easeInOutExpo', function(){
			if(e_id == '#intro'){
				console.log('Applying animation on intro');
				applyAnimationToIntro();
			}
			else if (e_id == '#contact_me'){
				console.log('scroll me - contact_me');
			}
			else{
				$(e_id).find('.success_msg').fadeTo(1400, 1);
				if (e_id == '#skills')
					applyAnimationOnSkills();
			}
	    });
	}

	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$("a[id = '#intro'").click(); 
	});

	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$("#intro .row #profile_pic").removeClass('slide_profile_pic');
		$("#intro .row #profile_pic").addClass('slide_profile_pic');
		//$('#main-nav').toggleClass("open");
	});

   	var flag = 0;
   	$(window).scroll(function(event) {
  		var scrollPosition = $(document).scrollTop();
  		if (scrollPosition > 50) {
    		//console.log('Adding Shrink...')
    		$('nav').addClass('shrink');
  		} else {
    		//console.log('removing Shrinking...')
    		$('nav').removeClass('shrink');
    	}
  		// making active on scroll
		//console.log('scrollPosition:' + scrollPosition)
		
		$('.nav a').each(function () {
			var currentLink = $(this);
			var id = currentLink.attr("id")
			var id_element = $(id);
			//console.log($(currentLink.attr("id")))
			if (scrollPosition + 70 >= id_element.position().top) {
				// console.log(currentLink.attr("id"))
				// console.log(scrollPosition + " " + refElement.position().top + '---')
				// console.log('nitesh')
				$('#page-top').click();
				$(".nav").find(".active").removeClass("active");
				currentLink.parent().addClass("active");
				$(id).find('.success_msg').fadeTo(1400, 1);
				console.log(id);
				if ((id == "#skills") && !($('#skills').hasClass('skillsanimation'))){
					console.log('Does not have a class')
					applyAnimationOnSkills()
					$('#skills').addClass('skillsanimation');
				}

				// hack to avoid highlighted of text on click on menu
			}else{

			 	currentLink.parent().removeClass("active");

			}
		});
	});
});
