---
title: Allomorphs
---

{% include menu.html %}

Considera sequens programma. Antequam id curras, potesne dicere quae valores inputorum id frangant et in qua linea?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

Tres variabiles scalare hic creantur. Duae earum, `$i` et `$s`, sunt variabiles typatae. Id significat `$i` solum numeros integros continere posse et `$s` solum chordas continere posse.

Typus reditus `prompt` dependet a characteribus quos typis dedimus. Si chorda inputi numerum integrum repraesentare potest, eventus erit typi `IntStr`, quod est _et_ `Int` et `Str`, et sic assignari potest vel variabili `Int` vel `Str`. Ergo, si, exempli gratia, `1234` intras, programma non frangitur.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

Typus `IntStr` est exemplum sic dicti _allomorphi_ — typus datae qui duos alios typos coniungit. Hic sunt pauca alia exempla.

Si chordam intras quae numerus integer esse non potest, programma frangitur momento quo `$input` ad `$i` assignamus:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Animadverte quod errorem accipis etiam si chorda inputi ad numerum converti potest, sed non ad integrum. Cum non sit possibile numerum puncti-fluctuantis vel rationalem in continens integrum ponere, Raku exceptionem emittet:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

Secunda assignatio, `$s = $input`, numquam frangetur quia chorda potest quemlibet inputum accipere.

🦋 Codicem fontis huius programmatis invenire potes in archivo [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku).

{% include nav.html %}