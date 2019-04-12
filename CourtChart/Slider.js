function Slider (team) {
    const width = 700
    const height = 658;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    slider_axis.attr('transform', `translate(0, ${innerHeight+20})`)

    slider_rect.attr("width", innerWidth)
          .attr("height", innerHeight)
          .attr('transform', `translate(0, ${innerHeight})`)

    var minDate = new Date('2001'),
        scale = d3.scaleTime()
            .domain([minDate, d3.timeYear.offset(minDate, 17)])
            .range([margin.left, innerWidth])
            .clamp(true),
        format = d3.timeFormat('%Y');    
    
    slider_axis
        .attr('class', 'axis')
        .call(d3.axisBottom(scale).ticks(d3.timeYear.every(1)));

    slider_rect
        .attr("class", "slider")
        .call(d3.drag().on('drag', dragged));

    var rectWidth = 8;
    rect_entity.attr("x", margin.left)
               .attr("y", -5)
               .attr("width", rectWidth)
               .attr("height", 25);


    function dragged(d) {
        const parseTime = d3.timeParse("%Y");
        var prev = Header.text().split('-')[0]
        var x = Math.min(d3.event.x, innerWidth);
                value = scale.invert(x);

        d3.select('.slider').attr('transform', 'translate(' + Math.max(0,Math.min(x, x-margin.left)) + ',' + innerHeight + ')');
        if (value.getFullYear() != parseTime(prev).getFullYear());
            UpdateData()

    }

}

