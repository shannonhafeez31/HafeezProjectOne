$(document).ready(function(){

			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#e1bee7'],
				anchors: ['Home', 'About Me', 'My Skills', 'Portfolio'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Home', 'About Me', 'My Skills', 'Portfolio'],
				paddingTop: 0,
        paddingBottom: 0,
        responsiveWidth: 640,
        css3: true,
				onLeave: function(index, nextIndex, direction){

					if (nextIndex == 2) {
						$('h5').addClass('animated bounceInRight');
					}

        }

			});


   $('ul.tabs').tabs('select_tab', 'tab_id');

	  $('.carousel.carousel-slider').carousel({fullWidth: true});





//d3 code

function circleChart(){
var data = {
    'name': '',
    'children': [
        { 'name': 'Html', 'value': 242 },
        { 'name': 'Css', 'value': 242 },
        { 'name': 'Photoshop', 'value': 162 },
        { 'name': 'Php', 'value': 80 },
        { 'name': 'Microsoft Office', 'value': 100 },
        { 'name': 'mySQL', 'value': 60 },
        { 'name': 'Illustrator', 'value': 100 },
        { 'name': 'Javascript', 'value': 120 }
    ]
}

var diameter = 400,
    format = d3.format(',d');

var bubble = d3.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select('circleChart').append('svg')
    .attr('width', diameter)
    .attr('height', diameter)
    .attr('class', 'bubble')
	.on('mousedown', animateFirstStep);

function animateFirstStep(){
    d3.select(this)
      .transition()
        .delay(0)
        .duration(1000)
        .attr('r', 10)

};

d3.json(data, function(error, root) {
  var node = svg.selectAll('.node')
      .data(bubble.nodes(data)
      .filter(function(d) { return !d.children; }))
    .enter().append('g')
      .attr('class', 'node')
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

  node.append('circle')
      .attr('r', function(d) { return d.r; })
      .style('fill', function(d) { return '#f88' });

  // text part
  node.append('text')
      .attr('dy', '12px')
      .style('text-anchor', 'middle')
      .style('font-size', function(d) {
          var len = d.name.substring(0, d.r / 3).length;
          var size = d.r/3;
          size *= 8 / len;

          return Math.round(size)+'px';
      })
      .text(function(d) {
          var text = d.name.substring(0, d.r / 3);
          /*var pos = text.indexOf(' ', text.length / 2);
          if(pos < text.length / 2 + 5) {
              text = text.substring(0, pos) + "\n" + text.substring(pos+1);
          }*/

          return text;
      });
});

d3.select(self.frameElement).style('height', diameter + 'px');

}



});
