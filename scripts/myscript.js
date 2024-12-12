document.addEventListener("DOMContentLoaded", function () {
  // Check if D3.js is loaded
  console.log("D3 version:", d3.version);

  // Set up dimensions and margins
  const width = 800;
  const height = 500;
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };

  // Create an SVG container that will be recreated each time a new chart is rendered
  const plotContainer = d3.select("#plot");

  // Load the filtered CSV file and render the initial chart
  d3.csv("https://raw.githubusercontent.com/somit-27/Graduation-Outcome-Analysis/refs/heads/main/filtered_graduate_results.csv").then(function (data) {
    // Parse numeric values for "% Grads" and Year
    data.forEach(d => {
      d["% Grads"] = +d["% Grads"];
      d["Year"] = d["Year"];  // Ensure Year is correctly formatted
    });

    // Extract unique boroughs for the dropdown
    const boroughs = Array.from(new Set(data.map(d => d["Geographic Subdivision"])));

    // Populate the Borough dropdown menu
    const boroughDropdown = d3.select("#boroughFilter");
    boroughs.forEach(borough => {
      boroughDropdown.append("option").text(borough).attr("value", borough);
    });
    // Add event listener for borough filter
    boroughDropdown.on("change", function () {
      const selectedBorough = this.value;

      // Filter data for the selected borough
      const filteredData = data.filter(d => d["Geographic Subdivision"] === selectedBorough);

      // Clear the previous chart and render the new one
      renderChart(filteredData);
    });
  });

  // Function to render the chart
  function renderChart(data) {
    // Clear the previous SVG container completely
    plotContainer.selectAll("*").remove();

    // Create a new SVG container
    const svg = plotContainer
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Set up scales
    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.Year))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d["% Grads"])])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Append axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .attr("font-size", "12px");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .attr("font-size", "12px");

    // Append bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.Year))
      .attr("y", d => yScale(d["% Grads"]))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - margin.bottom - yScale(d["% Grads"]))
      .attr("fill", "steelblue")
      .on("mouseover", function (event, d) {
      d3.select(this).attr("fill", "orange");
    
      // Get mouse position relative to the SVG
      const [xPos, yPos] = d3.pointer(event);
    
      // Remove any existing tooltip before adding a new one
      d3.select("#tooltip").remove();
    
      // Append the tooltip and position it at the mouse position
      svg
        .append("text")
        .attr("id", "tooltip")
        .attr("x", xPos)  // Position tooltip at mouse X
        .attr("y", yPos - 10)  // Position it slightly above the bar
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "black")
        .text(`${d["% Grads"].toFixed(2)}%`);
    })

      .on("mouseout", function () {
        d3.select(this).attr("fill", "steelblue");
        d3.select("#tooltip").remove();
      });

    // Add labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("Year");

    svg
      .append("text")
      .attr("x", -height / 2)
      .attr("y", 20)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("% Grads");
  }
});
