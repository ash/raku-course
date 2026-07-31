---
title: Aggiungere metodi a runtime
translations_gpt:
---

{% include menu.html %}

Il MOP non serve solo per ispezionare: può anche **cambiare** un tipo mentre il programma gira. Il metametodo `.^add_method` aggiunge un nuovo metodo a una classe:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

La classe `Empty` è definita senza alcun metodo. `Empty.^add_method('greet', …)` vi attacca poi un metodo di nome `greet`, dato come `method { … }` anonimo. Da quel momento in poi ogni oggetto `Empty` risponde a `.greet`, esattamente come se il metodo fosse stato scritto nella classe.

Questa è vera metaprogrammazione: si sta dicendo al metaoggetto di `Empty` di farsi crescere un nuovo metodo. Lo stesso protocollo sta sotto funzionalità che hai già usato — concettualmente, quando scrivi `class`, `role`, `has` o `method`, il compilatore costruisce il tuo tipo per tuo conto attraverso metodi MOP come `.^add_method` e `.^add_attribute`.

«Concettualmente», perché questo è un modello del linguaggio, non una promessa su un compilatore particolare. Il MOP è ciò *in termini di cui* il sistema a oggetti è specificato; se una data implementazione instradi davvero ogni dichiarazione attraverso quei metametodi — e se tu possa osservarla mentre lo fa — dipende da quell'implementazione. Per lo stesso motivo, *chiamare* tu stesso questi metametodi dipende dall'implementazione: quali un compilatore esponga, e come si comportino esattamente, può variare, quindi il codice che ricorre a `.^add_method` e simili potrebbe non girare allo stesso modo su ogni Raku.

Aggiungere metodi a runtime è uno strumento potente e raramente necessario. La maggior parte dei programmi non vi ricorre mai, ma è ciò che rende aperto il sistema a oggetti di Raku: le regole delle classi sono a loro volta scritte in termini del MOP, quindi puoi estenderle. Per il codice di tutti i giorni, i metametodi di ispezione dell'argomento precedente sono la parte del MOP che userai davvero.

{% include nav.html %}
