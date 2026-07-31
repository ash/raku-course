---
title: Tipi di operatori Raku
---

{% include menu.html %}

Hai già utilizzato molti operatori: `+`, `~`, `++` e così via. In Raku, gli operatori sono classificati in base a _dove_ si trovano rispetto ai loro operandi. Conoscere le categorie è utile in seguito, quando definirai operatori personalizzati.

## `prefix`

Un operatore prefisso viene _prima_ di un singolo operando:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Qui, `-` nega il numero e `?` converte un valore nel suo Booleano.

## `infix`

Un operatore infisso si trova _tra_ due operandi. La maggior parte degli operatori aritmetici e di stringa familiari sono infissi:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

Un operatore infisso non è sempre un simbolo di punteggiatura: può essere una parola. L'operatore `gcd` che hai incontrato con gli [interi](/it/advanced/integers), ad esempio, è un operatore infisso scritto come nome tra i suoi due operandi:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

Un operatore postfisso viene _dopo_ un singolo operando:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` e `postcircumfix`

Un operatore circumfisso _circonda_ il suo operando. Le parentesi quadre che costruiscono un array sono un operatore circumfisso:

```raku
my @a = [1, 2, 3];
```

Un operatore postcircumfisso circonda qualcosa ma segue un termine. L'indicizzazione è un operatore postcircumfisso: il `[1]` dopo `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

Questi nomi, `prefix`, `infix`, `postfix`, `circumfix` e `postcircumfix`, sono le stesse parole che Raku utilizza quando [dichiari un nuovo operatore](/it/advanced/user-defined-operators), come vedrai in seguito.

{% include nav.html %}
