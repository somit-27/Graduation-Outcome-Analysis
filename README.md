# Graduation Outcome Analysis - Final Project Group 19

This repository contains the source files and code for **Graduation Outcome Analysis**, an interactive data visualization project built using Quarto and D3.js. The project provides insights into graduation outcomes from New York City high schools, focusing on trends in graduation rates, cohort sizes, and diploma types.

## Project Overview

The **Graduation Outcome Analysis** project includes:
- **Interactive Visualizations**: Dynamic plots created with D3.js for an engaging exploration of graduation outcomes.
- **Comprehensive Analysis**: Data processing and insights on graduation rates, diploma distribution, and dropout rates.
- **GitHub Pages Deployment**: A live, easily accessible platform for stakeholders to explore the analysis.

## Data Overview

### Data Source
The dataset, titled **“Graduation results for Cohorts 2012 to 2019 (Classes of 2016 to 2023),”** is published by the New York City Department of Education via [NYC OpenData](https://opendata.cityofnewyork.us/). It provides annual statistics on:
- Cohort size
- Graduation rates
- Diploma types
- Enrollment status
- Dropout rates

### Data Collection
The dataset adheres to the New York State Education Department’s methodology, defining:
- **Cohorts**: Students who first entered 9th grade in a specific school year.
- **Graduates**: Students earning a Local or Regents diploma.

The dataset is updated annually, ensuring it reflects the most recent statistics and trends.

### Data Format
The dataset is presented in a tabular format with 29 columns and multiple rows for each school or geographic subdivision. Key fields include:
- **Cohort Year**: The year a cohort first entered 9th grade.
- **% Grads**: Percentage of graduates in a cohort.
- **Dropout**: Number of students who dropped out.
- **% Advanced Regents of Cohort**: Percentage of students earning an Advanced Regents diploma relative to the cohort.

### Data Frequency and Updates
The dataset is updated annually, with the most recent data available as of **April 4, 2024**. This ensures consistency and relevance for long-term trend analysis.

### Issues and Challenges
- **Missing Data**: Some fields, especially those for advanced diploma types or geographic subdivisions, may have incomplete reporting.
- **Inconsistencies**: Variations in reporting standards across schools may impact data uniformity.

### Data Import
The dataset is available as a downloadable CSV file on NYC OpenData and can be imported using tools such as:
- **Python**: Libraries like `pandas` or `data.table` for efficient data manipulation.
- **R**: Packages like `readr` for data exploration.

## Features
- Interactive bar charts and other visualizations using D3.js.
- CSV-based data pipeline for seamless updates.
- Deployment via GitHub Pages for easy accessibility.

## Repository Structure

```plaintext
├── docs/                         # Output folder for the rendered Quarto project
├── scripts/                      # JavaScript files for D3.js visualizations
│   └── myscript.js
├── Graduation_Results.csv    # Processed data file
├── d3graph.qmd                   # Quarto file for interactive visualizations
├── filtered_graduate_results.csv
├── data.qmd                      # Data analysis and preparation
├── results.qmd                   # Final graphs and insights
├── conclusion.qmd                # Project conclusions
├── _quarto.yml                   # Quarto project configuration
├── index.qmd 
├── README.md                     # This README file
```

## Setup Instructions

### Clone the Repository
To clone this repository, run:
```bash
git clone https://github.com/somit-27/Graduation-Outcome-Analysis.git
cd Graduation-Outcome-Analysis
```

### Prerequisites
- **Quarto**: Install [Quarto](https://quarto.org/docs/get-started/).
- **RStudio** or an equivalent IDE.
- Modern web browser for viewing the rendered visualizations.

### Render the Project
1. Open the project in RStudio or your preferred IDE.
2. Modify `_quarto.yml`:
   - Update `title`, `author`, and other metadata as required.
3. Render the Quarto book locally:
   - Click on the **Build** tab in RStudio and select **Render Book**, or run:
     ```bash
     quarto render
     ```
4. View the local output:
   ```bash
   open docs/index.html
   ```

### Deployment on GitHub Pages
1. Go to your repository settings.
2. Navigate to **Pages** and set **Source** to `Deploy from a branch`, and **Branch** to `main` with the `/docs` folder.
3. Enable Pages under the "About" section.
4. Access your live project at:
   [Graduation Outcome Analysis](https://somit-27.github.io/Graduation-Outcome-Analysis/).

## Customization
- **Visualizations**: Edit the `myscript.js` file inside the `scripts` directory to add new interactive elements or enhance existing charts.
- **Styles**: Customize styles by modifying the CSS in the Quarto or JavaScript files.
- **Data**: Replace or update the CSV files in the `data/` folder to analyze different datasets.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## Acknowledgments
This project is part of the **EDAV final project** and utilizes the [Quarto EDAV template](https://github.com/jtr13/quarto-edav-template).

## License
This project is licensed under the MIT License.

## Live Link
Access the live project here:  
[Graduation Outcome Analysis](https://somit-27.github.io/Graduation-Outcome-Analysis/)
