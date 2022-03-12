/* arcLandscape
* arcLandscape.js
*===================================================================
*	Copyright (c) 2022 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
*
* Tool to convert text or hexadecimal sequence into generative art based on arc system.
* Arc system is a system, where every object is regarded as structure on a spherical surface.
* Result describes another aspect of sequence or text.
*===================================================================
*
* === Synopsis ===
* - `arcLandscape(canvasId,seq,order);`
* - `arcLandscape.fromText(canvasId,text,order);`
*
*  	--- Parameters ---
*  	- canvasId: id of target canvas tag
*  	- seq: a hexadecimal sequence
*  	- text: a text string
*  	- order: boolean value (true|false) for drawing order; true: in normal order, false: in a reverse order
*
* `arcLandscape` converts hexadecimal sequence into canvas image.
* `arcLandscape.fromText` converts text string into canvas image.
* ===================================================================
*/
//
//it converts hexadecimal sequence into canvas image
function arcLandscape(canvasId,seq,order){
	// - canvasId: id of target canvas tag
	// - seq: a hexadecimal sequence
	// - order: boolean value (true|false) for drawing order; true: in normal order, false: in a reverse order
	//===
	//
	seq=seq.toLowerCase();
	order=!!order;
	//
	let slf=window,ctx=slf.document.getElementById(canvasId).getContext('2d'),
		cvsWidth=ctx.canvas.width,cvsHeight=ctx.canvas.height,
		midX=cvsWidth*0.5,midY=cvsHeight*0.5,seqL=seq.length,
		/* -------- */
		HEX={
		'0':+0,'1':+1,'2':+2,'3':+3,
		'4':+4,'5':+5,'6':+6,'7':+7,
		'8':+8,'9':+9,a:+10,b:+11,
		c:+12,d:+13,e:+14,f:+15
		},
		/* -------- */
		xO=0.0,yO=0.0,a0=0,a1=0,a2=0,a3=0,
		/* -------- */
		/* R=R0*(1.0+HEX[hex]/16) */
		/*direction=Math.PI*HEX[hex]/8 */
		R0=Math.max(midX,midY)*Math.SQRT2,R=0.0,direction=0.0,
		x=0.0,y=0.0,r0=0.0,r=0.0,
		i=0,j=0,idx=0,t=0.0,T0=0.0,T=0.0,dT=0.0,
		/* -------- */
		arc=()=>{};
	//
	dT=Math.PI/100;
	ctx.clearRect(0,0,cvsWidth,cvsHeight);
	//
	//===================================================================
	arc=(i)=>{
		//
		//rgba value: #rrggbbaa
		//rr: ${seq[i]}${seq[(i+1)%seqL]}
		//gg: ${seq[(i+2)%seqL]}${seq[(i+3)%seqL]}
		//bb: ${seq[(i+4)%seqL]}${seq[(i+5)%seqL]}
		ctx.fillStyle=`#${seq[i]}${seq[(i+1)%seqL]}${seq[(i+2)%seqL]}${seq[(i+3)%seqL]}${seq[(i+4)%seqL]}${seq[(i+5)%seqL]}ff`;
		//
		//2*PI*hex/16 = PI*hex/8
		direction=Math.PI*HEX[seq[i]]/8;
		//
		R=R0*(1.0+HEX[seq[(i+1)%seqL]]/16);
		xO=midX+R*Math.cos(direction);
		yO=midY+R*Math.sin(direction);
		//
		x=cvsWidth*HEX[seq[(i+2)%seqL]]/16;
		y=cvsHeight*HEX[seq[(i+3)%seqL]]/16;
		//
		T0=Math.atan2(y-yO,x-xO);
		r0=Math.sqrt((x-xO)*(x-xO)+(y-yO)*(y-yO));
		r=0.0;
		//
		//---
		ctx.beginPath();
		ctx.moveTo(x,y);
		//---
		//
		T=dT;
		t=T0+T;
		j=1;
		//
		while(T<2*Math.PI){
			//
			idx=i+HEX[seq[i]]*j;
			a0=HEX[seq[idx%seqL]];
			a1=HEX[seq[(idx+1)%seqL]];
			a2=HEX[seq[(idx+2)%seqL]];
			a3=HEX[seq[(idx+3)%seqL]];
			//
			r+=(a1-a0)*(a3-a2);
			//
			x=xO+r0*Math.cos(t);
			y=yO+r0*Math.sin(t)+r;
			//
			//---
			ctx.lineTo(x,y);
			//---
			//
			j+=1;
			T=j*dT;
			t=T0+T;
		}
		//
		//---
		ctx.closePath();
		ctx.fill();
		//---
	};
	//===================================================================
	//
	//order := true: in normal order|false: in a reverse order
	if(!!order){
		i=0;
		while(i<seqL){
			arc(i);
			//
			i+=1;
		}
	}else{
		i=seqL-1;
		while(!(i<0)){
			arc(i);
			//
			i+=-1;
		}
	}
	//
	slf=cvsWidth=cvsHeight=midX=midY=seqL=HEX=xO=yO=a0=a1=a2=a3=R0=R=direction=x=y=r0=r=i=j=idx=t=T0=T=dT=arc=null;
}
//
//it converts text string into canvas image
arcLandscape.fromText=(canvasId,text,order)=>{
	// - canvasId: id of target canvas tag
	// - text: a text string
	// - order: boolean value (true|false) for drawing order; true: in normal order, false: in a reverse order
	//===
	let i=0,l=text.length,seq='';
	while(i<l){
		seq+=text.codePointAt(i).toString(16);
		i+=1;
	}
	//
	arcLandscape(canvasId,seq,order);
	i=l=seq=null;
};
//===================================================================
/*
* *** LICENSE ***
* MIT License
*
* Copyright (c) 2022 Yuji Sode
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
