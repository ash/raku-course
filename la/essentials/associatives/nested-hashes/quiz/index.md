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
1 | dic %statistics<1900>&lt;Feb&gt;;
1 | dic %statistics{1900}&lt;Feb&gt;; | Hoc rectum est, quia `1900` potest implicite in string converti.
0 | dic %statistics{1900}{Feb}; | Falsum, quia `Feb` debet esse string.
1 | dic %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}