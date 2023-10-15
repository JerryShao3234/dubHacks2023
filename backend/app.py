from flask import Flask, jsonify, request
from flask_cors import CORS
from ytmusicapi import YTMusic

app = Flask(__name__)
CORS(app, supports_credentials=True)

ytmusic = YTMusic()

# Use command `pip install -r requirements.txt` to install all dependencies

@app.route('/trending')
def get_trending():  # put application's code here
    country = request.args.get('country')
    result = ytmusic.get_charts(country)
    response = jsonify(result["trending"]["items"])
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response


if __name__ == '__main__':
    app.run()
