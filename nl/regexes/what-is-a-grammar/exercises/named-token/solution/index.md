---
title: 'Oplossing: Een benoemd token'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Je kunt de broncode vinden in het bestand [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Uitvoer

```
｢hello｣
```

## Opmerkingen

1. `my regex word { \w+ }` geeft het patroon een naam zodat het hergebruikt kan worden.

1. `<word>` in het patroon schrijven matcht het en captureert het resultaat onder dezelfde naam, bereikbaar als `$<word>`. De eerste reeks woordtekens is `hello`.

{% include nav.html %}
