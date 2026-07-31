---
title: Troppo grande
translations_gpt:
---

{% include menu.html %}

## Problema

Definisci una classe di eccezione personalizzata `TooBig` che eredita da `Exception` e ha due attributi, `value` e `limit`. Il suo metodo `message` deve restituire `Value <value> exceeds the limit of <limit>`.

Poi scorri i valori `30`, `99` e `60` con un limite di `50`. Per ogni valore solleva una `TooBig` solo quando il valore supera il limite, e usa un phaser `CATCH` con `when TooBig` che stampa il messaggio **e**, su una seconda riga, legge direttamente l'attributo `limit` dell'eccezione per stampare `Try a value up to <limit>.`. Un valore entro il limite deve semplicemente riferire che va bene.

Questo mostra che l'eccezione viene sollevata solo per i numeri che falliscono; gli altri passano dritti, e in entrambi i casi il ciclo prosegue.

## Esempio

Il programma stampa:

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
