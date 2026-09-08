# Transfer Otopeni — instalare pe găzduirea clientului

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

- Setări → General: titlu `Transfer Otopeni.ro`, descriere
  `Transferuri aeroport și tururi private în România`, fus orar `Europe/București`
- deschide `/` (prezentarea), `/blog/`, `/tururi/`, un tur și un articol

## Unde se schimbă datele de contact

Într-un singur loc, în `carpathia/functions.php`, funcția `carpathia_contact()`.
De acolo se propagă în bara de sus, în butoanele „Sună", în linkul de WhatsApp
și în subsol.

```php
'telefon'      => '+40 726 260 471',
'telefon_link' => '+40726260471',
'telefon_2'    => '+40 746 464 826',
'whatsapp'     => '40726260471',
'email'        => 'contact@transferotopeni.ro',
'program'      => '24h din 24h, 7 zile din 7',
'adresa'       => 'București',
'facebook'     => 'https://www.facebook.com/profile.php?id=100063703564985',
```

## Cum se adaugă un articol cu poze

Articole → Adaugă articol. Editorul pornește cu structura gata pusă:

1. titlul, de exemplu „O zi la Bran, cu o familie din Franța"
2. o frază despre drum
3. un rând de poze: se apasă **Încarcă** în blocul Galerie și se aleg pozele
   din telefon sau din calculator (se pot selecta mai multe deodată)
4. încă o frază, despre unde s-a oprit și cum a fost ziua
5. dreapta: **Categorii** (Transilvania, Muntenia, Bucovina, București,
   Sfaturi de drum) și, dacă se vrea o anumită poză în lista de articole,
   **Stabilește imaginea reprezentativă**

Dacă imaginea reprezentativă nu e aleasă, site-ul o pune singur pe prima poză
din articol, ca articolul să nu apară fără fotografie în listă.

## Ce poate edita clientul singur din panou

- textele paginilor și articolele de blog, ca orice pagină WordPress
- tururile: Tururi → un tur are câmpuri proprii pentru durată, plecare și
  număr de persoane, afișate automat în pagină
- imaginile reprezentative ale tururilor și articolelor

## De completat înainte de lansare

Lucrurile de mai jos sunt de demo și trebuie înlocuite cu datele reale:

- articolele de blog și pozele lor, de înlocuit cu pozele lui din tururi
- trei poze de tururi (Bran, Peleș, Paltinu) sunt de pe Wikimedia, cu licență
  care cere credit: fie se pune creditul, fie se înlocuiesc cu poze proprii
- banner de cookie-uri și verificarea juridică a paginilor Termeni,
  Confidențialitate și Politica de cookies
