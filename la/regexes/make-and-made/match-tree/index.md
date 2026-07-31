---
title: Arbor congruentiae
translations_gpt:
---

{% include menu.html %}

Congruentia grammaticae arbor est. Congruentia summa ingressum nominatum pro unaquaque tessera quam `TOP` adhibuit habet, et illi ingressus ipsi obiecta congruentiae sunt cum propriis capturis. Per arborem eadem syntaxi `<nomen>` navigas quam pro capturis nominatis adhibes:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Unusquisque ramus plenum obiectum congruentiae est, itaque ab eo `.Str`, locum eius petere, vel illud vertere potes. Hic valor cifrae sunt, itaque illum in verum numerum vertere mera vocatio methodi est:

```raku
say $m<value>.Int; # 5
```

Pro grammaticis altioribus arbor plures gradus habet — `$m<a><b>` tesseram `b` intra tesseram `a` adhibitam attingit. Per arborem sic ambulare operatur, sed pro quolibet ultra duo vel tria campos incommodum fit. Argumentum sequens mundiorem modum ostendit valorem quem revera vis unicuique congruentiae adfigendi.

{% include nav.html %}
