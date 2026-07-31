---
title: Status promissi 🆕
translations_gpt:
---

{% include menu.html %}

Promissum semper in uno ex tribus statibus est, quem methodus `.status` eius nuntiat:

* **`Planned`** — nondum compositum;
* **`Kept`** — cum valore finivit;
* **`Broken`** — opus eius exceptionem iecit.

Hi sunt valores enumerationis `PromiseStatus`. `.status` legere non
exspectat — dicit tibi ubi promissum *hoc momento* sit, itaque illud inspicere potes antequam
promissum compositum sit et iterum postea:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — statim lectum, dum blocus adhuc currit
await $p;      # nunc illud finire exspecta
say $p.status; # Kept
say $p.result; # 10
```

`.result` valorem servatum dat. Dissimile `.status`, illud *exspectat* donec promissum
compositum sit, itaque in promisso imperfecto moratur prorsus sicut `await`. Et si
promissum fractum erat, `.result` exceptionem rursus iacit.

Cum defectum inspicere vis sine eo rursus iaciendo, utere `.cause` —
obiecto exceptionis promissi fracti:

```raku
my $p = start { die 'boom' };
try await $p;         # sine illud componi (et errorem reiectum devora)
say $p.status;        # Broken
say $p.cause.message; # boom
```

Itaque `.status` et `.cause` promissum inspiciunt sine eo turbando, dum `await` et
`.result` exitum eius colligunt — valorem, vel errorem rursus iactum.

{% include nav.html %}
