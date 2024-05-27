module.exports = {
    apps: [
        {
            name: 'express-app',
            script: 'app.js', // El nombre de tu archivo principal de la aplicación
            instances: 3, // Número de instancias
            exec_mode: 'cluster', // Modo de ejecución: cluster
            watch: true, // Si quieres que PM2 reinicie automáticamente si los archivos cambian
            max_memory_restart: '1G', // Reiniciar si se excede esta cantidad de memoria
        },
    ],
};
