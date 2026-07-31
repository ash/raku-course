---
title: Rendering di Pod
translations_gpt:
---

{% include menu.html %}

Una volta che un file contiene Pod, il compilatore può trasformarlo in testo formattato senza eseguire il programma, usando l'opzione `--doc`:

```
raku --doc mymodule.raku
```

Per l'esempio con intestazione e paragrafo visto in precedenza, questo stampa qualcosa come:

```
My Module

This module does something useful.
```

Anche gli elenchi e i blocchi di codice vengono renderizzati. Prendiamo questo Pod:

```raku
=begin pod

=head1 Shopping list

Things to buy:

=item Apples
=item Bread
=item Cheese

Run it like this:

=begin code
say 'hello';
=end code

=end pod
```

Renderizzato con `raku --doc`, stampa:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Ogni `=item` diventa un punto elenco, e il blocco `=begin code … =end code` viene mostrato testualmente e indentato, esattamente come scritto.

## Rendering in HTML

Lo stesso meccanismo può produrre altri formati. Per l'HTML si installa un modulo di formattazione una sola volta, poi lo si indica dopo `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Ora lo stesso identico documento viene prodotto come HTML — l'intestazione diventa un `<h1>`, l'elenco un `<ul>` di `<li>`, e il blocco di codice un `<pre>`:

```html
<h1>Shopping list</h1>
<p>Things to buy:</p>
<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>
<p>Run it like this:</p>
<pre class="pod-block-code">say 'hello';</pre>
```

(Lo strumento racchiude il tutto in una pagina HTML completa.) È così che viene prodotta la documentazione ufficiale di Raku su [docs.raku.org](https://docs.raku.org) dal Pod presente nel sorgente di Rakudo stesso.

{% include nav.html %}
