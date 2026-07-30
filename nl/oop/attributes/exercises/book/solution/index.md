---
title: 'Oplossing: Een boek'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Je kunt de broncode vinden in het bestand [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Uitvoer

```
Raku by Larry
```

## Opmerkingen

1. Elk van `has $.title` en `has $.author` declareert een attribuut samen met een leesaccessor.

1. Beide accessors worden binnen één string met dubbele aanhalingstekens gebruikt. Elk staat tussen accolades — `{$b.title}` en `{$b.author}` — wat de vorm voor code-interpolatie is: wat er tussen de accolades staat wordt uitgevoerd en het resultaat ingevoegd, dus de accessors worden aangeroepen en hun waarden in de string geplaatst.

1. Beide attributen zijn strings, dus het is verstandig ze ook zo te declareren.

{% include nav.html %}
