# How to Update Your GitHub Repository

Since I am an AI, I cannot type your GitHub password or approve the "Sign In" window for you. You must perform the final **Push** to verify your identity.

Follow these exact steps:

### Option 1: Using the Terminal (Fastest)

1.  **Open Terminal** in your VS Code (Press `Ctrl` + `~` or go to **Terminal > New Terminal**).
2.  **Navigate to the Project Folder** (Use this exact command):
    
    ```powershell
    cd "C:\Users\KUSHAL P\.gemini\antigravity\playground\CogniFlow-Consensus"
    ```

3.  **Paste** the following command and hit **Enter**:

    ```bash
    git push -u origin main --force
    ```

3.  **Authenticate**:
    - A browser window may open asking you to "Sign in to GitHub".
    - Click **"Sign in with Browser"**.
    - If asked for a username/password in the terminal, type your GitHub username and Personal Access Token (or password).

### Option 2: Using VS Code Interface

1.  Click the **Source Control** icon on the left sidebar (looks like a branch graph).
2.  Click the **... (Three Dots)** menu at the top right of the panel.
3.  Select **Pull, Push** -> **Push to...**
4.  Select `origin`.
5.  If it warns about "Force Push", confirm **Yes**.

---

## What Happens Next?
Once the command finishes:
1.  Go to [https://github.com/kushal2846/CogniFlow-Consensus](https://github.com/kushal2846/CogniFlow-Consensus).
2.  You will see the new **v2.4 Universal Engine** files.
3.  Go to Vercel, Import this project, and click **Deploy**.
