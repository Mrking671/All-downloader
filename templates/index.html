<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Chat Assistant</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background-color: #1e1e1e;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100vh;
        }

        .input-section {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            position: relative;
        }

        .input-section input {
            width: 85%;
            padding: 12px;
            border-radius: 25px;
            border: 1px solid #3d3d3d;
            background-color: #333333;
            color: #ffffff;
            outline: none;
            font-size: 16px;
        }

        .input-section button {
            background-color: #4caf50;
            color: white;
            padding: 12px;
            margin-left: 10px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            font-size: 20px;
        }

        .footer {
            text-align: center;
            margin-top: 10px;
            color: #888;
            font-size: 12px;
        }
    </style>
</head>
<body>

    <!-- Input section for chat -->
    <div class="input-section">
        <input type="text" id="user-input" placeholder="Message AI...">
        <button id="send-button"><i class="fas fa-paper-plane"></i></button>
    </div>

    <div class="footer">
        ChatGPT can make mistakes. Check important info.
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>

    <script>
        document.getElementById('send-button').addEventListener('click', async function () {
            const userInput = document.getElementById('user-input').value;
            if (userInput.trim() === '') {
                alert('Please enter a message.');
                return;
            }

            try {
                const response = await fetch('/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: userInput }),
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                alert('AI Response: ' + data.message);  // Display the response from the AI
            } catch (error) {
                alert('Error occurred: ' + error.message);
            }
        });
    </script>
</body>
</html>
