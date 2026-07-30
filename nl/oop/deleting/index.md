---
title: Bestanden en mappen verwijderen
translations_gpt:
---

{% include menu.html %}

Net zoals `spurt` en `mkdir` dingen op schijf aanmaken, halen twee routines ze weg.

De routine `unlink` verwijdert een bestand:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` verwijdert het genoemde bestand. Net als de andere routines voor het bestandssysteem heeft hij ook een methodevorm op een padobject — `'temp.txt'.IO.unlink`.

Verwijderen is onmiddellijk en definitief: er is geen prullenbak om iets uit terug te halen. Merk op dat je, nadat een bestand weg is, erop moet testen met `.e` (bestaan) in plaats van `.f`, omdat de typetests `.f` en `.d` werpen wanneer het pad er niet is.

De routine `rmdir` verwijdert een map, maar alleen een **lege**:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

Als de map nog iets bevat, verwijdert `rmdir` niets en laat hij haar staan. Dus om een map te verwijderen die bestanden bevat, maak je haar eerst leeg en verwijder je haar daarna:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # delete every entry
rmdir 'reports';                # now the directory is empty
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` somt de items van de map op (het vorige onderwerp behandelde dat), en `.unlink` op elk ervan aanroepen verwijdert ze. Zodra de map leeg is, kan `rmdir` haar weghalen. (Deze platte lus gaat ervan uit dat de map alleen bestanden bevat; een boom met geneste submappen zou eerst daarin moeten afdalen.)

{% include nav.html %}
