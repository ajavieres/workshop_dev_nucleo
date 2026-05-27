from flask import jsonify, Flask
app = Flask(__name__)

@app.route('/api/data')
def data():
    return jsonify({"status": "activo", "origen": "Backend en Python"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)