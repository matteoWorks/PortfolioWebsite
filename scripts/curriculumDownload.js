document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll('.downloadButton');

  const confirmations = {
    italian: "Sta per scaricare questo Curriculum Vitae. \nDesidera procedere?",
    english: "You are about to download this Curriculum Vitae. \nWould you like to proceed?",
    japanese: "こちらの履歴書をダウンロードしようとしています。\n続行してもよろしいでしょうか。"
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const container = button.closest('.curriculumBox');
      const img = container.querySelector('.curriculumImg');

      const imgSrc = img.src;
      const baseName = imgSrc.split('/').pop().replace(/\.[^/.]+$/, "");
      const fileName = `${baseName}.pdf`;

      const language = container.id.replace("CV", "").toLowerCase();
      if (!confirm(confirmations[language])) {return;}

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