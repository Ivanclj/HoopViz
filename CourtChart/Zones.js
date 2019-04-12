function draw_zone(){
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

    appendZonePath(ZeroToThree, 0, court_xScale(3) - court_xScale(0), (90)*(Math.PI/180), (270)*(Math.PI/180))
        .attr("stroke", "none")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(-1.4) +")");

    appendZonePath(ThreeToTen, court_xScale(3) - court_xScale(0), court_xScale(10) - court_xScale(0), (90)*(Math.PI/180), (270)*(Math.PI/180))
        .attr("stroke", "none")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(-1.4) +")");

    appendZonePath(TenToSixteen, court_xScale(10) - court_xScale(0), court_xScale(16) - court_xScale(0), (90)*(Math.PI/180), (270)*(Math.PI/180))
        .attr("stroke", "none")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(-1.4) +")");

    SixteenPlus
        .attr("d", "M281,0, L204,0, A204,204,0,0,1,-204,0 L-280.2,0 L-280.2,138 A309,321,0,0,0,281,138 L281,0 Z")
        .attr("stroke", "none")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(-1.4) +")");

    ThreePointFull
        .attr("d", "M319,118, L319,-16.8, L283,-16.8, L283,118, A310,320.5,0,0,1,-282,118, L-282,-16.8, L-320,-16.8, L-320,118, A250,200,0,0,0,319,118 Z")
        .attr("stroke", "none")
        .attr("transform", "translate(" + court_xScale(0) + ", " +court_yScale(0) +")");

                //320
        //283
        //110
        //-16

        //M281.93692064670165,118.54165981736317L271.43785381366126,140.93276358971133L259.1640572251923,162.40241309345507L245.19578008645027,182.81023429719986L229.62435054758782,202.0227956731579L212.55157857707061,219.91448060642887L194.0890903021982,236.36830870839083L174.3575981690804,251.2767006642468L153.4861116939498,264.54218161395806L131.6110939661175,276.07801846768206L108.8755694175729,285.8087869887825L85.42818869285463,293.67086493668046L61.422256733312466,299.61284804525167L37.01473043039249,303.59588611699826L12.365192401543103,305.59393703552564L-12.365192401543164,305.59393703552564L-37.01473043039241,303.59588611699826L-61.42225673331239,299.61284804525167L-85.42818869285456,293.67086493668046L-108.87556941757285,285.8087869887826L-131.61109396611744,276.07801846768206L-153.4861116939497,264.54218161395806L-174.35759816908038,251.27670066424682L-194.08909030219814,236.36830870839088L-212.55157857707056,219.9144806064289L-229.62435054758774,202.02279567315796L-245.1957800864503,182.8102342971998L-259.16405722519215,162.40241309345535L-271.4378538136612,140.9327635897114L-281.93692064670165,118.54165981736324








    ImagePlaceRight
        .attr('x', court_xScale(-24))
        .attr('y', court_yScale(30))
        .attr('width', court_xScale(25)-court_xScale(10))
        .attr('height', court_yScale(43)-court_yScale(32.5))

    ImagePlaceLeft
        .attr('x', court_xScale(9))
        .attr('y', court_yScale(30))
        .attr('width', court_xScale(25)-court_xScale(10))
        .attr('height', court_yScale(43)-court_yScale(32.5))

    TeamName
        .attr('x', court_xScale(0))
        .attr('y', court_yScale(34.5))
        .attr('width', court_xScale(25)-court_xScale(2.5))
        .attr('height', court_yScale(43)-court_yScale(39))

    Header
        .attr('x', court_xScale(0))
        .attr('y', court_yScale(-5))
        .attr('width', court_xScale(25)-court_xScale(2.5))
        .attr('height', court_yScale(43)-court_yScale(39))

}

function appendZonePath(base, innerRadius, outerRadius, startAngle, endAngle) {

      var arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .startAngle(startAngle)
          .endAngle(endAngle)

      return base.attr("d", arc);
}