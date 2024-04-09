// Define the type representing the structure of the data set
type FromSet = {
    user: {
        fields: {
            name: string;
            age: number;
        };
    };
    product: {
        fields: {
            name: string;
            price: number;
        };
    };
};

// Define the type representing a selector tuple
type Selector<T, U> = [T, U];

// Define a helper type to ensure the Alias is converted to string
type AsString<T> = `${T}`;

// Define the ExtractFieldType type
type ExtractFieldType<F extends FromSet, S extends Selector<keyof F, F>> =
    // If the selector is in the format "${T}.${K}"
    S extends [`${infer T}.${infer K}`, infer Alias]
    ? T extends keyof F // Check if T exists in the FromSet
    ? K extends keyof F[T]['fields'] // Check if K exists in the specified T's fields
    ? { [P in AsString<Alias>]: F[T]['fields'][K] } // Construct the resulting type
    : never // Return 'never' if K doesn't exist
    : never // Return 'never' if T doesn't exist
    : // If the selector is in the format "${T}.*"
    S extends `${infer T}.*`
    ? T extends keyof F // Check if T exists in the FromSet
    ? F[T]['fields'] // Return the fields of T
    : never // Return 'never' if T doesn't exist
    : // If the selector is in any other format, return 'never'
    never;

// Example usage:
type UserField = ExtractFieldType<FromSet, ['user.name', 'fullName']>;
type ProductField = ExtractFieldType<FromSet, ['product.price', 'cost']>;
type InvalidField = ExtractFieldType<FromSet, ['invalidType.field', 'fieldName']>; // This should result in 'never'

// Sample data
const userField: UserField = { fullName: 'John', name: 'John' };
const productField: ProductField = { cost: 20, price: 20 };
// const invalidField: InvalidField = {}; // This line will cause a type error, as expected

console.log(userField); // Output: { fullName: 'John', name: 'John' }
console.log(productField); // Output: { cost: 20, price: 20 }
// console.log(invalidField); // This line will cause a type error, as expected
