/**
 * Transfer Otopeni – interacțiuni minime.
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
	}

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		var data = new FormData(form);
		var from = (data.get('preluare') || '').toString().trim();
		var to = (data.get('destinatie') || '').toString().trim();
		var date = (data.get('data') || '').toString().trim();
		var time = (data.get('ora') || '').toString().trim();
		var people = (data.get('persoane') || '').toString().trim();
		var flight = (data.get('zbor') || '').toString().trim();
		var phone_contact = (data.get('telefon') || '').toString().trim();

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
		if (flight) lines.splice(6, 0, 'Număr zbor: ' + flight);
		if (phone_contact) lines.push('Telefon: ' + phone_contact);

		var mesaj = lines.join('\n');
		var phone = form.getAttribute('data-whatsapp') || '';
		var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(mesaj);

		window.open(url, '_blank', 'noopener');

		// Pe desktop, WhatsApp Web poate să nu fie pornit, iar cererea s-ar pierde
		// fără ca cineva să știe. Arătăm aceleași date și ca e-mail.
		var fallback = document.querySelector('[data-quote-fallback]');
		var mailto = document.querySelector('[data-quote-mailto]');
		if (fallback && mailto) {
			var email = form.getAttribute('data-email') || '';
			mailto.href =
				'mailto:' + email +
				'?subject=' + encodeURIComponent('Cerere transfer') +
				'&body=' + encodeURIComponent(mesaj);
			fallback.hidden = false;
		}
	});

	/**
	 * Estimare de preț pe rutele din tabel. Nu înlocuiește oferta, dar răspunde
	 * la „cât costă" fără ca omul să trebuiască să scrie cuiva.
	 */
	var estimator = document.querySelector('[data-estimator]');
	if (estimator) {
		var ruta = estimator.querySelector('[data-estimator-ruta]');
		var masina = estimator.querySelector('[data-estimator-masina]');
		var rezultat = estimator.querySelector('[data-estimator-rezultat]');

		var arata = function () {
			var optiune = ruta.options[ruta.selectedIndex];
			var pret = optiune.getAttribute(
				masina.value === 'van' ? 'data-van' : 'data-sedan'
			);
			rezultat.textContent = pret ? pret : '';
		};

		ruta.addEventListener('change', arata);
		masina.addEventListener('change', arata);
		arata();
	}
})();
