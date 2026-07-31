---
title: 'Solvo: Nombru la vokalojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Eligo

```
6
```

## Komentoj

1. Transdoni regulesprimon al `.comb` redonas ĉiun kongruan signon. La signoklaso
`<[aeiouAEIOU]>` listigas la vokalojn en ambaŭ usklecoj.

1. La prefikso `+` metas la rezultan liston en nombran kuntekston, donante ĝian
longon — la nombron de vokaloj.

{% include nav.html %}
