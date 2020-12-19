const  btns = document.querySelectorAll('.fbutton');
for(item of btns){
	item.addEventListener('click',function(){
		if(this.classList.contains('active')){
			this.classList.remove('active');
		} else {
			for(el of btns){
				el.classList.remove('active');
			}
			this.classList.add('active');
		}
	})
}