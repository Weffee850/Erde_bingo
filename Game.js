game.js content
game_js = """
function generateBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  const numbers = Array.from({length: 75}, (_, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, 25);
  numbers.forEach((num, idx) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = num;
    cell.onclick = () => cell.classList.toggle("marked");
    board.appendChild(cell);
  });
}

generateBoard();
"""

# Save files
(base_path / "index.html").write_text(index_html.strip())
(base_path / "game.js").write_text(game_js.strip())

# Zip the directory for download
zip_path = Path("/mnt/data/bingo_game_template.zip")
with zipfile.ZipFile(zip_path, "w") as zipf:
    for file_path in base_path.glob("*"):
        zipf.write(file_path, file_path.name)

zip_path.name
