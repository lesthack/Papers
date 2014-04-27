	$(document).ready(function(){
			step = 1;
			slide = 1;
			
			function nextSlide(effectIn, effectOut){
				effectIn = effectIn==null?"clip":effectIn;
				effectOut = effectOut==null?"clip":effectOut;
				$("#slide"+slide++).hide(effectOut, callback=function(){
						$("#slide"+slide).show(effectIn);
				});
			}
			function backSlide(effectIn, effectOut){
				effectIn = effectIn==null?"clip":effectIn;
				effectOut = effectOut==null?"clip":effectOut;
				$("#slide"+slide--).hide(effectOut, callback=function(){
						$("#slide"+slide).show(effectIn);
				});
			}
			
			$(document).keypress(function(keyevent){
				if(keyevent.keyCode==100) //adelante
				{
					console.log(step);
					switch (step){
						case 1: case 2: case 3:
							if(step-1 >= 1) $("#step"+(step-1)).removeClass("hover");
							$("#step"+step).addClass("hover");
							break;
						case 4:
							nextSlide();
							break;
						case 5:
							$("#step"+step).addClass("hover");
							break;
						case 6:
							$("#step"+(step-1)).removeClass("hover");
							$("#step"+step).addClass("hover");
							break;
						case 7:
							$("#step"+(step-1)).removeClass("hover");
							$("#step"+step).addClass("hover");							
							$("#image1").show("bounce", speed=1000);
							break;
						case 10:
							$("#step10").show();
							break;
						case 12: case 13:
							$("#step"+step).show();
							break;
						case 14:
							$("#step13").hide("pulsate", callback=function(){
								$("#step14").show();
							});
							break;
						case 15:
							$("#step"+step).show();
							break;
						case 16:
							$("#step15").hide("blind", 
								callback=$("#step14").hide("blind", 
								callback=$("#step13").hide("blind",
								callback=$("#step12").hide("blind", callback=function(){
										$("#step16").show("clip");
								}))));
							break;
						case 17:
							$("#step16").hide("clip", callback=$("#step17").show());
							break;
						case 18:
							$("#step17").hide("", callback=$("#step18").show());
							break;
						case 19:
							$(".receta").show("bounce",speed=1000);
							step=20;
							break;
						case 22:
							$("slide5").hide();
							$("#step22").show("slide", speed=1000);
							break;
						case 23: case 24: case 25:
							$("#step"+(step-1)).css("color", "#CCC");
							$("#step"+step).show("slide", speed=1000);
							break;
						case 27: case 28: case 29:
							$("#step"+step).show("bounce", speed=1500);
							break;
						case 30:
							nextSlide();
							$("#step30").show("slide", speed=1000);
							break;
						case 31: 
							$("#step"+(step-1)).css("color", "#CCC");
							$("#step"+step).show("slide", speed=1000);
							break;
						case 32:
							$("#step32").show();
							break;
						case 33: 
							$("#step32").hide();
							$("#step31").css("color", "#CCC");
							$("#step"+step).show("slide", speed=1000);
							break;
						case 34: case 35: 
							$("#step"+(step-1)).css("color", "#CCC");
							$("#step"+step).show("slide", speed=1000);
							break;
						case 36:
							$("#step36").show();
							break;
						case 37:
							$("#step36").hide();
							$("#step35").css("color", "#CCC");
							$("#step"+step).show("slide", speed=1000);
							break;
						case 38:
							nextSlide();
							$("#step"+step).show("bounce");
							break;
						case 39:
							nextSlide();
							$("#step"+step).show("bounce");
							break;
						case 40:
							$("#step"+step).show("bounce");
							break;
						case 42:
							$("#step42").show("slide");
							break;
						case 43: case 44:
							$("#step"+(step-1)).hide("", callback=$("#step"+step).show("slide"));
							break;
						case 46: case 47:
							$("#step"+step).show("blind");
							break;
						case 48:
							$("#step48").addClass("hover");
							break;
						case 49: case 50: case 51:
							$("#step"+(step-1)).removeClass("hover");
							$("#step"+step).addClass("hover");
							break;
						default:
							nextSlide();
					}
					step++;
				}
				else if(keyevent.keyCode==97){ //atras
					backSlide();
				}
			});
			$("#slide"+slide).show();
		});
