# LeNoKo Kaffee-Berater (PWA)

Eigenständige, installierbare Version des Shopify-Kaffeeberaters. Quiz-Logik 1:1 aus dem
bestehenden Snippet übernommen (`berechneEmpfehlung()` unverändert), nur auf
mehrere Dateien aufgeteilt und um PWA-Bausteine ergänzt (`manifest.json`, `sw.js`, Icons).

## Struktur

```
kaffeeberater-pwa/
├── index.html
├── manifest.json
├── sw.js
├── css/style.css
├── js/app.js
└── icons/icon-192.png, icon-512.png
```

## Deployment auf GitHub Pages

1. Neues GitHub-Repository anlegen (z. B. `kaffeeberater`), Inhalt dieses Ordners hochladen/pushen.
2. Im Repo: **Settings → Pages → Source: Deploy from branch**, Branch `main`, Ordner `/ (root)`.
3. GitHub stellt die Seite dann unter `https://<username>.github.io/kaffeeberater/` bereit.

## Eigene Subdomain (empfohlen, z. B. `berater.lenoko.de`)

1. Im Repo eine Datei `CNAME` (ohne Dateiendung) mit Inhalt `berater.lenoko.de` anlegen.
2. Bei deinem Domain-Provider (dort, wo lenoko.de verwaltet wird) einen **CNAME-Eintrag**
   anlegen: `berater` → `<username>.github.io`.
3. In den GitHub-Pages-Settings unter „Custom domain" `berater.lenoko.de` eintragen und
   „Enforce HTTPS" aktivieren, sobald das Zertifikat ausgestellt wurde (kann etwas dauern).

Das ist derselbe Ansatz wie bei `nerd.lenoko.de` (KERNEL & INIT) – vermeidet die
Same-Origin-Probleme, an denen die PWA-Installierbarkeit direkt auf Shopify gescheitert ist.

## Auf der Shopify-Seite verlinken

Auf `lenoko.de/pages/welcher-kaffee-passt-zu-mir` die bestehende Vergleichstabelle
(SEO-Content) behalten und oben einen Button/Banner ergänzen, der auf
`https://berater.lenoko.de` verweist – für die volle interaktive Empfehlung.

## Produktdaten aktuell halten

Die Sorten-/Produktdaten liegen in `js/app.js` im Objekt `produkte` (Name, URL, Aromen,
Beschreibung, Zubereitung). Bei neuen Sorten oder geänderten Produkt-URLs muss diese
Datei manuell angepasst werden – es gibt aktuell keine automatische Synchronisation mit
Shopify.

## Icons

Die Icons in `icons/` sind ein Platzhalter im Markenlook (Dunkelbraun/Goldbeige,
Kaffeetasse). Gerne durch das echte LeNoKo-Logo ersetzen, sobald verfügbar
(192×192 und 512×512 px, PNG, am besten mit etwas Rand für "maskable" Icons).
