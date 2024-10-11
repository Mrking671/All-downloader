from flask import Flask, render_template, request, jsonify
import os
import requests  # Make sure to import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # Renders the homepage (index.html)

@app.route('/chat', methods=['GET'])
def chat():
    # Get the 'question' from the query parameters
    question = request.args.get('question')
    
    # Make the request to the external API
    api_url = f"https://telesevapi.vercel.app/chat-gpt?question={question}"
    
    try:
        # Call the API and get the response
        response = requests.get(api_url)
        response_json = response.json()
        message = response_json.get("message", "Sorry, no response available.")
    except Exception as e:
        message = f"Error occurred: {str(e)}"
    
    # Return the message as a JSON response
    return jsonify(message=message)

if __name__ == '__main__':
    # Use the PORT environment variable provided by Render
    port = int(os.environ.get('PORT', 5000))
    
    # Run the application on the specified port and bind to 0.0.0.0 to make it accessible externally
    app.run(host='0.0.0.0', port=port)
