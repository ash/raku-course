---
title: 'Розв''язання: Привіт, Інтерполяція!'
---

{% include menu.html %}

## Код

Ось один із можливих розв'язків цієї задачі:

```raku
my $name = prompt 'What is your name? ';
say "Hello, $name!";
```

🦋 Вихідний код можна знайти у файлі [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-interpolation.raku).

## Вивід

Запустіть програму, і вона перейде в режим очікування вашого введення. Щойно ви наберете ім'я й натиснете Enter, програма продовжить роботу й виведе привітання:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? Raku
Hello, Raku!
```

## Коментарі

Зверніть увагу, що цього разу рядок узятий у подвійні лапки. У подвійних лапках змінні інтерполюються, тож їхній вміст потрапляє в рядок.

{% include nav.html %}
