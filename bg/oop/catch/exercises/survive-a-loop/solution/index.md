---
title: 'Решение: Преживейте цикъла'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
for 1, 2, 3 -> $n {
    if $n == 2 {
        die "bad: $n";
    }
    say "ok: $n";

    CATCH {
        default {
            say "caught: " ~ .message;
        }
    }
}
```

🦋 Намерете програмата във файла [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Изход

```
ok: 1
caught: bad: 2
ok: 3
```

## Коментари

1. Фазерът `CATCH` обработва изключение, хвърлено вътре в тялото на цикъла, така че `die` на втората итерация е прихванат, а не фатален.

1. Щом изключението е обработено, цикълът просто продължава със следващата стойност — затова `ok: 3` все пак се отпечатва.

{% include nav.html %}
