---
title: gather kaj take
translations_gpt:
---

{% include menu.html %}

Bloko `gather` kolektas valorojn. Ie ajn ene de ĝi — inkluzive en bukloj kaj subrutinoj, kiujn ĝi vokas — `take` aldonas valoron al la listo, kiun `gather` produktas:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

La `take` plenumiĝas unufoje por ĉiu nombro `1, 2, 3`, kontribuante `1`, `4` kaj `9`. La tuta bloko `gather` rezultigas la liston de ĉio prenita.

`take` povas aperi sub ajna fluregado, kio faras `gather` ideala por konstrui liston kun kondiĉoj:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Ĉi tie valoro estas prenata nur kiam la `if` sukcesas, do nur la paraj nombroj finiĝas en la listo. Tio ofte estas pli klara ol konstrui la liston mane per `push`, ĉar la logiko legiĝas kiel normala buklo kaj `take` simple markas la valorojn konservendajn.

{% include nav.html %}
