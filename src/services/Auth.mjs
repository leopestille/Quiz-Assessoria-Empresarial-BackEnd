import bcrypt from "bcryptjs";

/* The `createPasswordHash` function is using the `bcrypt` library to hash a given password. It takes in a password as a parameter and returns a promise that resolves to the hashed password. The `bcrypt.hash` function is used to generate the hash, with the second parameter specifying the number of rounds of hashing to apply (in this case, 8 rounds). */
export const createPasswordHash = async password => {
    return bcrypt.hash(password, 8);

}

/* The `checkPassword` function is used to compare a given password with a hashed password stored in the `user` object. It takes in two parameters: `user` and `password`. */
export const checkPassword = (user, password) => {
    return bcrypt.compare(password, user.password);
}