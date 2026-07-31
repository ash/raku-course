---
title: '`WHO` un `HOW`'
translations_gpt:
---

{% include menu.html %}

Vēl divi introspekcijas rīki papildina kopu: `HOW` un `WHO`.

## `HOW`

Katrai vērtībai Raku ir _metaobjekts_ — objekts, kas zina, kā šīs vērtības tips darbojas. `HOW` (saīsinājums no _Higher Order Workings_) atgriež šo metaobjektu:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

Jūs esat izmantojuši metaobjektu visu laiku, iespējams, to nepamanot. `.^` izsaukumā `.^name` ir metodes izsaukums, kas tiek maršrutēts caur `HOW`. Šīs divas rindas ir ekvivalentas:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

Tātad `$x.^name` ir tikai īsāks veids, kā uzrakstīt `$x.HOW.name($x)`. Ievērojiet, ka objekts tiek padots vēlreiz kā arguments: metaobjekts ir *kopīgs* visām tipa vērtībām, tāpēc metametodei tiek norādīts, par kuru objektu tā tiek jautāta. `.^` forma to dara automātiski. (Metodes `name` gadījumā arguments tiek ignorēts, bet tā padošana ir pareizā, vispārīgā forma — dažas metametodes to izmanto.)

Tas pats attiecas uz citām metametodēm, kuras jūs varat sastapt, piemēram, `.^methods`, kas uzskaita metodes, uz kurām vērtība reaģē.

## `WHO`

`WHO` atgriež _pakotni_, kurai nosaukums pieder — simbolu tabulu, kas definēta šajā vārdtelpā:

```raku
say Int.WHO.^name; # Stash
```

`Stash` (simbolu tabulas heš) kļūst noderīgs, kad strādājat ar moduļiem, kur tas ļauj atrast moduļa definētos nosaukumus. Mēs pie tā atgriezīsimies [sadaļā par moduļiem](/lv/advanced/module-introspection); pagaidām pietiek zināt, ka `WHO` pastāv un ko tas apzīmē.

{% include nav.html %}
