---
title: Een supply aftappen
translations_gpt:
---

{% include menu.html %}

Om je op een supply te abonneren, _tap_ je hem af: je geeft `.tap` een blok, en dat blok draait voor elke waarde die de supply uitzendt. De eenvoudigste supply om mee te experimenteren is `Supply.from-list`, die de waarden van een lijst uitzendt:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

Dit drukt af:

```
1
2
3
```

Het blok `-> $v { say $v }` is de _tap_. De supply duwt elke waarde er om beurten in, dus draait het blok drie keer, één keer per waarde.

De tap mag met de waarde doen wat hij wil, ook een resultaat opbouwen:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Hier wordt elke uitgezonden waarde bij `$total` opgeteld, dat op `6` eindigt. Aftappen is de basishandeling van reactief programmeren: verbind een stukje gedrag met een stroom en laat de stroom het aandrijven.

{% include nav.html %}
