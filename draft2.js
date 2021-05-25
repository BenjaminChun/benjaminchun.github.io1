const portfolioitems = document.querySelectorAll('.portfolio-item-wrapper');
portfolioitems.forEach(portfolioitem =>{
	portfolioitem.addEventListener('mouseover',()=>{
		console.log(portfolioitem.childNodes[1].classList);
		portfolioitem.childNodes[1].classList.add('img-darken');
	})
	portfolioitem.addEventListener('mouseout',()=>{
		console.log(portfolioitem.childNodes[1].classList);
		portfolioitem.childNodes[1].classList.remove('img-darken');
	})
})