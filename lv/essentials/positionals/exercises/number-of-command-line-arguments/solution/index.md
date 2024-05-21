---
title: Risinājums ‘Komandrindas argumentu skaits’
---

{% include menu.html %}

Risinājums ir diezgan vienkāršs.

## Kods

```raku
say @*ARGS.elems;
```

Alternatīvi, jūs varat ķēdēt visas metodes:

```raku
@*ARGS.elems.say;
```

🦋 Atrodiet programmu failā [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Izvade

Šai programmai ir nepieciešams pārbaudīt divus gadījumus:

1. Nav nodoti argumenti.
1. Ir nodots kāds nenulles argumentu skaits.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}