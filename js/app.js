const antworten = {
    frage1: null,
    frage2: null,
    frage3: null
};

const produkte = {
    'linzer-roestung': {
        name: 'Linzer Röstung',
        url: 'https://lenoko.de/products/linzer-rostung',
        aromen: ['Karamell', 'Honig', 'Schokolade', 'Säurearm'],
        beschreibung: 'Arabica Catuai aus Honduras und Peru. Gut ausbalancierte Kaffeeröstung mit vollem Körper und süßen Aromen von Karamell, Honig und Schokolade. Sehr säurearm.',
        zubereitungsempfehlung: 'Filter, French Press, Aeropress',
        intensitaet: 'Mittel',
        saeure: 'Sehr niedrig',
        methoden: ['filter']
    },
    'gelber-catuai': {
        name: 'Kaffee Gelber Catuai',
        url: 'https://lenoko.de/products/kaffee-benita-kopie',
        aromen: ['Honigartig', 'Zitrus', 'Fruchtig', 'Schwarztee'],
        beschreibung: 'Arabica Varietät Gelber Catuai aus Honduras. Mittlerer Röstgrad mit saftiger Süße, mittlerem Körper, feiner dezenter Säure und Schwarzteenoten.',
        zubereitungsempfehlung: 'Filter, V60, Chemex',
        intensitaet: 'Mittel',
        saeure: 'Niedrig',
        methoden: ['filter']
    },
    'peru-signature': {
        name: 'Kaffee Peru Signature',
        url: 'https://lenoko.de/products/kaffee-aprocame',
        aromen: ['Karamell', 'Mandeln', 'Schokolade', 'Kräftig'],
        beschreibung: 'Kräftiger Arabica aus Peru. Gut ausbalanciert mit feiner Säure und Aromen von Karamell, Mandeln und dunkler Schokolade.',
        zubereitungsempfehlung: 'Filter, Vollautomat, French Press',
        intensitaet: 'Kräftig',
        saeure: 'Niedrig',
        methoden: ['filter']
    },
    'el-trebol': {
        name: 'Entkoffeinierter Kaffee El Trebol',
        url: 'https://lenoko.de/products/espresso-amerika-trifft-indien-copy',
        aromen: ['Vollmundig', 'Mild', 'Koffeinfrei', 'Schokoladig'],
        beschreibung: 'Arabica Castillo von der Fraueninitiative El Trebol aus Santander/Kolumbien. Mittels Zuckerrohrverfahren schonend entkoffeiniert. Perfekt für abends.',
        zubereitungsempfehlung: 'Alle Zubereitungsarten',
        intensitaet: 'Mittel',
        saeure: 'Niedrig',
        methoden: ['filter', 'espresso']
    },
    'corintio': {
        name: 'Kaffee Corintio',
        url: 'https://lenoko.de/products/kaffee-corintio',
        aromen: ['Schokolade', 'Brauner Zucker', 'Sirup', 'Nektarine'],
        beschreibung: 'Arabica Varietät roter Catuai aus Honduras. Single Origin Spezialitätenkaffee mit mittlerem Röstgrad, viel Körper und leichter bis mittlerer Säure.',
        zubereitungsempfehlung: 'Filter, V60, Chemex',
        intensitaet: 'Mittel',
        saeure: 'Niedrig-mittel',
        methoden: ['filter']
    },
    'linzer-espresso': {
        name: 'Linzer Espresso Röstung',
        url: 'https://lenoko.de/products/espresso-amerika-trifft-indien',
        aromen: ['Röstaromen', 'Kräftig', 'Dunkel', 'Crema'],
        beschreibung: 'Blend aus Honduras & Peru (Caturra/Catimor/Catuai) plus 30% Robusta aus Indien. Dunkle Röstung mit ausgeprägten Röstaromen und schöner Crema.',
        zubereitungsempfehlung: 'Espresso, Vollautomat, Cappuccino',
        intensitaet: 'Kräftig',
        saeure: 'Niedrig',
        methoden: ['espresso']
    },
    'mayas-rheingold': {
        name: 'Espressoröstung Mayas Rheingold',
        url: 'https://lenoko.de/products/espresso-honduras-trifft-indien',
        aromen: ['Fruchtig', 'Schokolade', 'Karamell', 'Körperreich'],
        beschreibung: 'Arabica Catuai aus Honduras mit 10% Robusta aus Indien. Dunkle Röstung mit mittlerer Säure, fruchtigen und schokoladigen Noten. Viel Körper.',
        zubereitungsempfehlung: 'Espresso, Mokka, Ristretto',
        intensitaet: 'Kräftig',
        saeure: 'Mittel',
        methoden: ['espresso']
    },
    'peru-indien': {
        name: 'Espresso Peru trifft Indien',
        url: 'https://lenoko.de/products/espresso-peru-trifft-indien',
        aromen: ['Karamell', 'Marzipan', 'Limette', 'Süß'],
        beschreibung: 'Blend aus Peru Arabica (Caturra/Catimor/Catuai) mit 20% Robusta aus Indien. Mittlerer Röstgrad mit angenehmer Säure und schöner Crema.',
        zubereitungsempfehlung: 'Espresso, Milchgetränke, Vollautomat',
        intensitaet: 'Mittel',
        saeure: 'Mittel',
        methoden: ['espresso']
    },
    'aurum-noctis': {
        name: 'Espressoröstung Aurum Noctis',
        url: 'https://lenoko.de/products/kopie-espresso-peru-trifft-indien',
        aromen: ['Schwarzer Tee', 'Nougat', 'Honig', 'Fruchtig-Malzig'],
        beschreibung: 'Blend aus gelbem Catuai Honduras (60%) mit 40% Robusta aus Indien. Mittlerer bis dunkler Röstgrad mit erfrischender Säure und großer Aromenvielfalt.',
        zubereitungsempfehlung: 'Espresso, Cappuccino, Latte',
        intensitaet: 'Mittel-kräftig',
        saeure: 'Mittel',
        methoden: ['espresso']
    }
};

// Event Listeners für Optionen
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        const container = this.closest('.frage-container');
        const frageNr = container.id.replace('frage', '');

        // Andere Optionen deselektieren
        container.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

        // Diese Option selektieren
        this.classList.add('selected');

        // Antwort speichern
        antworten[`frage${frageNr}`] = this.getAttribute('data-value');

        // Button aktivieren
        document.getElementById(`btn${frageNr}`).disabled = false;
    });
});

function naechsteFrage(aktuelle) {
    document.getElementById(`frage${aktuelle}`).classList.add('hidden');
    document.getElementById(`frage${aktuelle + 1}`).classList.remove('hidden');

    const progress = (aktuelle / 3) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function zurueck(aktuelle) {
    document.getElementById(`frage${aktuelle}`).classList.add('hidden');
    document.getElementById(`frage${aktuelle - 1}`).classList.remove('hidden');

    const progress = ((aktuelle - 2) / 3) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function zeigErgebnis() {
    document.getElementById('progress').style.width = '100%';
    document.getElementById('frage3').classList.add('hidden');

    const empfehlung = berechneEmpfehlung();

    const ergebnisBox = document.getElementById('empfehlungBox');
    const produkt = produkte[empfehlung.produkt];
    const alternative = produkte[empfehlung.alternative];

    ergebnisBox.innerHTML = `
        <h3>🎉 Deine perfekte Wahl:</h3>
        <h2 style="color: #562600; font-family: 'Playfair Display', Georgia, serif; font-size: 32px; margin: 10px 0;">${produkt.name}</h2>

        <div class="aromarad">
            ${produkt.aromen.map(aroma => `<span class="aroma-tag">${aroma}</span>`).join('')}
        </div>

        <div class="beschreibung">
            ${produkt.beschreibung}
        </div>

        <div style="border: 1px solid rgba(86,38,0,0.16); padding: 15px; border-radius: 4px; margin: 20px 0; text-align: left;">
            <strong>💡 Empfohlene Zubereitung:</strong><br>
            ${produkt.zubereitungsempfehlung}
        </div>

        <a href="${produkt.url}" class="produkt-link">
            Jetzt bestellen
        </a>

        <div class="alternative">
            <strong>Alternative Empfehlung:</strong> ${alternative.name}<br>
            <small>Falls du eine zweite Meinung möchtest 😉</small>
        </div>
    `;

    document.getElementById('ergebnis').classList.remove('hidden');
}

function berechneEmpfehlung() {
    const z = antworten.frage1;
    const g = antworten.frage2;
    const s = antworten.frage3;

    // Entkoffeiniert gewählt?
    if (s === 'koffeinfrei') {
        return { produkt: 'el-trebol', alternative: 'linzer-roestung' };
    }

    // Filterkaffee
    if (z === 'filter') {
        if (g === 'fruchtig') return { produkt: 'gelber-catuai', alternative: 'corintio' };
        if (g === 'schokoladig') {
            if (s === 'kraeftig') return { produkt: 'linzer-roestung', alternative: 'corintio' };
            return { produkt: 'peru-signature', alternative: 'linzer-roestung' };
        }
        if (g === 'ausgeglichen') return { produkt: 'peru-signature', alternative: 'linzer-roestung' };
        return { produkt: 'corintio', alternative: 'gelber-catuai' };
    }

    // Espresso
    if (z === 'espresso') {
        if (s === 'kraeftig') return { produkt: 'aurum-noctis', alternative: 'mayas-rheingold' };
        if (g === 'schokoladig') return { produkt: 'linzer-espresso', alternative: 'mayas-rheingold' };
        if (g === 'ausgeglichen') return { produkt: 'peru-indien', alternative: 'linzer-espresso' };
        return { produkt: 'mayas-rheingold', alternative: 'linzer-espresso' };
    }

    // Milchkaffee
    if (z === 'mild') {
        if (g === 'schokoladig') return { produkt: 'linzer-espresso', alternative: 'peru-indien' };
        if (s === 'mild') return { produkt: 'peru-indien', alternative: 'peru-signature' };
        return { produkt: 'peru-indien', alternative: 'linzer-espresso' };
    }

    // Fallback
    return { produkt: 'linzer-roestung', alternative: 'linzer-espresso' };
}

function neuStart() {
    antworten.frage1 = null;
    antworten.frage2 = null;
    antworten.frage3 = null;

    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;

    document.getElementById('ergebnis').classList.add('hidden');
    document.getElementById('frage2').classList.add('hidden');
    document.getElementById('frage3').classList.add('hidden');
    document.getElementById('frage1').classList.remove('hidden');

    document.getElementById('progress').style.width = '0%';
}

// PWA: Service Worker registrieren
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {
            // Registrierung fehlgeschlagen (z.B. lokal ohne https) – App funktioniert trotzdem
        });
    });
}

// ===== Sortenübersicht (Vergleichstabelle "Alle Sorten im Vergleich") =====
const tabelleFilter = { methode: null, staerke: null };

function istKraeftig(produkt) {
    return produkt.intensitaet.toLowerCase().includes('kräftig');
}

function levelVonText(text) {
    const t = text.toLowerCase();
    if (t.includes('sehr niedrig')) return 1;
    if (t === 'niedrig') return 1;
    if (t.includes('niedrig-mittel')) return 2;
    if (t === 'mittel') return 2;
    if (t.includes('mittel-kräftig')) return 3;
    if (t.includes('kräftig')) return 3;
    return 2;
}

function dotsHTML(level) {
    let out = '';
    for (let i = 1; i <= 3; i++) {
        out += `<span class="dot${i <= level ? ' dot-filled' : ''}"></span>`;
    }
    return `<span class="dot-reihe" aria-hidden="true">${out}</span>`;
}

function produktZeileHTML(produkt) {
    return `
        <tr>
            <td class="td-sorte">
                <strong>${produkt.name}</strong>
                <div class="td-aromen">${produkt.aromen.slice(0, 3).join(', ')}</div>
            </td>
            <td>${dotsHTML(levelVonText(produkt.intensitaet))}<span class="td-label">${produkt.intensitaet}</span></td>
            <td>${dotsHTML(levelVonText(produkt.saeure))}<span class="td-label">${produkt.saeure}</span></td>
            <td>${produkt.zubereitungsempfehlung}</td>
            <td><a href="${produkt.url}" class="tabelle-link" target="_blank" rel="noopener">Ansehen</a></td>
        </tr>
    `;
}

function renderTabelle() {
    const tbody = document.getElementById('tabelleBody');
    if (!tbody) return;

    const zeilen = Object.values(produkte)
        .filter(p => !tabelleFilter.methode || p.methoden.includes(tabelleFilter.methode))
        .filter(p => !tabelleFilter.staerke || (tabelleFilter.staerke === 'kraeftig') === istKraeftig(p))
        .map(produktZeileHTML)
        .join('');

    tbody.innerHTML = zeilen || '<tr><td colspan="5" class="td-leer">Keine Sorte passt zu dieser Auswahl.</td></tr>';
}

document.querySelectorAll('.tabelle-filter').forEach(btn => {
    btn.addEventListener('click', () => {
        const gruppe = btn.getAttribute('data-gruppe');
        const wert = btn.getAttribute('data-wert');

        if (wert === 'alle') {
            tabelleFilter.methode = null;
            tabelleFilter.staerke = null;
        } else if (tabelleFilter[gruppe] === wert) {
            tabelleFilter[gruppe] = null;
        } else {
            tabelleFilter[gruppe] = wert;
        }

        document.querySelectorAll('.tabelle-filter').forEach(b => b.classList.remove('active'));
        if (tabelleFilter.methode) {
            const b = document.querySelector(`.tabelle-filter[data-gruppe="methode"][data-wert="${tabelleFilter.methode}"]`);
            if (b) b.classList.add('active');
        }
        if (tabelleFilter.staerke) {
            const b = document.querySelector(`.tabelle-filter[data-gruppe="staerke"][data-wert="${tabelleFilter.staerke}"]`);
            if (b) b.classList.add('active');
        }
        if (!tabelleFilter.methode && !tabelleFilter.staerke) {
            const b = document.querySelector('.tabelle-filter[data-wert="alle"]');
            if (b) b.classList.add('active');
        }

        renderTabelle();
    });
});

renderTabelle();
