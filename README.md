
# Web Sanam

Este es un proyecto desarrollado con [React](https://reactjs.org/) y [Next.js](https://nextjs.org/). Utiliza [Tailwind CSS](https://tailwindcss.com/) para los estilos y está configurado para manejar la internacionalización (i18n).
  
## Estructura del Proyecto

  
La estructura del proyecto es la siguiente: 

 - app/ # Principalmente utilizado para el enrutamiento y vistas de la
   aplicación.
 - components/ # Componentes reutilizables de la aplicación.
   
 - i18n/ # Archivos de configuración y traducciones para la
   internacionalización.
   
 - public/ # Archivos públicos como imágenes y favicons.
   
 - src/utils/ # Funciones utilitarias.
   
 - styles/ # Archivos de estilos globales.
   
 - types/ # Definiciones de tipos TypeScript.

## Configuración de Archivos Principales
- **`next.config.mjs`**: Configuración de Next.js, donde puedes personalizar ajustes de la aplicación.

- **`tailwind.config.ts`**: Configuración de Tailwind CSS para personalizar temas y estilos.

- **`postcss.config.mjs`**: Configuración de PostCSS, utilizado por Tailwind CSS para procesar estilos.

- **`tsconfig.json`**: Configuración de TypeScript.

- **`middleware.ts`**: Archivo de middlewares, si se requiere manipulación de rutas o autenticación.

- **`i18n.ts`**: Configuración de la internacionalización para gestionar diferentes idiomas.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.

- **Next.js**: Framework de React para aplicaciones de servidor.

- **Tailwind CSS**: Framework de CSS para estilos rápidos y personalizables.

- **TypeScript**: Superset de JavaScript para añadir tipado estático al proyecto.

## Instalación

1. Clona el repositorio:
```bash
    git clone https://github.com/usuario/web-sanam.git 
```
2. Instala las dependencias:
```bash
cd web-sanam
npm install
```
3. Ejecuta el proyecto en modo de desarrollo:
```bash
npm run dev
```
4. Abre http://localhost:3000 para ver el proyecto en el navegador.

## Scripts Disponibles

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Construye la aplicación para producción.
-   `npm run start`: Inicia el servidor de producción después de construir el proyecto

## Configuración de Internacionalización (i18n)

El proyecto está configurado para soportar múltiples idiomas. Puedes encontrar los archivos de traducción en la carpeta `i18n/` y las configuraciones en `i18n.ts`.

## Contribuir

Si deseas desarrollar en este proyecto, por favor sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4.  Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

## Licencia

### Licencia Propietaria para Uso Exclusivo del Cliente

Este proyecto y su código fuente son propiedad de **[Bik Leek]**. Está licenciado únicamente para el uso interno de **[Sanam]**. No se permite su distribución, modificación, sublicencia, o venta sin el consentimiento expreso y por escrito de **[Bik Leek]**.

Todo uso debe estar en conformidad con el acuerdo contractual establecido entre **[Bik Leek]** y **[Sanam]**. 
Cualquier violación de estos términos puede resultar en acciones legales.

© [2024] **[Bik Leek]**. Todos los derechos reservados.
