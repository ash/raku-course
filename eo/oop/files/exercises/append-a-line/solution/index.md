---
title: 'Solvo: Konstruu protokolon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Vi povas trovi la fontkodon en la dosiero [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Eligo

```
start
entry 1
entry 2
entry 3
```

## Komentoj

1. La unua `spurt` kreas la dosieron freŝa kun la linio `start`.

1. Ĉiu `spurt` ene de la buklo uzas `:append`, do ĝi aldonas sian linion post la ekzistanta enhavo anstataŭ anstataŭigi la dosieron. Ĝuste tiel protokoldosiero kreskas: ĉiu iteracio (aŭ ĉiu rulo de programo) alkroĉas unu plian linion al la fino.

1. Sen `:append`, ĉiu paso superskribus la dosieron, kaj nur la lasta linio postvivus.

{% include nav.html %}
