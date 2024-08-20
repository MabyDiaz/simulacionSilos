/* Consigna: Simulación de una Planta de Silos
Como desarrollador eres el encargado de desarrollar un sistema para gestionar el ingreso de camiones a una planta de silos que almacena soja y maíz.

Tu tarea:
1. Crear un desarrollo en JavaScript que simule el funcionamiento de esta planta.
2. Definir dos silos: uno para soja y otro para maíz. Cada silo tendrá una capacidad máxima y un stock actual de cereal.
3. Implementar una función que permita ingresar un camión. Esta función debe:
o Solicitar al usuario el tipo de cereal (soja o maíz) y el peso de la carga.
o Validar los datos ingresados (por ejemplo, que el peso sea un número positivo).
o Determinar el silo correspondiente al tipo de cereal.
o Verificar si hay suficiente espacio en el silo para almacenar la carga.
o Si hay espacio, actualizar el stock del silo y mostrar un mensaje informando sobre el ingreso del camión.
o Si no hay espacio, mostrar un mensaje indicando que el silo está lleno.

Conceptos básicos a utilizar:
 Variables y constantes: Para almacenar datos como el nombre del silo, su capacidad y el stock actual. Ámbitos, CUIDADO!!.
 Objetos literales: Para representar los silos y sus propiedades.
 Estructuras condicionales: if y switch para tomar decisiones basadas en los datos ingresados.
 Funciones: Para modularizar el código y realizar tareas específicas.
 Entrada y salida de datos: prompt para solicitar información al usuario y alert para mostrar mensajes.

Ejemplo de ejecución:
Al ejecutar el programa, se le pedirá al usuario que ingrese el tipo de cereal y el peso de la carga. El programa verificará los datos y actualizará el stock del silo correspondiente. Si hay algún error o si el silo está lleno, se mostrará un mensaje al usuario. */

const btnIniciarCarga = document.getElementById('inicioCarga');

const siloSoja = {
  nombre: 'Silo de Soja',
  capacidadMaxima: 10000,
  stockActual: 0,
};

const siloMaiz = {
  nombre: 'Silo de Maiz',
  capacidadMaxima: 10000,
  stockActual: 0,
};

function ingresarCamion() {
  let continuar;
  do {
    let tipoCereal;
    let pesoCarga;
    let siloSeleccionado;

    do {
      tipoCereal = prompt(
        'Ingrese el tipo de cereal (soja o maiz):'
      ).toLowerCase();
      if (tipoCereal !== 'soja' && tipoCereal !== 'maiz') {
        alert(
          'Error: El tipo de cereal ingresado no es válido. Por favor, ingrese "soja" o "maiz".'
        );
      }
    } while (tipoCereal !== 'soja' && tipoCereal !== 'maiz');

    // Seleccionar el silo correspondiente
    if (tipoCereal === 'soja') {
      siloSeleccionado = siloSoja;
    } else if (tipoCereal === 'maiz') {
      siloSeleccionado = siloMaiz;
    }

     // Validar el peso de la carga
     do {
        pesoCarga = parseFloat(prompt('Ingrese el peso de la carga (en kg):'));
        if (isNaN(pesoCarga) || pesoCarga <= 0) {
            alert('Error: El peso ingresado no es válido. Inténtelo de nuevo.');
        }
    } while (isNaN(pesoCarga) || pesoCarga <= 0);

    // Verificar si hay suficiente espacio en el silo
    if (
      siloSeleccionado.stockActual + pesoCarga <=
      siloSeleccionado.capacidadMaxima
    ) {
      siloSeleccionado.stockActual += pesoCarga;
      alert(
        `El camión ha sido ingresado exitosamente.\n${siloSeleccionado.nombre} ahora tiene ${siloSeleccionado.stockActual} kg de cereal.`
      );
    } else {
      alert(
        `Error: No hay suficiente espacio en el ${siloSeleccionado.nombre} para almacenar esta carga.`
      );
    }

    continuar = prompt('¿Desea ingresar otro camión? (si/no)').toLowerCase();
  } while (continuar === 'si');
}

function mostrarSilo() {
  const tipoCereal = prompt(
    'Ingrese el silo que desea ver (soja o maiz):'
  ).toLowerCase();

  let siloSeleccionado;

  switch (tipoCereal) {
    case 'soja':
      siloSeleccionado = siloSoja;
      break;
    case 'maiz':
      siloSeleccionado = siloMaiz;
      break;
    default:
      alert('Error: El tipo de silo ingresado no es válido.');
      return;
  }

  alert(
    `Estado actual del ${siloSeleccionado.nombre}:\nStock Actual: ${siloSeleccionado.stockActual} kg\nCapacidad Máxima: ${siloSeleccionado.capacidadMaxima} kg`
  );
}

function mostrarMenu() {
  let opcion;
  do {
    opcion = parseInt(
      prompt('Elija una opción:\n1. Ingresar Camion\n2. Mostrar Silo\n3. Salir')
    );

    switch (opcion) {
      case 1:
        ingresarCamion();
        break;
      case 2:
        mostrarSilo();
        break;
      case 3:
        alert('Gracias por utilizar el sistema.');
        break;
      default:
        alert('Error: Opción incorrecta.');
        break;
    }
  } while (opcion !== 3);
}

btnIniciarCarga.addEventListener('click', mostrarMenu);
