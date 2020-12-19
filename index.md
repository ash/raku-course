# Contents

* [About this course](about-this-course)

## Part 1. Raku essentials

### Basic introduction to Raku and its compiler

* [What is Raku](what-is-raku)
* [Raku vs. Rakudo](raku-vs-rakudo)
* [How to install Rakudo](how-to-install-rakudo)
* [Editors and IDEs](editors-and-ides)
* [Conventional file extensions](conventional-file-extensions)
* [Hello, World!](hello-world)
* [Notes on using Unicode](on-unicode)
* [Running programs](running-programs) — [1 exercise](running-programs/exercises)
    - [Running from command line](running-programs/from-command-line)
    - [Running from REPL](running-programs/from-repl)
    - [Running from IDE](running-programs/from-ide)
    - [Using docker](running-programs/using-docker)
    - [Using online service](running-programs/using-online-services)
* [Simple input and output](simple-input-output)
    - [Output with `say`](simple-input-output/say)
    - [Input with `prompt`](simple-input-output/prompt)
* [Comments](comments)

### Variables and data types essentials

* [Scalar variables](scalar-variables) — [2 exercises](scalar-variables/exercises)
    - [Declaring a variable](scalar-variables/declaring-a-variable)
    - [Assigning a value](scalar-variables/assigning-a-value)
    - [Declaration with initialization](scalar-variables/declaration-with-initialization)
* [Strings](strings) — [4 exercises](strings/exercises)
    - [String concatenation](strings/string-concatenation)
    - [Variable interpolation](strings/variable-interpolation)
    - [Escaping special characters](strings/escaping-special-characters)
    - [String length](strings/string-length)
* [Numbers](numbers) — *[exercises](numbers/exercises)
    - [Integer numberss](numbers/integers)
    - [Rational numbers](numbers/rats)
    - [Floating-point numbers](numbers/numeric)
* [Boolean type](booleans)
* [Data types and introspection](what) — [1 exercise](what/exercises)
* [Data type conversion](coercion)
* [Typed variables](typed-variables) — [1 exercise](typed-variables/exercises)

### Running Raku

* Command-line options

* Phasers

* Understanding error messages

* The MAIN subroutine


### Variables and data types

* Types of variable containers in Raku (scalar, arrays, etc.)

* Understanding Raku containers

* Integers

* Strings

* Date and Time built-in support

* Other data times

* Understanding a sequence


### Operators

* Types of operators in Raku (infix, prefix, etc.)

* Overview of operators in Raku

* [Meta-operators](metaoperators)

* User-defined operators

* Data type conversion (e.g., prefix operators `+` or `~`, etc.)



## Part 2


### Control flow

* Blocks and scoping 101

* Conditional checks

* Loops

* Block-related phasers (e.g. `LEAVE`)

* Other options (e.g., `gather`, `given`)


### Subroutines

* Creating a subroutine

* Signature

* Calling a subroutine

* Multiple dispatch

* Multiple MAIN subroutines

* Nested subroutines

* Anonymous subroutines


### Modules

* Creating modules

* Using modules

* Different types of importing (`import`, `need`, etc.)

* Introspections

* Installing modules from web



## Part 3


### Object-oriented programming

* Classes in Raku

* Attributes

* Methods

* Class methods

* Subroutines vs methods

* Inheritance

* Roles

* Introspection


### Input and output

* Standard input, output, and errors

* Working with files

* Working with directories

* File streams


### Exceptions

* The `try` block

* What is a soft failure

* The `CATCH` phaser

* Exception objects

* Failure objects

* Multiple dispatch in handling exceptions

* Custom exceptions


## Part 4


### Regexes

* Literals and character classes

* Regexp matching

* Quantifiers

* Captures

* Alternations

* Anchors

* Forward and backward assertions

* Adverbs (such as `:g` etc.)

* String substitution and replacement


### Grammars

* What is a grammar

* Creating grammars

* Rules

* Tokens

* Grammars vs. classes and inheritance

* AST (Abstract syntax tree), `make` and `made`

* Actions

* Inline actions vs. action class


## Part 5


### Functional programming

* Recursion

* Reduction

* Higher-order functions

* Lambdas

* Data feeds

* Iterators

* Lazy and infinite sequences


### Concurrent programming

* Junctions

* Threads

* Promises

* Channels


### Reactive programming

* Supplies

* Live and on-demand supplies

* Understanding `react`

* Understanding `whenever`

* Understanding `await`


### Web programming

* Making remote connections

* Simple HTTP client

* Simple HTTP server

* Cro 101


## Appendix

* [List of problems](problems)
