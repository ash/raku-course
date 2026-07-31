---
title: Signifaj spacoj en reguloj
translations_gpt:
---

{% include menu.html %}

`rule` estas `token` kun unu kroma eco ŝaltita: `:sigspace` (signifa spaco), ekzakte la adverbo `:s`. Ĝi transformas la blankspacon, kiun vi skribas en la ŝablono, en aŭtomatan blankspacan kongruilon inter la partoj. Jen kion vi volas, kiam ajn la teksto, kiun vi analizas, havas spacojn inter siaj pecoj.

Komparu la du. En `token`, blankspaco en la ŝablono estas **ignorata**, do `<first> <second>` petas la du partojn kun nenio inter ili. Ĉar `\w+` haltas ĉe la spaco, spacita enigo havas neniun kongruon:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

Vi *povas* akcepti la spacon en `token` — vi nur devas kongruigi ĝin mem, ekzemple per `\s+`:

```raku
token TOP { <first> \s+ <second> }      # nun 'foo bar' analiziĝas
```

`rule` enmetas tiun blankspacan kongruigon por vi, do simple skribi spacon inter la partoj sufiĉas:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

Ofta ŝablono estas uzi `rule` por la pli alta strukturo — kie la partoj estas apartigitaj per spacoj — kaj `token` por la malgrandaj pecoj kiel nomoj kaj nombroj, kiuj enhavas neniujn spacojn. Tio tenas vian gramatikon kaj ĝusta kaj facile legebla.

{% include nav.html %}
