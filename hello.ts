function sayHello( user: string ): string {
    return `Hello, ${ user }`;
}

// declare `result` of type `string`
var result: string;

// save return value of `sayHello()` in `result`
result = sayHello( 'World' );

// print result
console.log( result );
