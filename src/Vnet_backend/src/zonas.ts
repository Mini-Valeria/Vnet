import { Canister, query, update, Record, text, float64, Vec } from 'azle';

// Definimos el tipo TypeScript Zona
type Zona = {
    nombre: string;
    latitud: number;
    longitud: number;
};

// Definimos el tipo Azle para Zona
const ZonaAzle = Record({
    nombre: text,
    latitud: float64,
    longitud: float64,
});

// Definimos una clase para encapsular la lógica de almacenamiento en el StableBTreeMap
class ZonaStorage {
    private zonaMap: Map<string, Zona> = new Map();

    agregarZona(nombre: string, latitud: number, longitud: number) {
        const nuevaZona: Zona = { nombre, latitud, longitud };
        this.zonaMap.set(nombre, nuevaZona);
        return 'Zona agregada exitosamente';
    }

    obtenerZonas(): Zona[] {
        return Array.from(this.zonaMap.values());
    }

    eliminarZona(nombre: string) {
        if (this.zonaMap.delete(nombre)) {
            return 'Zona eliminada exitosamente';
        }
        return 'No se encontró ninguna zona con ese nombre';
    }

    actualizarZona(nombre: string, latitud: number, longitud: number) {
        if (this.zonaMap.has(nombre)) {
            const updatedZona: Zona = { nombre, latitud, longitud };
            this.zonaMap.set(nombre, updatedZona);
            return 'Zona actualizada exitosamente';
        }
        return 'No se encontró ninguna zona con ese nombre';
    }
}

// Creamos una instancia de la clase ZonaStorage
const zonaStorage = new ZonaStorage();

export default Canister({
    agregarZona: update(
        [text, float64, float64],
        text,
        (nombre, latitud, longitud) => {
            return zonaStorage.agregarZona(nombre, latitud, longitud);
        }
    ),
    obtenerZonas: query(
        [],
        Vec(ZonaAzle),
        () => {
            return zonaStorage.obtenerZonas();
        }
    ),
    eliminarZona: update(
        [text],
        text,
        (nombre) => {
            return zonaStorage.eliminarZona(nombre);
        }
    ),
    actualizarZona: update(
        [text, float64, float64],
        text,
        (nombre, latitud, longitud) => {
            return zonaStorage.actualizarZona(nombre, latitud, longitud);
        }
    )
});
