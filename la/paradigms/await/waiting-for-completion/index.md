---
title: Finem exspectare
translations_gpt:
---

{% include menu.html %}

`await` modus expressus exspectandi est, sed codex reactivus quoque exspectat — tacite tantum. Blocus `react` non finit donec omnia supply quae spectat perfecta sint, quod tibi eandem garantiam «omnia perfecta sunt» dat:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

`say` solum **postquam** blocus react finivit currit, itaque `@values` iam omnem valorem emissum tenet. Re vera, blocus `react` fluxum pro te exspectavit.

Hoc exemplar utile est: utere bloco `react` ut omnia quae supply emittit colligas, deinde cum effectu collecto in linea sequenti labora, certus fluxum completum esse. Sive promissum per `await` sive fluxum per `react` exspectas, principium idem est — consiste donec opus simultaneum perfectum sit, deinde cum effectibus eius perge.

{% include nav.html %}
