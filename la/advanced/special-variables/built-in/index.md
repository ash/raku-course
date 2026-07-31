---
title: Incorporatae speciales variabiles
translations_gpt:
---

{% include menu.html %}

Raku seriem variabilium pro te praedefinit. Pleraeque _dynamicae_ sunt (twigil `*`), itaque — ut apud [variabiles dynamicas](/la/advanced/special-variables/dynamic-variables) vidisti — eas ubique legere et etiam pro circumscriptione superare potes. Ecce eae quas saepissime adhibebis.

## Fluenta vulgaria

Introitus et exitus per tres variabiles dynamicas fluunt: `$*OUT` (exitus vulgaris), `$*ERR` (error vulgaris) et `$*IN` (introitus vulgaris). `say` et `print` in `$*OUT` scribunt; ut textum ad errorem vulgarem mittas, methodum in `$*ERR` voca:

```raku
$*OUT.say('normal output'); # ad exitum vulgarem it
$*ERR.say('a diagnostic');  # ad errorem vulgarem it
```

Quia hae dynamicae sunt, `$*OUT` in clausula redirigens exitum omnium quae intus vocantur ad novam destinationem mittis — nullo illius codicis mutato.

## Programma et processus eius

Paucae variabiles ipsum programma currens describunt:

```raku
say $*PROGRAM-NAME; # semita scripti quod curritur
say $*PID;          # identificator processus huius programmatis
say $*CWD;          # directoria laboris currens
```

Valores earum a cursu ad cursum mutantur, itaque nullus exitus fixus hic ostenditur.

## Linea imperandi et ambitus

Argumenta et ambitus in duobus receptaculis paratis adveniunt:

* `@*ARGS` — series argumentorum lineae imperandi (eadem quae subprogramma `MAIN` accipit)
* `%*ENV` — variabiles ambitus, ut mappa

```raku
say @*ARGS.elems; # quot argumenta tradita sint
say %*ENV<HOME>;  # valor variabilis ambitus HOME
```

Haec inbuilta te ab eadem informatione manu conectenda liberant. Et quia dynamica sunt, per acervum vocationum quaesita, quodlibet inbuiltum `$*` pro circumscriptione superari potest exacte sicut variabilis `$*` tua propria.

Praeter has variabiles dynamicas, Raku etiam inbuilta `?` temporis compilationis habet — `$?FILE` et `$?LINE` — quibus iam in pagina de [twigiliis](/la/advanced/special-variables/twigils) occurristi.

{% include nav.html %}
