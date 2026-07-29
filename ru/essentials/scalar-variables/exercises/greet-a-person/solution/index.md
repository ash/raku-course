---
title: 'Решение: Поздоровайтесь с человеком'
---

{% include menu.html %}

Вот одно из возможных решений этой задачи.

## Код

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ', $name, '!';
```

🦋 Вы можете найти исходный код в файле [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/greet-a-person.raku).

## Вывод

Запустите программу и введите имя, когда вас попросят:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
What is your name? Inge
Hello, Inge!
```

## Комментарии

1. Эта программа использует скалярную переменную `$name`, чтобы сохранить
   введенную пользователем строку в ответ на вопрос. Когда переменная
   используется в списке, который передается подпрограмме `say`, вы получаете
   имя внутри сообщения.

2. Есть более удобный способ решить эту проблему, используя строковую
   интерполяцию. Давайте в скором времени вернемся к этой проблеме.

{% assign human=1 %}
{% include nav.html %}
