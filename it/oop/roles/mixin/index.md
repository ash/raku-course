---
title: Aggiungere un ruolo a un oggetto
translations_gpt:
---

{% include menu.html %}

Un ruolo non deve per forza essere incorporato in una classe. Puoi darlo anche a un oggetto che esiste già, usando l'operatore `but`. Esso mescola il ruolo in un singolo oggetto a runtime e restituisce un nuovo oggetto che assume il ruolo:

```raku
role Loud {
    method greet {
        callsame().uc;
    }
}

class Greeter {
    method greet {
        'Hello';
    }
}

my $quiet = Greeter.new;
my $loud  = Greeter.new but Loud;

say $quiet.greet; # Hello
say $loud.greet;  # HELLO
```

Solo `$loud` ha acquisito il ruolo. La classe `Greeter` e ogni altro oggetto `Greeter` restano intatti, quindi `$quiet` saluta ancora nel modo ordinario. Quando il ruolo e la classe definiscono entrambi un metodo con lo stesso nome, vince la versione del ruolo, e `callsame` chiama quella che è stata sovrascritta — qui il `greet` originale di `Greeter`, il cui risultato viene poi reso maiuscolo.

Un oggetto in cui è stato mescolato un ruolo viene riconosciuto come portatore di quel ruolo:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` lascia l'oggetto originale com'era e te ne consegna uno nuovo. Se preferisci cambiare sul posto un oggetto esistente, usa invece l'operatore `does`:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Mescolare ruoli in singoli oggetti ti permette di decidere, un oggetto alla volta, quale comportamento aggiuntivo debba assumere — senza definire una classe separata per ogni combinazione.

{% include nav.html %}
