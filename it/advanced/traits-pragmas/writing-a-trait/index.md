---
title: Scrivere un trait
---

{% include menu.html %}

I trait sono normali multi-subroutine con un nome speciale, quindi puoi scrivere i tuoi. Per aggiungere un trait scritto `is something`, definisci una `multi sub trait_mod:<is>` i cui parametri specificano a cosa si applica e il nome del trait:

Questo è uno degli aspetti più avanzati di Raku, quindi non preoccuparti se ti sembra complesso. Puoi usare perfettamente i trait integrati senza sapere come sono realizzati, e raramente avrai bisogno di scriverne uno tu stesso — considera questa pagina come uno sguardo sotto il cofano.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Leggi la firma: il primo parametro, `Routine:D $r`, è l'elemento a cui il trait è associato — qui una subroutine. Il `:D` è uno _smiley_ di tipo che richiede un valore **definito** — un oggetto routine reale, non il tipo `Routine` indefinito. (I suoi compagni sono `:U`, che richiede l'oggetto tipo indefinito, e `:_`, che accetta entrambi.) Il parametro nominato `:$traced!` è il nome del trait stesso; la sua presenza è ciò che fa sì che `is traced` chiami questa sub. Poiché i trait vengono eseguiti al **momento della compilazione**, sia `foo` che `bar` vengono registrati al momento della dichiarazione, quindi `@traced` li elenca già quando il programma viene eseguito — potresti persino spostare la riga `say @traced` sopra le due definizioni `sub` e stamperebbe comunque `[foo bar]`.

Questo piccolo trait registra solo i nomi, ma lo stesso meccanismo può fare molto di più: avvolgere una routine per aggiungere logging, validare un attributo o associare metadati. Scrivendo il primo parametro come `Attribute` o `Variable` invece di `Routine`, un trait può applicarsi ad attributi o variabili. I trait sono il modo in cui Raku mantiene aperta la sintassi delle dichiarazioni — `is rw` e il tuo `is traced` sono costruiti allo stesso modo.

{% include nav.html %}
