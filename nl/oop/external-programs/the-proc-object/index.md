---
title: Het Proc-object
translations_gpt:
---

{% include menu.html %}

Elke aanroep van `run` of `shell` geeft een `Proc`-object terug — een klein verslag dat beschrijft welk programma gedraaid heeft en hoe het geëindigd is. De eerdere onderwerpen gebruikten zijn handle `.out` om uitvoer te lezen; de `Proc` draagt meer dan dat.

Het nuttigste deel is de **exitcode**. Een programma vertelt wie het gestart heeft met een klein geheel getal of het geslaagd is: `0` betekent succes, en elk ander getal is een foutcode die het programma zelf kiest. `.exitcode` geeft je dat getal:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

Voor de gewone ja/nee-vraag — heeft het gewerkt? — is een `Proc` eenvoudigweg waar wanneer de exitcode `0` is en anders onwaar, zodat je hem rechtstreeks kunt testen:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

Een `Proc` onthoudt ook het commando dat hij gestart heeft, in `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

Eén ding om op te letten: als een commando mislukt en je de teruggegeven `Proc` eenvoudigweg **negeert**, werpt Raku een exceptie in plaats van de mislukking onopgemerkt te laten passeren:

```raku
run 'sh', '-c', 'exit 1';
# dies: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Omdat een exit ongelijk aan nul meestal betekent dat er iets misging, werpt een mislukkende `Proc` die weggegooid wordt zodra hij buiten bereik raakt. De aanleiding is het *weggooien* van het resultaat, niet het negeren van de exitcode: de `Proc` gewoon in een variabele bewaren is al genoeg om de exceptie te vermijden, ook als je er nooit meer naar kijkt.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # no error, even though it failed
# …and $proc is never used again
```

Dus als je *verwacht* dat een commando kan mislukken, bewaar dan zijn `Proc` en kijk naar `.exitcode` (of test hem als boolean) wanneer je wilt weten wat er gebeurd is.

{% include nav.html %}
