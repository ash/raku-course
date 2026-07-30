---
title: Ingebouwde speciale variabelen
---

{% include menu.html %}

Raku definieert een reeks variabelen voor je vooraf. De meeste zijn _dynamisch_ (de `*`-twigil), dus — zoals je zag bij [dynamische variabelen](/nl/advanced/special-variables/dynamic-variables) — kun je ze overal uitlezen en zelfs voor een bepaalde scope overschrijven. Hier zijn de variabelen die je het vaakst zult gebruiken.

## Standaardstreams

Invoer en uitvoer lopen via drie dynamische variabelen: `$*OUT` (standaarduitvoer), `$*ERR` (standaardfout) en `$*IN` (standaardinvoer). `say` en `print` schrijven naar `$*OUT`; om tekst naar standaardfout te sturen, roep je de methode aan op `$*ERR`:

```raku
$*OUT.say('normal output'); # goes to standard output
$*ERR.say('a diagnostic');  # goes to standard error
```

Omdat deze dynamisch zijn, stuurt het omleiden van `$*OUT` in een blok de uitvoer van alles wat binnen dat blok wordt aangeroepen naar de nieuwe bestemming — zonder die code te hoeven aanpassen.

## Het programma en zijn proces

Een paar variabelen beschrijven het draaiende programma zelf:

```raku
say $*PROGRAM-NAME; # the path of the script being run
say $*PID;          # the process id of this program
say $*CWD;          # the current working directory
```

Hun waarden veranderen per uitvoering, dus er wordt hier geen vaste uitvoer getoond.

## Commandoregel en omgeving

De argumenten en de omgevingsvariabelen komen aan in twee kant-en-klare containers:

* `@*ARGS` — de lijst met commandoregelargumenten (dezelfde die een `MAIN`-subroutine ontvangt)
* `%*ENV` — de omgevingsvariabelen, als een hash

```raku
say @*ARGS.elems; # how many arguments were passed
say %*ENV<HOME>;  # the value of the HOME environment variable
```

Deze ingebouwde variabelen besparen je het handmatig opzetten van dezelfde informatie. En omdat ze dynamisch zijn en via de call stack worden opgezocht, kan elke `$*`-ingebouwde variabele voor een scope worden overschreven, precies zoals een eigen `$*`-variabele.

Naast deze dynamische variabelen heeft Raku ook de compile-time `?`-ingebouwde variabelen — `$?FILE` en `$?LINE` — die je al bent tegengekomen op de pagina over [twigils](/nl/advanced/special-variables/twigils).

{% include nav.html %}
