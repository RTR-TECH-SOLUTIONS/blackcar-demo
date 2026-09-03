# Cursa Ta — instalare pe găzduirea clientului

Site-ul e o temă WordPress bloc, scrisă la comandă. Nu are nevoie de niciun
plugin și nu folosește page builder. Merge pe orice găzduire cu WordPress.

**Necesar:** WordPress 6.5 sau mai nou (recomandat 6.7+), PHP 8.0 sau mai nou.

## Fișiere

| Fișier | Ce e |
|---|---|
| `carpathia.zip` | tema, se instalează din panou |
| `continut.xml` | paginile, tururile, articolele, categoriile și imaginile |

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
alege `continut.xml`.

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

Site-ul are două pagini: prezentarea (o singură pagină lungă, cu ancore în
meniu) și blogul cu pozele din tururi. Tururile sunt un tip de conținut
separat, cu pagină proprie fiecare.

**5. Verifică**

- Setări → General: titlu `Cursa Ta`, descriere
  `Transferuri aeroport și tururi private în România`, fus orar `Europe/București`
- deschide `/` (prezentarea), `/blog/`, `/tururi/`, un tur și un articol

## Unde se schimbă datele de contact

Într-un singur loc, în `carpathia/functions.php`, funcția `carpathia_contact()`.
De acolo se propagă în bara de sus, în butoanele „Sună", în linkul de WhatsApp
și în subsol.

```php
'telefon'      => '0726 260 471',
'telefon_link' => '+40726260471',
'whatsapp'     => '40726260471',
'email'        => 'contact@cursata.ro',
'program'      => 'Zilnic, de la 06:00 până la 23:00',
'adresa'       => 'București',
```

## Ce poate edita clientul singur din panou

- textele paginilor și articolele de blog, ca orice pagină WordPress
- tururile: Tururi → un tur are câmpuri proprii pentru durată, plecare și
  număr de persoane, afișate automat în pagină
- imaginile reprezentative ale tururilor și articolelor

## De completat înainte de lansare

Lucrurile de mai jos sunt de demo și trebuie înlocuite cu datele reale:

- numele firmei, care acum e provizoriu („Cursa Ta"), plus adresa de e-mail
  care vine din el
- programul de lucru, acum pus de noi ca exemplu
- cele trei recenzii, care acum sunt scrise de noi, nu preluate de pe Google
- articolele de blog și pozele lor, de înlocuit cu pozele lui din tururi
- patru poze de tururi (Cantacuzino, Salina Slănic, Paltinu, Bran) sunt de pe
  Wikimedia, cu licență care cere credit: fie se pune creditul, fie se
  înlocuiesc cu poze proprii
- banner de cookie-uri și verificarea juridică a paginilor Termeni,
  Confidențialitate și Politica de cookies
