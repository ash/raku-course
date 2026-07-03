sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
