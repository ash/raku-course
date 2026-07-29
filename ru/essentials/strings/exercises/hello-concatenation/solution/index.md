---
title: 'Решение: Привет, Конкатенация!'
---

{% include menu.html %}

## Код

Вот возможное решение проблемы:

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ' ~ $name ~ '!';
```

🦋 В можете найти исходный код в файле [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-concatenation.raku).

## Вывод

Запустите эту программу, и она войдет в состояние ожидания вашего ввода. После
того, как вы наберете ваше имя и нажмете Enter, программа выведет приветствие:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? John
Hello, John!
```

## Комментарии

Сравните эту программу с [предыдущим
вариантом](../../../../scalar-variables/exercises/greet-a-person/solution), где
мы передавали три строки в подпрограмму `say`:

```raku
say 'Hello, ', $name, '!';
```

Теперь же все три части сначала конкатенируются, и уже потом передаются в `say`
как один аргумент.

{% assign human=1 %}
{% include nav.html %}
