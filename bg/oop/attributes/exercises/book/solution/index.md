---
title: 'Решение: Книга'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Намерете програмата във файла [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Изход

```
Raku by Larry
```

## Коментари

1. Всяко от `has $.title` и `has $.author` декларира атрибут заедно с аксесор за четене.

1. И двата аксесора се използват в един низ с двойни кавички. Всеки е обвит във фигурни скоби — `{$b.title}` и `{$b.author}`, — а това е формата за интерполация на код: каквото е в скобите, се изпълнява и резултатът му се вмъква, така че аксесорите се извикват и стойностите им попадат в низа.

1. И двата атрибута са низове, така че е разумно да бъдат декларирани като такива.

{% include nav.html %}
