---
title: Il protocollo dei metaoggetti 🆕
translations_gpt:
---

{% include menu.html %}

Ogni classe, ruolo e tipo in Raku è a sua volta descritto da un altro oggetto — il suo _metaoggetto_ — che conosce il nome del tipo, i suoi attributi, i suoi metodi e il suo posto nell'albero dell'ereditarietà. L'interfaccia verso questi metaoggetti è il _protocollo dei metaoggetti_, o MOP.

Ne hai già usato un angolo: `.^name` è una chiamata MOP. Questa sezione presenta per bene la sintassi `.^`, i metametodi più utili per ispezionare un tipo e il modo in cui il MOP ti permette persino di aggiungere metodi a una classe mentre il programma gira.

{% include nav.html %}
