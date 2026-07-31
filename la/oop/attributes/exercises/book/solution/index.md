---
title: 'Solutio: Liber'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Inveni codicem fontem in archivo [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Exitus

```
Raku by Larry
```

## Commentarii

1. Utrumque `has $.title` et `has $.author` attributum una cum accessore legendi declarat.

1. Uterque accessor intra unam chordam duplicibus virgulis clausam adhibetur. Uterque uncis crispis includitur — `{$b.title}` et `{$b.author}` —, quae est forma interpolationis codicis: quidquid in uncis est exsequitur et effectus eius inseritur, itaque accessores vocantur eorumque valores in chordam ponuntur.

1. Utrumque attributum chorda est, itaque prudens erit ea sic declarare.

{% include nav.html %}
