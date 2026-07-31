---
title: Expressiones regulares nominatae
translations_gpt:
---

{% include menu.html %}

Adhuc exemplaria directe intra `/ … /` scripsisti. Exemplari etiam **nomen** dare et illud iterum adhibere potes, sicut subprogramma. Unum per `my regex` declara (vel per `my token`, cui mox proprie occurres):

```raku
my regex number { \d+ }
```

Ut expressione regulari nominata intra aliud exemplar utaris, scribe nomen eius inter uncos angulares, `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

`<number>` vocans et exemplar congruis **et** illud sub illo nomine capis, itaque textus congruens ut `$<number>` praesto est — captura nominata quam gratis accipis.

Expressio regularis nominata pluries in uno exemplari adhiberi potest. Cum plus quam semel apparet, capturae seriem fiunt, indice attingendam:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

Expressiones regulares nominatae exemplaria legibilia servant et tibi permittunt maiora ex minoribus, bene nominatis partibus aedificare. Id exacte est quod grammatica maiore scala agit.

{% include nav.html %}
