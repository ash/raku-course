---
title: 'Розв''язання: Необов''язковий показник степеня'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Вихідний код можна знайти у файлі [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Вивід

```
25
125
```

## Коментарі

1. Знак `?` після `$exp` робить його необов'язковим, тож `power` можна викликати лише з основою.

1. Коли `$exp` пропущено, він невизначений, і `//` підставляє запасне `2`, тож `power(5)` підносить основу до квадрата, даючи `25`. Якщо показник задано, як у `power(5, 3)`, використовується саме це значення, даючи `125`.

{% include nav.html %}
