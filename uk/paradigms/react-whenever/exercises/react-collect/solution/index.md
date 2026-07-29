---
title: Розв'язання вправи «Розкладіть у два масиви»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Знайдіть програму у файлі [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Вивід

```
[4 7]
[42 100 15]
```

## Коментарі

1. Тіло `whenever` є звичайним кодом, тож воно може більше, ніж просто збирати, — тут воно **вирішує**, спрямовуючи кожне значення в `@big` чи `@small` у міру його надходження. Усередині кожного масиву значення зберігають порядок струменя.

1. Блок react чекає завершення струменя, тож обидва масиви повні ще до друку.

{% include nav.html %}
