---
title: Een promise afwachten
translations_gpt:
---

{% include menu.html %}

`await` neemt een promise aan, wacht tot zij klaar is, en geeft haar resultaat terug:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

Het programma pauzeert bij `await` alleen zolang als nodig is en gaat daarna verder met de waarde die de promise opleverde.

Gegeven meerdere promises wacht `await` op **alle** en geeft het hun resultaten in dezelfde volgorde terug als de promises in de lijst:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

De taken lopen gelijktijdig, maar `await @jobs` keert pas terug wanneer elk ervan klaar is. Elk resultaat staat daarna op dezelfde positie als zijn promise in `@jobs` — ongeacht welke taak toevallig het eerst klaar was.

Als een afgewachte promise **verbroken** was — haar blok wierp een exceptie — werpt `await` die exceptie opnieuw op het punt van de `await`. Dat betekent dat fouten in achtergrondwerk opduiken waar je erop wacht, zodat je ze met de gewone `try` / `CATCH` uit het deel over excepties kunt afhandelen:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

Dit drukt af:

```
the job failed: no such file
```

De `die` gebeurt op een achtergrondthread, maar de exceptie reist met de promise mee en komt bij `await` naar buiten. De `try` vangt haar daar, waardoor `$result` ongedefinieerd blijft en de fout in `$!` staat — dus een mislukking in gelijktijdig werk wordt precies als elke andere exceptie afgehandeld. Afwachten gaat dus niet alleen over een waarde krijgen; het is het moment waarop gelijktijdig werk zich weer bij de hoofdstroom voegt, resultaten en fouten alle beide.

{% include nav.html %}
