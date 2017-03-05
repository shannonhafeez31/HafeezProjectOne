$(document).ready(function(){
   $('ul.tabs').tabs('select_tab', 'tab_id');
   $('.carousel').carousel({
             dist:2,
             shift:0,
             padding:20,

       });
	 // Add smooth scrolling to all links
	   $('a').on('click', function(event) {

	     // Make sure this.hash has a value before overriding default behavior
	     if (this.hash !== '') {
	       // Prevent default anchor click behavior
	       event.preventDefault();

	       // Store hash
	       var hash = this.hash;

	       // Using jQuery's animate() method to add smooth page scroll
	       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	       $('html, body').animate({
	         scrollTop: $(hash).offset().top
	       }, 800, function(){

	         // Add hash (#) to URL when done scrolling (default click behavior)
	         window.location.hash = hash;
	       });
	     } // End if
	   });

		 $('#intro').addClass('animated infinite bounce');


$('.chart3').hide();

		 $( '#webBtn' ).click(function() {
        $('.chart_two').fadeOut();
         $('.chart_three').fadeOut();
        	 chart();
             $('.chart').fadeIn();
			  	$('.chart').addClass('animated bounceInDown');

      });

      $( '#graphicBtn' ).click(function() {
        $('.chart').fadeOut();
         $('.chart_three').fadeOut();
         chartTwo();
          $('.chart_two').fadeIn();
 			  	$('.chart_two').addClass('animated bounceInDown');

       });

       $( '#marketingBtn' ).click(function() {
         $('.chart').fadeOut();
         $('.chart_two').fadeOut();
          chartThree();
           $('.chart_three').fadeIn();
  			  	$('.chart_three').addClass('animated bounceInDown');

        });






 //d3 code
 function chart(){
var dataset = {
     'children': [{
         'facilityId': 'Microsoft Office',
         'responseCount': 2
     }, {
         'facilityId': 'Adobe',
         'responseCount': 2
     }, {
         'facilityId': 'PHP',
         'responseCount': 1
     }, {
         'facilityId': 'CSS',
         'responseCount': 2
     }, {
         'facilityId': 'HTML',
         'responseCount': 3
     }, {
         'facilityId': 'JavaScript',
         'responseCount': 1
     }]
 };

 var diameter = 600;
 var color = d3.scaleOrdinal(d3.schemeCategory20);

 var bubble = d3.pack(dataset)
         .size([diameter, diameter])
         .padding(1.5);
 var svg = d3.select('.chart')
         .append('svg')
         .attr('width', diameter)
         .attr('height', diameter)
         .attr('class', 'bubble');

 var nodes = d3.hierarchy(dataset)
         .sum(function(d) { return d.responseCount; });

 var node = svg.selectAll('.node')
         .data(bubble(nodes).descendants())
         .enter()
         .filter(function(d){
             return  !d.children
         })
         .append('g')
         .attr('class', 'node')
         .attr('transform', function(d) {
             return 'translate(' + d.x + ',' + d.y + ')';
         });

 node.append('title')
         .text(function(d) {
             return d.facilityId;
         });

 node.append('circle')
         .attr('r', function(d) {
             return d.r;
         })
         .style('fill', function(d) {
             return color(d.facilityId);
         });

 node.append('text')
         .attr('dy', '.3em')
         .style('text-anchor', 'middle')
         .text(function(d) {
             return d.data.facilityId.substring(0, d.r / 3);
         });

 d3.select(self.frameElement)
         .style('height', diameter + 'px');


}

function chartTwo(){
var dataset = {
    'children': [{
        'facilityId': 'Adobe Photoshop',
        'responseCount': 2
    }, {
        'facilityId': 'Adobe Dreamweaver',
        'responseCount': 2
    }, {
        'facilityId': 'Adobe Indesign',
        'responseCount': 1
    }, {
        'facilityId': 'Adobe Premire',
        'responseCount': 2
    }, {
        'facilityId': 'Adobe Illustrator',
        'responseCount': 3
    }, {
        'facilityId': 'AutoDesk Maya',
        'responseCount': 1
    }]
};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);
var svg = d3.select('.chart_two')
        .append('svg')
        .attr('width', diameter)
        .attr('height', diameter)
        .attr('class', 'bubble');

var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.responseCount; });

var node = svg.selectAll('.node')
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append('g')
        .attr('class', 'node')
        .attr('transform', function(d) {
            return 'translate(' + d.x + ',' + d.y + ')';
        });

node.append('title')
        .text(function(d) {
            return d.facilityId;
        });

node.append('circle')
        .attr('r', function(d) {
            return d.r;
        })
        .style('fill', function(d) {
            return color(d.facilityId);
        });

node.append('text')
        .attr('dy', '.3em')
        .style('text-anchor', 'middle')
        .text(function(d) {
            return d.data.facilityId.substring(0, d.r / 3);
        });

d3.select(self.frameElement)
        .style('height', diameter + 'px');


}


function chartThree(){
var dataset = {
   'children': [{
       'facilityId': 'Microsoft PPT',
       'responseCount': 2
   }, {
       'facilityId': 'Microsoft Excel',
       'responseCount': 2
   }, {
       'facilityId': 'Branding',
       'responseCount': 1
   }, {
       'facilityId': 'Social Media',
       'responseCount': 2
   }, {
       'facilityId': 'Microsoft Word',
       'responseCount': 3
   }, {
       'facilityId': 'Microsoft Access',
       'responseCount': 1
   }]
};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
       .size([diameter, diameter])
       .padding(1.5);
var svg = d3.select('.chart_three')
       .append('svg')
       .attr('width', diameter)
       .attr('height', diameter)
       .attr('class', 'bubble');

var nodes = d3.hierarchy(dataset)
       .sum(function(d) { return d.responseCount; });

var node = svg.selectAll('.node')
       .data(bubble(nodes).descendants())
       .enter()
       .filter(function(d){
           return  !d.children
       })
       .append('g')
       .attr('class', 'node')
       .attr('transform', function(d) {
           return 'translate(' + d.x + ',' + d.y + ')';
       });

node.append('title')
       .text(function(d) {
           return d.facilityId;
       });

node.append('circle')
       .attr('r', function(d) {
           return d.r;
       })
       .style('fill', function(d) {
           return color(d.facilityId);
       });

node.append('text')
       .attr('dy', '.3em')
       .style('text-anchor', 'middle')
       .text(function(d) {
           return d.data.facilityId.substring(0, d.r / 3);
       });

d3.select(self.frameElement)
       .style('height', diameter + 'px');


}







});
