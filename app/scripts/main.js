$(document).ready(function(){

			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#e1bee7'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
				menu: '#menu',
				scrollingSpeed: 1000,

			});


   $('ul.tabs').tabs('select_tab', 'tab_id');

});
