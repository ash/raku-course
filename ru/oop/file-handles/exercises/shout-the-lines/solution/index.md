---
title: 'Решение: Пронумеруйте строки'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Исходный код можно найти в файле [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Вывод

```
1: apple
2: banana
3: cherry
```

## Комментарии

1. `spurt` записывает три слова в файл, разделяя их переводами строк.

1. `.IO.lines` выдаёт строки по одной, без завершающих переводов строки. Мы держим счётчик `$n`,
который увеличиваем на каждом проходе, поэтому каждая строка печатается вместе со своим местом
в файле.

{% include nav.html %}
