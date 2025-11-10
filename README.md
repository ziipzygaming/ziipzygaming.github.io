<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ziipzy - Content Creator & Programmer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
            min-height: 100vh;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .hero {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 60px 40px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            margin-bottom: 40px;
            animation: fadeIn 0.8s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .hero h1 {
            font-size: 48px;
            background: linear-gradient(135deg, #1e3c72, #7e22ce);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 15px;
            font-weight: 700;
        }
        .hero .subtitle {
            font-size: 24px;
            color: #666;
            margin-bottom: 10px;
            font-weight: 300;
        }
        .hero .since {
            display: inline-block;
            background: linear-gradient(135deg, #1e3c72, #7e22ce);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 20px;
        }
        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        .card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            padding: 35px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: slideUp 0.6s ease-in;
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        .card h2 {
            color: #1e3c72;
            margin-bottom: 20px;
            font-size: 28px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .card h2::before {
            content: "▶";
            color: #7e22ce;
            font-size: 20px;
        }
        .channel-item {
            background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 15px;
            border-left: 4px solid #7e22ce;
            transition: all 0.3s ease;
        }
        .channel-item:hover {
            background: linear-gradient(135deg, #e5e7eb, #d1d5db);
            transform: translateX(5px);
        }
        .channel-item h3 {
            color: #1e3c72;
            margin-bottom: 8px;
            font-size: 20px;
        }
        .channel-item p {
            color: #666;
            font-size: 14px;
            line-height: 1.6;
        }
        .about-text {
            color: #555;
            font-size: 18px;
            line-height: 1.8;
            text-align: center;
            font-style: italic;
        }
        .social-link {
            display: inline-block;
            background: #1877f2;
            color: white;
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            margin-top: 15px;
        }
        .social-link:hover {
            background: #145dbf;
            transform: scale(1.05);
        }
        .emoji {
            font-size: 32px;
            margin-bottom: 15px;
            display: block;
        }
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 36px;
            }
            .hero .subtitle {
                font-size: 20px;
            }
            .card {
                padding: 25px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>Ziipzy</h1>
            <div class="subtitle">Innovative Content Creator and Independent Programmer</div>
            <div class="since">Since 2020</div>
        </div>

        <div class="content-grid">
            <div class="card">
                <span class="emoji">📺</span>
                <h2>Channels</h2>
                
                <div class="channel-item">
                    <h3>Ziipzy</h3>
                    <p>Main content creation channel featuring innovative projects and programming content</p>
                    <a href="https://www.linktr.ee/ziipzygaming" target="_blank" class="social-link">Visit on Linktree</a>
                </div>
                
                <div class="channel-item">
                    <h3>Silver Q. Electronics And Electrical Specialists</h3>
                    <p>Specialized content focused on electronics, electrical engineering, and technical expertise</p>
                    <a href="https://www.facebook.com/profile.php?id=61582774085939" target="_blank" class="social-link">Visit on Facebook</a>
                </div>
            </div>

            <div class="card">
                <span class="emoji">👨‍💻</span>
                <h2>About Me</h2>
                <p class="about-text">
                    A self-proclaimed content creator and programmer, passionate about bringing innovative ideas to life through code and creative content.
                </p>
            </div>
        </div>
    </div>
</body>
</html>