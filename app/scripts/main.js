$(document).ready(function(){
   $('ul.tabs').tabs('select_tab', 'tab_id');

  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $('#showAbout').click(function() {
     $('html,body').animate({
         scrollTop: $('.aboutme').offset().top},
         'slow');
 });

 $('#showSkills').click(function() {
   $('html,body').animate({
       scrollTop: $('.skils').offset().top},
      'slow');
 });

 $('#showPortfolio').click(function() {
   $('html,body').animate({
       scrollTop: $('.portfolio').offset().bottom},
      'slow');
 });

 //d3 code





//d3 code

function chart(){
	dataset = {
        'children': [{
            'facilityId': 'FAC0001',
            'responseCount': 2
        }, {
            'facilityId': 'FAC0006',
            'responseCount': 2
        }, {
            'facilityId': 'FAC0002',
            'responseCount': 1
        }, {
            'facilityId': 'FAC0003',
            'responseCount': 2
        }, {
            'facilityId': 'FAC0004',
            'responseCount': 3
        }, {
            'facilityId': 'FAC0005',
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
                return d.facilityId + ': ' + d.responseCount;
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
                return d.data.facilityId.substring(0, d.r / 3) + ': ' + d.data.responseCount;
            });

    d3.select(self.frameElement)
            .style('height', diameter + 'px');


}



});
