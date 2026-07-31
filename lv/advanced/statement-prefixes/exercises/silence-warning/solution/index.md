---
title: 'Risinājums: Apklusināt brīdinājumu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Atrodiet programmu failā [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Izvade

```
Hello, !
```

## Komentāri

1. Nedefinētā `$name` interpolēšana virknē parasti izraisa brīdinājumu par neinicializētas vērtības lietošanu. Ietinot izteiksmi `quietly`, tas tiek apslāpēts, tāpēc tiek izdrukāts tikai sveiciens.

1. Tāpat kā `do`, `quietly` atgriež sava bloka vērtību, tāpēc saliktā virkne (kurā trūkstošais vārds atstāj tukšu spraugu) tiek saglabāta `$greeting`.

1. `quietly` tikai paslēpj brīdinājumu — vērtība joprojām ir nedefinēta. Ja tā vietā vēlaties ar trūkstošo vērtību *tikt galā*, norādiet noklusējumu ar defined-or operatoru `//`: `$name // 'friend'` dod `'friend'`, kad `$name` ir nedefinēts, tāpēc `"Hello, " ~ ($name // 'friend') ~ "!"` izdrukā `Hello, friend!` pavisam bez brīdinājuma.

{% include nav.html %}
