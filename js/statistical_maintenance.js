google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var fontSizeGraph = window.getComputedStyle(document.getElementById('graph_font_size_source'), null).getPropertyValue('font-size');
    fontSizeGraph = parseFloat(fontSizeGraph);
    var interactivityPermissive = true;
    if ($(window).width() < 768) {
        interactivityPermissive = false;
    } else {
        interactivityPermissive = true;
    };
    var data = google.visualization.arrayToDataTable([
        ['Accepted Variance', 'High/Low', 'HiHi/LoLo'],
        ['0', 0, 0],
        ['1', 38, 45],
        ['2', 60, 68],
        ['3', 67, 75],
        ['4', 76, 88],
        ['5', 80, 93],
        ['6', 90, 102],
        ['7', 98, 108],
        ['8', 100, 111],
        ['9', 105, 117],
        ['10', 111, 123],
        ['11', 114, 126],
        ['12', 118, 130],
        ['13', 120, 134],
        ['14', 124, 140],
        ['15', 127, 142],
        ['16', 130, 145],
        ['16', 131, 146],
        ['18', 134, 148],
        ['19', 137, 153],
        ['20', 138, 155]
    ]);
    var options = {
        enableInteractivity: interactivityPermissive,
        title: 'Delay Tags Preserved',
        titlePosition: 'out',
        titleTextStyle: {
            color: '#3D414D',
            fontName: "Lato",
            fontSize: fontSizeGraph,
            bold: true
        },
        chartArea: {
            //top: '7%',
            width: '90%',
            height: '70%'
        },
        //chartArea: {'top': 0, 'left': 0},
        colors: ['#3D414D', '#4EDEC2'],
        curveType: 'function',
        fontName: "Lato",
        legend: {
            position: 'bottom',
            textStyle: {
                color: '#3D414D',
                fontName: "Lato"
            }
        },
        vAxis: {
            title: 'Alarm Count Reduction',
            viewWindow: {
                max: 180,
                min: -5,
                format: '#',
            },
            textStyle: {
                color: '#3D414D',
                fontName: "Lato"
            },
            showTextEvery: 20,
            textPosition: 'in',
            gridlines: {
                color: '#EFECE7',
                count: 5
            }
        },
        hAxis: {
            title: 'Accepted Variance (%)',
            titleTextStyle: {
                color: '#3D414D',
                fontName: "Lato"
            },
            viewWindow: {
                max: 24,
                min: 0,
            },
            textStyle: {
                color: '#3D414D',
                fontName: "Lato"
            },
            format: '#',
            showTextEvery: 2,
            viewWindowMode: 'maximized'
        },
        lineWidth: 2,
        tooltip: {
            textStyle: {
                color: '#3D414D',
                fontName: "Lato",
                fontSize: (fontSizeGraph * 0.5)
            },
            //isHtml: true,
            ignoreBounds: true
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        }
    };

    var chart1 = new google.visualization.LineChart(document.getElementById('results_graph_1'));
    chart1.draw(data, options);

    var data2 = google.visualization.arrayToDataTable([
        ['Accepted Variance', 'High/Low', 'HiHi/LoLo'],
        ['0', 0, 0],
        ['1', 81, 88],
        ['2', 135, 142],
        ['3', 180, 189],
        ['4', 223, 237],
        ['5', 255, 270],
        ['6', 303, 317],
        ['7', 343, 354],
        ['8', 362, 373],
        ['9', 380, 392],
        ['10', 406, 419],
        ['11', 420, 432],
        ['12', 443, 456],
        ['13', 459, 473],
        ['14', 476, 493],
        ['15', 493, 510],
        ['16', 513, 530],
        ['16', 520, 537],
        ['18', 533, 548],
        ['19', 546, 563],
        ['20', 555, 572]
    ]);

    var options = {
        enableInteractivity: interactivityPermissive,
        title: 'Delay Tags Modified',
        titlePosition: 'out',
        titleTextStyle: {
            color: '#3D414D',
            fontName: "Lato",
            fontSize: fontSizeGraph,
            bold: true
        },
        chartArea: {
            //top: '7%',
            width: '90%',
            height: '70%'
        },
        //chartArea: {'top': 0, 'left': 0},
        colors: ['#3D414D', '#4EDEC2'],
        curveType: 'function',
        fontName: "Lato",
        legend: {
            position: 'bottom',
            textStyle: {
                color: '#3D414D',
                fontName: "Lato"
            }
        },
        vAxis: {
            title: 'Alarm Count Reduction',
            viewWindow: {
                max: 600,
                min: -5,
                format: '#',
            },
            textStyle: {
                color: '#3D414D',
                fontName: "Lato"
            },
            showTextEvery: 20,
            textPosition: 'in',
            gridlines: {
                color: '#EFECE7',
                count: 5
            }
        },
        hAxis: {
            title: 'Accepted Variance (%)',
            titleTextStyle: {
                color: '#3D414D',
                fontName: "Lato"
            },
            viewWindow: {
                max: 24,
                min: 0,
            },
            textStyle: {
                color: '#3D414D',
                fontName: "Lato"
            },
            format: '#',
            showTextEvery: 2,
            viewWindowMode: 'maximized'
        },
        lineWidth: 2,
        tooltip: {
            textStyle: {
                color: '#3D414D',
                fontName: "Lato",
                fontSize: (fontSizeGraph * 0.5)
            },
            //isHtml: true,
            ignoreBounds: true
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        }
    };

    var chart2 = new google.visualization.LineChart(document.getElementById('results_graph_2'));
    chart2.draw(data2, options);
}


//*********************************Draw intial chart if focused.*********************************
var chartFocus;

function chartDrawFunction() {
    var graphOffset = $('#results_graph_container_1').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var graphHeight = $('#results_graph_container_1').height();

    if ((!chartFocus) && ((scroll + windowHeight >= graphOffset + (graphHeight * 0.75)) && (scroll <= graphOffset + (graphHeight * 0.25)))) {
        $('#results_graph_1').show();
        $('#results_graph_2').show();
        drawChart();
        chartFocus = true;
    } else if (((scroll + windowHeight) < graphOffset) || (scroll > (graphOffset + graphHeight))) {
        chartFocus = false;
        $('#results_graph_1').hide();
        $('#results_graph_2').hide();
    };
};

//*********************************Check if chart became focused.*********************************
var resizeAction, scrollAction, containerWidth;
containerWidth = $('.container').width();

$(window).scroll(function(event) {
    scrollAction = true;
});
$(window).resize(function() {
    resizeAction = true;
});
setInterval(function() {

    if (scrollAction) {
        chartDrawFunction();
        scrollAction = false;
        resizeAction = false;
    } else if (resizeAction && (containerWidth != $('.container').width())) {
        chartFocus = false;
        chartDrawFunction();
        scrollAction = false;
        resizeAction = false;
        containerWidth = $('.container').width();
    };
}, 250);
