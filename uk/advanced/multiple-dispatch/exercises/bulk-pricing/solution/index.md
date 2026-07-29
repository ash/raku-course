---
title: 'Розв''язання: Оптова ціна'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Вихідний код можна знайти у файлі [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Вивід

```
normal price
bulk price
```

## Коментарі

1. Перший кандидат має речення `where`, яке приймає лише кількості від 10 і більше, тож виклик `price(25)` диспетчеризується саме до нього.

1. Другий кандидат не має жодної умови й діє як всеохопний, тож `price(3)` потрапляє туди.

{% include nav.html %}
