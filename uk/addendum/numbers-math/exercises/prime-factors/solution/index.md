---
title: Розв'язання вправи «Розклад на прості множники»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Вивід

```
[2 2 2 3 3 5]
```

## Коментарі

1. Для кожного кандидата в дільники `$d` внутрішній `while` виділяє його з `$n`
стільки разів, скільки той уміщається, щоразу додаючи `$d`. Оскільки менші
множники прибирають першими, кожен `$d`, що все ще ділить `$n`, гарантовано
простий.

1. `$n div= $d` — це цілочислове ділення назад у `$n`; воно зменшує число, аж
поки не залишиться саме `1`.

{% include nav.html %}
