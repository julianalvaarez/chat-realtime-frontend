import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { useNavigate } from "react-router-dom";

// Proveedor de Google para la autenticación con Google.
const googleProvider = new GoogleAuthProvider();

// Función para iniciar sesión con Google.
export const signInWithGoogle = async () => {
    try {
        // Iniciar sesión con la ventana emergente de Google.
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const user = result.user;
        const { displayName, email, uid } = user;

        // Devolver los detalles del usuario en caso de éxito.
        return {
            displayName,
            email,
            uid
        };
    } catch (error) {
        // Manejar errores y devolver un objeto con detalles del error.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error Code: ${errorCode}, Message: ${errorMessage}`);
    }
};


// Función para registrar un nuevo usuario con correo electrónico y contraseña.
export const registerUserWithEmailPassword = async ( email, password, displayName ) => {
        try {
            // Crear un nuevo usuario con correo electrónico y contraseña.
            const userCredentials = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            const { uid } = userCredentials.user;

            // Actualizar el perfil del usuario con el nombre proporcionado.
            await updateProfile(FirebaseAuth.currentUser, { displayName });

            // Devolver detalles del usuario en caso de éxito.
            return { uid, email, displayName };
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else if (error.code === 'auth/invalid-email') {
                alert('Invalid Email')
            } else if (error.code === 'auth/weak-password') {
                alert('Password is too weak')
            } else if (error.code) {
                alert('Something went wrong')
            }
        }
};

// Función para iniciar sesión con correo electrónico y contraseña.
export const loginWithEmailPassword = async (email, password) => {
        try {
            // Iniciar sesión con correo electrónico y contraseña.
            const userCredentials = await signInWithEmailAndPassword(FirebaseAuth, email, password);
            const { uid, displayName } = userCredentials.user;

            // Devolver detalles del usuario en caso de éxito.
            return { uid, displayName };
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('La cuenta no existe')
                return {
                    message: 'La cuenta no existe'
                }
            }
        }
};


// Función para cerrar sesión.
export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};
