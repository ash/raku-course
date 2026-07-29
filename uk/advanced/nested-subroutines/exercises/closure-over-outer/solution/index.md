---
title: 'Розв''язання: Замикання на зовнішню'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Вивід

```
Hello, Anna!
```

## Коментарі

1. `message` не приймає аргументів, а проте може користуватися `$name`. Вкладена підпрограма замикається на лексичні змінні тієї підпрограми, що її містить, тож зовнішня `$name` перебуває в області видимості.

1. Коли виконується `greet('Anna')`, `$name` дорівнює `'Anna'`, тож `message` повертає `Hello, Anna!`. Саме це спільне користування обгортальною областю видимості робить вкладених помічників чимось більшим за просто приховані функції.

{% include nav.html %}
