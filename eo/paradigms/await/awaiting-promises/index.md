---
title: Atendi promeson
translations_gpt:
---

{% include menu.html %}

`await` prenas promeson, atendas ĝian kompletiĝon kaj redonas ĝian rezulton:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

La programo paŭzas ĉe `await` nur tiom longe, kiom necesas, poste daŭrigas per la valoro, kiun la promeso produktis.

Donite plurajn promesojn, `await` atendas **ĉiujn** el ili kaj redonas iliajn rezultojn en la sama ordo kiel la promesoj en la listo:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

La taskoj kuras samtempe, sed `await @jobs` ne revenas antaŭ ol ĉiu el ili estas finita. Ĉiu rezulto poste sidas sur la sama pozicio kiel ĝia promeso en `@jobs` — sendepende de tio, kiu tasko hazarde finiĝis unue.

Se atendita promeso estis **rompita** — ĝia bloko ĵetis escepton — `await` reĵetas tiun escepton ĉe la punkto de la `await`. Tio signifas, ke eraroj en fona laboro aperas tie, kie vi atendas ĝin, do vi povas trakti ilin per la kutimaj `try` / `CATCH` el la parto pri esceptoj:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

Ĉi tio presas:

```
the job failed: no such file
```

La `die` okazas sur fona fadeno, sed la escepto vojaĝas kun la promeso kaj elsaltas ĉe `await`. La `try` kaptas ĝin tie, lasante `$result` nedifinita kaj la eraron en `$!` — do malsukceso en samtempa laboro estas traktata precize kiel ajna alia escepto. Atendi do ne temas nur pri akiri valoron; ĝi estas la momento, kiam samtempa laboro rekuniĝas kun la ĉefa fluo, kaj rezultoj kaj eraroj same.

{% include nav.html %}
