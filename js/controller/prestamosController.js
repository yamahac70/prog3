
const Url_prestamos="http://localhost:3000/prestamos"
const Url_historial="http://localhost:3000/historial"



//funcion crear libros

export async function llamarPrestamos(){
    try {
      const r= fetch(Url_prestamos)
      const prestamos= r.json()

      return prestamos;
    } catch (error) {
      console.error(error)
    }
}

