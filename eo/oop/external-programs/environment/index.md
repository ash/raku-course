---
title: La medio
translations_gpt:
---

{% include menu.html %}

Ĉiu programo estas startigita kun aro da _mediaj variabloj_ — nomitaj valoroj kiel `HOME`, `PATH` aŭ `USER`, kiujn la operaciumo provizas. En Raku ili disponeblas en la dinamika hako `%*ENV`:

```raku
say %*ENV<HOME>; # la hejma dosierujo, ekz. /home/anna
```

Vi legas median variablon subskribante `%*ENV` per ĝia nomo. Ĉar ĝi estas ordinara hako, vi ankaŭ povas kontroli, ĉu variablo estas starigita, aŭ ŝanĝi ĝin por programoj, kiujn vi lanĉas:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Starigi ŝlosilon en `%*ENV` aldonas ĝin al la medio, kiun ĉiu programo, kiun vi poste startigas per `run` aŭ `shell`, heredos, kio estas la maniero transdoni agordon al ida programo:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

La variablo estas starigita en la medio de via programo *antaŭ* ol la ido estas lanĉita, do la ŝelo, kiun `run` startigas, jam havas `GREETING` en sia propra medio kaj povas resendi ĝin. Ĉiu variablo, kiun vi starigas tiel, atingas ĉiun programon, kiun vi startigas poste.

La twigil `*` diras al vi, ke `%*ENV` estas dinamika variablo, kiel `$*OUT` el la parto pri enigo kaj eligo. Kelkaj aliaj steligitaj variabloj priskribas la mondon de la ruliĝanta programo — `@*ARGS` tenas la komandliniajn argumentojn, kaj `$*PROGRAM-NAME` estas la propra nomo de la skripto. Kune ili permesas al programo kompreni la kuntekston, en kiu ĝi estis lanĉita.

{% include nav.html %}
