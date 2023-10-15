from flask import Flask, jsonify, request
from flask_cors import CORS
from ytmusicapi import YTMusic

app = Flask(__name__)
CORS(app)

ytmusic = YTMusic()

# Use command `pip install -r requirements.txt` to install all dependencies

@app.route('/trending')
def get_trending():  # put application's code here
    country = request.args.get('country')
    result = ytmusic.get_charts(country)
    response = jsonify(result["trending"]["items"])
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run()
