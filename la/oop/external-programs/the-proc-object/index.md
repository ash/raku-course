---
title: Obiectum Proc
translations_gpt:
---

{% include menu.html %}

Omnis vocatio `run` vel `shell` obiectum `Proc` reddit — parvam tabulam quae describit quod programma cucurrerit et quomodo finierit. Argumenta superiora tractabulo `.out` eius ad exitum legendum usa sunt; `Proc` plus quam illud fert.

Pars utilissima est **codex exeundi**. Programma ei qui illud lanciavit indicat utrum successerit per parvum numerum integrum: `0` successum significat, et quilibet alius numerus est codex defectus a programmate ipso electus. `.exitcode` illum numerum tibi dat:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

Ad quaestionem solitam ita-an-non — operatusne est? — `Proc` simpliciter verum est cum codex exeundi est `0` et falsum aliter, itaque illud directe probare potes:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

`Proc` etiam imperatum quod lanciavit meminit, in `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

Unum cavendum: si imperatum deficit et `Proc` redditum simpliciter **neglegis**, Raku exceptionem excitat potius quam defectum inobservatum transire sinat:

```raku
run 'sh', '-c', 'exit 1';
# moritur: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Quia exitus non nullus plerumque significat aliquid male cecidisse, `Proc` deficiens quod abicitur iacit cum extra circumscriptionem exit. Causa est effectum *abicere*, non codicem exeundi neglegere: `Proc` in variabili simpliciter servare satis est ut exceptionem vites, etiamsi illud numquam iterum inspicis.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # nullus error, quamquam defecit
# …et $proc numquam iterum adhibetur
```

Itaque si *exspectas* imperatum deficere posse, `Proc` eius serva et deinde `.exitcode` inspice (vel illud ut Booleanam proba) quotiens scire vis quid acciderit.

{% include nav.html %}
