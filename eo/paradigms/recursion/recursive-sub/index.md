---
title: Rekursia subprogramo
translations_gpt:
---

{% include menu.html %}

_Rekursia_ subprogramo estas tia, kiu vokas sin mem. La klasika ekzemplo estas la faktorialo: la faktorialo de `n` estas `n` foje la faktorialo de `n - 1`.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Legu la korpon kiel du kazojn kunigitajn per la ternara operatoro `?? !!`:

* kiam `$n` estas `1` aŭ malpli, la respondo estas simple `1`;
* alie, la respondo estas `$n` foje `fact($n - 1)` — la sama subprogramo vokita kun pli malgranda nombro.

Ĉiu voko deprenas unu faktoron kaj petas pli malgrandan faktorialon, ĝis la nombro atingas `1` kaj la vokoj malvolviĝas: `fact(5)` estas `5 * fact(4)`, kio estas `5 * 4 * fact(3)`, kaj tiel plu ĝis `1`.

Rekursio esprimas multajn problemojn tre rekte. Kiam ajn tasko povas esti priskribita per pli malgranda versio de si mem, rekursia subprogramo estas ofte la plej natura maniero skribi ĝin.

{% include nav.html %}
