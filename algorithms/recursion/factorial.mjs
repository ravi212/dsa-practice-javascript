export function fact(n) {
    if(n==1) {
        return 1;
    }
    return fact(n*fact(n-1))
}