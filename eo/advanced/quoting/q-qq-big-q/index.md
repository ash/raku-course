---
title: q, qq, kaj Q
translations_gpt:
---

{% include menu.html %}

Ekzistas tri bazaj citaj operatoroj, kiuj diferencas laŭ tio, kiom ili prilaboras la tekston interne:

* `q` — kiel unuopaj citiloj: preskaŭ ĉio estas laŭlitera
* `qq` — kiel duoblaj citiloj: variabloj kaj eskapoj estas interpolataj
* `Q` — la plej laŭlitera el ĉiuj: **nenio** estas prilaborata

Ĉiu prenas la tekston inter paro de limigiloj. La konata `'…'` estas mallongigo por `q`, kaj `"…"` estas mallongigo por `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` lasas `$name` netuŝita; `qq` interpolatas ĝin. Maldekstre-streketaj eskapoj kiel `\n` kondutas same: nur `qq` (kaj `"…"`) transformas `\n` en veran novlinion, dum kaj `q` kaj `Q` lasas ĝin kiel la du signojn `\` kaj `n`:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

Do kie diferencas `q` kaj `Q`? `q`, kiel unuopaj citiloj, ankoraŭ traktas *malgrandan* aron da eskapoj — duobligita maldekstra streketo `\\` fariĝas unu, kaj vi povas eskapi la fermilon — dum la simpla `Q`-formo prilaboras **nenion** tute:

```raku
say q{a\\b}; # a\b   — q kolapsas la eskapitan maldekstran streketon
say Q{a\\b}; # a\\b  — Q konservas ambaŭ signojn
```

Vi povas elekti ajnajn limigilojn — `q{…}`, `q[…]`, `q/…/`, `q!…!` — kio utilas kiam la teksto mem enhavas citilojn. La tri operatoroj estas la fundamento; la sekva temo montras kiel [_adverboj_](/eo/advanced/quoting/adverbs) ebligas vin miksi kaj agordi ĝuste kiuj funkcioj estas aktivaj.

{% include nav.html %}
