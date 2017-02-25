$(document).ready(function(){

			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#e1bee7'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
				menu: '#menu',
				scrollingSpeed: 1000
			});


   $('ul.tabs').tabs('select_tab', 'tab_id');


//Portfolio showcase Code

$('.showWork').hide();//hides all of the reviews until called.
$('.donutKing').hide();
$('.showcase').hide();
$('.lake').hide();
$('.balloon').hide();
$('.cupcake').hide();
$('.dmc').hide();
$('.bmusic').hide();
$('.savegreen').hide();
$('.hax').hide();


$('#showDonut').click(function(){//shows review one and hides the rest.
		$('.showWork').fadeIn(2000);
			 $('.showcase').hide();
			 $('.lake').hide();
			 $('.balloon').hide();
			 $('.cupcake').hide();
			 $('.dmc').hide();
			 $('.bmusic').hide();
			 $('.savegreen').hide();
			 $('.hax').hide();
		$('.donutKing').fadeIn(1000);
  });


$('#showShowcase').click(function(){//shows review one and hides the rest.
			$('.showWork').fadeIn(2000);
					$('.donutKing').hide();
					$('.lake').hide();
					$('.balloon').hide();
					$('.cupcake').hide();
					$('.dmc').hide();
					$('.bmusic').hide();
					$('.savegreen').hide();
					$('.hax').hide();
				 $('.showcase').fadeIn(1000);

 });


 $('#showLake').click(function(){//shows review one and hides the rest.
 			$('.showWork').fadeIn(2000);
	 				$('.showcase').hide();
					$('.donutKing').hide();
					$('.balloon').hide();
					$('.cupcake').hide();
					$('.dmc').hide();
					$('.bmusic').hide();
					$('.savegreen').hide();
					$('.hax').hide();
 				 $('.lake').fadeIn(1000);

  });


$('#showBalloon').click(function(){//shows review one and hides the rest.
			$('.showWork').fadeIn(2000);
					$('.showcase').hide();
					$('.donutKing').hide();
					$('.lake').hide();
					$('.cupcake').hide();
					$('.dmc').hide();
					$('.bmusic').hide();
					$('.savegreen').hide();
					$('.hax').hide();
				 $('.balloon').fadeIn(1000);

});

$('#showCupcakes').click(function(){//shows review one and hides the rest.
			$('.showWork').fadeIn(2000);
					$('.showcase').hide();
					$('.donutKing').hide();
					$('.lake').hide();
					$('.balloon').hide();
					$('.dmc').hide();
					$('.bmusic').hide();
					$('.savegreen').hide();
					$('.hax').hide();
				 $('.cupcake').fadeIn(1000);

});


$('#showDmc').click(function(){//shows review one and hides the rest.
			$('.showWork').fadeIn(2000);
					$('.showcase').hide();
					$('.donutKing').hide();
					$('.lake').hide();
					$('.balloon').hide();
					$('.cupcake').hide();
					$('.bmusic').hide();
					$('.savegreen').hide();
					$('.hax').hide();
				 $('.dmc').fadeIn(1000);

});

$('#showBmusic').click(function(){//shows review one and hides the rest.
			$('.showWork').fadeIn(2000);
					$('.showcase').hide();
					$('.donutKing').hide();
					$('.lake').hide();
					$('.balloon').hide();
					$('.cupcake').hide();
					$('.dmc').hide();
					$('.savegreen').hide();
					$('.hax').hide();
				 $('.bmusic').fadeIn(1000);

});


$('#showGreen').click(function(){//shows review one and hides the rest.
			$('.showWork').fadeIn(2000);
					$('.showcase').hide();
					$('.donutKing').hide();
					$('.lake').hide();
					$('.balloon').hide();
					$('.cupcake').hide();
					$('.dmc').hide();
					$('.bmusic').hide();
					$('.hax').hide();
				 $('.savegreen').fadeIn(1000);

});

$('#showHax').click(function(){//shows review one and hides the rest.
			$('.showWork').fadeIn(2000);
					$('.showcase').hide();
					$('.donutKing').hide();
					$('.lake').hide();
					$('.balloon').hide();
					$('.cupcake').hide();
					$('.dmc').hide();
					$('.bmusic').hide();
					$('.savegreen').hide();
				 $('.hax').fadeIn(1000);

});



});
