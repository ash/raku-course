---
title: 'Solution: Привіт, Конкатенація!'
---

{% include menu.html %}

## Код

Ось можливе рішення цієї задачі:

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ' ~ $name ~ '!';
```

🦋 Ви можете знайти вихідний код у файлі [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-concatenation.raku).

## Вивід

Запустіть програму, і вона перейде в режим очікування вашого вводу. Після того, як ви введете ім'я і натиснете Enter, програма продовжить роботу і виведе привітання:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? John
Hello, John!
```

## Коментарі

Порівняйте програму з [попереднім варіантом](../../../../scalar-variables/exercises/greet-a-person/solution), де ми передавали три рядки до процедури `say`:

```raku
say 'Hello, ', $name, '!';
```

Цього разу три частини спочатку об'єднуються, а потім передаються до `say` як один рядок.

{% include nav.html %}