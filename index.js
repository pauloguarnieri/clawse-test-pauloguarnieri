// TAREFA 1

// const toNumber = valor => !valor || typeof(valor) === 'object' || typeof(valor) === function ? 0 : parseFloat(valor);

const toNumber = (valor) => {

    if (!valor || typeof (valor) === 'object' || typeof (valor) === 'function') {
        return 0;
    }

    return parseFloat(valor);
};

// TAREFA 2

const isBlank = (valorParametro) => {

    if (valorParametro) {
        if (typeof valorParametro === 'string' && valorParametro.trim() === '') {
            return true;
        }
        if (valorParametro instanceof Date && typeof valorParametro.getMonth === 'function') {
            return false;
        }
        if (typeof valorParametro === 'object' && Object.keys(valorParametro).length === 0) {
            return true;
        }
        if ((`${valorParametro}`.trim()) === '') {
            return true;
        }

        return false;
    }

    return true;
};

//TAREFA 3

const sortArray = (array, args) => {

};