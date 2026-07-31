---
title: Twigili
translations_gpt:
---

{% include menu.html %}

_Twigil_ est character inter sigillum et nomen variabilis positus. Nomen non mutat; mutat quomodo variabilis se gerat et resolvatur. Vulgaria sunt:

* `*` — variabilis **dynamica**, ut `$*OUT`, per acervum vocationum inventa
* `?` — valor **temporis compilationis** a compilatore praebitus, ut `$?FILE`, `$?LINE`
* `!` — attributum **privatum** obiecti, ut `$!balance`
* `.` — attributum per methodum accessus attingendum, ut `$.name`

Plura ex his iam sine twigilii nomine invenisti: `$*OUT` et `$*IN` (dynamica), et `$!`/`$.` in [parte de obiectis](/la/oop).

Variabiles `?` a compilatore praebitae dum programma tuum compilatur implentur:

```raku
say $?LINE; # numerus lineae huius enuntiati
say $?FILE; # semita huius archivi fontis
```

Unumquodque twigil genus variabilis diversum uno aspectu significat, itaque legens `$*foo` statim scis eam dynamicam esse, et `$?foo` eam constantem temporis compilationis. Argumentum sequens [variabiles dynamicas](/la/advanced/special-variables/dynamic-variables) accurate inspicit, quoniam multum aliter se gerunt quam variabiles lexicae quibus adhuc usus es.

{% include nav.html %}
