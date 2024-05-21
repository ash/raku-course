---
title: Viktorīna — Daudzlīmeņu heši
---

{% include menu.html %}

Dotajai datu struktūrai:

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

Izvēlieties rindas, kas nodrošina pareizu piekļuvi datu vienumam par 1900. gada februāri.

{:.quiz}
1 | say %statistics<1900>&lt;Feb&gt;;
1 | say %statistics{1900}&lt;Feb&gt;; | Tas ir pareizi, jo `1900` var tikt netieši pārveidots par virkni.
0 | say %statistics{1900}{Feb}; | Nepareizi, jo `Feb` jābūt virknei.
1 | say %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}