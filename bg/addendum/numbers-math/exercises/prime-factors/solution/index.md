---
title: 'Решение: Разлагане на прости множители'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 Намерете програмата във файла [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Изход

```
[2 2 2 3 3 5]
```

## Коментари

1. За всеки кандидат-делител `$d` вътрешният `while` го изважда от `$n` толкова пъти,
колкото се побира, като всеки път добавя `$d`. Понеже по-малките множители се махат
първи, всяко `$d`, което още дели `$n`, гарантирано е просто.

1. `$n div= $d` е целочислено деление обратно в `$n`; то смалява числото, докато не
остане само `1`.

{% include nav.html %}
