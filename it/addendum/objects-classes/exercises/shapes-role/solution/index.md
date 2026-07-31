---
title: 'Soluzione: Figure che condividono un ruolo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
role Shape {
    method area { ... }
}

class Circle does Shape {
    has $.radius;
    method area { 3.14159 * $.radius ** 2 }
}

class Square does Shape {
    has $.side;
    method area { $.side ** 2 }
}

sub describe(Shape $shape) {
    say "{$shape.^name}: {$shape.area}";
}

for Circle.new(radius => 2), Square.new(side => 3) -> $shape {
    describe($shape);
}
```

🦋 Trova il programma nel file [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Output

```
Circle: 12.56636
Square: 9
```

## Commenti

1. A rigore, la chiamata `$shape.area` funzionerebbe *senza* alcun ruolo. Raku risolve i
metodi per nome nel momento della chiamata, quindi finché ogni oggetto ha per caso un
metodo `area`, il ciclo gira — è ciò che si chiama *tipizzazione a papera*. Che cosa ci
porta allora davvero il ruolo? Due garanzie.

1. **Il ruolo è un tipo che puoi richiedere.** `describe` è dichiarata come
`sub describe(Shape $shape)`, quindi accetta solo oggetti che assumono `Shape` e rifiuta
tutto il resto *prima che il corpo giri*. Passale un semplice numero e il programma si
rifiuta di compilare:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Senza il ruolo non esiste un tipo simile: una routine tipizzata a papera prenderebbe
qualunque argomento ed esploderebbe solo più tardi, in profondità, quando arriva a `.area`.

1. **Il ruolo è un contratto.** Dichiarare `area` come abbozzo (`method area { ... }`)
costringe ogni classe che assume il ruolo a fornire il proprio `area`. Dimenticalo, e
l'errore non può passare inosservato:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo segnala il metodo mancante non appena la classe viene *composta*: il programma
si rifiuta di compilare prima ancora che esista un solo oggetto `Triangle`. E anche in
un'implementazione che accettasse la definizione della classe, l'errore emergerebbe al più
tardi quando il metodo viene usato: l'abbozzo `{ ... }` ereditato dal ruolo è codice vero
che muore con `Stub code executed` non appena qualcuno lo chiama.

1. `$shape.^name` chiede all'oggetto il nome della sua classe, quindi lo stesso `describe`
etichetta correttamente ogni risultato senza conoscere il tipo in anticipo.

{% include nav.html %}
