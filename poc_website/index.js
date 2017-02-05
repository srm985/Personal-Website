$(document).ready(function(){
	setCookie("services_tile_tracking", "", 1);	//Clear tracking cookie.

    $('.services_tile_redirect').click(function() {
    	var services_tile_id = $(this).find('.services_tile').attr('id');
        setCookie("services_tile_tracking", services_tile_id, 1);
    });
    $('.navbar').click(function() {
    	var services_tile_id_retrieve = getCookie("services_tile_tracking");
    });

    

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    	var fontSizeGraph = window.getComputedStyle(document.getElementById('whyus_content'), null).getPropertyValue('font-size');
    	fontSizeGraph = parseFloat(fontSizeGraph);
    	var interactivityPermissive = true;
    	if ($(window).width() < 768) {
    		interactivityPermissive = false;
    	} else {
    		interactivityPermissive = true;
    	};
        var data = google.visualization.arrayToDataTable([
         	['Month', 'In-House', 'POC'],
         	['0',	0,		0],
          	['1',	-0.60,	-0.21],
			['2',	-1.15,	-0.37],
			['3',	-1.67,	-0.46],
			['4',	-2.15,	-0.51],
			['5',	-2.60,	-0.49],
			['6',	-3.00,	-0.42],
			['7',	-3.37,	-0.29],
			['8',	-3.69,	-0.10],
			['9',	-3.98,	0.14],
			['10',	-4.23,	0.45],
			['11',	-4.45,	0.80],
			['12',	-4.62,	1.22],
			['13',	-4.75,	1.69],
			['14',	-4.85,	2.22],
			['15',	-4.91,	2.50],
			['16',	-4.91,	2.75],
			['16',	-4.81,	3.00],
			['18',	-4.76,	3.50],
			['19',	-4.70,	4.00],
			['20',	-4.63,	4.25],
			['21',	-4.45,	4.75],
			['22',	-4.24,	5.25],
			['23',	-4.00,	5.50],
			['24',	-3.71,	6.00],
			['25',	-3.38,	6.5],
			['26',	-3.02,	7.00],
			['27',	-2.62,	7.50],
			['28',	-2.18,	8.00],
			['29',	-1.70,	8.50],
			['30',	-1.18,	9.00],
			['31',	-0.62,	9.50],
			['32',	-0.03,	10.00],
			['33',	0.60,	10.25],
			['34',	1.28,	10.75],
			['35',	1.98,	11.00],
			['36',	2.73,	11.25],
			['37',	4.00,	11.50],
			['38',	4.75,	11.75],
			['39',	5.00,	12.00],
			['40',	5.25,	12.25],
			['41',	5.50,	12.50],
			['42',	5.75,	12.75],
			['43',	6.00,	13.00],
			['44',	6.25,	13.25],
			['45',	6.50,	13.50],
			['46',	6.75,	13.75],
			['47',	7.00,	14.00],
			['48',	7.25,	14.25]
        ]);
        var options = {
        	enableInteractivity: interactivityPermissive,
          	title: 'Return On Investment',
          	titlePosition: 'out',
          	titleTextStyle: {
	          	color: '#757575',
	          	fontName: 'lato',
	          	fontSize: fontSizeGraph,
	          	bold: true
	      	},
          	chartArea: {
          		//top: '7%',
          		width: '100%', 
          		height: '70%'
          	},
          	//chartArea: {'top': 0, 'left': 0},
          	colors: ['#757575', '#0291D3'],
          	curveType: 'function',
          	fontName: 'lato',
          	legend: { 
          		position: 'bottom',
          		textStyle: {
	          		color: '#757575',
	          		fontName: 'lato'
	          	} 
          	},
          	vAxis: {
          		viewWindow: {
	          		max: 15,
	          		min: -5,
	          		format: '#',
	          	},
	          	textStyle: {
	          		color: '#757575',
	          		fontName: 'lato'
	          	},
	          	showTextEvery: 5,
	          	textPosition: 'in',
	          	gridlines: {
          			color: '#BDBDBD',
          			count: 5
          		}
          	},
          	hAxis: {
          		title: 'Months',
          		titleTextStyle: {
	          		color: '#757575',
	          		fontName: 'lato'
	          	},
          		viewWindow: {
          			max: 56,
          			min: -5,
          		},
          		textStyle: {
	          		color: '#757575',
	          		fontName: 'lato'
	          	},
	          	format: '#',
	          	showTextEvery: 6,
	          	viewWindowMode: 'maximized'
          	},
          	lineWidth: 2,
          	tooltip: {
          		textStyle: {
          			color: '#757575',
	          		fontName: 'lato',
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
        var formatter = new google.visualization.NumberFormat({fractionDigits: 1});
        formatter.format(data, 1);
        formatter.format(data, 2);

        var chart = new google.visualization.LineChart(document.getElementById('roi_graph'));
        chart.draw(data, options);


      };

	

	//*********************************Draw intial chart if focused.*********************************
	var chartFocus;
	function chartDrawFunction() {
		var graphOffset = $('#roi_graph_container').offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var graphHeight = $('#roi_graph_container').height();

		if ((!chartFocus) && ((scroll + windowHeight >= graphOffset + (graphHeight * 0.75)) && (scroll <= graphOffset + (graphHeight * 0.25))) ) {
			$('#roi_graph').show();
			drawChart();
			chartFocus = true;
		} else if (((scroll + windowHeight) < graphOffset) || (scroll > (graphOffset + graphHeight))) {
			chartFocus = false;
			$('#roi_graph').hide();
		};
	};

	//*********************************Check if chart became focused.*********************************
	var resizeAction, scrollAction, containerWidth;
	containerWidth = $('.container').width();

  	$(window).scroll(function (event) {
	  	scrollAction = true;
	});
	$(window).resize(function() {
		resizeAction = true;
    });
	setInterval(function(){
		
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
	},250);
});