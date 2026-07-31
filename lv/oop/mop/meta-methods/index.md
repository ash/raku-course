---
title: Metametodes
translations_gpt:
---

{% include menu.html %}

_Metametodi_ izsauc ar `.^`, nevis ar `.`. Parastā `.method` izpilda objekta metodi; `.^method` izsauc metodi uz objekta **metaobjekta** — tā jautā par tipu, nevis darbojas kā tips.

Ar `.^name`, kas atgriež tipa nosaukumu, jau esat sastapušies:

```raku
say 42.^name; # Int
```

Citas metametodes izpēta tipa struktūru. `.^attributes` uzskaita tā atribūtus, un `.^find_method` pasaka, vai metode eksistē:

```raku
class Animal {
    has $.name;
    method speak { 'generic' }
}

say Animal.^attributes.elems;          # 1
say so Animal.^find_method('speak');   # True
say so Animal.^find_method('fly');     # False
```

`.^mro` atgriež _metožu atrisināšanas secību_ — tipu ķēdi, ko Raku secīgi pārmeklē, meklējot metodi. Tā ir klases mantošanas līnija:

```raku
class A {}
class B is A {}

say B.^mro.map(*.^name); # (B A Any Mu)
```

`B` manto no `A`, un katrs tips galu galā no `Any` un `Mu`, tāpēc metodes izsaukums uz `B` tiek meklēts tieši pa šo ceļu. Šīs metametodes pārvērš jūsu tipu struktūru par datiem, ko izpildes laikā var izprašņāt.

{% include nav.html %}
