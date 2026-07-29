---
title: 'Solution: Стойността на do блок'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Изходният код на тази програма можете да намерите във файла [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Изход

```
big
```

## Коментари

1. Самостоятелният `if` е оператор и няма използваема стойност. Префиксът `do` превръща цялата конструкция `if`/`else` в израз.

1. Тъй като `7 > 5` е истина, изразът дава `'big'`, което се присвоява на `$label`. Същият трик работи с `do given` и `do for`.

1. Фигурните скоби `{ }` не са незадължителни. Конструкцията `if` в Raku винаги приема блок, така че не можете да съкратите клоновете до `if 7 > 5 'big' else 'small'` — това не се компилира и дава грешка *Missing block*.

{% include nav.html %}
