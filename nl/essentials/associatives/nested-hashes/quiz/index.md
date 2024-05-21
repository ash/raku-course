---
title: Quiz — Meerdere niveaus hashes
---

{% include menu.html %}

Voor de gegeven datastructuur:

```raku
my %statistics =
    1900 => {
        Jan => 500,
        Feb => 550,
    },
    2000 => {
        Jan => 1230,
        Feb => 1245,
    };
```

Selecteer de regels die correcte toegang bieden tot het gegeven item voor februari 1900.

{:.quiz}
1 | say %statistics<1900>&lt;Feb&gt;;
1 | say %statistics{1900}&lt;Feb&gt;; | Dit is correct, aangezien `1900` impliciet naar een string kan worden omgezet.
0 | say %statistics{1900}{Feb}; | Onjuist, aangezien `Feb` een string moet zijn.
1 | say %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}