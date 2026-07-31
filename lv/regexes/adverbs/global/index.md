---
title: Globāla saskaņošana
translations_gpt:
---

{% include menu.html %}

Pēc noklusējuma regulārā izteiksme atrod tikai **pirmo** sakritību. Apstākļvārds `:g` (saīsinājums no `:global`) atrod **katru** sakritību virknē. To raksta uz operatora `m///`:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

Ar `:g` rezultāts uzvedas kā sakritības objektu saraksts — pa vienam katrai vietai, kur raksturs atrasts. Tos var saskaitīt, tiem var iet cauri ciklā vai katru pārvērst par virkni:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Šeit `\d+` sakritināja trīs atsevišķas ciparu virtenes, un `:g` savāca tās visas.

Globālā piemeklēšana ir dabiskais rīks ikreiz, kad jautājums ir «cik daudz…» vai «visi…», nevis «vai ir…».

{% include nav.html %}
