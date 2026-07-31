---
title: Viktorīna — Prefikss vai postfikss
translations_gpt:
---

{% include menu.html %}

Jūs esat redzējuši `++` rakstītu *aiz* mainīgā kā postfiksu. To var rakstīt arī *pirms* tā. Kādai kategorijai pieder `++` izteiksmē `++$x`?

```raku
my $x = 5;
say ++$x;
```

{:.quiz}
1 | prefix
0 | postfix
0 | infix
0 | postcircumfix

{% include quiz.html %}

<div class="extended-explanation">

Kategoriju nosaka tikai *pozīcija*. Rakstīts pirms sava vienīgā operanda, `++$x` ir **prefiksa** operators — tas pats `++` ir postfiksa operators, ja rakstīts aiz operanda, kā `$x++`. Abas formas palielina `$x`; prefiksa forma atgriež jauno vērtību, tāpēc šeit tiek izdrukāts `6`.

</div>

{% include nav.html %}
