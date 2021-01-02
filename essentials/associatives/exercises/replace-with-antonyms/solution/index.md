---
title: 'Solution: Replace with antonyms'
---

{% include menu.html %}

To solve the task, the contents of the file [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) is copied to the solution file [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku). After that, a loop over the input argments is trying to find the word in the dictionary, and if it can, it takes the antonym. If there is no such word in the dictionary, an original word is used.

## Code

The solution is below. The dictionary is shown only partially here.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Find the program in the file [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Output

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Comments

The `//` operator is the [defined-or operator](/raku-course/essentials/scalar-variables/defined-or-operator), which returns the first defined operand.

In the hash, all the keys are words (i.e., they look like identifiers), so you don’t need to quote them in the hash. It is thus possible to create a hash as shown below:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}
