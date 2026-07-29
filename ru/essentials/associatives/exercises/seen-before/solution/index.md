---
title: 'Решение: Уже видели?'
---

{% include menu.html %}

Эта задача является классическим примером использования хеша для отслеживания элементов. Перед циклом создается хеш `%seen`. Внутри цикла введенное слово `$word` используется в качестве ключа хеша.

## Код

Вот решение:

```raku
my %seen;
loop {
    my $word = prompt 'Word: ';
    if %seen{$word} {
        say %seen{$word} == 1 ?? 'Seen!' !! say "Seen %seen{$word} times!";
    }
    %seen{$word}++;
}
```

🦋 Найдите программу в файле [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/seen-before.raku).

## Вывод

```console
$ raku exercises/associatives/seen-before.raku
Word: I
Word: never
Word: saw
Word: a
Word: saw
Seen!
Word: that
Word: saw
Seen 2 times!
True
Word: as
Word: that
Seen!
Word: saw
Seen 3 times!
True
Word: sawed
Word: ^C
```

## Комментарий

Конструкция `%seen{$word}++` не только увеличивает значение, но и создает его, если оно еще не существует. Процесс создания называется _автовивификацией_. Обратите внимание, что это не происходит, когда вы только _читаете_ значение, как в условии: `if %seen{$word}`.

{% include nav.html %}