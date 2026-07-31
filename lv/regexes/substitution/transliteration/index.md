---
title: Transliterācija
translations_gpt:
---

{% include menu.html %}

Kad vēlaties aizstāt atsevišķas **rakstzīmes**, nevis veselu raksturu, izmantojiet transliterācijas operatoru `tr///`. Tas attēlo katru rakstzīmi pirmajā kopā uz rakstzīmi tajā pašā pozīcijā otrajā kopā:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Katrs mazais burts tiek aizstāts ar lielo burtu atbilstošajā pozīcijā otrajā diapazonā, tāpēc viss vārds tiek pārvērsts lielajos burtos.

Abas kopas tiek saskaņotas rakstzīmi pa rakstzīmei. Neliels piemērs, kas pabīda trīs burtus:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Šeit katrs `a` kļūst par `x`, katrs `b` par `y` un katrs `c` par `z`.

Transliterācija ir pareizais rīks rakstzīmju līmeņa attēlojumiem — burtu lieluma maiņai, nelielas ābeces apmaiņai vai kodēšanai. Visam, kas atkarīgs no raksturā, nevis no atsevišķām rakstzīmēm, izmantojiet `s///`.

{% include nav.html %}
