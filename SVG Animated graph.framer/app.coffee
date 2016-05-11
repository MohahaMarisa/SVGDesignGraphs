{SVGLayer} = require "SVGLayer"
layerA = new BackgroundLayer
    backgroundColor: "ebebeb"
    
pathPoolside = new SVGLayer
	strokeWidth: 10
	width: 599
	dashOffset: 0
	height: 556
	linecap: "square"
	path: '<path d="M36.6015625,86 C36.6015625,86 66.6015625,82.0000006 81.6015625,92 C96.6015625,101.999999 120.601562,138 120.601562,166 C120.601562,194 80.5351562,189.042969 80.5351562,166.851563 C80.5351562,144.660156 107.535156,128.945313 128.863281,128.945313 C150.191406,128.945312 158.53125,157.121094 158.53125,172.019531 C158.53125,186.917968 152.707031,217.093743 116.621094,225.085938 C80.5351562,233.078132 48.0078125,203.199219 48.0078125,187.609375 C48.0078125,172.019531 48.7929687,135.144532 80.1484375,120.722656 C100.673391,111.282251 133.830294,105.095493 164.406257,92 C180.540445,85.0898287 197.656511,75.1292964 208.113281,64.2070313 C238.386719,32.5859375 199.46875,0.53125 199.46875,0.53125 C199.46875,0.53125 169.410156,28.8915329 143.015625,71.1835938 C116.621094,113.475655 106.585938,143.730469 100.804687,162.417969 C95.0234375,181.105469 78.4765625,240.773438 72.3085937,249.246094 C66.140625,257.71875 42.6054687,283.339844 18.5390625,277.519531 C-5.52734375,271.699219 -3.21875013,236.9375 12.0234375,231.011719 C27.2656251,225.085938 50.8945238,227.582031 89.8789062,252.550781 C128.863289,277.519531 228.933601,262.930607 228.933601,180.152344 C228.933601,128.945313 195.109382,122.722656 190.867195,122.722656 C195.109382,122.722656 233.411747,138.373347 242.046875,100.890625 C247.859375,75.6601563 232.802396,33.1060606 195.328125,46.171875 C164.40625,56.953125 229.646393,86 277.351562,86 C325.056732,86 387.363281,71.1835938 439.910156,71.1835938 C618.109382,71.1835938 431.749022,554.615228 572.82032,527.445313 C598.781257,522.445313 573.120603,440.092271 541.421882,416.660156 C500.410164,386.34375 451.785164,385.042969 312.761726,405.328125 C130.822052,431.875265 174.300789,281.828125 174.300789,281.828125" id="B" stroke="#979797"></path>'

pathPoolside.center()

#pathPoolside.animate
	#properties:
		#dashOffset:1

pathMorning = new SVGLayer
	y:(+120)
	strokeWidth: 10
	width: 610
	dashOffset: 0
	height: 556
	linecap: "square"
	path: '<path d="M610.066764,0.498053643 C610.066766,15.5559267 597.616345,49.2280165 561.500079,80.0651295 C545.194144,93.9876082 497.027449,138.161964 425.427574,173.714808 C289.156246,241.380195 110.106699,311.779942 93.2750304,320.062698 C53.0938312,339.835608 28.146764,352.875238 12.7052782,383.272105 C-2.7362075,413.668971 -2.17564413,461.270403 7.58250958,470.165936" id="Path-morning" stroke="#e7d900" stroke-width="6"></path>'
#pathMorning.center()

pathAfternoon = new SVGLayer
	x:(+13)
	y: 133
	strokeWidth: 8
	width: 599
	dashOffset: 0
	height: 556
	linecap: "square"
	path: '<path d= "M0.29679529,461.169314 C7.31406062,467.566253 16.7953598,472.973355 32.5742999,467.725572 C48.35324,462.477789 86.0746939,450.972248 110.578602,407.469793 C135.082511,363.967337 148.108978,326.802497 162.741389,254.083206 C166.221324,236.788834 184.160335,156.186037 201.510377,116.085665 C217.42898,79.2937156 263.448503,23.7326053 311.261003,0.284179657" id="Path-afternoon" stroke="#FFB93C" stroke-width="6"></path>'


pathEvening = new SVGLayer
	x:(+10)
	y:(+72)
	strokeWidth: 8
	width: 599
	dashOffset: 0
	height: 556
	linecap: "square"
	path: '<path d="M318.149294,59.5121484 C318.149294,59.5121484 378.540019,26.0111116 496.900351,23.0401446" stroke="#ff7800" stroke-width="6"></path>'

animationEvening = new Animation
	layer: pathEvening
	properties:
		dashOffset:1
		
pathNight = new SVGLayer
	x:482
	y:72
	strokeWidth: 8
	width: 599
	dashOffset: 0
	height: 556
	linecap: "square"
	path: '<path d="M10.8391263,23.0401446 C129.199458,20.0691776 125.052455,23.9286582 125.052455,50.4382918" id="Path-night" stroke="#d10000" stroke-width="6"></path>'
	
#pathNight.center()
animationAfternoon = new Animation
	layer: pathAfternoon
	properties:
		dashOffset:1
animationNight = new Animation
	layer: pathNight
	properties:
		dashOffset:1	

pathMorning.animate
	properties:
		dashOffset:1
#pathAfternoon.animate
#	properties:
#		dashOffset:1
#pathEvening.animate
#	properties:
#		dashOffset:1
#pathNight.animate
#	properties:
#		dashOffset:1
pathMorning.on(Events.AnimationEnd, animationAfternoon.start)
pathAfternoon.on(Events.AnimationEnd, animationEvening.start)
pathEvening.on(Events.AnimationEnd, animationNight.start)


