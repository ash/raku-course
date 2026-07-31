---
title: 'Solvo: Atendu misfunkcion'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Eligo

```
caught: boom
```

## Komentoj

1. La bloko de la promeso ĵetas escepton, do la promeso estas *rompita*. La escepto ne perdiĝas — ĝi estas tenata, ĝis iu atendas la promeson.

1. `await $p` reĵetas ĝin ĝuste tie, kie la fazilo `CATCH` traktas ĝin kiel ajnan ordinaran escepton. Tiel eraroj en fona laboro aperas tie, kie vi atendas la rezulton.

{% include nav.html %}
