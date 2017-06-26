    window.onload=function (){
        var name=document.getElementById("about-click");
		var hiden=document.getElementById("hiden");
		var kobe = document.getElementById('video');
		var photo = document.getElementById("photo");

		var height=0;
		
		name.onclick=function drop(){
			if(height<500){
				height+=1;
				document.getElementById("photo").style.height=height+"px";
			}
			if(height<300){
				height+=1;
				document.getElementById("video").style.height=height+"px";
			}
			setTimeout(drop,10);
		}

		

	// photo.onclick=function cover(){
	// 		if(height>=0){
	// 			height-=1;
	// 			document.getElementById("photo").style.height=height+"px";
	// 		}
	// 		if(height>=0){
	// 			height-=1;
	// 			document.getElementById("video").style.height=height+"px";
	// 		}

	// 		setTimeout(cover,1);
	// 	}
	}