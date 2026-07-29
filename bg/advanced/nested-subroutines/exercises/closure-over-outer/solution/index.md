---
title: 'Solution: Затваряне над външна'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Изходният код на тази програма можете да намерите във файла [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Изход

```
Hello, Anna!
```

## Коментари

1. `message` не приема аргументи, но може да използва `$name`. Вложена подпрограма затваря лексикалните променливи на подпрограмата, която я съдържа, така че външната `$name` е в обхват.

1. Когато `greet('Anna')` се изпълни, `$name` е `'Anna'`, така че `message` връща `Hello, Anna!`. Това споделяне на обхващащия обхват е това, което прави вложените помощници повече от просто скрити функции.

{% include nav.html %}
