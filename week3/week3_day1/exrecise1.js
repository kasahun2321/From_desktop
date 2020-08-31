function isperfectarray() {
    let isperfect = false;
    let i = 0;
    for (i = 0; i < Array.length; i++) {
        if (i % 2 !== 0) {
            if (!isprime(ar[i])) {
                break;
            }
        }
    }
    if (i === Array.length) {
        isperfect = true;
    }

    return isperfect;
}


