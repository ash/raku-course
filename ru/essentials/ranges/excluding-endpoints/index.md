---
title: Исключение концов интервала
---

{% include menu.html %}

Чтобы исключить одну из границ или обе границы, используйте символ `^` вместе с
оператором интервала. С помощью этого символа можно создать еще три оператора. В
комментариях записан список значений, который производится каждым интервалом:

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

В простых случаях, таких как выше, вы можете опустить использование пробелов
вокруг оператора интервала:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Для интервала, начинающегося с 0, такого как `0..^5`, есть сокращение: `^5`.

{% assign human=1 %}
{% include nav.html %}
