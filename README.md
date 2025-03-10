# Hello with Time

Este proyecto es una **Lambda Function** desplegada con **AWS SAM (Serverless Application Model)** y expuesta a través de **AWS API Gateway**. La función devuelve un saludo con la hora actual basada en la zona horaria del usuario.

## Requisitos previos

Antes de empezar, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS SAM CLI](https://aws.amazon.com/serverless/sam/)
- [Docker](https://www.docker.com/) (para emular el entorno de AWS Lambda localmente)
  
También necesitarás una cuenta en AWS con permisos para desplegar Lambda Functions.

## Instalación

1. Clona este repositorio a tu máquina local:
    ```bash
    git clone https://github.com/andres-bonilla/sam-hello-time.git
    ```
2. Accede a la carpeta del repositorio y luego a la carpeta de la Lambda Function:
    ```bash
    cd sam-hello-time
    cd hello-time
    ```
3. Instala las dependencias de la Lambda Function:
    ```bash
    npm install
    ```

## Desplegar el proyecto en AWS

1. Asegúrate de tener configurada tu cuenta de AWS con el comando `aws configure` y proporcionar tus credenciales de acceso.
   
2. Desde la carpeta raiz del repositorio empaqueta y despliega la Lambda Function usando SAM:
    ```bash
    sam build
    sam deploy --guided
    ```

    Durante el primer despliegue, `sam deploy --guided` te pedirá configurar algunos parámetros, como el nombre del stack y la región de AWS.

3. Después de un despliegue exitoso, SAM te proporcionará la URL de tu Lambda Function.

## Ejecutar los Tests

Este proyecto utiliza [Vitest](https://vitest.dev/) para realizar pruebas unitarias. Para ejecutar los tests, sigue estos pasos:

1. Accede a la carpeta de la Lambda Function:
    ```bash
    cd hello-time
    ```

2. Si no lo has hecho, instala las dependencias del proyecto:
    ```bash
    npm install
    ```

3. Ejecuta los tests:
    ```bash
    npm run test
    ```

    Vitest ejecutará los tests y mostrará los resultados en la consola. 

---
