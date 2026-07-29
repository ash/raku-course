---
title: 'Решение: Изчакайте провал'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Намерете програмата във файла [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Изход

```
caught: boom
```

## Коментари

1. Блокът на обещанието хвърля изключение, така че обещанието е *счупено*. Изключението не се губи — то се задържа, докато някой не изчака обещанието.

1. `await $p` го хвърля отново точно там, където фазерът `CATCH` го обработва като всяко обикновено изключение. Точно така грешките във фоновата работа изплуват там, където чакате резултата.

{% include nav.html %}
