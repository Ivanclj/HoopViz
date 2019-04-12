function add_court_component(){
    var Basket = court_g.append('circle');
    var Backboard = court_g.append('rect');
    var Outterbox = court_g.append('rect');
    var Innerbox = court_g.append('rect');
    var CornerThreeLeft = court_g.append('rect');
    var CornerThreeRight = court_g.append('rect');
    var OuterLine = court_g.append('rect');
    
}

function draw_court(){
    const width = 700;
    const height = 658;
    court_g.attr("width", width)
           .attr("height", height)

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    court_xScale.range([margin.left, innerWidth])
              .nice();

    court_yScale.range([margin.top, innerHeight])
              .nice();

    Basket.attr('cx', court_xScale(0))
           .attr('cy', court_yScale(-.75))
           .attr('r', court_yScale(0.75)-court_yScale(0))
           .style('fill', 'None')
           .style('stroke', 'snow');

    Backboard.attr('x', court_xScale(-3))
           .attr('y', court_yScale(-1.5))
           .attr('width', court_xScale(3)-court_xScale(-3))
           .attr('height', 1)
           .style('fill', 'none')
           .style('stroke', 'snow');

    Outterbox
           .attr('x', court_xScale(-8))
           .attr('y', court_yScale(-4))
           .attr('width', court_xScale(8)-court_xScale(-8))
           .attr('height', court_yScale(15)-court_yScale(-4))
           .style('fill', 'none')
           .style('stroke', 'snow');

    Innerbox
           .attr('x', court_xScale(-6))
           .attr('y', court_yScale(-4))
           .attr('width', court_xScale(6)-court_xScale(-6))
           .attr('height', court_yScale(15)-court_yScale(-4))
           .style('fill', 'none')
           .style('stroke', 'snow');

    CornerThreeLeft
           .attr('x', court_xScale(-22))
           .attr('y', court_yScale(-4))
           .attr('width', 1)
           .attr('height', court_yScale(10)-court_yScale(-4))
           .style('fill', 'none')
           .style('stroke', 'snow')
           .style('opacity',0.8);

    CornerThreeRight
           .attr('x', court_xScale(22))
           .attr('y', court_yScale(-4))
           .attr('width', 1)
           .attr('height', court_yScale(10)-court_yScale(-4))
           .style('fill', 'none')
           .style('stroke', 'snow')
           .style('opacity',0.8);;

    OuterLine
           .attr('x', court_xScale(-25))
           .attr('y', court_yScale(-4))
           .attr('width', court_xScale(25)-court_xScale(-25))
           .attr('height', court_yScale(43)-court_yScale(-4))
           .style('fill', 'none')
           .style('stroke', 'snow');

    appendArcPath(RestrictedArea, court_xScale(3)-court_xScale(0), (90)*(Math.PI/180), (270)*(Math.PI/180))
        .attr('fill', 'none')
        .attr("stroke", "snow")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(-0.75) +")");

    appendArcPath(TopFreeThrow, court_xScale(6)-court_xScale(0), (90)*(Math.PI/180), (270)*(Math.PI/180))
        .attr('fill', 'none')
        .attr("stroke", "snow")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(15) +")");

    appendArcPath(BottomFreeThrow, court_xScale(6)-court_xScale(0), (-90)*(Math.PI/180), (90)*(Math.PI/180))
        .attr('fill', 'none')
        .attr("stroke", "snow")
        .style("stroke-dasharray", ("3, 3"))
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(15) +")");

    var angle = Math.atan((10-0.75)/(22))* 180 / Math.PI
    var dis = court_yScale(18.9);

    appendArcPath(ThreeLine, dis, (angle+90)*(Math.PI/180), (270-angle)*(Math.PI/180))
        .attr('fill', 'none')
        .attr("stroke", "snow")
        .attr('class', 'shot-chart-court-3pt-line')
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(0) +")");

    appendArcPath(CenterOuter, court_xScale(6)-court_xScale(0), (-90)*(Math.PI/180), (90)*(Math.PI/180))
        .attr('fill', 'none')
        .attr("stroke", "snow")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(43) +")");

    appendArcPath(CenterInner, court_xScale(2)-court_xScale(0), (-90)*(Math.PI/180), (90)*(Math.PI/180))
        .attr('fill', 'none')
        .attr("stroke", "snow")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(43) +")");

    }


function appendArcPath(base, radius, startAngle, endAngle) {
      var points = 30;

      var angle = d3.scaleLinear()
          .domain([0, points - 1])
          .range([startAngle, endAngle]);

      var line = d3.lineRadial()
          .radius(radius)
          .angle(function(d, i) { return angle(i); });

      return base.datum(d3.range(points))
          .attr("d", line);
}


