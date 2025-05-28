const baseUrlApi = `https://www.swapi.tech/api`

//servicio para obtener la lista personas, planetas, vehiculos.
export const getListData = async (typeElement) => {
    try {
        const response = await fetch( `${baseUrlApi}/${typeElement}`);
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
export const getListbyId = async (type, id) => {
    try {
        const response = await fetch(`${baseUrlApi}/${type}/${id}`);
        if (!response.ok)
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error(`Error fetching data:`, error);
        throw error;
    }
}

