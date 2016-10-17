var repeat=1 // 0 para rolar uma vez, 1 para rolar infinitamente
	var title=document.title
	var leng=title.length
	var start=1
		function titlemove() {
		titl=title.substring(start, leng) + title.substring(0, start)
		document.title=titl
			start++
				if (start==leng+1) {
					start=0
				if (repeat==0)
			return
			}
			setTimeout("titlemove()",300)  // aqui vc pode aumentar ou diminuir a velocidade 
			}
				if (document.title)
				titlemove()
			
			
			var nW,nH,oH,oW;
function zoomToggle(iWideSmall,iHighSmall,iWideLarge,iHighLarge,whichImage){
oW=whichImage.style.width;oH=whichImage.style.height;
if((oW==iWideLarge)||(oH==iHighLarge)){
nW=iWideSmall;nH=iHighSmall;}else{
nW=iWideLarge;nH=iHighLarge;}
whichImage.style.width=nW;whichImage.style.height=nH;
}

