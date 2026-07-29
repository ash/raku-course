---
title: 'Solution: Обърнете и извикайте'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'raku'.flip.uc;
```

🦋 Можете да намерите изходния код във файла [reverse-and-shout.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/reverse-and-shout.raku).

## Изход

```
UKAR
```

## Коментари

1. Методите се прилагат отляво надясно: `flip` първо обръща `'raku'` в `'ukar'`, а след това `uc` го превръща в `'UKAR'`.

1. Тъй като всеки метод връща нов низ, можете да ги навържете в един-единствен израз.

{% include nav.html %}
