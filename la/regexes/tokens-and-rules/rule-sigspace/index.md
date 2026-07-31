---
title: Spatia significantia in regulis
translations_gpt:
---

{% include menu.html %}

`rule` est `token` cum una facultate addita accensa: `:sigspace` (spatium significans), exacte adverbium `:s`. Spatium album quod in exemplari scribis in automaticum spatii congruentem inter partes vertit. Id est quod vis quotiens textus quem analysas spatia inter partes suas habet.

Compara duo. In `token` spatium album in exemplari **neglegitur**, itaque `<first> <second>` duas partes sine ullo interposito petit. Quia `\w+` ad spatium consistit, introitus spatiis distinctus nullam congruentiam habet:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

Spatium in `token` accipere *potes* — illud tantum ipse congruere debes, exempli gratia per `\s+`:

```raku
token TOP { <first> \s+ <second> }      # nunc 'foo bar' analysatur
```

`rule` illam spatii congruentiam pro te inserit, itaque spatium inter partes simpliciter scribere satis est:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

Consuetudo frequens est `rule` pro structura superiore adhibere — ubi partes spatiis separantur — et `token` pro parvis partibus qualia nomina et numeri, quae nulla spatia continent. Hoc grammaticam tuam et rectam et facilem lectu servat.

{% include nav.html %}
