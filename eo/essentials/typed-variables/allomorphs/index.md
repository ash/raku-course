---
title: Alomorfoj
---

{% include menu.html %}

Konsideru la sekvan programon. Antaŭ ol ruli ĝin, ĉu vi povas diri kiuj eniraj valoroj rompus ĝin kaj ĉe kiu linio?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

Estas tri skalaj variabloj kreitaj ĉi tie. Du el ili, `$i` kaj `$s`, estas tajpitaj variabloj. Tio signifas, ke `$i` povas nur stoki entjerojn kaj `$s` povas nur stoki kordojn.

La revena tipo de `prompt` dependas de la karakteroj, kiujn ni tajpis. Se la enira kordo povas reprezenti entjeran numeron, la rezulto estos de la tipo `IntStr`, kiu estas _ambaŭ_ `Int` kaj `Str`, kaj tial povas esti asignita al aŭ `Int` aŭ `Str` variablo. Do, se vi eniras, ekzemple, `1234`, la programo ne rompiĝas.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

La tipo `IntStr` estas ekzemplo de la tiel nomata _alomorfo_ — datuma tipo, kiu kombinas du aliajn tipojn. Jen kelkaj pliaj ekzemploj.

Se vi eniras kordon, kiu ne povas esti entjera numero, la programo rompiĝas en la momento, kiam ni asignas `$input` al `$i`:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Rimarku, ke vi ricevas eraron eĉ se la enira kordo povas esti gisita al numero, sed ne entjero. Ĉar ne eblas stoki flosantan punkton aŭ racian numeron en entjera ujo, Raku eligos escepton:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

La dua asigno, `$s = $input`, neniam rompiĝos ĉar kordo povas preni ajnan eniron.

🦋 Vi povas trovi la fontkodon de ĉi tiu programo en la dosiero [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku).

{% include nav.html %}