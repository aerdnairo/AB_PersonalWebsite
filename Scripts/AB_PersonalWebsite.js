function dropDown(id) {
    const dropDownText = document.getElementById(''+id);

    if (dropDownText.style.display === 'none' || dropDownText.style.display === '') {
      dropDownText.style.display = 'block';
    } else {
      dropDownText.style.display = 'none';
    }
  }