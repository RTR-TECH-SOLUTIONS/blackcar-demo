# Blackcar — instalare pe găzduirea clientului

Site-ul e o temă WordPress bloc, scrisă la comandă. Nu are nevoie de niciun
plugin și nu folosește page builder. Merge pe orice găzduire cu WordPress.

**Necesar:** WordPress 6.5 sau mai nou (recomandat 6.7+), PHP 8.0 sau mai nou.

## Fișiere

| Fișier | Ce e |
|---|---|
| `carpathia.zip` | tema, se instalează din panou |
| `blackcar-continut.xml` | paginile, tururile, articolele, categoriile și imaginile |

## Pași

**1. Instalează tema**

Aspect → Teme → Adaugă temă nouă → Încarcă temă → alege `carpathia.zip` →
Instalează → **Activează**.

Tema trebuie activată **înainte** de import, pentru că ea înregistrează tipul
de conținut „Tururi". Dacă imporți întâi, tururile nu se creează.

**2. Setează legăturile permanente**

Setări → Legături permanente → **Nume articol** (`/%postname%/`) → Salvează.

Pasul ăsta e obligatoriu, altfel adresele de tip `/tururi/transfagarasan/`
dau eroare 404.

**3. Importă conținutul**

Unelte → Import → WordPress → Instalează acum → Rulează importatorul →
alege `blackcar-continut.xml`.

Pe ecranul următor:
- atribuie autorul la contul de administrator existent
- **bifează „Descarcă și importă fișierele atașate"**

Imaginile se descarcă de pe demo, deci importul are nevoie de conexiune la
internet și poate dura un minut.

**4. Setează pagina principală și blogul**

Setări → Citire:
- Pagina ta principală afișează: **O pagină statică**
- Pagina principală: **Acasă**
- Pagina articolelor: **Blog**

**5. Verifică**

- Setări → General: titlu `Blackcar`, descriere
  `Transferuri aeroport și tururi private în România`, fus orar `Europe/București`
- deschide `/`, `/tururi/`, `/flota/`, `/firme/`, `/ghid/` și un tur

## Unde se schimbă datele de contact

Într-un singur loc, în `carpathia/functions.php`, funcția `carpathia_contact()`.
De acolo se propagă în bara de sus, în butoanele „Sună", în linkul de WhatsApp
și în subsol.

```php
'telefon'      => '0726 260 471',
'telefon_link' => '+40726260471',
'whatsapp'     => '40726260471',
'email'        => 'contact@blackcar.ro',
'program'      => 'Non-stop, 7 zile din 7',
'adresa'       => 'București',
```

## Ce poate edita clientul singur din panou

- textele paginilor și articolele din ghid, ca orice pagină WordPress
- tururile: Tururi → un tur are câmpuri proprii pentru durată, plecare, preț
  și număr de persoane, afișate automat în pagină
- imaginile reprezentative ale tururilor și articolelor
- tabelul de tarife și calculatorul de preț sunt în temă, nu în panou:
  se schimbă în `patterns/home-rates.php`

## De completat înainte de lansare

Lucrurile de mai jos sunt de demo și trebuie înlocuite cu datele reale:

- prețurile din tabelul de tarife și din calculator
- lista de tururi (Bucovina și Delta Dunării sunt exemple, nu rute confirmate)
- cele trei recenzii, care acum sunt scrise de noi, nu preluate de pe Google
- cifrele „15+ ani" și capacitățile din pagina Flota
- banner de cookie-uri și verificarea juridică a paginilor Termeni,
  Confidențialitate și Politica de cookies
