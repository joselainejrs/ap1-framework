from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import json
# from aulas import aulas

app = Flask(__name__, static_folder='public')
CORS(app)

def ler_json(arquivo):
    with open(arquivo, 'r', encoding='utf-8') as f:
        dados = json.load(f)
    return dados

@app.route('/api/dados', methods=['GET'])
def get_dados():
    dados = ler_json('./aulas.json')  # Assumindo que o arquivo JSON esteja no mesmo diretório
    return jsonify(dados)

@app.route('/api/dados/<int:id>', methods=['GET'])
def get_dado_by_id(id):
    dados = ler_json('./aulas.json')
    aula = next((item for item in dados if item['id'] == id), None)
    if aula is None:
        return jsonify({'error': 'Aula não encontrada'}), 404
    return jsonify(aula)

@app.route('/img/<path:filename>')
def serve_image(filename):
    return send_from_directory('public/img', filename)


if __name__ == '__main__':
    app.run (debug=True)