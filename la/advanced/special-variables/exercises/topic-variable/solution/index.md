---
title: 'Solutio: Topic variabilis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Inveni codicem fontem in archivo [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Exitus

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Commentarii

1. Anulus `for` variabilem thematis `$_` ad singula elementa ordine ponit, itaque clausula ter currit, cum `$_` aequante `'apple'`, deinde `'fig'`, deinde `'cherry'`.

1. Intra chordam `$_` verbum currens interpolat, et vocatio `.chars` cum puncto praecedenti — brevitas pro `$_.chars` — longitudinem eius dat. Utraque ad idem thema spectat, quapropter numerus semper verbo in linea convenit.

{% include nav.html %}
