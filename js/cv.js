function downloadCV() {
   
    const downloadLink = document.createElement('a');
    downloadLink.href = 'images/Rahul_cv.pdf';
    downloadLink.download = 'Rahul Patel CV';
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
  document.getElementById('downloadButton').addEventListener('click', downloadCV);
  