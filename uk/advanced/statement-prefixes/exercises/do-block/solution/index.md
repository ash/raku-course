---
title: 'Розв''язання: Значення блоку do'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Вихідний код можна знайти у файлі [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Вивід

```
big
```

## Коментарі

1. Голий `if` є оператором і не має придатного до використання значення. Префікс `do` перетворює весь `if`/`else` на вираз.

1. Оскільки `7 > 5` істинне, вираз дає `'big'`, що й присвоюється `$label`. Той самий прийом працює з `do given` та `do for`.

1. Фігурні дужки `{ }` не є необов'язковими. `if` у Raku завжди бере блок, тож скоротити гілки до `if 7 > 5 'big' else 'small'` не можна — це не компілюється з помилкою *Missing block*.

{% include nav.html %}
