---
title: run en shell
translations_gpt:
---

{% include menu.html %}

Er zijn twee manieren om een extern programma te starten. De functie `run` neemt het commando en zijn argumenten als **afzonderlijke** waarden en draait het programma rechtstreeks, zonder een shell erbij te betrekken:

```raku
run 'echo', 'hello';
```

Dit draait het programma `echo` met het enkele argument `hello`, wat `hello` afdrukt. Omdat de argumenten apart meegegeven worden, bestaat er geen risico dat de shell spaties of bijzondere tekens verkeerd interpreteert — `run` is de veilige standaardkeuze.

De functie `shell` geeft in plaats daarvan één **enkele string** aan de systeemshell, die hem interpreteert. Zo kun je shellmogelijkheden als pipes en omleiding gebruiken:

```raku
shell 'echo hello | tr a-z A-Z';
```

Hier draait de shell `echo`, sluist de uitvoer door `tr` en drukt `HELLO` af. Het gemak komt met een waarschuwing: omdat de shell de string ontleedt, is een `shell`-commando opbouwen uit onbetrouwbare invoer gevaarlijk. Geef de voorkeur aan `run` tenzij je specifiek shellmogelijkheden nodig hebt.

Beide geven een `Proc`-object terug dat beschrijft hoe het programma geëindigd is. Standaard deelt het gestarte programma de uitvoer van jouw programma, dus wat het afdrukt verschijnt op het scherm. Om die uitvoer in plaats daarvan op te vangen, vraag je erom — het onderwerp van het volgende onderdeel.

{% include nav.html %}
