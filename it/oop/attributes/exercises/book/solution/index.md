---
title: 'Soluzione: Un libro'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Trova il programma nel file [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Output

```
Raku by Larry
```

## Commenti

1. Ciascuna delle dichiarazioni `has $.title` e `has $.author` dichiara un attributo insieme a un accessore in lettura.

1. Entrambi gli accessori sono usati dentro un'unica stringa fra virgolette doppie. Ciascuno è racchiuso fra parentesi graffe — `{$b.title}` e `{$b.author}` — che è la forma dell'interpolazione di codice: ciò che sta fra le graffe viene eseguito e il suo risultato viene inserito, quindi gli accessori vengono chiamati e i loro valori messi nella stringa.

1. Entrambi gli attributi sono stringhe, quindi conviene dichiararli come tali.

{% include nav.html %}
