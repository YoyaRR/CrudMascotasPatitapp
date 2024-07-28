class Mascota {
    constructor(nombre, chip, carnet, raza, tamano, edad, foto){
        this.nombre = nombre
        this.chip = chip
        this.carnet = carnet
        this.raza = raza
        this.tamano = tamano
        this.edad = edad
        this.foto = foto
    }

    getNombre() {
        return this.nombre
    }

    setNombre(nombre) {
        this.nombre = nombre
    }

    getChip() {
        return this.chip
    }

    setChip(chip) {
        this.chip = chip
    }

    getCarnet() {
        return this.carnet
    }

    setCarnet(carnet) {
        this.carnet = carnet
    }

    getRaza() {
        return this.raza
    }

    setRaza(raza) {
        this.raza = raza
    }

    getTamano() {
        return this.tamano
    }

    setTamano(tamano) {
        this.tamano = tamano
    }

    getEdad() {
        return this.edad
    }

    setEdad(edad) {
        this.edad = edad
    }

    getFoto() {
        return this.foto
    }

    setFoto(foto) {
        this.foto = foto
    }
}