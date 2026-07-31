---
title: Konteineru introspekcija
translations_gpt:
---

{% include menu.html %}

_Introspekcija_ nozīmē jautāt vērtībai vai konteineram par sevi — par tā tipu, pamatā esošo konteineru un mehānismu aiz tā. Jūs jau esat izmantojuši vienu introspekcijas rīku, `.^name`, lai izdrukātu vērtības tipu.

Raku piedāvā nelielu šādu rīku saimi, kas rakstīti ar lielajiem burtiem: `WHAT`, `VAR`, `WHO` un `HOW`. Tos dažreiz sauc par _pseidometodēm_, jo kompilators tiem piešķir īpašu nozīmi, nevis apstrādā tos kā parastas metodes. Šajā sadaļā aplūkosim katru no tiem.

Atgādinājumam — šeit `.^name` parāda, kā netipizēta konteinera tips mainās, kad tajā saglabājat dažādas vērtības:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

Konteineris sākas kā `Any` un pēc tam norāda tā tipa nosaukumu, kāda vērtība tajā pašlaik glabājas.

{% include nav.html %}
