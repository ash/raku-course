---
title: 'Solutio: Array nativum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 Inveni codicem fontem in archivo [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Exitus

```
555
```

## Commentarii

1. Ponere typum nativum dimensum `uint8` ante indicem `@` declarat indicem ubi omne elementum ut unus byte non signatus reponitur — dispositio compacta quae datis binariis convenit.

1. Limes circumvolutionis ad unumquodque *elementum* (`0..255`) pertinet, non ad eventum summae eorum. `.sum` totalem in ordinarium `Int` involvit, itaque `100 + 200 + 255` plenum `555` dat.

{% include nav.html %}
