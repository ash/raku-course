---
title: 'Risinājums: Grāmata'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Atrodiet programmu failā [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Izvade

```
Raku by Larry
```

## Komentāri

1. Katrs `has $.title` un `has $.author` deklarē atribūtu kopā ar lasīšanas piekļuves metodi.

1. Abas piekļuves metodes tiek izmantotas vienā virknē ar dubultpēdiņām. Katra ir ietīta figūriekavās — `{$b.title}` un `{$b.author}` —, un tā ir koda interpolācijas forma: tas, kas ir iekavās, tiek izpildīts un tā rezultāts ievietots, tāpēc piekļuves metodes tiek izsauktas un to vērtības ieliktas virknē.

1. Abi atribūti ir virknes, tāpēc būtu prātīgi tos tā arī deklarēt.

{% include nav.html %}
