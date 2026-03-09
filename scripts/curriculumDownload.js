document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll('.downloadButton');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const container = button.closest('.curriculumBox');
      const img = container.querySelector('.curriculumImg');

      const imgSrc = img.src;
      const baseName = imgSrc.split('/').pop().replace(/\.[^/.]+$/, "");
      const fileName = `${baseName}.pdf`;

      const pdfUrl = `assets/curriculum/${fileName}`;

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
});