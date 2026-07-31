---
title: 'Solvo: Rulu komandon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
run 'echo', 'home:', '$HOME';
```

🦋 Vi povas trovi la fontkodon en la dosiero [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Eligo

```
home: $HOME
```

## Komentoj

1. `run` lanĉas `echo` rekte, transdonante ĉiun ĉenon kiel apartan argumenton. Sen `:out`, la eligo de la programo iras rekte al la ekrano.

1. La argumento atingas `echo` ekzakte kiel skribita: `$HOME` estas presata laŭvorte, ne anstataŭigita per via hejma dosierujo, ĉar neniu ŝelo estas implikita por ekspansii ĝin. Jen kial `run` estas la sekura defaŭlto — la sama komando donita al `shell` povus konduti tre malsame.

1. Por efektive presi la hejman dosierujon, lasu ŝelon fari la ekspansion: `shell 'echo home: $HOME'` presas ion kiel `home: /home/anna`. (Tenu la unuoblajn citilojn ankaŭ ĉe la Raku-flanko — duoble citita `"$HOME"` igus Raku mem provi interpoli variablon nomatan `$HOME` antaŭ ol `echo` iam ruliĝas.)

{% include nav.html %}
