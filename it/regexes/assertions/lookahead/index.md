---
title: Lookahead
translations_gpt:
---

{% include menu.html %}

Un _lookahead_ controlla ciò che viene immediatamente **dopo** la posizione corrente. Si scrive fra parentesi angolari:

* `<?before …>` — riesce se il testo che segue corrisponde (lookahead positivo)
* `<!before …>` — riesce se il testo che segue **non** corrisponde (lookahead negativo)

L'asserzione in sé non riconosce alcun carattere; mette alla prova solo la posizione. Per esempio, riconosci un numero solo quando è seguito dalla parola `dollars`:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

La corrispondenza è solo `100` — il testo ` dollars` è stato controllato ma non incluso.

Poiché il lookahead asserisce solo ciò che segue, lo stesso numero corrisponde o no a seconda della valuta che gli sta dopo:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

Le cifre sono identiche in entrambe le stringhe, ma l'asserzione accetta `100` solo quando segue ` euro`.

La forma negativa è utile per «… ma non quando è seguito da …». Riconosci `cat` solo quando **non** è seguito da una cifra:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

In `cat5` il lookahead vede una cifra subito dopo `cat`, quindi l'asserzione negativa fallisce e fallisce l'intera corrispondenza.

{% include nav.html %}
