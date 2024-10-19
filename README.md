# `VNet`
### Descripción
VNet promete ser una pagina web a la cual puede acudir la gente para crear una ruta por la cual caminar de manera mas segura y conociendo los sucesos que anteriormente han ocurrido en las calles de alrededor del estado ademas de la colorimetria que es la siguiente.

+ `Rojo:` _Inseguro_
+ `Amarillo:` _Poco seguro_
+ `Verde:` _Seguro_

Esto gracias a una inteligencia artificial que analiza los registros de los usuarios y crea dichas rutas para que los usuarios viajen sin la preocupación de los riesgos, eso sí, si ellos deciden viajar por zonas amarillas, ya que si bien esas zonas no son de gran riesgos, aún así existe la posibilidad de algún riesgo, por lo que sería cuestión del usuario decidir que ruta tomar de las que nuestra IA genera.

## Instrucciones de ejecución
Para aprender más antes de iniciar con `VNet`, puedes checar la siguiente documentación:
- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)

Después de haber leído (si es que eres nuevo en esto) puedes clonar este repositorio con `git clone` y la `URL` del repositorio _(la cual se encuentra en la pestaña de color verde `<> Code`)_, el comando `git clone` tienes que ponerlo en tu terminal de **Ubuntu** _(es necesario en ubuntu ya que ahí es donde los canisters de ICP funcionan)_

Si ya tienes lo necesario para continuar, sigue los pasos a continuación:
```bash
cd Vnet/
dfx help
dfx canister --help
```

### Ejecutando el código en local
Si quieres ejecutrar el código en local, puedes usar los siguientes comandos:

```bash
# Inicia la replica, corriendo en segundo y en limpio para evitar código "basura" de la ejecución
dfx start --background --clean

# Deploya tus canisters a la replica y genera tu interfaz Candid
dfx deploy
```

Una vez la ejecución termine, tu aplicación estará en: `http://localhost:4943?canisterId={asset_canister_id}`.

Y si haces algunos cambios en tu backend canister, puedes generar un nuevo candid interface con...

```bash
npm run generate
```

En cualquier momento. Esto es recomendado antes de iniciar el desarrollo frontend server,y este correra automaticamente en el momento que hagas `dfx deploy`.

Si estas haciendo cambios de frontend, tu puedes iniciar un development server con...

```bash
npm start
```

Cuando inicies un server en `http://localhost:8080`, envia solicitudes API a la réplica en el puerto 4943.

### Nota en variables del frontend environment
Si está alojando codigo frontend en algun lugar sin utilizar DFX, puede que necesite realizar uno de los siguientes ajustes para asegurarse de que su proyecto no obtiene la clave raiz en la produccion:

+ Pon `DFX_NETWORK` en `ic` si estas usando Webpack
+ Usa tu método preferido para reemplazar `process.env.DFX_NETWORK` en las declaraciones autogeneradas
  + Ajusta `canisters -> {asset_canister_id} -> declarations -> env_override to a string` en dfx.json reemplazará `process.env.DFX_NETWORK` con el string en las declaraciones autogeneradas
+ Escribe tu propio `createActor` constructor
