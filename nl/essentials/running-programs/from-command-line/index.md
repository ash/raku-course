---
title: Uitvoeren vanaf de opdrachtregel
---

{% include menu.html %}

Sla de tekst van het programma op in een tekstbestand, bijvoorbeeld `hello.raku`, en geef het pad naar het bestand door aan het opdrachtregelprogramma `raku` (het dollarteken geeft de prompt van de shell aan):

```console
$ raku hello.raku
```

Als het programma geen fouten bevat, wordt het onmiddellijk uitgevoerd, en als het enige uitvoer genereert, zie je het resultaat in de terminal:

```console
$ raku hello.raku 
Hallo, Wereld!
```

Bij het werken met Unix-gebaseerde systemen kun je een shebang toevoegen en het bestand uitvoerbaar maken:

```raku
#!/usr/bin/env raku

say 'Hallo, Wereld!';
```

De volgende stappen zijn als volgt:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hallo, Wereld!
```

{% include nav.html %}