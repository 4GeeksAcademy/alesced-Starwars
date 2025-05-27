const baseUrlApi = `https://www.swapi.tech/api`

//servicio para obtener la lista de los personajes
const getListPeople = async (typeElement) => {
    try {
        const response = await fetch( baseUrlApi + typeElement);
        if (!response.ok)
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

//servicio para obtener los detalles de cualquier objeto por su id
const getListbyId = async (typeElement, idElement) => {
    try {
        const response = await fetch(`${baseUrlApi}${typeElement}/${idElement}`);
        if (!response.ok)
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error(`Error fetching data:`, error);
        throw error;
    }
}

//servicio para obtener la lista de los planetas
const getListPlanets = async (typeElement) => {
    try {
        const response = await fetch(baseUrlApi + typeElement);
        if (!response.ok)
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        const data = await response.json();
        return data.results;    
    } catch (error) {
        console.error(`Error fetching data:`, error);
        throw error;
    }
}

//servicio para obtener lista de vehiculos
const getListVehicles = async (typeElement) => {
    try {
        const response = await fetch(baseUrlApi + typeElement);
        if (!response.ok)
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        const data = await response. json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching data:`, error);
        throw error;
    }
}
