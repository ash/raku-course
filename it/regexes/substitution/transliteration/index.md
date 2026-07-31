---
title: Traslitterazione
translations_gpt:
---

{% include menu.html %}

Quando vuoi rimpiazzare singoli **caratteri** invece di uno schema intero, usa l'operatore di traslitterazione `tr///`. Mappa ogni carattere del primo insieme sul carattere nella stessa posizione del secondo insieme:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Ogni lettera minuscola viene rimpiazzata dalla lettera maiuscola nella posizione corrispondente del secondo intervallo, quindi tutta la parola diventa maiuscola.

I due insiemi vengono appaiati carattere per carattere. Un piccolo esempio che sposta tre lettere:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Qui ogni `a` diventa `x`, ogni `b` diventa `y` e ogni `c` diventa `z`.

La traslitterazione è lo strumento giusto per le mappature a livello di carattere: cambiare le maiuscole, scambiare un piccolo alfabeto o codificare. Per qualunque cosa dipenda da uno schema invece che da singoli caratteri, usa `s///`.

{% include nav.html %}
