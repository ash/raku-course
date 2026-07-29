---
title: 'Solution: Преобразуване на потребителски вход към число'
---

{% include menu.html %}

Програмата може да бъде толкова проста:

## Код

```raku
my Int $n = prompt 'Enter a number: ';
say $n;
```

🦋 Можете да намерите изходния код във файла [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/input-number.raku).

## Пример

Стартирайте я и въведете цяло число, което може да бъде положително или отрицателно:

```console
$ raku exercises/typed-variables/input-number.raku
Enter a number: -42
-42
```

## Коментари

Както вече [видяхме](/bg/essentials/typed-variables/allomorphs), върнатата стойност на `prompt` е `IntStr`, която може да бъде присвоена на променлива от тип `Int` без принуждаване.

Обърнете внимание, че програмата ще бъде прекратена с изключение, ако въведете низ, който не може да бъде преобразуван в цяло число.

{% include nav.html %}