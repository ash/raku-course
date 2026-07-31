---
title: Quiz — whenever et done
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

Primum `whenever` `1` immittit, deinde `2` — et ad `2` `done` vocat. Punctum grave est quod `done` **totum blocum `react`** finit, non solum proprium `whenever`: reliquum supply primi (`3`) et *totum supply secundum* (`10, 20`) praecidantur antequam tradantur. Itaque `@out` solum `[1 2]` tenet. Si `done` solum proprium fluxum silentio premeret, `[1 2 10 20]` vidisses — sed unum `done` omnes reactiones simul sistit.

</div>

{% include nav.html %}
