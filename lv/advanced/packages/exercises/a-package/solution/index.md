---
title: 'Risinājums: Pakotne'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Šīs programmas pirmkodu var atrast failā [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Izvade

```
0
212
```

## Komentāri

1. Gan mainīgais, gan apakšprogramma ir deklarēti ar `our`, tāpēc abi kļūst par `Temperature` vārdtelpas daļu un ir sasniedzami no ārpuses.

1. Mainīgajam piekļūst kā `$Temperature::freezing` — sigils, pakotnes nosaukums, tad mainīgā nosaukums —, savukārt apakšprogrammu izsauc kā `Temperature::fahrenheit(100)`. Pārvēršot `100`, iegūst `100 * 9/5 + 32`, kas ir `212`.

1. Vienkāršs `package` nodrošina tikai vārdtelpu. Atkārtoti lietojamai bibliotēkai mēs būtu izmantojuši `module` — un, kad nonākam pie objektiem, `class` —, bet vārdtelpas mehānisms katrā gadījumā ir vienāds.

{% include nav.html %}
