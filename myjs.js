$(document).ready(function(){

	$('.stage_ball9').hide();
	$('.stage_ball_fly').hide();
	$('.fly_bubble1').hide();
	$('button.show_bubble').toggle(function(){

	$('.stage_ball9').slideDown(1000);
	$(this).text('Cховати бульку');

	},function(){
		$('.stage_ball9').slideUp(1000);
		$(this).text('Показати бульку');
	});// show bubble
	
	$('button.fly_bubble').click(function(){	
	$('.stage_ball_fly').show();
	$('.fly_bubble1').show();
	$(this).hide();
	for(var i = 0; i<100;i++){
	$('.stage_ball_fly').animate({
		left:'100px',
		top:'300px'
	},3000).animate({
		left:'1000px',
		top:'10px'
	},5000).animate({
		left:'300px',
		top:'700px'
	},4500).animate({
		left:'300px',
		top:'100px'
	},3000).animate({
		left:'700px',
		top:'600px'
	},3000).animate({
		left:'0px',
		top:'100px'
	},4000);
	}
	});
	$('.fly_bubble1').click(function(){
	location.reload();		
	});  // flying bubble
	
	
	
	$('button.fly').click(function(){
		$('.stage_ball1').animate({
		top:'100px',
		left:'500px'
		},2000).fadeOut(200);
		$('.stage1').animate({
				width:'200px',
				height:'200px'
		},2000);  //ball 1
		
		$('.stage_ball2').delay(150).animate({
			top:'200px',
			left:'700px'
		},2000).fadeOut(200);
		$('.stage2').delay(150).animate({
				width:'110px',
				height:'110px'
		},2000); // ball 2
		
		$('.stage_ball3').delay(200).animate({
			top:'300px',
			left:'600px'
		},2000).fadeOut(200);
		$('.stage3').delay(200).animate({
				width:'250px',
				height:'250px'
		},2000); //ball 3
		
		$('.stage_ball4').delay(300).animate({
			top:'350px',
			left:'800px'
		},2000).fadeOut(300);
		$('.stage4').delay(300).animate({
				width:'250px',
				height:'250px'
		},2000); //ball 4
		
		$('.stage_ball5').delay(350).animate({
			top:'500px',
			left:'300px'
		},3000).fadeOut(300);
		$('.stage5').delay(350).animate({
				width:'150px',
				height:'150px'
		},3000); //ball 5
		
		$('.stage_ball6').delay(450).animate({
			top:'100px',
			left:'1000px'
		},4000).fadeOut(300);
		$('.stage6').delay(450).animate({
				width:'200px',
				height:'200px'
		},3000); //ball 6
		
		$('.stage_ball7').delay(500).animate({
			top:'600px',
			left:'800px'
		},3700).fadeOut(300);
		$('.stage7').delay(500).animate({
				width:'100px',
				height:'100px'
		},3000); //ball 7
		
			$('.stage_ball8').delay(550).animate({
			top:'600px',
			left:'100px'
		},3500).fadeOut(300);
		$('.stage8').delay(550).animate({
				width:'140px',
				height:'140px'
		},3000); //ball 8
		
		/* reload page*/
		$(this).text('reload')
		$(this).click(function(){
			location.reload();
			$(this).text('click me!')
		});
	
	

	});// end click function
	

});//end ready