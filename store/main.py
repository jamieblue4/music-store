from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
import jinja2

app = Flask(__name__)
app.secret_key = 'key'

# Database connection details
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'LOGIN'

# Initialize MySQL
mysql = MySQL(app)

@app.route('/login/', methods=['GET', 'POST'])
def login():
    # Output message for an error
    msg = ''
    return render_template('login.html', msg = '')
if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        # Creating some variables
        username = request.form['username']
        password = request.form['password']

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM form WHERE username = %s AND password = %s', (username, password,))
        
        account = cursor.fetchone()
        if account:
            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['username']
            # Redirect to home page
            return 'Logged in successfully!'
        else:
            msg = 'Incorrect username/password!'

@app.route('/login/logout')
def logout():
     # Remove session data, logging user out
     session.pop('loggedin', None)
     session.pop('id', None)
     session.pop('username', None)
     # Back to login page
     return redirect(url_for('login'))

def register():
     # msg if something goes wrong
     msg = ''
     if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form:
        # variables
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']

        cursor.mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM form WHERE username = %s', (username,))
        account = cursor.fetchone()

        if account:
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
             msg = 'Invalid email address!'
        elif not re.match(r'[A-Za-z0-9]+', username):
             msg = 'Username must contain only characters and numbers!'
        elif not username or not password or not email:
             msg = 'Please fill out the form!'
        else:
             # Account doesnt exist but form data is valid, so insert new acct into accounts table
             cursor.execute('INSERT INTO accounts VALUES (NULL, %s, %s, %s)', (username, password, email,))
             mysql.connection.commit()
             msg = 'You have successfully registered!'
     elif request.method == 'POST':
          # Empty form
          msg = 'Please fill out the form.'
     return render_template('register.html', msg=msg)

@app.route('/login/home')
def home():
     if 'loggedin' in session:
          return render_template('home.html', username=session['username'])
     return redirect(url_for('login'))