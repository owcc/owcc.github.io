var menu  = document.querySelector('.menu-icon'),
		side  = document.querySelector('.site-left'),
		body  = document.querySelector('section.paper'),
		title = document.querySelector('section.title>span'),
		head  = document.querySelector('.post-header');

menu.addEventListener('touchstart', function() {
		side.setAttribute('id', side.id == 'opened' ? 'closed' : 'opened')
})

head != null && body.addEventListener('scroll', function() {
	var headHight = window.getComputedStyle(head).height;

	title.style.opacity = body.scrollTop >= parseInt(headHight) ? 1 : 0
})
