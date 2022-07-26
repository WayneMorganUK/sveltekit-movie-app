<script>
	export let percent;

	let dash = percent + ' ' + (100 - percent);
	let strokecolor = '';
	switch (true) {
		case percent > 80:
			strokecolor = '#00ff7f';
			break;
		case percent > 60:
			strokecolor = '#2fca33';
			break;
		case percent > 40:
			strokecolor = '#ddd526';
			break;
		case percent > 20:
			strokecolor = '#e59f1e';
			break;
		default:
			strokecolor = '#e02735';
			break;
	}
	if (percent === 0) {
		dash = '100 0';
	}
</script>

<svg viewBox="0 0 60 60">
	<path
		stroke-dasharray="10 1"
		stroke-dashoffset="0"
		pathLength="1"
		d="M5,30a25,25,0,1,1,50,0a25,25,0,1,1,-50,0"
		fill="bg-gray-900"
		stroke="lightgrey"
		stroke-width="3"
	/>
	<path
		stroke-dasharray={dash}
		stroke-dashoffset="-25"
		pathLength="100"
		d="M5,30a25,25,0,1,1,50,0a25,25,0,1,1,-50,0"
		fill="none"
		stroke={strokecolor}
		stroke-width="3"
	/>
</svg>
