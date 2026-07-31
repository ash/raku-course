---
title: 'Solvo: Heredoko'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Vi povas trovi la fontkodon en la dosiero [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Eligo

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Komentoj

1. La heredoc komenciĝas per `qq:to` anstataŭ `q:to`, do ĝi interpolatas. Kiel `qq`-ĉeno, ĝi plenigas skalarojn — `$name`, `$count`, `$item` — *kaj* ruligas enkonstruitan kodon: la bloko `{$count * $price}` kalkulas `3 * 25`, do la totalo `75` aperas enlinie.

1. La duoblaj citiloj ĉirkaŭ `"$item"` estas nur laŭliteraj signoj ĉi tie; ene de heredoc ne ekzistas limigilo por eskapi, do ili presiĝas kiel skribitaj dum `$item` ankoraŭ interpoliĝas.

1. La korpo kaj la ferma `END` estas krommarĝenigitaj per la samaj kvar spacetoj. La krommarĝeno de la finilo estas forigita el ĉiu linio, do tiuj kvar spacetoj neniam atingas la ĉenon — la eligo komenciĝas ĉe la maldekstra marĝeno.

1. La heredoc jam finiĝas per novlinio, do `print` estas uzata anstataŭ `say` por eviti aldoni duan malplenan linion.

{% include nav.html %}
