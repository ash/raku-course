---
title: Quiz — Multilevel hashes
---

{% include menu.html %}

For the given data structure:

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

Select the lines which provide correct access to the data item for February of 1900.

{:.quiz}
1 | say %statistics<1900>&lt;Feb&gt;;
1 | say %statistics{1900}&lt;Feb&gt;; | Questo è corretto, poiché `1900` può essere implicitamente convertito in una stringa.
0 | say %statistics{1900}{Feb}; | Errato, poiché `Feb` deve essere una stringa.
1 | say %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}