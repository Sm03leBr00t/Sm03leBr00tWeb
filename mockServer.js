const simulado = require('simulado');

async function mock() {
	await simulado.start({
		port: 9000,
	});

	await simulado.setMock({
		method: 'POST',
		path: '/mockContactSubmit',
		body: 'Is ok!',
		delay: 3000,
	});
}

mock();
