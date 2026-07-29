---
title: Розв'язання вправи «Список через кому»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Знайдіть програму у файлі [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Вивід

```
Raku, is, fun
```

## Коментарі

1. Тут блок **будує** значення, а не обирає одне з двох: `$a` — це зібраний досі рядок, `$b` — наступне слово, а `"$a, $b"` склеює їх комою з пробілом.

1. Перший виклик з'єднує `'Raku'` та `'is'` у `Raku, is`; другий з'єднує це з `'fun'`, даючи `Raku, is, fun`. Саме такого з'єднання з розділювачем метаоператор `[~]` сам виразити не може.

1. У справжньому коді ви взяли б вбудований метод `join`, що робить рівно це: `say @words.join(', ');` друкує те саме `Raku, is, fun`. Сенс вправи — потренуватися виражати ту саму ідею блоком `reduce`.

{% include nav.html %}
