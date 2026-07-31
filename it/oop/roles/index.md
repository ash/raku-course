---
title: Ruoli
translations_gpt:
---

{% include menu.html %}

Un _ruolo_ è un fascio di comportamenti (e a volte di dati) che può essere condiviso da più classi. Mentre l'ereditarietà dice che una classe _è_ un tipo di un'altra, un ruolo descrive qualcosa che una classe _sa fare_.

Un ruolo si definisce con la parola chiave `role`, quasi come una classe, e lo si dà a una classe con il tratto `does`:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

Ora la classe `Person` ha il metodo `hello` del ruolo, come se fosse scritto nella classe stessa:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

Una classe che assume un ruolo viene riconosciuta come portatrice di quel ruolo:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Nota che il metodo `hello` del ruolo usa `self.name`, anche se il ruolo stesso non ha alcun attributo `name`. Va benissimo: il metodo gira come parte della classe che compone il ruolo, e quella classe fornisce `name`. L'argomento successivo mostra che una classe può assumere più di un ruolo per volta.

{% include nav.html %}
