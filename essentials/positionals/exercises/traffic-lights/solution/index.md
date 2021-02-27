---
title: 'Solution: Traffic lights'
---

{% include menu.html %}

The idea of the solution is to ’loop the indexing’ of the array with the four states of the traffic lights:

```raku
my @lights = <yellow red yellow green>;
```

During the first seconds, the number of seconds since the start can be directly used as an index in the array. When it exceeds 3, you can loop it to the beginning of the array with the modulo operator `%`. The length of the array is `@lights.elems`, but when it is used as an operand of `%`, there is no need to call the `elems` method, as the name of the array will be converted to a number, and that conversion is designed to return the number of elements.

## Code

Here is the solution:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Find the program in the file [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/traffic-lights.raku).

## Output

Run the program. Additionally, try other values in the program.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}

