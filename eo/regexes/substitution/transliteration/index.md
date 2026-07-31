---
title: Transliterumo
translations_gpt:
---

{% include menu.html %}

Kiam vi volas anstataŭigi unuopajn **signojn** anstataŭ tutan ŝablonon, uzu la operatoron de transliterumo `tr///`. Ĝi mapas ĉiun signon en la unua aro al la signo en la sama pozicio de la dua aro:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Ĉiu minusklo estas anstataŭigita per la majusklo ĉe la responda pozicio en la dua intervalo, do la tuta vorto estas majuskligita.

La du aroj estas kunmetitaj signo post signo. Malgranda ekzemplo, kiu ŝovas tri literojn:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Ĉi tie ĉiu `a` fariĝas `x`, ĉiu `b` fariĝas `y`, kaj ĉiu `c` fariĝas `z`.

Transliterumo estas la ĝusta ilo por sign-nivelaj mapoj — ŝanĝi usklecon, interŝanĝi malgrandan alfabeton, aŭ kodi. Por io ajn, kio dependas de ŝablono anstataŭ de unuopaj signoj, uzu `s///`.

{% include nav.html %}
