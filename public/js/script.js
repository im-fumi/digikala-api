useEffect(() => {
  fetch("/db.json")
    .then((response) => response.json())
    .then(setData)
    .catch((error) => console.error("Error loading JSON:", error));
}, []);
