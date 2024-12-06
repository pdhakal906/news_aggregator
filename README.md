# For Backend
Fist clone the repository.  

Create and activate virtual environment.

Create a Postgres database and a user.

Create a .env file and add database configuration: 

**DATABASE_ENGINE = yourdatabaseengine** <br>
**DATABASE_NAME = yourdatabasename** <br>
**DATABASE_USERNAME = yourdatabaseusername** <br>
**DATABASE_PASSWORD = yourdatabasepassword** <br>
**DATABASE_HOST = yourdatbasehost** <br>
**DATABASE_PORT = yourdatabaseport** <br>

Then install requirements:
**pip install -r requirements.txt** 

After that, run migrations:
**python manage.py migrate**

Next, make migrations:
**python manage.py makemigrations api**

Run migrations again:
**python manage.py migrate**

Create a superuser:
**python manage.py createsuperuser**

Then start server to get the API up and running:
**python manage.py runserver**

# For the Crawler

Switch to the scraper directory in your terminal:
**cd scraper**

Then run:
**python main.py**

# For Frontend

Install node js from: https://nodejs.org/en/download/package-manager

Switch to the news-site directory which is inside the frontend directory.

Then run:
**npm i**

After that run: 
**npm start** 



