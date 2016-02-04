var myApp = angular.module('myApp',[]);

      var iti_acceleration = [
{	name:"meter per second squared",				unit:"m/s2",					val:"1"					},
{	name:"centimeter per second squared",			unit:"cm/s2",					val:"0.01"				},
{	name:"foot per second squared",					unit:"ft/s2",					val:"0.3048"			},
{	name:"foot per minute per second",				unit:"ft/(min·s)",				val:"0.00508"			},
{	name:"foot per hour per second",				unit:"ft/(h·s)",				val:"8.46667E-05"		},
{	name:"galileo",									unit:"Gal",						val:"0.01"				},
{	name:"gravity (standard)",						unit:"gn",						val:"9.80665"			},
{	name:"inch per second squared",					unit:"in/s2",					val:"0.0254"			},
{	name:"inch per minute per second",				unit:"in/(min·s)",				val:"4.23333E-04"		},
{	name:"inch per hour per second",				unit:"in/(h·s)",				val:"7.05556E-06"		},
{	name:"knot per second",							unit:"kn/s",					val:"0.5144444"			},
{	name:"mile per second squared",					unit:"mi/s2",					val:"1609.344"			},
{	name:"mile per minute per second",				unit:"mi/(min·s)",				val:"26.8244"			},
{	name:"mile per hour per second",				unit:"mi/(h·s)",				val:"0.44704"			},
      ];

      var iti_area = [
{	name:"square meter - متر مربع",					unit:"m2",						val:"1"					},		
{	name:"square inch",								unit:"in2",						val:"0.00064516"		},			
{	name:"square foot",								unit:"ft2",						val:"0.09290304"		},			
{	name:"square yard",								unit:"yd2",						val:"0.83612736"		},			
{	name:"square mile",								unit:"mi2",						val:"2589988.110336"	},				
{	name:"acre",									unit:"ac",						val:"4046.8564224"		},			
{	name:"hectare",									unit:"ha",						val:"10000"				},		
{	name:"square millimeter",						unit:"mm2",						val:"0.000001"			},			
{	name:"square centimeter",						unit:"cm2",						val:"0.0001"			},			
{	name:"square kilometer",						unit:"km2",						val:"1000000"			},			
      ];


      var iti_length = [
{	name:"meter - متر",								unit:"m",						val:"1"					},
{	name:"centimeter - سنتيمتر",						unit:"cm",						val:"0.01"				},
{	name:"millimeter - ميلىمتر",						unit:"mm",						val:"0.001"				},
{	name:"kilometer - كيلو متر",						unit:"km",						val:"1000"				},
{	name:"inch - بوصة",								unit:"in",						val:"0.0254"			},
{	name:"mile - ميل",								unit:"mi",						val:"1609.344"			},
{	name:"mil (0.001 in)",							unit:"mil",						val:"0.0000254"			},
{	name:"foot - قدم",								unit:"ft",						val:"0.3048"			},
{	name:"yard",									unit:"yd",						val:"0.9144"			},
{	name:"capefoot",								unit:"cf",						val:"0.314856"			},
{	name:"rod",										unit:"rd",						val:"5.0292"			},
{	name:"angstrom",								unit:"Å",						val:"1E-10"				},
{	name:"nanometer",								unit:"n",						val:"0.000000001"		},
{	name:"micron",									unit:"µ",						val:"0.000001"			},
{	name:"light-year",								unit:"l.y.",					val:"9460730472580800"	},
{	name:"light-day",								unit:"",						val:"25902068371200"	},
{	name:"light-hour",								unit:"",						val:"1079252848800"		},
{	name:"light-minute",							unit:"",						val:"17987547480"		},
{	name:"light-second",							unit:"",						val:"299792458},"		},
      ];


      var iti_pressure = [
{	name:"pascal",									unit:"Pa",						val:"1"					},
{	name:"atmosphere-standard",						unit:"atm",						val:"101325"			},
{	name:"atmosphere-technical",					unit:"at",						val:"98066.5"			},
{	name:"bar",										unit:"bar",						val:"100000"			},
{	name:"decibar",									unit:"dbar",					val:"1000"				},
{	name:"millibar",								unit:"mbar",					val:"100"				},
{	name:"barye (cgs unit)",						unit:"barye",					val:"0.1"				},
{	name:"centimeter of mercury",					unit:"cmHg",					val:"1333.22"			},
{	name:"centimeter of water (4 °C)",				unit:"cmH2O",					val:"98.0638"			},
{	name:"foot of mercury (conventional)",			unit:"ftHg",					val:"40636.66"			},
{	name:"foot of water (39.2 °F)",					unit:"ftH2O",					val:"2988.98"			},
{	name:"inch of mercury (conventional)",			unit:"inHg",					val:"3386.389"			},
{	name:"inch of water (39.2 °F)",					unit:"inH2O",					val:"248.082"			},
{	name:"kilogram-force per square millimeter",	unit:"kgf/mm2",					val:"9806650"			},
{	name:"kip per square inch",						unit:"kip/in2",					val:"6894757"			},
{	name:"millimeter of mercury",					unit:"mmHg",					val:"133.3224"			},
{	name:"millimeter of water(3.98 °C)",			unit:"mmH2O",					val:"9.80638"			},
{	name:"hectopascal",								unit:"hPa",						val:"100"				},
{	name:"kilopascal",								unit:"kPa",						val:"1000"				},
{	name:"pound per square foot",					unit:"lb/ft2",					val:"47.88025"			},
{	name:"pound per square inch",					unit:"lb/in2 or psi",			val:"6894.757"			},
{	name:"poundal per square foot",					unit:"pdl/ft2",					val:"1.488164"			},
{	name:"short ton per square foot",				unit:"sh tn/ft2",				val:"95760.518"			},
{	name:"torr",									unit:"torr",					val:"133.3224"			},
      ];



      var iti_density = [
{	name:"kilogram per cubic meter",				unit:"kg/m3",					val:"1"					},			
{	name:"gram per cubic centimeter",				unit:"g/cm3",					val:"1000"				},				
{	name:"kilogram per cubic centimeter",			unit:"kg/cm3",					val:"1000000"			},					
{	name:"gram per cubic meter",					unit:"g/m3",					val:"0.001"				},				
{	name:"gram per milliliter",						unit:"g/mL",					val:"1000"				},				
{	name:"gram per liter",							unit:"g/L",						val:"1"					},			
{	name:"kilogram per liter",						unit:"kg/L",					val:"1000"				},				
{	name:"ounce per cubic inch",					unit:"oz/in3",					val:"1729.994"			},					
{	name:"ounce per cubic foot",					unit:"oz/ft3",					val:"1.001153"			},					
{	name:"pound per cubic inch",					unit:"lb/in3",					val:"27679.90471"		},						
{	name:"pound per cubic foot",					unit:"lb/ft3",					val:"16.018463"			},					
{	name:"ounce per gallon (Imperial)",				unit:"oz/gal",					val:"6.236023"			},					
{	name:"ounce per gallon (U.S. fluid)",			unit:"oz/gal",					val:"7.489151"			},					
{	name:"pound per gallon (Imperial)",				unit:"lb/gal",					val:"99.776372"			},					
{	name:"pound per gallon (U.S. fluid)",			unit:"lb/gal",					val:"119.826"			},					
{	name:"slug per cubic foot",						unit:"slug/ft3",				val:"515.3788184"		},						
{	name:"ton per cubic yard (long)",				unit:"l ton/yd3",				val:"1328.939"			},					
{	name:"ton per cubic yard (short)",				unit:"sh ton/yd3",				val:"1186.553"			},					
      ];

      var iti_weight = [
{	name:"gram - جرام",								unit:"g",						val:"1"					},
{	name:"kilogram - كيلو جرام",						unit:"kg",						val:"1000"				},
{	name:"pound (avdp) - رطل",						unit:"lb",						val:"453.59237"			},
{	name:"caret (metric)",							unit:"ct",						val:"0.2"				},
{	name:"point (metric)",							unit:"pt",						val:"0.002"				},
{	name:"dram (avdp)",								unit:"dr",						val:"1.771845195"		},
{	name:"dram (troy)",								unit:"dr",						val:"3.8879346"			},
{	name:"grain (metric)",							unit:"gr",						val:"0.05"				},
{	name:"grain (troy)",							unit:"gr",						val:"0.06479891"		},
{	name:"hundredweight (long)",					unit:"hwt",						val:" 50802.34544"		},
{	name:"hundredweight (short)",					unit:"hwt",						val:"  45359.237"		},
{	name:"mega Gram",								unit:"Mg",						val:"1000000"			},
{	name:"milli Gram",								unit:"mg",						val:"0.001"				},
{	name:"ounce (avdp)",							unit:"oz",						val:"28.34952313"		},
{	name:"ounce (troy)",							unit:"oz",						val:"31.1034768"		},
{	name:"pennyweight",								unit:"dwt",						val:"1.55517384"		},
{	name:"pound (metric)",							unit:"lb",						val:"500"				},
{	name:"pound (troy)",							unit:"lb",						val:"373.2417216"		},
{	name:"slug",									unit:"slug",					val:"14593.903"			},
{	name:"stone",									unit:"st",						val:"6350.29318"		},
{	name:"ton-assay (long)",						unit:"l AT",					val:" 32.666667"		},
{	name:"ton-assay (short)",						unit:"sh AT",					val:" 29.166667"		},
{	name:"ton (long)",								unit:"l tn",					val:"  1016046.909"		},
{	name:"ton (short)",								unit:"sh tn",					val:"907184.74"			},
{	name:"ton-metric",								unit:"t",						val:"1000000"			},
{	name:"tonne (U.S metric ton)",					unit:"t",						val:"1000000"			},
      ];



		var iti_heat = [
{	name:"watt",									unit:"W",						val:"1"					},
{	name:"BTU [IT] per hour",						unit:"BTUIT/h",					val:"0.2930711"			},
{	name:"BTU [IT] per minute",						unit:"BTUIT/min",				val:"0.2930711*60"		},
{	name:"BTU [IT] per second",						unit:"BTUIT/s",					val:"0.293071160*60"	},
{	name:"calorie [IT] per hour",					unit:"calIT/h",					val:"4.186860/60"		},
{	name:"calorie [IT] per minute",					unit:"calIT/min",				val:"4.1868/60"			},
{	name:"calorie [IT] per second",					unit:"calIT/sec",				val:"4.1868"			},
{	name:"BTU [th] per hour",						unit:"BTUth/h",					val:"0.2928751"			},
{	name:"BTU [th] per minute",						unit:"BTUth/min",				val:"0.2928751*60"		},
{	name:"BTU [th] per second",						unit:"BTUth/s",					val:"0.2928751*60*60"	},
{	name:"calorie [th] per hour",					unit:"calth/h",					val:"4.184/60/60"		},
{	name:"calorie [th] per minute",					unit:"calth/min",				val:"4.184/60"			},
{	name:"calorie [th] per second",					unit:"calth/s",					val:"4.184"				},
{	name:"cheval-vapeur",							unit:"cv",						val:"735.49875"			},
{	name:"erg per hour",							unit:"erg/h",					val:"0.0000001/60/60"	},
{	name:"erg per minute",							unit:"erg/min",					val:"0.0000001/60"		},
{	name:"erg per second",							unit:"erg/s",					val:"0.0000001"			},
{	name:"foot-pound-force per hour",				unit:"ft·lbf/h",				val:"1.355818/60/60"	},
{	name:"foot-pound-force per minute",				unit:"ft·lbf/min",				val:"1.355818/60"		},
{	name:"foot-pound-force per second",				unit:"ft·lbf/s",				val:"1.355818"			},
{	name:"foot-poundal per hour",					unit:"ft·pdl/h",				val:"0.04214011/60/60"	},
{	name:"foot-poundal per minute",					unit:"ft·pdl/min",				val:"0.04214011/60"		},
{	name:"foot-poundal per second",					unit:"ft·pdl/s",				val:"0.04214011"		},
{	name:"horsepower (550 ft � lbf/s)",				unit:"hp",						val:"745.6999"			},
{	name:"horsepower (boiler)",						unit:"hp",						val:"9809.5"			},
{	name:"horsepower (electric)",					unit:"hp",						val:"746"				},
{	name:"horsepower (metric)",						unit:"hp",						val:"735.49875"			},
{	name:"horsepower (U.K.)",						unit:"hp",						val:"745.7"				},
{	name:"horsepower (water)",						unit:"hp",						val:"746.043"			},
{	name:"joule per hour",							unit:"J/h",						val:"1/60/60"			},
{	name:"joule per minute",						unit:"J/min",					val:"1/60"				},
{	name:"joule per second",						unit:"J/s",						val:"1"					},
{	name:"kilowatt",								unit:"kW",						val:"1000"				},
{	name:"pferdestarke",							unit:"PS",						val:"49875735."			},													 
		];



      var iti_energy = [
{	name:"joule",									unit:"J",						val:"1"					},									
{	name:"British thermal unit [IT]",				unit:"BTUIT",					val:"1055.056"			},											
{	name:"British thermal unit [th]",				unit:"BTUth",					val:"1054.35"			},											
{	name:"British thermal unit [mean]",				unit:"BTUmean",					val:"1055.87"			},											
{	name:"British thermal unit [39°F]",				unit:"BTU39°F",					val:"1059.67"			},											
{	name:"British thermal unit [59°F]",				unit:"BTU59°F",					val:"1054.8"			},											
{	name:"British thermal unit [60°F] ",			unit:"BTU60°F",					val:"1054.68"			},											
{	name:"calorie [IT]",							unit:"calIT",					val:"4.1868"			},											
{	name:"calorie [th]",							unit:"calth",					val:"4.184"				},										
{	name:"calorie [mean]",							unit:"calmean",					val:"4.19002"			},											
{	name:"calorie [15°C]",							unit:"cal15°C",					val:"4.1858"			},											
{	name:"calorie [20°C]",							unit:"cal20°C",					val:"4.1819"			},											
{	name:"electronvolt",							unit:"eV",						val:"1.60218E-19"		},												
{	name:"erg",										unit:"erg",						val:"0.0000001"			},											
{	name:"foot-poundal",							unit:"ft·pdl",					val:"0.04214011"		},												
{	name:"foot-pound-force",						unit:"ft·lbf",					val:"1.355818"			},											
{	name:"inch-pound-force",						unit:"in·lbf",					val:"0.112984829"		},												
{	name:"megajoule",								unit:"MJ",						val:"1000000"			},											
{	name:"kilocalorie [IT]",						unit:"kcalIT",					val:"4186.8"			},											
{	name:"kilocalorie [th]",						unit:"kcalth",					val:"4184"				},										
{	name:"kilocalorie [mean]",						unit:"kcalmean",				val:"4190.02"			},											
{	name:"kilowatt-hour",							unit:"kW·h",					val:"3600000"			},											
{	name:"quad (IT)",								unit:"quad",					val:"1.05506E+18"		},												
{	name:"therm (EC)",								unit:"therm",					val:"105506000"			},											
{	name:"therm (U.S.)",							unit:"therm",					val:"105480400"			},											
{	name:"ton-of-coal-equivalent",					unit:"TOC",						val:"29307600000"		},												
{	name:"ton-of-oil-equivalent",					unit:"TOE",						val:"41868000000"		},												
{	name:"ton-of-TNT-equivalent",					unit:"tTNT",					val:"4184000000"		},												
{	name:"watt-hour",								unit:"W·h", 					val:"3600"				},										
{	name:"watt-second",								unit:"W·s", 					val:"1"					},									
      ];


      var iti_time = [
{	name:"Second",									unit:"Sec",						val:"1"					},			
{	name:"Minute",									unit:"Min",						val:"60"				},			
{	name:"Nanosecond",									unit:"NanoSec",					val:"1e-9"				},			
{	name:"Microsecond",									unit:"MicroSec",					val:"1e-6"				},			
{	name:"MilliSecond",									unit:"MilliSec",					val:"0.001"				},			
{	name:"Hour",									unit:"Hour",					val:"3600"				},			
{	name:"Day",									unit:"Day",					val:"86400"				},			
{	name:"Week",									unit:"Week",					val:"604800"				},			
{	name:"Month",									unit:"Month",					val:"2.628e+6"				},			
{	name:"Year",									unit:"Year",					val:"3.154e+7"				},			
{	name:"Decade",									unit:"Decade",					val:"3.154e+8"				},			
{	name:"Century",									unit:"Century",					val:"3.154e+9"				},			
      ];




myApp.controller('MainController',function($scope,$timeout){
	$scope.itiration_array = null;

	$scope.set_itirator = function(itirator_name){
		$scope.itiration_array = window[itirator_name];
		console.log($scope.itiration_array);
	}
	$scope.set_itirator("iti_time");


	$scope.calc = function(key){
		// console.log($scope.itiration_array);
		var inputed_value = $scope.itiration_array[key].model_value;
		var changed_val = $scope.itiration_array[key].val;
		// console.log(inputed_value);
		// console.log(changed_val);
		for(var i=0;i<$scope.itiration_array.length;i++){
			// console.log(current_value);
			if(i==key) continue;
			var current_item_val = $scope.itiration_array[i].val;
			var new_val = inputed_value * changed_val / current_item_val;
			new_val = round_it(new_val);
			$scope.itiration_array[i].model_value = new_val;
		}
	}


});


function round_it(v){
    v = Math.round(v * 10000) / 10000;
    return v;
}




