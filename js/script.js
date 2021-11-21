
relogio = () => {
	let data = new Date()
	let hor  = data.getHours()
	let min  = data.getMinutes()
	let seg  = data.getSeconds()

	hor < 10 ? hor = '0' + hor : ''
	min < 10 ? min = '0' + min : ''
	seg < 10 ? seg = '0' + seg : ''
	
	let horas = `${hor}:${min}:${seg}`
	document.querySelector("input#rel").value = horas
}

let tempo = setInterval(relogio, 500)

