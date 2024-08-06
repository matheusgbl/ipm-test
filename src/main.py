from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    # Serve only HTML content for the index page
    return render_template('index.html')
    
@app.route('/users')
def users_list():
    # Make a GET request to fetch 12 users
    response = requests.get('https://randomuser.me/api/', params={'results': 12, 'nat': 'BR'})
    user_data = response.json()
    
    # Extract user information
    users = user_data['results']
    user_info = [
        {
            'name': f"{user['name']['first']} {user['name']['last']}",
            'email': user['email'],
            'profile_photo': user['picture']['large']
        }
        for user in users
    ]

    # Pass user data to the template
    return render_template('users_list.html', users=user_info)

if __name__ == '__main__':
    app.run(debug=True)
