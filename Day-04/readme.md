#  Why We Don’t Use Absolute Paths (and Prefer Relative Paths)

---

##  1. What is an Absolute Path?

An **absolute path** means the **complete address** of a file or folder — starting from the **root directory** of your computer or website.

###  Examples

**Mac / Linux:**
/Users/vijay/Documents/project/index.html

2. What is a Relative Path?
A relative path tells where a file is relative (nearby) to the current file’s location.

 Example
If your HTML file is in project/ and the image is in project/images/,
you can write:

html
<img src="images/logo.png">
instead of the full system path.

 3. Why We Don’t Use Absolute Paths (Usually)
 1. Not Portable
If you move your project to another computer, the absolute path will break.
Because /Users/vijay/... may not exist on another system.

 Relative paths work anywhere as long as folder structure stays the same.

 2. Harder to Maintain
Every file would need a long, full path.
Editing or moving folders becomes a headache — you’d have to fix all file links manually.

3. Not Good for Deployment
When you upload your project to a server or GitHub, the absolute path points to your local system — it won’t exist there.
Relative paths, however, still work perfectly.

 4. Reduces Reusability
If other people want to use your code, they can’t — because their system has different absolute paths.



#  Basic HTML Structure Explained (Line by Line)

| Line | Meaning |
|------|----------|
| `<!DOCTYPE html>` | Tells the browser it’s an **HTML5 document** |
| `<html lang="en">` | Starts HTML document, sets language to **English** |
| `<head>` | Contains **information about the page** (not shown on screen) |
| `<meta charset="UTF-8">` | Supports **all characters and symbols** (UTF-8 encoding) |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Makes the page **mobile-friendly** and responsive |
| `<title>Document</title>` | Sets the **page title** on the browser tab |
| `</head>` | Ends the **head section** |
| `<body>` | Area where **visible content** (text, images, buttons, etc.) goes |
| `</body>` | Ends the **body section** |
| `</html>` | Ends the **entire HTML file** |

---

 **Tip:**  
Everything users see goes inside the `<body>` tag.  
Everything about the page (like title, styles, metadata) goes inside the `<head>` tag.


#  ASCII vs UTF-8 (Definition Style)

---

##  ASCII (American Standard Code for Information Interchange)

**Definition:**  
ASCII is a character encoding standard that uses **7 bits** to represent **128 characters** — including English letters (A–Z, a–z), digits (0–9), and basic symbols.

**Key Points:**
- Supports only **English** characters.  
- Uses **7 bits per character**.  
- Does **not** support emojis or non-English letters.  
- Example: `'A' = 65`, `'a' = 97`.  
- Used in **early computers** and simple text files.

---

##  UTF-8 (Unicode Transformation Format – 8-bit)

**Definition:**  
UTF-8 is a **modern character encoding** that can represent **every character in the world**, including symbols, emojis, and all languages.

**Key Points:**
- Based on **Unicode standard**.  
- Uses **1 to 4 bytes (8–32 bits)** per character.  
- Backward compatible with ASCII (first 128 characters are same).  
- Supports **English + Hindi + Chinese + emojis + all scripts**.  
- Commonly used in **websites, apps, and modern systems**.

---

##  Difference Summary

| Feature | **ASCII** | **UTF-8** |
|----------|------------|-----------|
| Full Form | American Standard Code for Information Interchange | Unicode Transformation Format (8-bit) |
| Bits Used | 7 bits | 8–32 bits |
| Characters Supported | 128 | Over 1 million |
| Language Support | English only | All world languages |
| Emoji Support | ❌ No | ✅ Yes |
| Compatibility | Older systems | Modern systems (web, mobile) |
| Relationship | Base encoding | Extension of ASCII |

---

##  In Short

> 🔹 **ASCII** = English only, simple, old.  
> 🔹 **UTF-8** = All languages, emojis, universal and modern.


#  How an Image is Stored in a Computer

---

##  1. What is an Image (for a Computer)?

To our eyes, an image looks like a normal picture —  
but to a computer, an image is a **collection of tiny dots** called **pixels**.

Each **pixel** has a **color**, and each color is stored as **numbers (binary values)** — 0s and 1s.

---

## 2. Pixels and Colors (RGB)

Each pixel’s color is made from **three color components**:

- 🔴 **R (Red)**
- 🟢 **G (Green)**
- 🔵 **B (Blue)**

This is called the **RGB color model**.

Each component (R, G, B) is a number between **0 and 255**.  
So one pixel = 3 numbers (like `(255, 0, 0)` = pure red).

---

##  3. How Pixels Become Data

Example: a 2×2 pixel image 👇

| Pixel | RGB Value | Binary (Simplified) |
|--------|------------|--------------------|
| (0,0) | (255,0,0) | `11111111 00000000 00000000` |
| (0,1) | (0,255,0) | `00000000 11111111 00000000` |
| (1,0) | (0,0,255) | `00000000 00000000 11111111` |
| (1,1) | (255,255,0) | `11111111 11111111 00000000` |

Each color channel (R, G, B) uses **1 byte (8 bits)**.  
So, one pixel = 3 bytes → stored in sequence in the image file.

---

##  4. Image File Structure

An image file (like `.jpg`, `.png`, `.bmp`) has **two main parts**:

| Part | Meaning |
|------|----------|
|  **Header** | Info about the image (width, height, color depth, compression type, etc.) |
|  **Pixel Data** | The actual color data of every pixel in binary form |

When you open an image:
1. The computer reads the **header** (to know how big it is).
2. Then reads the **pixel data** (to show the colors).

---

##  5. Example (Conceptually)

If you have a **100 × 100** pixel image:
- Total pixels = 10,000  
- Each pixel = 3 bytes (R, G, B)

So total raw data = `10,000 × 3 = 30,000 bytes (≈30 KB)`  
before any compression.

---

##  6. Compression Types

| Format | Compression Type | Quality |
|--------|------------------|----------|
| **JPEG (.jpg)** | Lossy compression | Smaller file, slight quality loss |
| **PNG (.png)** | Lossless compression | Larger file, no quality loss |
| **BMP (.bmp)** | Uncompressed | Very large size |

Compression helps save storage space without losing too much visual detail.

---

##  7. Summary of How Images Are Stored

| Step | Description |
|------|--------------|
| 1️⃣ | Image is divided into small squares (pixels) |
| 2️⃣ | Each pixel’s color is stored as RGB values |
| 3️⃣ | RGB numbers are converted to binary (0s and 1s) |
| 4️⃣ | Binary data is written into a file format (like `.png` or `.jpg`) |
| 5️⃣ | When opened, software reads data and displays the image |

---

##  Simple Analogy

> 🧩 Think of an image like a **grid of colored boxes**.  
> The computer just remembers **which box has which color**, using numbers.

---

##  In Short

- Every image = made of **pixels**  
- Each pixel = **RGB numbers**  
- Stored in **binary** inside a file  
- Read by software to **display the picture**
