---
title: Una scatola con una misura
translations_gpt:
---

{% include menu.html %}

## Problema

Definisci un ruolo `Sized` con un metodo `describe` che restituisce la stringa `size is <misura>`, usando `self.size`.

Poi definisci una classe `Box` che assume il ruolo `Sized` e ha un attributo `size`. Crea una scatola di misura `10`, stampa il risultato della chiamata di `describe` su di essa e poi, su una seconda riga, stampa se la scatola `~~ Sized` — cioè se viene riconosciuta come portatrice del ruolo.

## Esempio

Il programma stampa:

```
size is 10
True
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
