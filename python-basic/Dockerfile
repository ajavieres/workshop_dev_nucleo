# Usamos la imagen base oficial y segura de Red Hat para Python
FROM registry.access.redhat.com/ubi8/python-39:latest

# Definimos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo de dependencias primero (aprovecha la caché de capas)
COPY requirements.txt .

# Instalamos las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto del código de la aplicación
COPY app.py .

# Configuración de fábrica (Por defecto dice 'Desarrollo' y puerto 8080)
ENV APP_ENV="Desarrollo de Fábrica (Dockerfile)"
EXPOSE 8080

# Comando para arrancar la aplicación Flask
CMD ["python", "app.py"]
