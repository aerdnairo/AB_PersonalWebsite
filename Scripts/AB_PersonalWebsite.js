function dropDown(id) {
    const abstract = document.getElementById(''+id);

    if (abstract.style.display === 'none' || abstract.style.display === '') {
      abstract.style.display = 'block';
    } else {
      abstract.style.display = 'none';
    }
  }