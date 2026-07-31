---
title: Metodi di classe
translations_gpt:
---

{% include menu.html %}

La maggior parte dei metodi viene chiamata su un oggetto — un'istanza di una classe. Ma un metodo può essere chiamato anche sulla classe stessa, cioè sull'oggetto di tipo. Un metodo così si chiama spesso _metodo di classe_. È utile per valori e operazioni che appartengono alla classe nel suo insieme, invece che a un oggetto particolare.

Un metodo di classe si definisce esattamente come qualunque altro metodo:

```raku
class Road {
    method speed-limit { 120 }
}
```

e si chiama sul nome della classe invece che su un'istanza:

```raku
say Road.speed-limit; # 120
```

Un metodo di classe lo hai già usato senza chiamarlo per nome: `new` è un metodo chiamato sulla classe per creare un nuovo oggetto.

Un metodo di classe non ha accesso agli attributi di istanza — dietro di esso non c'è alcun oggetto particolare — quindi lavora solo con informazioni uguali per ogni oggetto della classe. Quando il lavoro dipende dai dati di un oggetto preciso, usa un metodo ordinario chiamato su un'istanza; quando non dipende, un metodo di classe calza a pennello.

Nota che, pur non avendo bisogno di un'istanza, i metodi di classe possono comunque usare i dati dell'oggetto quando un oggetto ce l'hai:

```raku
class Road {
    has $.name;
    method speed-limit { 120 }

    method info {
        "The maximum speed on $.name is " ~ self.speed-limit
    }
}

my $R404 = Road.new(name => 'Road 404');
say $R404.info;
```

Questo programma stampa il risultato atteso:

```
The maximum speed on Road 404 is 120
```

Senza l'oggetto istanziato della classe, una chiamata come `say Road.info` darebbe un errore.

{% include nav.html %}
