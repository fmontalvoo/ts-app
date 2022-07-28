{
    // const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]; // Array

    let tupla: [number, string, boolean]; // Tuple
    tupla = [1, 'a', true];
    // tupla = [2, 'string', false, 4]; // Error

    console.log(tupla);

    const [id, name] = tupla;

    console.log(id, name);
}