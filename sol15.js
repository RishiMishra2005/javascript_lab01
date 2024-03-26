try {
    let undefinedObject;
    console.log(undefinedObject.someProperty);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught TypeError:", error.message);
    } else {
        throw error;
    }
}
