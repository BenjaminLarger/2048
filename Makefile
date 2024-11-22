# Variables
APP_NAME = 2048
FILES = index.html styles.css script.js utils/*.js
BROWSER = google-chrome # Replace with your default browser (e.g., firefox, chrome, edge)

# Targets
.PHONY: all run lint clean

# Default target
all: run

# Run the project in the default browser
run: 
	@echo "Opening the game in your browser..."
	killall $(BROWSER) || true
	$(BROWSER) index.html

# Lint JavaScript files
lint:
	@echo "Linting JavaScript files..."
	npx eslint utils/*.js script.js || echo "Lint errors detected!"

# Clean project (removes generated files if any)
clean:
	@echo "Cleaning project..."
	rm -rf dist/
	@echo "Clean completed."

# Archive project into a zip for distribution
zip:
	@echo "Archiving project..."
	zip -r $(APP_NAME).zip $(FILES)
	@echo "$(APP_NAME).zip created successfully."
