
//가중치값과 위치값은 배열에 저장되어있다고 가정하고 표현하였다,

        // 1. canvas 엘리먼트 취득
        var canvas = document.getElementById('myCanvas');
        // 2. 2d모드의 그리기 객체 취득
        var ctx = canvas.getContext("2d");
	ctx.globalAlpha=0.18;
        // 3. path 그리기 시작 설정
	// 여기서 좌표기준은 캔버스에 대한 위치값으로 설정되어 있다. 따라서
	// 따라서 실제로 받은 위치값을 변형시킬 필요가 있다.
	var arrX=[100,200,230,300,320,350,280];
	var arrY=[100,200,230,300,180,120,350];
	var arrW=[110,50,40,60,50,40,60];
	var radius=[];
	var count=0;
	function drawing(){
		if(count==0){
			for(let i=0; i<arrX.length; i++){
			if(arrW[i]>30 && arrW[i] <100){
			ctx.beginPath();
			//여기 예시는 가중치의 값이 1~100으로 상정하였다. 
			var weight=100-arrW[i];
			radius[i]=weight;
			ctx.arc(arrX[i], arrY[i], weight, 0, 2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'red';
        			ctx.fill();
			ctx.closePath();

			}else if(arrW[i]>=100){
			ctx.beginPath();
			radius[i]=10;
			ctx.arc(arrX[i], arrY[i], 10, 0, 2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'black';
        			ctx.fill();
			ctx.closePath();
			}
		}
		}
		count++;	
	}
	var c_count=1;
	function checking(){
		//시간복잡도 : n!
		if(c_count==1){
			for(let i=0; i<arrW.length; i++){
			for(let j=i+1; j<arrW.length; j++){
				if((arrW[i]>=100)){
					// 이미 달성함. 기준치 만족
					var EX;
					var EY;
					if((arrW[i]>=100)){
						EX=arrX[i];
						EY=arrY[i];
						i++;
						j=i;
					}
					ctx.beginPath();
					ctx.arc(EX, EY, 6, 0, 2*Math.PI);
					ctx.stroke();
					ctx.strokeStyle = 'green';
					ctx.fillStyle = 'green';
        			ctx.fill();
					ctx.closePath();					
				}else if((arrW[i]<100 && arrW[i]>30)&&(arrW[j]<100 && arrW[j]>30)){
					var dist=getDistance(i,j);
					var total=radius[i]+radius[j];
					if(total>dist){
						

						//원이 큰원 안에 작은원이 perfect하게 속해있으면 겹치는 부분이 존재하지 않는다. 따라서
						//두 반지름의 합이 두 원의 중심의 길이보다 작은경우 두 원은 서로 겹쳐있다고 판단할 수 있다.
						// 
						//원이 서로 겹치는 경우:
						//각 원의 중심에 대한 직선의 비율로 나눈다.
						var cal;
						if(radius[i]>=radius[j]){
							cal=radius[i]/radius[j];
						}else{
							cal=radius[j]/radius[i];
						}
						
						var disX=Math.abs(arrX[j]+arrX[i])/2;
						var disY=Math.abs(arrY[j]+arrY[i])/2;
						var X,Y;
						
						console.log(disX, disY, i, j);
						if(radius[i] <radius[j]){
							console.log(11, cal, disX, disY, i, j, dist);
						
								
								X=arrX[i]+((disX-arrX[i])/cal);
								Y=arrY[i]+((disY-arrY[i])/cal);
								

						
						}else if(radius[i] >radius[j]){
							console.log(22, cal, disX, disY, i, j);
							
								X=arrX[j]+((disX-arrX[j])/cal);
								Y=arrY[j]+((disY-arrY[j])/cal);
								

							
						}else{
							X=disX;
							Y=disY;
						}
						console.log(X, Y, i, j);
						ctx.beginPath();
						ctx.arc(X, Y, 6, 0, 2*Math.PI);
						ctx.stroke();
						ctx.strokeStyle = 'green';
						ctx.fillStyle = 'green';
        				ctx.fill();
						ctx.closePath();					
					}
				}
			}
		}
		}
		c_count++;
	}
	function getDistance(dot1, dot2){
		var dis_x=arrX[dot1]-arrX[dot2];
		var dis_y=arrY[dot1]-arrY[dot2];
		
		dist=Math.sqrt( Math.abs( dis_x * dis_x ) + Math.abs( dis_y * dis_y ) );
		return dist;
	}
	
//가중치값과 위치값은 배열에 저장되어있다고 가정하고 표현하였다,

        // 1. canvas 엘리먼트 취득
        var canvas = document.getElementById('myCanvas');
        // 2. 2d모드의 그리기 객체 취득
        var ctx = canvas.getContext("2d");
	ctx.globalAlpha=0.18;
        // 3. path 그리기 시작 설정
	// 여기서 좌표기준은 캔버스에 대한 위치값으로 설정되어 있다. 따라서
	// 따라서 실제로 받은 위치값을 변형시킬 필요가 있다.
	var arrX=[100,200,230,300,320,350,280];
	var arrY=[100,200,230,300,180,120,350];
	var arrW=[110,50,40,60,50,40,60];
	var radius=[];
	var count=0;
	function drawing(){
		if(count==0){
			for(let i=0; i<arrX.length; i++){
			if(arrW[i]>30 && arrW[i] <100){
			ctx.beginPath();
			//여기 예시는 가중치의 값이 1~100으로 상정하였다. 
			var weight=100-arrW[i];
			radius[i]=weight;
			ctx.arc(arrX[i], arrY[i], weight, 0, 2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'red';
        			ctx.fill();
			ctx.closePath();

			}else if(arrW[i]>=100){
			ctx.beginPath();
			radius[i]=10;
			ctx.arc(arrX[i], arrY[i], 10, 0, 2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'black';
        			ctx.fill();
			ctx.closePath();
			}
		}
		}
		count++;	
	}
	var c_count=1;
	function checking(){
		//시간복잡도 : n!
		if(c_count==1){
			for(let i=0; i<arrW.length; i++){
			for(let j=i+1; j<arrW.length; j++){
				if((arrW[i]>=100)){
					// 이미 달성함. 기준치 만족
					var EX;
					var EY;
					if((arrW[i]>=100)){
						EX=arrX[i];
						EY=arrY[i];
						i++;
						j=i;
					}
					ctx.beginPath();
					ctx.arc(EX, EY, 6, 0, 2*Math.PI);
					ctx.stroke();
					ctx.strokeStyle = 'green';
					ctx.fillStyle = 'green';
        			ctx.fill();
					ctx.closePath();					
				}else if((arrW[i]<100 && arrW[i]>30)&&(arrW[j]<100 && arrW[j]>30)){
					var dist=getDistance(i,j);
					var total=radius[i]+radius[j];
					if(total>dist){
						

						//원이 큰원 안에 작은원이 perfect하게 속해있으면 겹치는 부분이 존재하지 않는다. 따라서
						//두 반지름의 합이 두 원의 중심의 길이보다 작은경우 두 원은 서로 겹쳐있다고 판단할 수 있다.
						// 
						//원이 서로 겹치는 경우:
						//각 원의 중심에 대한 직선의 비율로 나눈다.
						var cal;
						if(radius[i]>=radius[j]){
							cal=radius[i]/radius[j];
						}else{
							cal=radius[j]/radius[i];
						}
						
						var disX=Math.abs(arrX[j]+arrX[i])/2;
						var disY=Math.abs(arrY[j]+arrY[i])/2;
						var X,Y;
						
						console.log(disX, disY, i, j);
						if(radius[i] <radius[j]){
							console.log(11, cal, disX, disY, i, j, dist);
						
								
								X=arrX[i]+((disX-arrX[i])/cal);
								Y=arrY[i]+((disY-arrY[i])/cal);
								

						
						}else if(radius[i] >radius[j]){
							console.log(22, cal, disX, disY, i, j);
							
								X=arrX[j]+((disX-arrX[j])/cal);
								Y=arrY[j]+((disY-arrY[j])/cal);
								

							
						}else{
							X=disX;
							Y=disY;
						}
						console.log(X, Y, i, j);
						ctx.beginPath();
						ctx.arc(X, Y, 6, 0, 2*Math.PI);
						ctx.stroke();
						ctx.strokeStyle = 'green';
						ctx.fillStyle = 'green';
        				ctx.fill();
						ctx.closePath();					
					}
				}
			}
		}
		}
		c_count++;
	}
	function getDistance(dot1, dot2){
		var dis_x=arrX[dot1]-arrX[dot2];
		var dis_y=arrY[dot1]-arrY[dot2];
		
		dist=Math.sqrt( Math.abs( dis_x * dis_x ) + Math.abs( dis_y * dis_y ) );
		return dist;
	}

	