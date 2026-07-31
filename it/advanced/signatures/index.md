---
title: Firme
---

{% include menu.html %}

Nella parte Essentials hai [definito subroutine con parametri posizionali e nominati e hai assegnato loro valori predefiniti](/it/essentials/functions). La lista dei parametri si chiama _signature_. Questa sezione aggiunge altre due cose che una signature può fare: contrassegnare un parametro come opzionale e raccogliere un numero qualsiasi di argomenti aggiuntivi.

## Parametri opzionali

Un parametro seguito da un punto interrogativo è _opzionale_: il chiamante può ometterlo. Quando viene omesso, il parametro è indefinito, quindi puoi fornire un valore di riserva con l'operatore defined-or `//`:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

Quando `greet` viene chiamata con un solo argomento, `$greeting` è indefinito, quindi `//` ricade su `'Hello'`.

## Parametri slurpy

Un parametro contrassegnato con `*` è _slurpy_: raccoglie tutti gli argomenti rimanenti. Un array slurpy, scritto `*@`, raccoglie qualsiasi numero di argomenti posizionali in un array:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

Puoi combinare parametri ordinari con uno slurpy. I parametri fissi vengono riempiti per primi e tutto ciò che rimane va nell'array slurpy:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

Allo stesso modo, un hash slurpy, scritto `*%`, raccoglie qualsiasi argomento nominato aggiuntivo in un hash:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

I due argomenti nominati finiscono come chiavi di `%options`, quindi il programma stampa:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
