---
title: Розв'язання вправи «Степінь»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Знайдіть програму у файлі [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Вивід

```
1024
```

## Коментарі

1. Базовий випадок повертає `1`, коли показник досягає `0`, бо будь-яка основа в нульовому степені дорівнює одиниці.

1. Рекурсивний крок множить `$base` на `power($base, $exp - 1)`, відлущуючи щоразу один множник. Тож `power(2, 10)` перемножує десять двійок, даючи `1024`.

{% include nav.html %}
