---
title: 'Розв''язання: Абревіатура'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Вихідний код можна знайти у файлі [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Вивід

```
HTML
```

## Коментарі

1. `$phrase.words` дає список слів. Цикл бере перший символ кожного з них через `substr(0, 1)` і дописує його до `$acronym`.

1. Коли всі ініціали зібрано, `uc` переводить результат у верхній регістр: `HTML`.

{% include nav.html %}
