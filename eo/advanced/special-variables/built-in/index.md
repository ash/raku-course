---
title: Enkonstruitaj specialaj variabloj
translations_gpt:
---

{% include menu.html %}

Raku antaŭdifinas aron de variabloj por vi. Plejparto el ili estas _dinamikaj_ (la tvigilo `*`), do — kiel vi vidis ĉe [dinamikaj variabloj](/eo/advanced/special-variables/dynamic-variables) — vi povas legi ilin ĉie kaj eĉ anstataŭigi ilin por certa amplekso. Jen tiuj, kiujn vi uzos plej ofte.

## Normaj fluoj

Enigo kaj eligo fluas tra tri dinamikaj variabloj: `$*OUT` (norma eligo), `$*ERR` (norma eraro), kaj `$*IN` (norma enigo). `say` kaj `print` skribas al `$*OUT`; por sendi tekston al norma eraro anstataŭe, voku la metodon sur `$*ERR`:

```raku
$*OUT.say('normal output'); # goes to standard output
$*ERR.say('a diagnostic');  # goes to standard error
```

Ĉar ĉi tiuj estas dinamikaj, redirektado de `$*OUT` en bloko sendas la eligon de ĉio, kio estas vokita ene de tiu bloko, al la nova celo — sen ŝanĝi iun ajn el tiu kodo.

## La programo kaj ĝia procezo

Kelkaj variabloj priskribas la rulantan programon mem:

```raku
say $*PROGRAM-NAME; # the path of the script being run
say $*PID;          # the process id of this program
say $*CWD;          # the current working directory
```

Iliaj valoroj ŝanĝiĝas de ekzekuto al ekzekuto, do neniu fiksa eligo estas montrata ĉi tie.

## Komandlinio kaj medio

La argumentoj kaj la medio alvenas en du pretaj ujo:

* `@*ARGS` — la listo de komandliniaj argumentoj (la samaj, kiujn subrutino `MAIN` ricevas)
* `%*ENV` — la mediaj variabloj, kiel hakilo (asocia tabelo)

```raku
say @*ARGS.elems; # how many arguments were passed
say %*ENV<HOME>;  # the value of the HOME environment variable
```

Ĉi tiuj enkonstruitaj variabloj ŝparas al vi la bezonon mane aranĝi la samajn informojn. Kaj ĉar ili estas dinamikaj, serĉataj tra la voka stako, ĉiu enkonstruita `$*`-variablo povas esti anstataŭigita por certa amplekso precize kiel via propra `$*`-variablo.

Krom ĉi tiuj dinamikaj variabloj, Raku ankaŭ havas la kompiltempe enkonstruitajn `?`-variablojn — `$?FILE` kaj `$?LINE` — kiujn vi jam renkontis sur la paĝo pri [tvigiloj](/eo/advanced/special-variables/twigils).

{% include nav.html %}
