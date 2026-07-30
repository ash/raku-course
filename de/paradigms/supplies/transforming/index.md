---
title: Ein Supply umformen
translations_gpt:
---

{% include menu.html %}

Ein Supply lässt sich vor dem Anzapfen umformen, ganz ähnlich wie eine Liste. Methoden wie `map` und `grep` erzeugen ein **neues** Supply, dessen Werte die umgeformten sind:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

Das `map(* * 10)` baut ein neues Supply, das das Zehnfache jedes ursprünglichen Wertes aussendet, und die Zapfstelle sammelt diese in `@out`.

`grep` filtert ein Supply und gibt nur die Werte weiter, für die sein Block wahr ist:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Da jede Umformung wieder ein Supply liefert, können Sie sie aneinanderreihen und so eine kleine Pipeline bauen, die auf den Strom reagiert:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

Das ist derselbe Wortschatz aus map und grep, den Sie von Listen kennen, angewandt auf Werte, die im Lauf der Zeit eintreffen. Das Supply schiebt; Ihre Pipeline formt, was herauskommt.

{% include nav.html %}
