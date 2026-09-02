/**
 * Blackcar – interacțiuni minime.
 * Formularul de ofertă nu trimite date nicăieri: compune un mesaj WhatsApp,
 * pentru că așa lucrează efectiv firmele de transfer.
 */
(function () {
	'use strict';

	var form = document.querySelector('[data-quote-form]');
	if (!form) return;

	// Nu se cer curse în trecut.
	var dateInput = form.querySelector('input[type="date"]');
	if (dateInput) {
		var today = new Date();
		var iso = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
			.toISOString()
			.slice(0, 10);
		dateInput.min = iso;
		if (!dateInput.value) dateInput.value = iso;
	}

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		var data = new FormData(form);
		var from = (data.get('preluare') || '').toString().trim();
		var to = (data.get('destinatie') || '').toString().trim();
		var date = (data.get('data') || '').toString().trim();
		var time = (data.get('ora') || '').toString().trim();
		var people = (data.get('persoane') || '').toString().trim();

		var readableDate = date;
		if (date) {
			var parts = date.split('-');
			if (parts.length === 3) readableDate = parts[2] + '.' + parts[1] + '.' + parts[0];
		}

		var lines = [
			'Bună ziua! Aș dori o ofertă pentru un transfer.',
			'',
			'Preluare: ' + (from || '(de completat)'),
			'Destinație: ' + (to || '(de completat)'),
			'Data: ' + (readableDate || '(de completat)'),
			'Ora: ' + (time || '(de completat)'),
			'Persoane: ' + (people || '1')
		];

		var phone = form.getAttribute('data-whatsapp') || '';
		var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(lines.join('\n'));

		window.open(url, '_blank', 'noopener');
	});
})();
