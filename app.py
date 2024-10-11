from flask import Flask, jsonify, request, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['GET'])
def chat():
    question = request.args.get('question')
    if not question:
        return jsonify({'error': 'Question is required'}), 400

    try:
        response = requests.get(f'https://telesevapi.vercel.app/chat-gpt?question={question}')
        data = response.json()
        return jsonify(data)
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Failed to fetch response from API'}), 500

if __name__ == '__main__':
    app.run(debug=True)
