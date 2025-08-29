body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  color: white;
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.profile-card {
  text-align: center;
  background: rgba(0,0,0,0.5);
  padding: 20px;
  border-radius: 20px;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid white;
}

.links a {
  display: inline-block;
  margin: 10px;
  padding: 8px 16px;
  background: white;
  color: black;
  border-radius: 12px;
  text-decoration: none;
  transition: 0.3s;
}

.links a:hover {
  background: black;
  color: white;
    }
