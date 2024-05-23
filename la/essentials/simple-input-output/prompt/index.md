---
title: Input cum rogatione
---

{% include menu.html %}

Contrarium verbi `say` est `prompt`. Exspectat cum usor aliquid inserit et premit Enter. Deinde, mittit input ad programmatum ut stringam. Potes capere resultatum `prompt` et tradere ad `say`. In hoc casu, resonas quod usor typat. Creemus tale programma:

```raku
say prompt;
```

Si hoc programma curris, confundi potes cum programma in statum intrat, in quo solum exspectat aliquod input. Ut programma magis usori-amica fiat, bonum est nuntium rogationis imprimere. Non opus est addere separatam `say`, quia potes tradere nuntium ad `prompt`:

```raku
prompt 'Quam linguam discere vis? '
```

Antequam hanc sectionem concludamus, omnes partes componamus et creamus programma quod rogat de votis usoris et deinde imprimit locutionem utens textu quem usor inseruit.

```raku
say 'Discere vis ', prompt 'Quam linguam discere vis? ';
```

Si inseruisti `Raku`, sequens locutio imprimitur:

    Discere vis Raku

Bene, nunc possumus loqui cum programmate, et programma potest loqui nobiscum!

Nota quod cum `say` scire debet stringas antequam eas imprimat, Raku primum exsequetur `prompt`, ut colloquium in ordine correcto procedat:

```console
$ raku t.raku 
Quam linguam discere vis? Raku
Discere vis Raku
```

{% include nav.html %}