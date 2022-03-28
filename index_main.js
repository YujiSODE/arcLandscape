/*arcLandscape
* index_main.js
*===================================================================
*	Copyright (c) 2022 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
*/
(()=>{
	let slf=window.document,
		cId='outputCvs',C=slf.getElementById(cId),
		/* === === */
		REVERSE=slf.getElementById('reverseOrder'),
		A=slf.getElementById('downloadPNG'),
		INPUT=slf.getElementById('textInput'),
		/* === canvas size inputs === */
		WIDTH=slf.getElementById('cWidth'),
		HEIGHT=slf.getElementById('cHeight'),
		/* === buttons === */
		CLEARB=slf.getElementById('clearB'),
		LOADB_txt=slf.getElementById('loadB_txt'),
		LOADB_hex=slf.getElementById('loadB_hex'),
		LINKB=slf.getElementById('linkB'),
		/* === TYPE := undefined|txt|hex === */
		TYPE=undefined;
	//
	//form event
	slf.getElementById('arcLandscapeForm').addEventListener('change',()=>{
		//
		//the upper limit for canvas size: 3000
		WIDTH.value=WIDTH.value>3000?3000:WIDTH.value;
		HEIGHT.value=HEIGHT.value>3000?3000:HEIGHT.value;
		//
		C.width=WIDTH.value;
		C.height=HEIGHT.value;
		//
		//overriding value of TYPE
		TYPE=undefined;
	},false);
	//
	//clearing text input
	CLEARB.addEventListener('click',()=>{
		INPUT.value='';
		//
		//overriding value of TYPE
		TYPE=undefined;
	},false);
	//
	//load input as text string
	LOADB_txt.addEventListener('click',()=>{
		arcLandscape.fromText(cId,INPUT.value,!REVERSE.checked);
		//
		//overriding value of TYPE
		TYPE='txt';
	},false);
	//
	//load input as hexadecimal sequence
	LOADB_hex.addEventListener('click',()=>{
		arcLandscape(cId,INPUT.value.replaceAll(/[^0-1A-Fa-f]/g,''),!REVERSE.checked);
		//
		//overriding value of TYPE
		TYPE='hex';
	},false);
	//
	//generating download link
	LINKB.addEventListener('click',()=>{
		let url,time=new Date();
			//reset download link
			A.href='#';
			A.download='#';
			A.style='display:none;';
			//
			url=async ()=>await C.toDataURL();
			//
			setTimeout(()=>{
				//set download link
				url().then((v)=>{
					A.href=v;
				}).then(()=>{
					A.textContent=time.toTimeString();
					//
					//output filename:"AL<number>_TYPE<type|typeReverse><width>x<height>.png"
					A.download=`AL${time.getTime()}_TYPE${TYPE}${!REVERSE.checked?'':'Reverse'}${C.width}x${C.height}.png`;
					A.style='display:inline;';
				});
			},2000);
	},false);
})();
