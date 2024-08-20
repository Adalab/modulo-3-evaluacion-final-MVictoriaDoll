export const translateData = (value) => {
    if (value === 'human') {
        return 'Humano';
    } else if (value === 'half-giant') {
        return 'Mitad-Gigante';
    } else if (value === 'werewolf') {
        return 'Hombre-Lobo';
    } else if (value === 'male') {
        return 'Masculino';
    } else if (value === 'female') {
        return 'Femenino';
    } else {
        return 'Otro';
    }
};


