---
title: Viktorīna — Aizvietošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`tr///` aizstāj rakstzīmes vienu pret vienu, un atšķirībā no `s///` tas maina **katru** sakrītošo rakstzīmi, un `:g` tam nav vajadzīgs. Abi `l` vārdā `hello` kļūst par `L`, dodot `heLLo`.

</div>

{% include nav.html %}
