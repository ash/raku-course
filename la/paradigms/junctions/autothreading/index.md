---
title: Filatio automatica
translations_gpt:
---

{% include menu.html %}

Cum iuncturam ad aliquid tradis quod unum valorem exspectat — ad comparationem vel ad functionem ordinariam — Raku tacite illam operationem **omni** valori post iuncturam applicat et effectus rursus in iuncturam coniungit. Hoc _filatio automatica_ appellatur.

Exempli gratia, iuncturae addere unicuique valori eius addit:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

`+ 10` ad `1`, `2` et `3` seorsum applicatum est, dans novam iuncturam _any_ `any(11, 12, 13)`.

In comparatione effectus coniunctus in unum valorem veritatis secundum genus iuncturae collabitur:

```raku
say so all(3, 7, 2) > 0;  # True  — omnis valor positivus est
say so all(3, -1, 2) > 0; # False — non omnes positivi sunt
say so none(1, 2, 3) == 5; # True — nullus eorum est 5
```

Filatio automatica est id quod iuncturas tam compendiosas reddit: una comparatio multos valores probat. Conceptualiter probationes independentes sunt, itaque Raku liber est eas parallelas currere — quapropter iuncturae naturaliter in instrumentis simultaneitatis sedent.

{% include nav.html %}
