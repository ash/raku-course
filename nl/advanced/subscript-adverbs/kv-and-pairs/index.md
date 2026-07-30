---
title: Sleutels, waarden en paren
translations_gpt:
---

{% include menu.html %}

Andere adverbs veranderen **wat** een subscript teruggeeft. Standaard geeft een subscript de waarde terug; deze geven meer:

* `:v` — de waarde (de standaard)
* `:k` — de sleutel (of index)
* `:kv` — zowel de sleutel als de waarde
* `:p` — een `Pair` van sleutel en waarde

Voor een array is de "sleutel" de index:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` geeft de index en de waarde samen terug als een lijst, en `@a[1]:p` geeft ze terug als een paar.

Hetzelfde werkt voor hashes, en het is bijzonder handig bij een slice van meerdere sleutels tegelijk:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Hier komt een slice van twee sleutels terug als afwisselende sleutels en waarden. Deze adverbs zijn waar `map`, `for` en soortgelijke functies vaak op vertrouwen wanneer je sleutels en waarden naast elkaar wilt verwerken, zonder het werk op te splitsen in aparte opzoekingen.

{% include nav.html %}
