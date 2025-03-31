import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";

const signupUser = async (req, res) => {

    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists', alreadyExistingEmail: true });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }

};


const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        // Check if user exists in the database
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the password with the hashed password stored in the database
        const isPasswordValid = await comparePassword(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If the password is valid, you can send a success response
        // Optionally, you can also generate a JWT token and send it back to the client for authenticated sessions.

        res.status(200).json({ message: 'Login successful', user: { email: existingUser.email, username: existingUser.username } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export { loginUser, signupUser };