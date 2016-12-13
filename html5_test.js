(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 768,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

test to test

// symbols:



(lib.ScreenShot20161101at23936PM1 = function() {
	this.spriteSheet = ss["html5_test_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20161101at24119PM = function() {
	this.spriteSheet = ss["html5_test_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.question = function() {
	this.initialize();

	// Layer 1
	this.txt2 = new cjs.Text("How much do you know about Sprint Products and services?", "bold 24px 'Helvetica'");
	this.txt2.name = "txt2";
	this.txt2.lineHeight = 26;
	this.txt2.lineWidth = 662;
	this.txt2.setTransform(0,32);

	this.txt1 = new cjs.Text("Question 1 of 5", "bold 18px 'Helvetica'");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 20;
	this.txt1.lineWidth = 658;

	this.addChild(this.txt1,this.txt2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,666.4,293.1);


(lib.end = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ScreenShot20161101at24119PM();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,768,1025);


(lib.circle = function() {
	this.initialize();

	// Layer 1
	this.txt = new cjs.Text("test", "18px 'Helvetica'");
	this.txt.name = "txt";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 120;
	this.txt.setTransform(21,54.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#207AF5").ss(1,1,1).p("ANIAAQAAFcj2D2Qj2D2lcAAQlbAAj2j2Qj2j2AAlcQAAlbD2j2QD2j2FbAAQFcAAD2D2QD2D2AAFbg");
	this.shape.setTransform(84,84);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApRJRQj2j1AAlcQAAlaD2j3QD3j2FaAAQFcAAD1D2QD3D3AAFaQAAFcj3D1Qj1D3lcAAQlaAAj3j3g");
	this.shape_1.setTransform(84,84);

	this.addChild(this.shape_1,this.shape,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,170,170);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ScreenShot20161101at23936PM1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,769,1025);


// stage content:
(lib.html5_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var current = 0;
		var count =0;
		var myarray = [this.test1, this.test2, this.test3];
		var txtbox = this.question
		end = this.end
		var aniArray = [this.test1, this.test2, this.test3, this.question, this.bg]
		var yPos = []
		var a1 =['Know it all; I am a genius',
				  'Enough to get by',
				  'Nothing, nada, zilch.'
				  ]
		var a2 =['Know it all; I am a genius',
				  'Enough to get by',
				  'Nothing, nada, zilch.'
				  ]
		var a3 =['Super likely- Sprints my fave!',
				  'Eh. I will sell whatever is easy.',
				  'Not going to do it.'
				  ]
		var a4 =['Lots (25+)',
				  'Some (10-25)',
				  'A little(0-10)'
				  ]
		var a5 =['24x7; I am a phone addict!',
				  'More than most, less than some.',
				  'As little as possible.'
				  ]
		var qtxt=['How much do you know about Sprint products and services?',
				   'How much do you know about the Sprint Network?',
				   'How likley are you to recommend Sprint to your customers?',
				   'How many hours a week do you work in this department?',
				   'How much time do you spend on your own phone?'
				   ]
		var atxt =[a1,a2,a3,a4,a5];
		function init(){
			for(var i = 0; i< myarray.length;i++){
				//console.log(i)
				myarray[i].addEventListener("click", fl_AnimateVertically.bind(this));
				myarray[i].txt.text = atxt[current][i];
			}
		
			//console.log(myarray)
		
			for(var i = 0; i< aniArray.length;i++){
				yPos.push(aniArray[i].y);
			}
			txtbox.txt2.text =  qtxt[current];
			this.end.visible = false;
		}
		function fl_AnimateVertically(){        
			count = 0;
			for(var i = 0; i< aniArray.length;i++){
				aniArray[i].myY = aniArray[i].Y;
				var target = aniArray[i]
				var tween = createjs.Tween.get(target, {
					loop: false
				})
					.to({
						x: target.x,
						y: canvas.height*-1,
					}, 300, createjs.Ease.linear )
					.call(holdon)
			}
			//tween.stop();
			
		}
		function holdon(){
			count++;
			if(count == aniArray.length-1){
				rearrageText()
			}
		}
		function rearrageText(){
			current++;
			if(current == atxt.length){
				end.visible = true;
				animateDone();
			}
			else{
				for(var i = 0; i< myarray.length;i++){
					//console.log(atxt[0][1])
					myarray[i].txt.text = atxt[current][i];
				}
				//console.log(txtbox);
				txtbox.txt1.text = 'Question ' + (current +1) + ' of 5';
				txtbox.txt2.text =  qtxt[current];
				for(var j=0; j<aniArray.length;j++){
					aniArray[j].y = 2000;
				}
				animateBack()
			}
		}
		
		function animateBack(){
			//console.log('animate back');
			for(var i = 0; i< aniArray.length;i++){
				var target = aniArray[i]
				console.log(aniArray[i].myY);
				var tween2 = createjs.Tween.get(target, {
					loop: false
				})
					.to({
						x: target.x,
						y: yPos[i],
					}, 800, createjs.Ease.quintIn  )
					
			}
		}
		function animateDone(){
			//console.log('animate back');
			
				var target = end
			
				var tween2 = createjs.Tween.get(target, {
					loop: false
				})
					.to({
						x: target.x,
						y:768/2,
					}, 800, createjs.Ease.quintIn )
					
			
		}
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.test3 = new lib.circle();
	this.test3.setTransform(599.2,724.9,1,1,0,0,0,84,84);

	this.test2 = new lib.circle();
	this.test2.setTransform(163.2,724.9,1,1,0,0,0,84,84);

	this.test1 = new lib.circle();
	this.test1.setTransform(381.2,724.9,1,1,0,0,0,84,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.test1},{t:this.test2},{t:this.test3}]}).wait(1));

	// Layer 4
	this.end = new lib.end();
	this.end.setTransform(385,2512.5,1,1,0,0,0,385,512.5);

	this.timeline.addTween(cjs.Tween.get(this.end).wait(1));

	// Layer 1
	this.question = new lib.question();
	this.question.setTransform(391.2,468.3,1,1,0,0,0,333.2,146.5);

	this.bg = new lib.bg();
	this.bg.setTransform(384.5,512.5,1,1,0,0,0,384.5,512.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.question}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384,512,769,3025);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;