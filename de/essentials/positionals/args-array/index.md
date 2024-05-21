---
title: Das @*ARGS-Array
---

{% include menu.html %}

Da Arrays nun eingeführt wurden, ist es eine gute Zeit, eines der eingebauten Arrays, `@*ARGS`, kennenzulernen. Das `*` in seinem Namen ist das zweite Sigil oder _Twigil_, und wir werden in Zukunft mehr davon sehen. Aber für den Moment wollen wir die Vorteile dieses speziellen Arrays nutzen. Es enthält die Argumente, die das Programm von der Kommandozeile erhält.

Betrachten wir den folgenden Programmlauf:

```console
$ raku run.raku alpha beta
```

Das Programm `run.raku` erhält zwei Parameter: `alpha` und `beta`. Diese können aus `@*ARGS` gelesen werden.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Dieses Programm gibt die Anzahl der übergebenen Argumente und die Argumente selbst aus:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Beachten Sie, dass das Programm keine Änderung erfordert, wenn Sie es als ausführbare Datei aufrufen:

```console
$ ./run.raku alpha beta
```

Das Programm sollte in diesem Fall [einen Shebang haben](/de/essentials/running-programs/from-command-line), aber das Wichtigste ist, dass die Indizes von `@*ARGS` immer noch bei `0` beginnen:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}