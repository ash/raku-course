[Concatenate a list](../)

# The solution

Here is the solution of the problem ‘[Concatenate a list](../)‘ that uses a reduction operator.

## Code

```perl
my @strings = < neun hundert fünf und zwanzig >;

my $string = [~] @strings;

say $string;
```

You can find the full code in the file [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/problems/concatenate-a-list/solution/concatenate-a-list.raku).

## Output

To see the output, run the program as shown below:

```perl
$ raku concatenate-a-list.raku
neunhundertfünfundzwanzig
```

## Discussion

The program works with the built-in array of strigns, which is hard coded as a quoted list of strings:

```perl
my @strings = < neun hundert fünf und zwanzig >
```

This form is the same as a more traditional form:

```perl
my @strings = 'neun', 'hundert', 'fünf', 'und', 'zwanzig';
```

The items of the array `@strings` are then concatenated using the reduction operator with the operator for string concatenation `~`: `[~]`. The construct `[~] @strings` is equivalent to a much more verbose chain:

```perl
my $string = @strings[0] ~ @strings[1] ~ @strings[2] ~
             @strings[3] ~ @strings[4];
```

Of course, if you don’t need to use the `$string` variable later in the program, you can simplify the code by omitting the temporary variable:

```perl
my @strings = < neun hundert fünf und zwanzig >;

say [~] @strings;
```

## Refresh your knowledge

* [Reduction metaoperator](/metaoperators/reduction-metaoperators)
* [String concatenation](string-concatenation)
