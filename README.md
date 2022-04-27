# Context

- Establece el contexto en el que seran usadas las funciones provistas por provider.

# Provider

- Envia los numeros a renderizar al componente display.
- Envia el texto al componente Info, segun el estado.
- Indica al componente Actions el boton a renderizar, y pasa la accion a ejecutar segun el estado.
- Envia al componente Keyboard, la funcion a realizar para cada componente Key.
- Establece la funcion, segun el estado, de adicionar el numero de cada key al componente Display.
- Establece la funcion, segun el estado, que recibe el componente Actions, que se ejecutara en el componente Action > "Call"
- Establece la funcion, segun el estado, que recibe el componente Actions, que se ejecutara en el componente Action > "Hang"
- Establece la funcion, segun el estado, que recibe el componente Keyboard, que se ejecutara en cada componente Key.

# App

- Renderiza el componente Actions.
- Renderiza el componente Keyboard.
- Renderiza el componente Info.
- Renderiza el componente Display.

# Display

- Renderiza un campo de numeros, y un texto recibido.

# Info

- Renderiza un texto recibido.

# Actions

- Renderiza un componente Action con el texto CALL y le pasa una accion segun el estado recibido.
- Renderiza un componente Action con el texto HANG y le pasa una accion segun el estado recibido.

# Action

- Renderiza un boton con el texto recibido, y llama a la accion recibida.

# Keyboard

- Recibe una funcion, a ser pasada a componente Key.
- Renderiza una lista de componentes Key.
- Establece la funcion a recibir por cada componente Key.

# Key

- Renderiza un texto recibido.
- Llama la funcion recibida.
