---
title: 'Solution: Бачив раніше?'
---

{% include menu.html %}

Це завдання є класичним прикладом використання хешу для відстеження елементів. Перед циклом створюється хеш `%seen`. Всередині циклу введене слово `$word` слугує ключем хешу.

## Код

Ось рішення:

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

🦋 Знайдіть програму у файлі [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/seen-before.raku).

## Вивід

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

## Коментар

Конструкція `%seen{$word}++` не тільки збільшує значення, але й створює його, якщо воно ще не існувало. Процес створення називається _автовівіфікація_. Зверніть увагу, що це не відбувається, коли ви лише _читаєте_ значення, як у умові: `if %seen{$word}`.

{% include nav.html %}