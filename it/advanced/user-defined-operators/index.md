---
title: Operatori definiti dall'utente
---

{% include menu.html %}

Gli operatori in Raku sono in realtà semplici subroutine con nomi speciali. Ciò significa che puoi definire i tuoi operatori, utilizzando i nomi di categoria che hai incontrato nella pagina [Tipi di operatori Raku](/it/advanced/operator-types): `prefix`, `infix`, `postfix` e così via.

Per dichiarare un operatore, scrivi un `sub` il cui nome è la categoria, i due punti e il simbolo dell'operatore tra parentesi angolari. Ecco un nuovo operatore infisso chiamato `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Una volta definito, `plus` viene usato tra i suoi due operandi, esattamente come qualsiasi operatore infisso predefinito.

Un operatore postfisso segue il suo operando. Il fattoriale è un classico esempio: eccolo come operatore postfisso `!`, costruito sul [meta-operatore di riduzione](/it/advanced/metaoperators/reduction) che hai incontrato in precedenza:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

Non sei limitato a lettere e punteggiatura ASCII; il simbolo di un operatore può essere qualsiasi carattere. Questo operatore prefisso usa il segno di sezione per raddoppiare un numero:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Definire operatori è uno strumento potente, quindi usalo con gusto: un operatore ben scelto può far leggere il codice come il dominio del problema, mentre uno oscuro non fa che confondere il lettore successivo.

{% include nav.html %}
