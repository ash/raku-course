---
title: Kvizo — Anstataŭigo
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $s = 'hello';
$s ~~ tr/l/L/;
say $s;
```

{:.quiz}
0 | hello
0 | heLo
1 | heLLo
0 | LLLLL

{% include quiz.html %}

<div class="extended-explanation">

`tr///` anstataŭigas signojn unu post unu, kaj malsame ol `s///` ĝi ŝanĝas **ĉiun** kongruan signon sen bezoni `:g`. Ambaŭ `l`-oj en `hello` fariĝas `L`, donante `heLLo`.

</div>

{% include nav.html %}
