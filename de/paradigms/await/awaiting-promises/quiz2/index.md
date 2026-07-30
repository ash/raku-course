---
title: 'Quiz — await und sleep'
translations_gpt:
---

{% include menu.html %}

Was tut das folgende Programm?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Gibt sofort `waiting` aus und rund zwei Sekunden später `42`
0 | Hält zwei Sekunden an und gibt dann `waiting` und `42` zusammen aus
0 | Gibt `waiting` und `42` sofort aus — der sleep geschieht im Hintergrund
0 | Gibt `waiting` aus und dann `Promise` — ein schlafendes Promise kann man nicht abwarten

{% include quiz.html %}

<div class="extended-explanation">

`start` liefert **sofort** ein Promise — der Block mit seinem `sleep` läuft auf einem Hintergrundthread. `say 'waiting'` wird also unverzüglich ausgeführt. Es ist `await`, das blockiert: Das Programm hält dort an, bis der Hintergrundblock sein zweisekündiges Nickerchen beendet und `42` erzeugt hat, was dann ausgegeben wird. Die Pause gehört zur Zeile mit `await`, nicht zur Zeile mit `start`.

</div>

{% include nav.html %}
