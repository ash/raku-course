---
title: '`gather` et `take`'
---

{% include menu.html %}

Par `gather` et `take` est flexibilis modus ad indicem construendum. Codicem in copia `gather` involvis, et quotiens ille codex `take` vocat, valor ad indicem quem `gather` producit additur.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

Tres vocationes `take` tres valores conferunt, et `gather` eos in indicem in `@result` repositum colligit.

Vera vis huius paris apparet cum vocationes `take` per ordinarium fluxum controllandi dispersae sunt, sicut ansa cum condicione. Tunc index tantum valores quos elegisti capere continet:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Hic ansa per numeros ab 1 ad 10 currit, sed tantum pares capiuntur, ergo `@evens` finaliter `2, 4, 6, 8, 10` continet. (Operator `%%` probat num numerus aequaliter dividatur.)

Haec separatio est quod `gather`/`take` tam commodum facit: codex circumdans decernit _quando_ valorem producere, et `gather` quiete colligit quidquid captum est.

{% include nav.html %}
